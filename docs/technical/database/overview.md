---
title: "Database Overview"
type: "technical"
category: "database"
status: "In Progress"
sidebar_position: 1
---

# Database Overview

Complete database schema documentation for WP Statistics v15 analytics system.

:::info Interactive Schema Diagram
For an interactive diagram of this schema, [view on dbdiagram.io](https://dbdiagram.io/d/v15-684909454aa7226ff858929c)
:::

## Database Architecture

The v15 database is organized into four primary categories:

1. **Main Tables** - Core tracking data (sessions, visitors, views, resources)
2. **Lookup Tables** - Normalized reference data (countries, devices, browsers, etc.)
3. **Behavioral & Analytics Tables** - Events, parameters, reports, and aggregated summaries
4. **WordPress Integration** - References to WordPress core tables (wp_users)

---

## Main Tables

### `wp_statistics_sessions`

**Purpose:** Logs each visitor session, capturing device, location, referral, and duration context.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `visitor_id` | bigint | **nullable**, FK: wp_statistics_visitors |
| `referrer_id` | bigint | FK: wp_statistics_referrers |
| `ip` | varchar(128) | indexed, nullable |
| `country_id` | bigint | FK: wp_statistics_countries |
| `city_id` | bigint | FK: wp_statistics_cities |
| `initial_view_id` | bigint unsigned | FK: wp_statistics_views |
| `last_view_id` | bigint unsigned | FK: wp_statistics_views |
| `total_views` | int(11) | DEFAULT 1, NOT NULL |
| `device_type_id` | bigint | FK: wp_statistics_device_types |
| `device_os_id` | bigint | FK: wp_statistics_device_oss |
| `device_browser_id` | bigint | FK: wp_statistics_device_browsers |
| `device_browser_version_id` | bigint | FK: wp_statistics_device_browser_versions |
| `started_at` | datetime | NOT NULL |
| `ended_at` | datetime | nullable |
| `duration` | int(11) unsigned | nullable |
| `user_id` | bigint | FK: wp_users |
| `timezone_id` | bigint | FK: wp_statistics_timezones |
| `language_id` | bigint | FK: wp_statistics_languages |
| `resolution_id` | bigint | FK: wp_statistics_resolutions |

**Key Indexes:**
- Primary key on `ID`
- Index on `ip`
- Foreign keys on all `_id` fields

---

### `wp_statistics_visitors`

**Purpose:** Identifies unique visitors for persistent session tracking across multiple visits.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `hash` | varchar(128) | indexed, nullable |
| `created_at` | datetime | NOT NULL |

**Key Indexes:**
- Primary key on `ID`
- Index on `hash`

---

### `wp_statistics_views`

**Purpose:** Logs each resource view, linked to a session for navigation flow tracking.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint unsigned | PK, AUTO_INCREMENT, NOT NULL |
| `resource_uri_id` | bigint | NOT NULL, FK: wp_statistics_resource_uris |
| `resource_id` | bigint | NOT NULL, FK: wp_statistics_resources |
| `session_id` | bigint | NOT NULL, FK: wp_statistics_sessions |
| `viewed_at` | datetime | NOT NULL |
| `next_view_id` | bigint | FK: wp_statistics_views |
| `duration` | int(11) unsigned | nullable |

**Key Indexes:**
- Primary key on `ID`
- Foreign keys on `resource_uri_id`, `resource_id`, `session_id`, `next_view_id`

---

### `wp_statistics_resources`

**Purpose:** Metadata for all viewable content: posts, pages, custom resources.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `resource_id` | bigint | NOT NULL |
| `resource_type` | varchar(64) | NOT NULL |
| `cached_title` | text | nullable |
| `cached_terms` | text | nullable |
| `cached_author_id` | bigint | FK: wp_users, nullable |
| `cached_author_name` | varchar(250) | nullable |
| `cached_date` | datetime | nullable |
| `resource_meta` | text | nullable |
| `is_deleted` | tinyint(1) | DEFAULT 0, NOT NULL |
| `language` | varchar(32) | nullable |

**Key Indexes:**
- Primary key on `ID`
- Foreign key on `cached_author_id`

**Notes:**
- Caches WordPress post/page metadata for performance
- `is_deleted` flag tracks removed content without losing historical data

---

### `wp_statistics_resource_uris`

**Purpose:** Stores all distinct URIs that point to a tracked resource. Allows tracking views per URL, even if multiple URLs map to the same resource.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `resource_id` | bigint | NOT NULL, FK: wp_statistics_resources |
| `uri` | varchar(255) | NOT NULL, INDEXED |

**Key Indexes:**
- Primary key on `ID`
- Index on `uri`
- Foreign key on `resource_id`

**Notes:**
- Enables path-specific tracking across different domains or subdomains
- Critical for accurate UTM parameter and campaign tracking

---

## Lookup Tables

Lookup tables normalize frequently repeated data to reduce storage and improve query performance.

### `wp_statistics_languages`

**Purpose:** Stores language preferences per visitor.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `code` | varchar(8) | NOT NULL |
| `name` | varchar(64) | INDEXED, NOT NULL |
| `region` | varchar(4) | nullable |

---

### `wp_statistics_referrers`

**Purpose:** Tracks referral domains and source types.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `domain` | varchar(128) | nullable, INDEXED |
| `channel` | varchar(128) | NOT NULL |
| `name` | varchar(128) | nullable, INDEXED |

**Key Indexes:**
- Primary key on `ID`
- Index on `domain`
- Index on `name`

---

### `wp_statistics_countries`

**Purpose:** Country data for geolocation tracking.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `code` | varchar(4) | NOT NULL, UNIQUE, INDEXED |
| `name` | varchar(64) | NOT NULL |
| `continent_code` | varchar(4) | NOT NULL |
| `continent` | varchar(16) | NOT NULL |

**Key Indexes:**
- Primary key on `ID`
- Unique index on `code`

---

### `wp_statistics_cities`

**Purpose:** Region and city-level location details.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `country_id` | bigint | NOT NULL, FK: wp_statistics_countries |
| `region_code` | varchar(4) | nullable |
| `region_name` | varchar(64) | NOT NULL |
| `city_name` | varchar(64) | NOT NULL |

**Key Indexes:**
- Primary key on `ID`
- Foreign key on `country_id`

---

### Device & Browser Tables

#### `wp_statistics_device_types`

**Purpose:** Device categories (e.g., mobile, tablet, desktop).

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `name` | varchar(64) | NOT NULL, UNIQUE |

---

#### `wp_statistics_device_oss`

**Purpose:** Visitor operating system metadata.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `name` | varchar(64) | NOT NULL, UNIQUE |

---

#### `wp_statistics_device_browsers`

**Purpose:** Recognized browser names.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `name` | varchar(64) | NOT NULL, UNIQUE |

---

#### `wp_statistics_device_browser_versions`

**Purpose:** Tracks specific browser versions.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `browser_id` | bigint | NOT NULL, FK: wp_statistics_device_browsers |
| `version` | varchar(64) | NOT NULL |

**Key Indexes:**
- Primary key on `ID`
- Foreign key on `browser_id`

---

### `wp_statistics_resolutions`

**Purpose:** Stores screen width and height of visitor devices.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `width` | int(5) | NOT NULL |
| `height` | int(5) | NOT NULL |

---

### `wp_statistics_timezones`

**Purpose:** Supports time zone-aware session tracking.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `name` | varchar(128) | NOT NULL, UNIQUE |
| `offset` | varchar(16) | NOT NULL |
| `is_dst` | tinyint(1) | NOT NULL, DEFAULT 0 |

---

## Behavioral & Analytics Tables

### `wp_statistics_parameters`

**Purpose:** Stores dynamic URL parameters (e.g., UTM tags) associated with sessions, views, or resources.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `session_id` | bigint | FK: wp_statistics_sessions |
| `view_id` | bigint | indexed, FK: wp_statistics_views |
| `resource_uri_id` | bigint | FK: wp_statistics_resource_uris |
| `parameter` | varchar(64) | nullable |
| `value` | varchar(255) | nullable |

**Key Indexes:**
- Primary key on `ID`
- Index on `view_id`
- Foreign keys on `session_id`, `view_id`, `resource_uri_id`

**Notes:**
- Enables campaign and keyword-level performance tracking per path

---

### `wp_statistics_events`

**Purpose:** Stores custom event data (e.g., clicks, conversions, interactions) associated with sessions and resource URIs.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `date` | datetime | NOT NULL - When the event occurred |
| `resource_uri_id` | bigint | FK: wp_statistics_resource_uris, nullable, indexed |
| `session_id` | bigint | FK: wp_statistics_sessions, nullable, indexed |
| `event_name` | varchar(64) | NOT NULL, indexed |
| `event_data` | text | NOT NULL - Raw payload or serialized JSON |
| `user_id` | bigint | FK: wp_users, nullable |

**Key Indexes:**
- Primary key on `ID`
- Index on `resource_uri_id`
- Index on `session_id`
- Index on `event_name`

---

### `wp_statistics_reports`

**Purpose:** Stores saved reports, filters, and configuration for analytics dashboards.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `created_by` | bigint | FK: wp_users, nullable |
| `title` | varchar(128) | NOT NULL |
| `description` | varchar(255) | nullable |
| `filters` | text | JSON or serialized config |
| `widgets` | text | JSON or serialized config |
| `access_level` | varchar(128) | nullable |
| `created_at` | datetime | NOT NULL, INDEXED |
| `updated_at` | datetime | nullable |

**Key Indexes:**
- Primary key on `ID`
- Index on `created_at`
- Foreign key on `created_by`

---

### `wp_statistics_summary`

**Purpose:** Aggregated per-resource daily analytics data.

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `date` | date | NOT NULL, INDEXED |
| `resource_uri_id` | bigint | FK: wp_statistics_resource_uris |
| `visitors` | bigint | DEFAULT 0, NOT NULL |
| `sessions` | bigint | DEFAULT 0, NOT NULL |
| `views` | int | DEFAULT 0, NOT NULL |
| `total_duration` | int | NOT NULL, DEFAULT 0 |
| `bounces` | bigint unsigned | NOT NULL, DEFAULT 0 |

**Key Indexes:**
- Primary key on `ID`
- Index on `date`
- Foreign key on `resource_uri_id`

**Notes:**
- Pre-aggregated data for performance optimization
- Updated via scheduled processes (e.g., nightly cron jobs)
- Index on `date` is critical for time-based queries

---

### `wp_statistics_summary_totals`

**Purpose:** Platform-wide totals per day (site-level KPIs).

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint | PK, AUTO_INCREMENT, NOT NULL |
| `date` | date | NOT NULL, INDEXED |
| `visitors` | bigint | DEFAULT 0, NOT NULL |
| `sessions` | bigint | DEFAULT 0, NOT NULL |
| `views` | int | DEFAULT 0, NOT NULL |
| `total_duration` | int | NOT NULL, DEFAULT 0 |
| `bounces` | bigint unsigned | NOT NULL, DEFAULT 0 |

**Key Indexes:**
- Primary key on `ID`
- Index on `date`

**Notes:**
- Index on `date` is critical for time-based queries

---

### `wp_statistics_exclusions`

**Purpose:** Stores met exclusion on hit request (e.g., bot traffic, excluded IPs).

| Field | Type | Constraints |
|-------|------|-------------|
| `ID` | bigint(20) | PK, AUTO_INCREMENT |
| `date` | date | When the exclusion happened |
| `reason` | varchar(180) | Reason for exclusion (e.g., bot) |
| `count` | bigint(20) | Number of times this exclusion occurred |

---

## Table Relationships

```
wp_statistics_visitors (1) ──< (∞) wp_statistics_sessions
                                         │
                                         ├──< (∞) wp_statistics_views
                                         │         │
                                         │         └──< (1) wp_statistics_resource_uris ──< (1) wp_statistics_resources
                                         │
                                         └──< (∞) wp_statistics_parameters

wp_statistics_sessions (∞) ──< (1) wp_statistics_referrers
wp_statistics_sessions (∞) ──< (1) wp_statistics_countries ──< (1) wp_statistics_cities
wp_statistics_sessions (∞) ──< (1) wp_statistics_device_types
wp_statistics_sessions (∞) ──< (1) wp_statistics_device_browsers ──< (1) wp_statistics_device_browser_versions
wp_statistics_sessions (∞) ──< (1) wp_statistics_device_oss
wp_statistics_sessions (∞) ──< (1) wp_statistics_resolutions
wp_statistics_sessions (∞) ──< (1) wp_statistics_timezones
wp_statistics_sessions (∞) ──< (1) wp_statistics_languages

wp_statistics_events (∞) ──< (1) wp_statistics_sessions
wp_statistics_events (∞) ──< (1) wp_statistics_resource_uris
```

---

## Database Design Principles

### 1. Normalization
Data is normalized to reduce redundancy:
- Lookup tables store frequently repeated values once (browsers, countries, etc.)
- Resources cached separately from views
- URIs separated from resources for multi-domain tracking

### 2. Foreign Key Constraints
- Relationships maintained through foreign key constraints
- Ensures referential integrity across the system
- Prevents orphaned records

### 3. Strategic Indexing
- Indexes on frequently queried columns (timestamps, IDs, foreign keys)
- Unique indexes on lookup table names (browsers, countries)
- Composite indexes where needed for multi-column queries

### 4. Performance Optimization
- **Summary tables** (`wp_statistics_summary`, `wp_statistics_summary_totals`) pre-aggregate data
- **Lookup tables** reduce storage and improve join performance
- **Nullable fields** for optional data to avoid defaults

### 5. Scalability
- Separate tables for high-volume data (views vs. sessions vs. visitors)
- Event system allows extensibility without schema changes
- Resource URI separation supports multi-site and multi-domain tracking

### 6. Data Integrity
- Soft deletes via `is_deleted` flag preserve historical data
- Cached fields reduce dependency on WordPress core tables
- UTC timestamps ensure consistent time-based queries

---

## Real-World Scenario: A Visitor's Journey

### Scenario: From Landing to Purchase

This walkthrough demonstrates how data flows through the v15 analytics system:

#### 1. The Visitor Lands on a Page
- Visitor opens a tracked resource (e.g., `/blog/post-1`)
- System extracts URI path from full URL
- Looks up or inserts URI into **wp_statistics_resource_uris** → gets `resource_uri_id`
- Links URI to canonical `resource_id` in **wp_statistics_resources**

✅ Enables tracking per path, even across multiple domains

#### 2. Visitor Profile Is Established
- System checks for existing visitor using `hash` in **wp_statistics_visitors**
- If not found, creates new visitor record
- Visitor becomes anchor for all future sessions

#### 3. Device & Environment Data Is Captured
- Detects device type, OS, browser, version, screen resolution
- Each matched to lookup table:
  - `wp_statistics_device_types`
  - `wp_statistics_device_oss`
  - `wp_statistics_device_browsers`
  - `wp_statistics_device_browser_versions`
  - `wp_statistics_resolutions`

✅ Lookup tables prevent duplication and normalize data

#### 4. Location & Locale Are Identified
- Based on IP and browser settings:
  - `country_id` → from `wp_statistics_countries`
  - `city_id` → from `wp_statistics_cities`
  - `language_id` → from `wp_statistics_languages`
  - `timezone_id` → from `wp_statistics_timezones`

✅ Enables localized analysis and filtering

#### 5. Traffic Source Is Logged
- Checks for Referer header, parses domain
- Domain, channel, and campaign info saved in **wp_statistics_referrers**

✅ Enables marketing attribution and source-based reporting

#### 6. A Session Is Created
- New row in **wp_statistics_sessions**:
  - Links to visitor, referrer, country/city, device info
  - Includes session timing, total views, optionally user ID

✅ Represents a unique visit to the site

#### 7. Page Views Are Tracked
- Each page load stored in **wp_statistics_views**:
  - Linked to session (`session_id`)
  - Linked to URI path (`resource_uri_id`)
  - Timestamp (`viewed_at`)
  - Optional `next_view_id` for sequencing

✅ Allows path-specific tracking

#### 8. Query Parameters Are Saved
- UTM or query parameters extracted from full URL
- Stored in **wp_statistics_parameters**, linked to:
  - `session_id`
  - `view_id`
  - `resource_uri_id`

✅ Enables campaign and keyword-level performance tracking

---

## Example Queries

### Total Sessions in the Last 30 Days

```sql
SELECT COUNT(*) AS total_sessions
FROM wp_statistics_sessions
WHERE started_at >= DATE_SUB(CURDATE(), INTERVAL 30 DAY);
```

### Top 5 Countries by Visitors (Last 30 Days)

```sql
SELECT c.name AS country, COUNT(*) AS visitors
FROM wp_statistics_sessions s
JOIN wp_statistics_countries c ON s.country_id = c.id
WHERE s.started_at >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
GROUP BY c.name
ORDER BY visitors DESC
LIMIT 5;
```

### Sessions by Referrer Channel (This Month)

```sql
SELECT r.channel, COUNT(*) AS session_count
FROM wp_statistics_sessions s
JOIN wp_statistics_referrers r ON s.referrer_id = r.id
WHERE MONTH(s.started_at) = MONTH(CURDATE())
  AND YEAR(s.started_at) = YEAR(CURDATE())
GROUP BY r.channel
ORDER BY session_count DESC;
```

### UTM Campaign Performance (Last 14 Days)

```sql
SELECT
  p.value AS campaign,
  COUNT(DISTINCT s.id) AS session_count
FROM wp_statistics_parameters p
JOIN wp_statistics_sessions s ON p.session_id = s.id
WHERE p.parameter = 'utm_campaign'
  AND s.started_at >= DATE_SUB(CURDATE(), INTERVAL 14 DAY)
GROUP BY p.value
ORDER BY session_count DESC;
```

### Session Breakdown by Device Type

```sql
SELECT dt.name AS device_type, COUNT(*) AS sessions
FROM wp_statistics_sessions s
JOIN wp_statistics_device_types dt ON s.device_type_id = dt.id
GROUP BY dt.name
ORDER BY sessions DESC;
```

### Bounce Rate per Resource (Last 7 Days)

```sql
SELECT
  ru.uri,
  SUM(CASE WHEN v.duration IS NULL OR v.duration < 5 THEN 1 ELSE 0 END) AS bounces,
  COUNT(*) AS total_views,
  ROUND(100 * SUM(CASE WHEN v.duration IS NULL OR v.duration < 5 THEN 1 ELSE 0 END) / COUNT(*), 2) AS bounce_rate_percent
FROM wp_statistics_views v
JOIN wp_statistics_resource_uris ru ON v.resource_uri_id = ru.id
WHERE v.viewed_at >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
GROUP BY ru.uri
ORDER BY bounce_rate_percent DESC;
```

---

## Notes

- All timestamps stored in UTC
- IP addresses can be anonymized based on privacy settings
- Summary tables aggregated via scheduled processes (e.g., nightly cron)
- Foreign key constraints ensure referential integrity
- Soft deletes preserve historical data without loss

---

*Last Updated: 2025-11-16*
