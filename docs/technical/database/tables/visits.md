---
title: "Visits Table"
type: "technical"
category: "database"
status: "In Progress"
sidebar_position: 2
---

# Table: `wp_statistics_visits`

Stores individual visit sessions, tracking when and how visitors interact with your site.

## Purpose

The visits table records each unique session a visitor has with your site. While the visitors table tracks unique individuals, the visits table tracks their individual sessions over time.

## Schema

| Column | Type | Null | Default | Description |
|--------|------|------|---------|-------------|
| `ID` | BIGINT(20) | NO | AUTO_INCREMENT | Primary key, unique visit identifier |
| `visitor_id` | BIGINT(20) | NO | - | Foreign key to wp_statistics_visitors |
| `last_counter` | DATETIME | NO | - | Date and time of visit |
| `referred` | VARCHAR(255) | YES | NULL | Referrer URL for this specific visit |
| `source_channel` | VARCHAR(50) | YES | NULL | Traffic source (organic, direct, social, etc.) |
| `source_name` | VARCHAR(100) | YES | NULL | Specific source (google, facebook, etc.) |
| `page_id` | BIGINT(20) | YES | NULL | WordPress post/page ID (if applicable) |
| `uri` | VARCHAR(255) | YES | NULL | Requested URI path |

## Indexes

| Name | Columns | Type | Description |
|------|---------|------|-------------|
| PRIMARY | `ID` | PRIMARY KEY | Unique visit ID |
| `visitor_id` | `visitor_id` | INDEX | Link visits to visitors |
| `last_counter` | `last_counter` | INDEX | Date/time range queries |
| `page_id` | `page_id` | INDEX | Page-specific analytics |
| `source_channel` | `source_channel` | INDEX | Traffic source analysis |

## Relationships

### Foreign Keys
- `visitor_id` → `wp_statistics_visitors.ID`
- `page_id` → `wp_posts.ID` (if entry page is a post/page)

### Referenced By
- Used to calculate session-based metrics (views per session, session duration, bounce rate)

## Visitor vs Visit

Understanding the distinction:

| Concept | Table | Example |
|---------|-------|---------|
| **Visitor** | `wp_statistics_visitors` | John Doe (unique person) |
| **Visit** | `wp_statistics_visits` | John's visit on Monday at 10am |
| **Visit** | `wp_statistics_visits` | John's visit on Tuesday at 2pm |

One visitor can have many visits over time.

## Session Definition

A new visit (session) is created when:
1. **New visitor** - First time seeing this visitor ID
2. **Session timeout** - > 30 minutes since last activity
3. **New day** - Midnight boundary crossed
4. **Different referrer** - Coming from a different external source

## Data Flow

### Visit Creation Process

```
1. Page request received
2. Get or create visitor ID
3. Check for existing recent visit:
   - If last visit < 30 min ago: Update existing visit
   - If last visit > 30 min ago: Create new visit
4. Record entry page and referrer
5. Classify traffic source
6. Return visit ID for page tracking
```

### Traffic Source Classification

```php
// Pseudo-code
function classifyTrafficSource($referrer) {
    if (empty($referrer)) {
        return ['channel' => 'direct', 'name' => null];
    }

    if (isSearchEngine($referrer)) {
        return ['channel' => 'organic', 'name' => 'google|bing|etc'];
    }

    if (isSocialMedia($referrer)) {
        return ['channel' => 'social', 'name' => 'facebook|twitter|etc'];
    }

    return ['channel' => 'referral', 'name' => getDomain($referrer)];
}
```

## Data Examples

### Organic Search Visit
```sql
ID: 12345
visitor_id: 789
last_counter: 2024-12-17 14:23:15
referred: https://www.google.com/search?q=wordpress+analytics
source_channel: organic
source_name: google
page_id: 42
uri: /blog/analytics-guide/
```

### Direct Visit
```sql
ID: 12346
visitor_id: 789
last_counter: 2024-12-17 16:45:30
referred: NULL
source_channel: direct
source_name: NULL
page_id: 1
uri: /
```

### Social Media Visit
```sql
ID: 12347
visitor_id: 456
last_counter: 2024-12-17 09:12:45
referred: https://t.co/xyz123
source_channel: social
source_name: twitter
page_id: 15
uri: /products/premium/
```

### Referral Visit
```sql
ID: 12348
visitor_id: 234
last_counter: 2024-12-17 11:30:00
referred: https://partnerblog.com/recommended-plugins/
source_channel: referral
source_name: partnerblog.com
page_id: 8
uri: /features/
```

## Common Queries

### Total Visits (Sessions)
```sql
SELECT COUNT(ID) as total_visits
FROM wp_statistics_visits
WHERE last_counter >= '2024-01-01'
  AND last_counter < '2024-02-01';
```

### Visits by Traffic Source
```sql
SELECT
  source_channel,
  COUNT(ID) as visits,
  COUNT(DISTINCT visitor_id) as unique_visitors
FROM wp_statistics_visits
WHERE last_counter >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY source_channel
ORDER BY visits DESC;
```

### Top Referrers
```sql
SELECT
  referred,
  COUNT(ID) as visits
FROM wp_statistics_visits
WHERE referred IS NOT NULL
  AND referred != ''
  AND last_counter >= DATE_SUB(NOW(), INTERVAL 7 DAY)
GROUP BY referred
ORDER BY visits DESC
LIMIT 20;
```

### Entry Pages
```sql
SELECT
  uri,
  COUNT(ID) as entries
FROM wp_statistics_visits
WHERE last_counter >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY uri
ORDER BY entries DESC
LIMIT 50;
```

### Visits Per Visitor
```sql
SELECT
  visitor_id,
  COUNT(ID) as visit_count,
  MIN(last_counter) as first_visit,
  MAX(last_counter) as last_visit
FROM wp_statistics_visits
WHERE last_counter >= '2024-01-01'
GROUP BY visitor_id
ORDER BY visit_count DESC
LIMIT 100;
```

## Calculated Metrics

### Session Duration
Session duration is calculated by looking at page views within a visit:

```sql
-- Average session duration in minutes
SELECT AVG(duration_minutes) as avg_session_duration
FROM (
  SELECT
    visit_id,
    TIMESTAMPDIFF(MINUTE,
      MIN(date),
      MAX(date)
    ) as duration_minutes
  FROM wp_statistics_pages
  GROUP BY visit_id
  HAVING COUNT(*) > 1  -- Multiple pages in session
) as sessions;
```

### Bounce Rate
Bounce = visit with only one page view:

```sql
SELECT
  (COUNT(CASE WHEN page_count = 1 THEN 1 END) * 100.0 / COUNT(*)) as bounce_rate
FROM (
  SELECT
    v.ID,
    COUNT(p.ID) as page_count
  FROM wp_statistics_visits v
  LEFT JOIN wp_statistics_pages p ON v.ID = p.visit_id
  WHERE v.last_counter >= '2024-01-01'
  GROUP BY v.ID
) as visit_pages;
```

### Pages Per Session
```sql
SELECT
  AVG(page_count) as avg_pages_per_session
FROM (
  SELECT
    visit_id,
    COUNT(*) as page_count
  FROM wp_statistics_pages
  WHERE date >= '2024-01-01'
  GROUP BY visit_id
) as session_pages;
```

## Traffic Source Categories

### Source Channels

| Channel | Description | Examples |
|---------|-------------|----------|
| `organic` | Search engine traffic | google.com, bing.com, duckduckgo.com |
| `direct` | No referrer (typed URL, bookmark) | - |
| `social` | Social media platforms | facebook.com, twitter.com, linkedin.com |
| `referral` | Other websites linking to you | blogspot.com, medium.com |
| `email` | Email marketing campaigns | mailchimp.com, constant contact |
| `paid` | Paid advertising (if tracking codes present) | google ads, facebook ads |

### Source Names

Within each channel, `source_name` identifies the specific source:
- **organic**: `google`, `bing`, `yahoo`, `duckduckgo`
- **social**: `facebook`, `twitter`, `linkedin`, `instagram`, `pinterest`
- **referral**: Domain name (e.g., `partnerblog.com`)
- **direct**: `NULL`

## Performance Optimization

### Index Strategy
The visits table grows quickly - use indexes wisely:

```sql
-- Ensure indexes exist
SHOW INDEX FROM wp_statistics_visits;

-- Add composite index for common queries
CREATE INDEX idx_visitor_date
ON wp_statistics_visits(visitor_id, last_counter);

-- Add index for source analysis
CREATE INDEX idx_source_channel_date
ON wp_statistics_visits(source_channel, last_counter);
```

### Partitioning by Date
For very large installations (millions of visits):

```sql
-- Partition by month
ALTER TABLE wp_statistics_visits
PARTITION BY RANGE (YEAR(last_counter) * 100 + MONTH(last_counter)) (
    PARTITION p202401 VALUES LESS THAN (202402),
    PARTITION p202402 VALUES LESS THAN (202403),
    PARTITION p202403 VALUES LESS THAN (202404)
    -- Add partitions as needed
);
```

### Query Optimization

**✅ Efficient:**
```sql
-- Uses last_counter index
SELECT * FROM wp_statistics_visits
WHERE last_counter >= '2024-01-01'
  AND last_counter < '2024-02-01'
  AND source_channel = 'organic';
```

**❌ Inefficient:**
```sql
-- Function on indexed column prevents index use
SELECT * FROM wp_statistics_visits
WHERE DATE(last_counter) = '2024-01-01';
```

## Data Retention

### Auto-Cleanup Configuration

Settings → Privacy → Data Retention:
- Keep visits for: 30/60/90/365 days or forever
- Clean up old visits automatically

### Manual Cleanup

```sql
-- Delete visits older than 1 year
DELETE FROM wp_statistics_visits
WHERE last_counter < DATE_SUB(NOW(), INTERVAL 365 DAY);

-- Verify related pages are also cleaned
DELETE p FROM wp_statistics_pages p
LEFT JOIN wp_statistics_visits v ON p.visit_id = v.ID
WHERE v.ID IS NULL;
```

## Migration Notes

### v14 to v15 Changes
- Added `source_channel` and `source_name` columns
- Improved referrer classification
- Session timeout logic updated (30 min default)
- Better handling of single-page visits

### Data Migration

```sql
-- Migrate v14 visits to v15 (pseudo-code)
UPDATE wp_statistics_visits
SET source_channel = CASE
  WHEN referred LIKE '%google%' THEN 'organic'
  WHEN referred LIKE '%facebook%' THEN 'social'
  WHEN referred IS NULL THEN 'direct'
  ELSE 'referral'
END
WHERE source_channel IS NULL;
```

## Troubleshooting

### Issue: "Inflated visit counts"
**Cause:** Session timeout too short, creating multiple visits for same visitor
**Solution:** Verify session timeout setting (should be 30 minutes)

### Issue: "Wrong traffic sources"
**Cause:** Referrer classification rules outdated
**Solution:** Update referrer detection patterns in Settings → Tracking

### Issue: "Missing referrer data"
**Cause:** Referrer blocking, privacy settings, or direct navigation
**Solution:** Normal behavior - not all visits have referrers

## Related Tables

- [Visitors Table](visitors.md) - Unique visitor information
- [Pages Table](pages.md) - Individual page views within visits
- [Historical Table](historical.md) - Aggregated visit statistics

## API Usage

Query visits via [Analytics Query API](../../api-endpoints/analytics-query-api.md):

```javascript
POST /wp-json/wp-statistics/v1/analytics
{
  "sources": ["visits"],
  "group_by": ["source_channel"],
  "date_from": "2024-01-01",
  "date_to": "2024-01-31"
}
```

---

*Last Updated: 2024-12-17*
