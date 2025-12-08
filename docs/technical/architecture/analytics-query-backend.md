---
title: "Analytics Query Backend"
type: "technical"
category: "architecture"
status: "Done"
sidebar_position: 4
---

# Analytics Query Backend Architecture

This document explains how the backend transforms simple JSON requests into SQL queries, executes them, and returns formatted results.

## Overview

The Analytics Query system uses a **registry-based architecture** where metrics and dimensions are defined declaratively, and the QueryBuilder assembles them into SQL queries. This design ensures:

- **Security**: No raw SQL from frontend - all queries built from whitelisted components
- **Flexibility**: New metrics/dimensions added by updating registries
- **Maintainability**: Clean separation of concerns

## Class Structure

```
AnalyticsQueryHandler (Entry Point)
├── MetricRegistry (Metric definitions)
│   └── Maps metric names → SQL aggregations
├── DimensionRegistry (Dimension definitions)
│   └── Maps dimension names → columns + JOINs
├── FilterBuilder (Filter translation)
│   └── Converts filter objects → WHERE clauses
├── QueryBuilder (SQL generation)
│   └── Assembles complete query from parts
├── ComparisonHandler (Previous period)
│   └── Calculates comparison data
└── CacheManager (Result caching)
```

## File Locations

```
wp-statistics/src/Service/Analytics/
├── AnalyticsServiceProvider.php    # Registers the service
├── AnalyticsQueryHandler.php       # Main entry point
├── MetricRegistry.php              # Metric definitions
├── DimensionRegistry.php           # Dimension definitions
├── FilterBuilder.php               # Filter → WHERE clause
├── QueryBuilder.php                # Assembles SQL query
├── ComparisonHandler.php           # Previous period logic
└── CacheManager.php                # Query result caching
```

---

## Query Building Process

### Step 1: Request Validation

When a request comes in, the handler first validates all inputs:

```php
// AnalyticsQueryHandler.php
public function handle(array $request): array
{
    // 1. Validate metrics exist in registry
    foreach ($request['metrics'] as $metric) {
        if (!MetricRegistry::has($metric)) {
            throw new InvalidMetricException($metric);
        }
    }

    // 2. Validate dimensions exist in registry
    foreach ($request['dimensions'] as $dimension) {
        if (!DimensionRegistry::has($dimension)) {
            throw new InvalidDimensionException($dimension);
        }
    }

    // 3. Validate and sanitize filters
    $filters = FilterBuilder::validate($request['filters'] ?? []);

    // 4. Validate and normalize date range
    $dateRange = $this->normalizeDateRange($request);

    // Continue to query building...
}
```

#### Date/Time Normalization

The `normalizeDateRange` method handles flexible date-time input formats:

```php
private function normalizeDateRange(array $request): array
{
    $dateFrom = $request['date_from'] ?? date('Y-m-d', strtotime('-30 days'));
    $dateTo = $request['date_to'] ?? date('Y-m-d');

    // Normalize ISO 8601 'T' separator to space for MySQL
    $dateFrom = str_replace('T', ' ', $dateFrom);
    $dateTo = str_replace('T', ' ', $dateTo);

    // If no time component (length = 10 for YYYY-MM-DD), add default times
    if (strlen($dateFrom) === 10) {
        $dateFrom .= ' 00:00:00';  // Start of day
    }
    if (strlen($dateTo) === 10) {
        $dateTo .= ' 23:59:59';    // End of day
    }

    // Validate format
    if (!$this->isValidDateTime($dateFrom) || !$this->isValidDateTime($dateTo)) {
        throw new InvalidDateRangeException('Invalid date format');
    }

    // Validate range
    if (strtotime($dateFrom) > strtotime($dateTo)) {
        throw new InvalidDateRangeException('date_from must be before date_to');
    }

    return [
        'from' => $dateFrom,
        'to' => $dateTo
    ];
}

private function isValidDateTime(string $dateTime): bool
{
    return (bool) DateTime::createFromFormat('Y-m-d H:i:s', $dateTime);
}
```

**Accepted Formats:**
- `YYYY-MM-DD` - Date only (time defaults to `00:00:00` for start, `23:59:59` for end)
- `YYYY-MM-DD HH:mm:ss` - Date with time (space separator)
- `YYYY-MM-DDTHH:mm:ss` - ISO 8601 format (T separator, normalized to space internally)

### Step 2: Metric Registry

Each metric is mapped to its SQL expression and required table:

```php
// MetricRegistry.php
class MetricRegistry
{
    private static array $metrics = [
        'visitors' => [
            'expression' => 'COUNT(DISTINCT sessions.visitor_id)',
            'table' => 'sessions',
            'type' => 'integer'
        ],
        'views' => [
            'expression' => 'COUNT(*)',
            'table' => 'views',
            'type' => 'integer'
        ],
        'sessions' => [
            'expression' => 'COUNT(*)',
            'table' => 'sessions',
            'type' => 'integer'
        ],
        'bounce_rate' => [
            'expression' => 'ROUND(SUM(CASE WHEN sessions.page_count = 1 THEN 1 ELSE 0 END) * 100.0 / NULLIF(COUNT(*), 0), 1)',
            'table' => 'sessions',
            'type' => 'float'
        ],
        'avg_session_duration' => [
            'expression' => 'ROUND(AVG(sessions.duration), 0)',
            'table' => 'sessions',
            'type' => 'integer'
        ],
        'pages_per_session' => [
            'expression' => 'ROUND(AVG(sessions.page_count), 2)',
            'table' => 'sessions',
            'type' => 'float'
        ],
        'avg_time_on_page' => [
            'expression' => 'ROUND(AVG(views.time_on_page), 0)',
            'table' => 'views',
            'type' => 'integer'
        ],
    ];

    public static function get(string $name): array
    {
        return self::$metrics[$name];
    }

    public static function has(string $name): bool
    {
        return isset(self::$metrics[$name]);
    }

    public static function getExpression(string $name): string
    {
        return self::$metrics[$name]['expression'] . ' AS ' . $name;
    }
}
```

### Step 3: Dimension Registry

Each dimension defines its column, required JOINs, and grouping:

```php
// DimensionRegistry.php
class DimensionRegistry
{
    private static array $dimensions = [
        'date' => [
            'column' => 'DATE(sessions.started_at)',
            'alias' => 'date',
            'group_by' => 'DATE(sessions.started_at)',
            'order' => 'ASC',
            'date_column' => 'sessions.started_at'
        ],
        'hour' => [
            'column' => 'HOUR(sessions.started_at)',
            'alias' => 'hour',
            'extra_columns' => [
                "CONCAT(LPAD(HOUR(sessions.started_at), 2, '0'), ':00') AS hour_label"
            ],
            'group_by' => 'HOUR(sessions.started_at)',
            'order' => 'ASC'
        ],
        'country' => [
            'column' => 'countries.name',
            'alias' => 'country',
            'extra_columns' => [
                'countries.code AS country_code',
                'countries.flag AS flag'
            ],
            'join' => [
                'table' => 'wp_statistics_countries',
                'alias' => 'countries',
                'on' => 'sessions.country_id = countries.ID'
            ],
            'group_by' => 'countries.ID'
        ],
        'browser' => [
            'column' => 'device_browsers.name',
            'alias' => 'browser',
            'join' => [
                'table' => 'wp_statistics_device_browsers',
                'alias' => 'device_browsers',
                'on' => 'sessions.device_browser_id = device_browsers.ID'
            ],
            'group_by' => 'device_browsers.ID'
        ],
        'page' => [
            'column' => 'resource_uris.uri',
            'alias' => 'page',
            'extra_columns' => [
                'resource_uris.title AS page_title',
                'posts.ID AS post_id',
                'posts.post_type AS post_type'
            ],
            'join' => [
                ['table' => 'wp_statistics_resource_uris', 'alias' => 'resource_uris', 'on' => 'views.resource_uri_id = resource_uris.ID'],
                ['table' => 'wp_posts', 'alias' => 'posts', 'on' => 'resource_uris.post_id = posts.ID']
            ],
            'group_by' => 'resource_uris.ID'
        ],
        'referrer' => [
            'column' => 'referrers.domain',
            'alias' => 'referrer',
            'extra_columns' => [
                'referrers.type AS referrer_type'
            ],
            'join' => [
                'table' => 'wp_statistics_referrers',
                'alias' => 'referrers',
                'on' => 'sessions.referrer_id = referrers.ID'
            ],
            'group_by' => 'referrers.ID'
        ],
        // ... more dimensions
    ];

    public static function get(string $name): array
    {
        return self::$dimensions[$name];
    }

    public static function getSelectColumns(string $name): array
    {
        $dim = self::$dimensions[$name];
        $columns = [$dim['column'] . ' AS ' . $dim['alias']];

        if (isset($dim['extra_columns'])) {
            $columns = array_merge($columns, $dim['extra_columns']);
        }

        return $columns;
    }
}
```

### Step 4: Filter Builder

Filters are converted to WHERE clauses with proper escaping:

```php
// FilterBuilder.php
class FilterBuilder
{
    private static array $allowedFilters = [
        'country' => ['column' => 'countries.code', 'type' => 'string'],
        'browser' => ['column' => 'device_browsers.name', 'type' => 'string'],
        'os' => ['column' => 'device_oss.name', 'type' => 'string'],
        'device_type' => ['column' => 'sessions.device_type', 'type' => 'string'],
        'referrer' => ['column' => 'referrers.domain', 'type' => 'string'],
        'logged_in' => ['column' => 'visitors.logged_in', 'type' => 'boolean'],
        'post_type' => ['column' => 'posts.post_type', 'type' => 'string'],
        'author_id' => ['column' => 'posts.post_author', 'type' => 'integer'],
    ];

    public static function build(array $filters): array
    {
        $conditions = [];
        $params = [];

        foreach ($filters as $key => $value) {
            if (!isset(self::$allowedFilters[$key])) {
                throw new InvalidFilterException($key);
            }

            $config = self::$allowedFilters[$key];
            $column = $config['column'];

            // Handle operator syntax: { "contains": "google" }
            if (is_array($value)) {
                [$condition, $param] = self::buildOperatorCondition($column, $value, $config['type']);
            } else {
                // Simple equality: "country": "US"
                $condition = "$column = %s";
                $param = self::sanitize($value, $config['type']);
            }

            $conditions[] = $condition;
            $params[] = $param;
        }

        return ['conditions' => $conditions, 'params' => $params];
    }

    private static function buildOperatorCondition(string $column, array $value, string $type): array
    {
        $operator = key($value);
        $operand = current($value);

        switch ($operator) {
            case 'is':
                return ["$column = %s", self::sanitize($operand, $type)];
            case 'is_not':
                return ["$column != %s", self::sanitize($operand, $type)];
            case 'in':
                $placeholders = implode(',', array_fill(0, count($operand), '%s'));
                return ["$column IN ($placeholders)", array_map(fn($v) => self::sanitize($v, $type), $operand)];
            case 'contains':
                return ["$column LIKE %s", '%' . self::sanitize($operand, 'string') . '%'];
            case 'starts_with':
                return ["$column LIKE %s", self::sanitize($operand, 'string') . '%'];
            case 'gt':
                return ["$column > %d", self::sanitize($operand, 'integer')];
            case 'gte':
                return ["$column >= %d", self::sanitize($operand, 'integer')];
            case 'lt':
                return ["$column < %d", self::sanitize($operand, 'integer')];
            case 'lte':
                return ["$column <= %d", self::sanitize($operand, 'integer')];
            default:
                throw new InvalidOperatorException($operator);
        }
    }

    private static function sanitize($value, string $type)
    {
        return match($type) {
            'integer' => (int) $value,
            'float' => (float) $value,
            'boolean' => $value ? 1 : 0,
            'string' => sanitize_text_field($value),
        };
    }
}
```

### Step 5: Query Builder

The QueryBuilder assembles all parts into a complete SQL query:

```php
// QueryBuilder.php
class QueryBuilder
{
    private array $select = [];
    private string $from;
    private array $joins = [];
    private array $where = [];
    private array $groupBy = [];
    private array $orderBy = [];
    private ?int $limit = null;
    private int $offset = 0;

    public function buildFromRequest(array $request): string
    {
        // 1. Determine primary table from metrics
        $primaryTable = $this->determinePrimaryTable($request['metrics']);
        $this->from = "wp_statistics_{$primaryTable} AS {$primaryTable}";

        // 2. Add dimension columns to SELECT
        foreach ($request['dimensions'] as $dimension) {
            $dim = DimensionRegistry::get($dimension);
            $this->select = array_merge($this->select, DimensionRegistry::getSelectColumns($dimension));

            // Add required JOINs
            if (isset($dim['join'])) {
                $this->addJoin($dim['join']);
            }

            // Add GROUP BY
            if (isset($dim['group_by'])) {
                $this->groupBy[] = $dim['group_by'];
            }
        }

        // 3. Add metric expressions to SELECT
        foreach ($request['metrics'] as $metric) {
            $this->select[] = MetricRegistry::getExpression($metric);
        }

        // 4. Add date range WHERE clause
        $dateColumn = $this->getDateColumn($primaryTable);
        $this->where[] = "$dateColumn BETWEEN %s AND %s";

        // 5. Add filter WHERE clauses
        if (!empty($request['filters'])) {
            $filterResult = FilterBuilder::build($request['filters']);
            $this->where = array_merge($this->where, $filterResult['conditions']);
        }

        // 6. Add ORDER BY
        $orderBy = $request['order_by'] ?? $request['metrics'][0];
        $order = strtoupper($request['order'] ?? 'DESC');
        $this->orderBy[] = "$orderBy $order";

        // 7. Add LIMIT/OFFSET
        if (isset($request['per_page'])) {
            $this->limit = min((int) $request['per_page'], 100);
            $this->offset = (((int) ($request['page'] ?? 1)) - 1) * $this->limit;
        }

        // 8. Assemble final SQL
        return $this->assemble();
    }

    private function assemble(): string
    {
        $sql = "SELECT\n    " . implode(",\n    ", $this->select);
        $sql .= "\nFROM " . $this->from;

        foreach ($this->joins as $join) {
            $sql .= "\nLEFT JOIN {$join['table']} AS {$join['alias']}";
            $sql .= "\n    ON {$join['on']}";
        }

        if (!empty($this->where)) {
            $sql .= "\nWHERE " . implode("\n    AND ", $this->where);
        }

        if (!empty($this->groupBy)) {
            $sql .= "\nGROUP BY " . implode(", ", $this->groupBy);
        }

        if (!empty($this->orderBy)) {
            $sql .= "\nORDER BY " . implode(", ", $this->orderBy);
        }

        if ($this->limit !== null) {
            $sql .= "\nLIMIT {$this->limit} OFFSET {$this->offset}";
        }

        return $sql;
    }

    private function determinePrimaryTable(array $metrics): string
    {
        // Determine primary table based on metrics
        // If any metric requires 'views' table, use views
        // Otherwise default to 'sessions'
        foreach ($metrics as $metric) {
            $config = MetricRegistry::get($metric);
            if ($config['table'] === 'views') {
                return 'views';
            }
        }
        return 'sessions';
    }

    private function getDateColumn(string $table): string
    {
        return match($table) {
            'sessions' => 'sessions.started_at',
            'views' => 'views.viewed_at',
            'visitors' => 'visitors.created_at',
            default => 'sessions.started_at'
        };
    }

    private function addJoin(array $join): void
    {
        // Handle single join or array of joins
        $joins = isset($join['table']) ? [$join] : $join;

        foreach ($joins as $j) {
            // Avoid duplicate joins
            if (!isset($this->joins[$j['alias']])) {
                $this->joins[$j['alias']] = $j;
            }
        }
    }
}
```

---

## Complete Flow Example

Here's how a request flows through the system:

**Input Request:**
```json
{
  "metrics": ["visitors", "sessions"],
  "dimensions": ["country"],
  "filters": { "device_type": "mobile" },
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "per_page": 10
}
```

**Processing Steps:**

```
1. VALIDATION
   ✓ metrics: ['visitors', 'sessions'] → both exist in MetricRegistry
   ✓ dimensions: ['country'] → exists in DimensionRegistry
   ✓ filters: { device_type: 'mobile' } → 'device_type' is allowed
   ✓ dates: valid format

2. PRIMARY TABLE DETECTION
   → metrics need 'sessions' table → FROM sessions

3. DIMENSION PROCESSING (country)
   → SELECT: countries.name AS country, countries.code AS country_code, countries.flag AS flag
   → JOIN: LEFT JOIN wp_statistics_countries AS countries ON sessions.country_id = countries.ID
   → GROUP BY: countries.ID

4. METRIC PROCESSING
   → SELECT: COUNT(DISTINCT sessions.visitor_id) AS visitors
   → SELECT: COUNT(*) AS sessions

5. FILTER PROCESSING
   → WHERE: sessions.device_type = 'mobile'

6. DATE RANGE NORMALIZATION
   → Input: "2024-11-01" to "2024-11-30" (date only)
   → Normalized: "2024-11-01 00:00:00" to "2024-11-30 23:59:59"
   → WHERE: sessions.started_at BETWEEN '2024-11-01 00:00:00' AND '2024-11-30 23:59:59'

   Note: If times were provided (e.g., "2024-11-01 09:00:00"), they would be used exactly.

7. PAGINATION
   → ORDER BY: visitors DESC
   → LIMIT 10 OFFSET 0
```

**Generated SQL:**
```sql
SELECT
    countries.name AS country,
    countries.code AS country_code,
    countries.flag AS flag,
    COUNT(DISTINCT sessions.visitor_id) AS visitors,
    COUNT(*) AS sessions
FROM wp_statistics_sessions AS sessions
LEFT JOIN wp_statistics_countries AS countries
    ON sessions.country_id = countries.ID
WHERE sessions.device_type = 'mobile'
    AND sessions.started_at BETWEEN '2024-11-01 00:00:00' AND '2024-11-30 23:59:59'
GROUP BY countries.ID
ORDER BY visitors DESC
LIMIT 10 OFFSET 0
```

---

## Comparison Handler

When `compare: true` is set, the ComparisonHandler runs the same query for the previous period:

```php
// ComparisonHandler.php
class ComparisonHandler
{
    public function calculatePreviousPeriod(string $dateFrom, string $dateTo): array
    {
        $from = new DateTime($dateFrom);
        $to = new DateTime($dateTo);
        $diff = $from->diff($to)->days + 1;

        $prevTo = (clone $from)->modify('-1 day');
        $prevFrom = (clone $prevTo)->modify("-{$diff} days")->modify('+1 day');

        return [
            'from' => $prevFrom->format('Y-m-d'),
            'to' => $prevTo->format('Y-m-d')
        ];
    }

    public function mergeResults(array $current, array $previous): array
    {
        // Match rows by dimension values and add previous/change data
        foreach ($current as &$row) {
            $matchKey = $this->getMatchKey($row);
            $prevRow = $this->findMatch($previous, $matchKey);

            if ($prevRow) {
                $row['previous'] = [];
                $row['change'] = [];

                foreach ($this->metrics as $metric) {
                    $row['previous'][$metric] = $prevRow[$metric];
                    $row['change'][$metric] = $this->calculateChange(
                        $row[$metric],
                        $prevRow[$metric]
                    );
                }
            }
        }

        return $current;
    }

    private function calculateChange($current, $previous): float
    {
        if ($previous == 0) return $current > 0 ? 100.0 : 0.0;
        return round((($current - $previous) / $previous) * 100, 1);
    }
}
```

---

## Batch Processor

The BatchProcessor handles batch requests with global parameter inheritance.

### Class Structure

```
BatchProcessor
├── extractGlobalParameters()     # Extract date_from, date_to, filters from request
├── validateBatchStructure()      # Validate queries array structure
├── validateGlobalParameters()    # Validate global date range and filters
├── resolveQueryParameters()      # Merge global and child parameters
├── processBatch()                # Main entry point for batch processing
└── buildQueryMeta()              # Build per-query meta for response
```

### Parameter Resolution

The `resolveQueryParameters()` method applies inheritance from global parameters:

```php
private function resolveQueryParameters(array $query, array $globalParams): array
{
    $resolved = $query;

    // Date handling: complete override only
    // Child must specify both date_from AND date_to, or neither
    if (!isset($query['date_from']) && !isset($query['date_to'])) {
        // Inherit global dates
        if (isset($globalParams['date_from'])) {
            $resolved['date_from'] = $globalParams['date_from'];
        }
        if (isset($globalParams['date_to'])) {
            $resolved['date_to'] = $globalParams['date_to'];
        }
    } elseif (!isset($query['date_from']) || !isset($query['date_to'])) {
        // Partial date override is not allowed
        throw new BatchValidationException(
            'Query must specify both date_from and date_to, or neither'
        );
    }
    // If both dates specified in child, they override global (no action needed)

    // Filter handling: merge & override
    // Child filters merge with global, child values override matching keys
    $globalFilters = $globalParams['filters'] ?? [];
    $childFilters = $query['filters'] ?? [];
    $resolved['filters'] = array_merge($globalFilters, $childFilters);

    return $resolved;
}
```

### Processing Flow

```
1. EXTRACT GLOBAL PARAMETERS
   → date_from, date_to, filters from batch request root

2. VALIDATE BATCH STRUCTURE
   → Ensure queries array exists and is not empty
   → Ensure each query has required fields (metrics, dimensions)
   → Check batch limits (max 20 queries)

3. VALIDATE GLOBAL PARAMETERS
   → If dates provided, both must be present
   → Validate date format and range
   → Validate filters against allowed filters

4. FOR EACH QUERY:
   a. Resolve parameters (merge global + child)
   b. Validate resolved query
   c. Build SQL via QueryBuilder
   d. Execute query
   e. Store result or error

5. BUILD RESPONSE
   → Data: keyed by query ID
   → Meta: global values + per-query resolved values
   → Errors: keyed by query ID
```

### Example Resolution

**Input:**
```json
{
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "filters": { "country": "US", "device_type": "desktop" },
  "queries": [
    {
      "id": "overview",
      "metrics": ["visitors"],
      "dimensions": []
    },
    {
      "id": "mobile",
      "metrics": ["visitors"],
      "dimensions": [],
      "filters": { "device_type": "mobile" }
    }
  ]
}
```

**Resolved Parameters:**

| Query | date_from | date_to | filters |
|-------|-----------|---------|---------|
| `overview` | `2024-11-01` (inherited) | `2024-11-30` (inherited) | `{ country: "US", device_type: "desktop" }` (inherited) |
| `mobile` | `2024-11-01` (inherited) | `2024-11-30` (inherited) | `{ country: "US", device_type: "mobile" }` (merged) |

---

## Generated SQL Examples

### Line Chart (Time Series)

```sql
SELECT
    DATE(sessions.started_at) AS date,
    COUNT(DISTINCT sessions.visitor_id) AS visitors,
    (SELECT COUNT(*) FROM wp_statistics_views
     WHERE DATE(viewed_at) = DATE(sessions.started_at)
     AND viewed_at BETWEEN '2024-11-01 00:00:00' AND '2024-11-30 23:59:59') AS views
FROM wp_statistics_sessions AS sessions
WHERE sessions.started_at BETWEEN '2024-11-01 00:00:00' AND '2024-11-30 23:59:59'
GROUP BY DATE(sessions.started_at)
ORDER BY date ASC
```

### Horizontal Bar Chart (Top Countries)

```sql
SELECT
    countries.name AS country,
    countries.code AS country_code,
    countries.flag AS flag,
    COUNT(DISTINCT sessions.visitor_id) AS visitors,
    COUNT(*) AS sessions
FROM wp_statistics_sessions AS sessions
LEFT JOIN wp_statistics_countries AS countries
    ON sessions.country_id = countries.ID
WHERE sessions.started_at BETWEEN '2024-11-01 00:00:00' AND '2024-11-30 23:59:59'
GROUP BY countries.ID, countries.name, countries.code, countries.flag
ORDER BY visitors DESC
LIMIT 10 OFFSET 0
```

### Data Table (Top Pages)

```sql
SELECT
    resource_uris.uri AS page,
    resource_uris.title AS page_title,
    posts.ID AS post_id,
    posts.post_type AS post_type,
    COUNT(*) AS views,
    COUNT(DISTINCT views.visitor_id) AS visitors,
    ROUND(AVG(views.time_on_page), 0) AS avg_time_on_page,
    ROUND(
        SUM(CASE WHEN views.is_bounce = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(*),
        1
    ) AS bounce_rate
FROM wp_statistics_views AS views
LEFT JOIN wp_statistics_resource_uris AS resource_uris
    ON views.resource_uri_id = resource_uris.ID
LEFT JOIN wp_posts AS posts
    ON resource_uris.post_id = posts.ID
WHERE views.viewed_at BETWEEN '2024-11-01 00:00:00' AND '2024-11-30 23:59:59'
GROUP BY resource_uris.ID, resource_uris.uri, resource_uris.title, posts.ID, posts.post_type
ORDER BY views DESC
LIMIT 10 OFFSET 0
```

### Pie/Donut Chart (Device Distribution)

```sql
SELECT
    sessions.device_type AS device_type,
    COUNT(*) AS sessions,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 1) AS percentage
FROM wp_statistics_sessions AS sessions
WHERE sessions.started_at BETWEEN '2024-11-01 00:00:00' AND '2024-11-30 23:59:59'
    AND sessions.device_type IS NOT NULL
GROUP BY sessions.device_type
ORDER BY sessions DESC
```

### Metrics Cards (Totals Only)

```sql
SELECT
    COUNT(DISTINCT sessions.visitor_id) AS visitors,
    (SELECT COUNT(*) FROM wp_statistics_views
     WHERE viewed_at BETWEEN '2024-11-01 00:00:00' AND '2024-11-30 23:59:59') AS views,
    COUNT(*) AS sessions,
    ROUND(
        SUM(CASE WHEN sessions.page_count = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(*),
        1
    ) AS bounce_rate,
    ROUND(AVG(sessions.duration), 0) AS avg_session_duration,
    ROUND(AVG(sessions.page_count), 2) AS pages_per_session
FROM wp_statistics_sessions AS sessions
WHERE sessions.started_at BETWEEN '2024-11-01 00:00:00' AND '2024-11-30 23:59:59'
```

### Online Visitors (Real-Time)

```sql
SELECT
    online.visitor_id,
    visitors.hash AS visitor_hash,
    visitors.user_id,
    users.display_name AS user_name,
    online.page AS current_page,
    resource_uris.title AS page_title,
    online.timestamp AS last_activity,
    TIMESTAMPDIFF(SECOND, online.timestamp, NOW()) AS seconds_ago,
    online.ip AS ip_address,
    countries.name AS country,
    countries.code AS country_code,
    device_browsers.name AS browser,
    device_oss.name AS os,
    online.device_type
FROM wp_statistics_online AS online
LEFT JOIN wp_statistics_visitors AS visitors
    ON online.visitor_id = visitors.ID
LEFT JOIN wp_users AS users
    ON visitors.user_id = users.ID
LEFT JOIN wp_statistics_resource_uris AS resource_uris
    ON online.resource_uri_id = resource_uris.ID
LEFT JOIN wp_statistics_countries AS countries
    ON online.country_id = countries.ID
LEFT JOIN wp_statistics_device_browsers AS device_browsers
    ON online.device_browser_id = device_browsers.ID
LEFT JOIN wp_statistics_device_oss AS device_oss
    ON online.device_os_id = device_oss.ID
WHERE online.timestamp >= DATE_SUB(NOW(), INTERVAL 5 MINUTE)
ORDER BY online.timestamp DESC
LIMIT 50
```

---

## Security Model

1. **Whitelisted Metrics**: Only predefined metric names accepted
2. **Whitelisted Dimensions**: Only predefined dimension names accepted
3. **No Raw SQL**: Backend generates all SQL internally
4. **Filter Validation**: All filter values sanitized
5. **Permission Check**: User must have `wps_read_capability` capability
6. **Rate Limiting**: Prevent query abuse
7. **Prepared Statements**: All values use parameter binding via `$wpdb->prepare()`

---

## Related Documentation

- [Analytics Query API](../api/analytics-query-api.md)
- [Analytics Query Frontend Integration](./analytics-query-frontend.md)

---

*Last Updated: 2025-12-08*
