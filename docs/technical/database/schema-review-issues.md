---
title: "Database Schema Review Issues"
type: "technical"
category: "database"
status: "In Progress"
sidebar_position: 2
---

# Database Schema Review Issues

This document outlines critical bugs and issues found during the database schema documentation review for WP Statistics v15.

:::warning For Development Team Review
Please review and address these issues before finalizing the v15 database schema.
:::

---

## Critical Issues (Must Fix)

### 1. Foreign Key Type Mismatch ❌

**Location:** `wp_statistics_sessions` table (overview.md lines 42-43)

**Issue:**
- Fields `initial_view_id` and `last_view_id` are defined as `bigint unsigned`
- They reference `wp_statistics_views.ID` which is defined as `bigint` (signed) (overview.md line 86)

**Current State:**
```sql
initial_view_id | bigint unsigned | FK: wp_statistics_views
last_view_id    | bigint unsigned | FK: wp_statistics_views
```

**Required State:**
```sql
-- Both fields must match the referenced column type
-- Either make both unsigned, or both signed
initial_view_id | bigint | FK: wp_statistics_views
last_view_id    | bigint | FK: wp_statistics_views
```

**Impact:**
- Foreign key constraint creation will FAIL in strict MySQL modes
- Database migration scripts will error
- Data integrity cannot be enforced

**Recommendation:**
Change `initial_view_id` and `last_view_id` to `bigint` (signed) to match `wp_statistics_views.ID`, OR change `wp_statistics_views.ID` to `bigint unsigned` and update all references.

---

### 2. Missing Critical Indexes on Summary Tables ❌

**Location:** `wp_statistics_summary` and `wp_statistics_summary_totals` (overview.md lines 366-400)

**Issue:**
- Both tables have `date` field that is NOT NULL and heavily queried
- NO index is documented on the `date` field
- All example queries filter by date ranges (lines 552-620)

**Current State:**
```sql
-- wp_statistics_summary
date | date | NOT NULL  -- NO INDEX DOCUMENTED

-- wp_statistics_summary_totals
date | date | NOT NULL  -- NO INDEX DOCUMENTED
```

**Required State:**
```sql
-- wp_statistics_summary
date | date | NOT NULL, INDEXED

-- wp_statistics_summary_totals
date | date | NOT NULL, INDEXED
```

**Impact:**
- **SEVERE** performance degradation on time-based queries
- Queries like "sessions in last 30 days" will do full table scans
- Summary tables can grow to millions of rows
- Unusable performance for date range reporting

**Recommendation:**
Add index on `date` field for both `wp_statistics_summary` and `wp_statistics_summary_totals`:
```sql
CREATE INDEX idx_summary_date ON wp_statistics_summary(date);
CREATE INDEX idx_summary_totals_date ON wp_statistics_summary_totals(date);
```

**Additional Consideration:**
Consider composite index on `(date, resource_uri_id)` for `wp_statistics_summary` since queries often filter by both.

---

### 3. Foreign Key Nullability Not Specified ❌

**Location:** `wp_statistics_sessions.referrer_id` (overview.md line 38)

**Issue:**
- `referrer_id` documented as `FK: wp_statistics_referrers`
- Does NOT specify whether it's nullable or NOT NULL
- Direct traffic sessions have no referrer

**Current State:**
```sql
referrer_id | bigint | FK: wp_statistics_referrers
```

**Required State:**
```sql
referrer_id | bigint | FK: wp_statistics_referrers, nullable
```

**Impact:**
- If implemented as NOT NULL, direct traffic sessions CANNOT be recorded
- Would break analytics for ~20-40% of typical web traffic
- Data loss for all non-referred visits

**Recommendation:**
Explicitly document as nullable: `referrer_id | bigint | FK: wp_statistics_referrers, nullable`

**Similar Issues Found:**
Review ALL foreign key fields for proper nullability documentation:
- `wp_statistics_sessions.visitor_id` (line 37) - already marked nullable ✓
- `wp_statistics_sessions.user_id` (line 52) - needs nullable
- `wp_statistics_events.resource_uri_id` (line 329) - marked nullable ✓
- `wp_statistics_events.session_id` (line 330) - marked nullable ✓
- `wp_statistics_events.user_id` (line 333) - marked nullable ✓

---

### 4. Inconsistent Field Name Cases in Documentation ⚠️

**Location:** Schema definitions vs. SQL queries

**Issue:**
- Schema defines primary keys as `ID` (uppercase)
- SQL queries use `id` (lowercase)
- Example: `c.id` in query vs `ID bigint` in schema

**Current State:**
```sql
-- Schema (line 190):
ID | bigint | PK, AUTO_INCREMENT, NOT NULL

-- Query (line 564):
s.country_id = c.id
```

**Impact:**
- Documentation inconsistency
- Confusion for developers (especially on case-sensitive systems)
- While MySQL is case-insensitive by default, this is poor practice

**Recommendation:**
Standardize all query examples to use uppercase `ID`:
```sql
s.country_id = c.ID
```

---

## Minor Issues (Should Fix)

### 5. Incomplete Relationship Diagram ⚠️

**Location:** Table Relationships section (lines 418-438)

**Missing Relationships:**
1. `wp_statistics_sessions.user_id` → `wp_users`
2. `wp_statistics_sessions.initial_view_id` → `wp_statistics_views`
3. `wp_statistics_sessions.last_view_id` → `wp_statistics_views`
4. `wp_statistics_resources.cached_author_id` → `wp_users`
5. `wp_statistics_events.user_id` → `wp_users`
6. `wp_statistics_reports.created_by` → `wp_users`
7. `wp_statistics_views.next_view_id` → `wp_statistics_views` (self-reference)

**Recommendation:**
Add complete relationship diagram showing all foreign key relationships.

---

### 6. Missing "Key Indexes" Sections ⚠️

**Tables Missing Index Documentation:**
1. `wp_statistics_languages` (line 153) - has index on `name`
2. `wp_statistics_resolutions` (line 271) - verify if indexed
3. `wp_statistics_timezones` (line 283) - has UNIQUE on `name`
4. `wp_statistics_summary` (line 366) - needs `date` index (critical)
5. `wp_statistics_summary_totals` (line 387) - needs `date` index (critical)
6. `wp_statistics_exclusions` (line 403) - should have `date` index

**Recommendation:**
Add "Key Indexes" section for each table documenting all indexes.

---

### 7. Inconsistent Constraint Notation Order ⚠️

**Issue:**
Some fields show: `nullable, FK: table_name`
Others show: `FK: table_name, nullable`

**Example:**
```sql
-- Line 37:
visitor_id | bigint | **nullable**, FK: wp_statistics_visitors

-- Line 111:
cached_author_id | bigint | FK: wp_users, nullable
```

**Recommendation:**
Standardize to: `Type | [NOT NULL/nullable], FK: table_name, [other_constraints]`

---

### 8. Inconsistent "indexed" Capitalization ⚠️

**Issue:**
Documentation uses both:
- lowercase: "indexed" (lines 39, 306)
- uppercase: "INDEXED" (lines 136, 161, 356)

**Recommendation:**
Standardize to uppercase "INDEXED" to match other constraints like "NOT NULL", "UNIQUE".

---

### 9. Ambiguous Bounce Calculation ⚠️

**Location:** Summary tables `bounces` field and example query (lines 379, 399, 609-614)

**Issue:**
- `bounces` field exists in summary tables
- Bounce calculation in query: `v.duration IS NULL OR v.duration < 5`
- No explanation of:
  - Duration unit (seconds? milliseconds?)
  - Why < 5 is considered a bounce
  - How this maps to standard bounce definition

**Recommendation:**
Add note explaining:
```sql
-- Duration is in seconds
-- Bounce defined as: no duration recorded OR < 5 seconds on page
-- Aligns with industry standard "quick exit" definition
```

---

### 10. Missing Unique Constraint Documentation ⚠️

**Location:** Device tables (lines 229, 240, 251)

**Issue:**
Tables show `name | varchar(64) | NOT NULL, UNIQUE` but don't have "Key Indexes" section to document the unique index.

**Affected Tables:**
- `wp_statistics_device_types`
- `wp_statistics_device_oss`
- `wp_statistics_device_browsers`

**Recommendation:**
Add "Key Indexes" sections documenting unique constraints.

---

### 11. Composite Index Documentation Missing ⚠️

**Location:** Line 458

**Issue:**
Claims "Composite indexes where needed for multi-column queries" but NO composite indexes are documented anywhere.

**Recommendation:**
Either:
1. Document the composite indexes that exist, OR
2. Remove the claim if no composite indexes are used

**Suggested Composite Indexes:**
```sql
-- For date range + resource queries
CREATE INDEX idx_summary_date_resource ON wp_statistics_summary(date, resource_uri_id);

-- For session lookups by visitor and date
CREATE INDEX idx_sessions_visitor_date ON wp_statistics_sessions(visitor_id, started_at);
```

---

### 12. Unclear Duration Field Constraints ⚠️

**Location:** Multiple tables with `duration` field

**Issue:**
- `wp_statistics_sessions.duration` (line 51): `int(11) unsigned`
- `wp_statistics_views.duration` (line 92): `int(11) unsigned`
- No documentation of:
  - Unit (seconds? milliseconds?)
  - Maximum value implications
  - What `int(11) unsigned` max means for session duration

**Recommendation:**
Add note:
```markdown
**Notes:**
- Duration stored in seconds
- `int(11) unsigned` max value: 4,294,967,295 seconds (~136 years)
- Sufficient for all realistic session/view durations
```

---

## Action Items for Dev Team

### High Priority (Before Production)
- [ ] Fix foreign key type mismatch (`initial_view_id`, `last_view_id`)
- [ ] Add indexes on `date` fields in summary tables
- [ ] Verify and document nullability for ALL foreign keys
- [ ] Standardize field name cases in schema

### Medium Priority (Before Documentation Finalization)
- [ ] Complete relationship diagram
- [ ] Add missing "Key Indexes" sections
- [ ] Standardize constraint notation order
- [ ] Document or remove composite index claim

### Low Priority (Nice to Have)
- [ ] Add duration unit explanations
- [ ] Document bounce calculation logic
- [ ] Standardize capitalization throughout

---

## Questions for Dev Team

1. **Type Mismatch:** Should views.ID be unsigned, or should session view references be signed?
2. **Composite Indexes:** Do any composite indexes exist? If so, please provide list for documentation.
3. **Duration Unit:** Confirm duration is stored in seconds (not milliseconds).
4. **Bounce Logic:** Is `< 5 seconds` the correct bounce threshold?
5. **Direct Traffic:** Confirm `referrer_id` should be nullable for direct traffic sessions.

---

*Document Created: 2025-11-16*
*Review Status: Pending Dev Team Response*
