---
title: "Visitors Table"
type: "technical"
category: "database"
status: "In Progress"
sidebar_position: 1
---

# Table: `wp_statistics_visitors`

Stores unique visitor information and tracks individual user visits over time.

## Purpose

The visitors table is the core table for visitor tracking in WP Statistics. Each row represents a unique visitor identified by a combination of IP address, user agent, and user ID (for logged-in users).

## Schema

| Column | Type | Null | Default | Description |
|--------|------|------|---------|-------------|
| `ID` | BIGINT(20) | NO | AUTO_INCREMENT | Primary key, unique visitor identifier |
| `last_counter` | DATE | NO | - | Date of most recent visit |
| `referred` | VARCHAR(255) | YES | NULL | Referrer URL of first visit |
| `agent` | VARCHAR(255) | NO | - | User agent string |
| `platform` | VARCHAR(255) | YES | NULL | Detected platform/OS |
| `version` | VARCHAR(255) | YES | NULL | Platform/OS version |
| `UAString` | TEXT | YES | NULL | Full user agent string |
| `ip` | VARCHAR(100) | NO | - | Visitor IP address (hashed in GDPR mode) |
| `location` | VARCHAR(10) | YES | NULL | 2-letter country code |
| `user_id` | BIGINT(20) | YES | NULL | WordPress user ID (if logged in) |
| `hits` | INT(11) | NO | 0 | Total number of page views by this visitor |
| `honeypot` | INT(11) | NO | 0 | Honeypot score (spam detection) |
| `robot` | INT(11) | NO | 0 | Bot detection flag (0=human, 1=bot) |

## Indexes

| Name | Columns | Type | Description |
|------|---------|------|-------------|
| PRIMARY | `ID` | PRIMARY KEY | Unique visitor ID |
| `last_counter` | `last_counter` | INDEX | Fast date-based queries |
| `ip` | `ip` | INDEX | Fast IP lookups |
| `user_id` | `user_id` | INDEX | Fast user lookups |
| `location` | `location` | INDEX | Geographic queries |
| `robot` | `robot` | INDEX | Filter bots vs humans |

## Relationships

### Foreign Keys
- `user_id` → `wp_users.ID` (if logged in visitor)

### Referenced By
- `wp_statistics_visits.visitor_id` references this table
- `wp_statistics_pages.visitor_id` references this table

## Data Flow

### Visitor Creation
```
1. Page request received
2. Extract IP, User Agent, User ID
3. Hash combination to create visitor fingerprint
4. Check if visitor exists:
   - If exists: Update last_counter, increment hits
   - If new: Insert new visitor record
5. Return visitor ID for visit tracking
```

### Visitor Detection Algorithm

```php
// Pseudo-code
function getVisitorId($ip, $user_agent, $user_id) {
    // Privacy mode: hash IP
    $ip_hash = hashIp($ip);

    // Search for existing visitor
    $visitor = SELECT * FROM wp_statistics_visitors
               WHERE ip = $ip_hash
               AND agent = parseUserAgent($user_agent)
               AND user_id = $user_id;

    if ($visitor) {
        // Update existing visitor
        UPDATE wp_statistics_visitors
        SET last_counter = CURRENT_DATE,
            hits = hits + 1
        WHERE ID = $visitor['ID'];

        return $visitor['ID'];
    } else {
        // Create new visitor
        INSERT INTO wp_statistics_visitors ...
        return LAST_INSERT_ID();
    }
}
```

## Data Examples

### Human Visitor (Desktop)
```sql
ID: 123456
last_counter: 2024-12-17
referred: https://google.com/search?q=example
agent: Chrome/120.0
platform: Windows
version: 11
UAString: Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0
ip: 192.168.1.100  (or hashed: a1b2c3d4e5...)
location: US
user_id: NULL
hits: 45
honeypot: 0
robot: 0
```

### Logged-in User
```sql
ID: 789012
last_counter: 2024-12-17
referred: https://example.com/blog
agent: Safari/17.0
platform: macOS
version: 14.1
UAString: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari/17.0
ip: 10.0.0.50 (or hashed)
location: GB
user_id: 42  ← WordPress user ID
hits: 152
honeypot: 0
robot: 0
```

### Bot/Crawler
```sql
ID: 345678
last_counter: 2024-12-17
referred: NULL
agent: Googlebot/2.1
platform: Bot
version: 2.1
UAString: Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
ip: 66.249.66.1
location: US
user_id: NULL
hits: 8723
honeypot: 0
robot: 1  ← Flagged as bot
```

## Common Queries

### Get Unique Visitors (Humans Only)
```sql
SELECT COUNT(DISTINCT ID) as unique_visitors
FROM wp_statistics_visitors
WHERE robot = 0
  AND last_counter BETWEEN '2024-01-01' AND '2024-01-31';
```

### Top Countries
```sql
SELECT location, COUNT(ID) as visitors
FROM wp_statistics_visitors
WHERE robot = 0
  AND last_counter >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
GROUP BY location
ORDER BY visitors DESC
LIMIT 10;
```

### Most Active Visitors
```sql
SELECT ID, ip, hits, last_counter
FROM wp_statistics_visitors
WHERE robot = 0
ORDER BY hits DESC
LIMIT 100;
```

### Logged-in vs Anonymous
```sql
SELECT
  CASE WHEN user_id IS NOT NULL THEN 'Logged In' ELSE 'Anonymous' END as visitor_type,
  COUNT(ID) as count
FROM wp_statistics_visitors
WHERE robot = 0
  AND last_counter >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
GROUP BY visitor_type;
```

## Privacy & GDPR Compliance

### IP Hashing
When privacy mode is enabled:
- IP addresses are one-way hashed before storage
- Original IPs cannot be recovered
- Hash function: `hash('sha256', $ip . WP_STATISTICS_SALT)`

### Data Retention
Configure in Settings → Privacy:
- Auto-delete visitors older than X days
- Anonymize IP addresses after X days
- Remove user associations after X days

### SQL for Data Cleanup
```sql
-- Delete visitors older than 365 days
DELETE FROM wp_statistics_visitors
WHERE last_counter < DATE_SUB(CURDATE(), INTERVAL 365 DAY);

-- Anonymize old IP addresses
UPDATE wp_statistics_visitors
SET ip = 'anonymized'
WHERE last_counter < DATE_SUB(CURDATE(), INTERVAL 90 DAY)
  AND ip != 'anonymized';
```

## Performance Optimization

### Index Usage
The table uses indexes on frequently queried columns:
- `last_counter` - Date range queries (most common)
- `ip` - Visitor identification lookups
- `location` - Geographic filtering
- `robot` - Exclude bots from analytics

### Query Optimization Tips

**✅ Good:**
```sql
-- Uses last_counter index
SELECT * FROM wp_statistics_visitors
WHERE last_counter >= '2024-01-01'
  AND robot = 0;
```

**❌ Bad:**
```sql
-- Full table scan (no index on platform)
SELECT * FROM wp_statistics_visitors
WHERE platform = 'Windows';
```

### Table Maintenance

```sql
-- Analyze table for query optimization
ANALYZE TABLE wp_statistics_visitors;

-- Optimize table (defragment)
OPTIMIZE TABLE wp_statistics_visitors;

-- Check table integrity
CHECK TABLE wp_statistics_visitors;
```

## Migration Notes

### v14 to v15 Changes
- No schema changes in core structure
- New `robot` detection algorithm (improved accuracy)
- Honeypot column now actively used
- IP hashing algorithm changed (more secure)

### Backward Compatibility
- All v14 data fully compatible
- No migration script required for this table
- Existing visitors maintain their IDs

## Troubleshooting

### Issue: "Duplicate visitors being created"
**Cause:** IP hash collision or cookie issues
**Solution:** Check visitor identification algorithm, verify cookie settings

### Issue: "Table growing too large"
**Cause:** No data retention policy
**Solution:** Enable auto-delete old visitors in Settings → Privacy

### Issue: "Slow visitor queries"
**Cause:** Missing or fragmented indexes
**Solution:** Run `OPTIMIZE TABLE` and verify indexes exist

### Issue: "Bot traffic counted as humans"
**Cause:** Bot detection not working
**Solution:** Update user agent patterns, check robot flag

## Related Tables

- [Visits Table](visits.md) - Individual visit sessions
- [Pages Table](pages.md) - Page view details
- [Historical Table](historical.md) - Aggregated daily statistics

## API Usage

Query visitors via [Analytics Query API](../../api-endpoints/analytics-query-api.md):

```javascript
POST /wp-json/wp-statistics/v1/analytics
{
  "sources": ["visitors"],
  "group_by": ["country"],
  "date_from": "2024-01-01",
  "date_to": "2024-01-31",
  "filters": {
    "robot": 0  // Exclude bots
  }
}
```

---

*Last Updated: 2024-12-17*
