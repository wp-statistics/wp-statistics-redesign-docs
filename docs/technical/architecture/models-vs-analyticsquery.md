---
title: "Models vs AnalyticsQuery"
type: "technical"
category: "architecture"
status: "Done"
sidebar_position: 5
---

# Models vs AnalyticsQuery

This document explains the relationship between the legacy Models layer and the new AnalyticsQuery system in WP Statistics v15.

## Overview

WP Statistics v15 has two data access patterns:

| Layer | Purpose | Status | Used By |
|-------|---------|--------|---------|
| **AnalyticsQuery** | Dashboard data retrieval | **Active** | React dashboard, new features |
| **Models** | Low-level database operations | **Deprecated** | Add-ons, background jobs, legacy |

## When to Use What

### Use AnalyticsQuery For:
- Dashboard widgets and reports
- Analytics data aggregation
- Data with filtering/grouping/comparison
- REST API responses
- Any new v15 feature

### Use Models For (Legacy):
- Background processing jobs
- Entity/decorator operations
- Add-on data models (until migrated)
- Specific record lookups by ID
- Batch database operations

## AnalyticsQuery System

The AnalyticsQuery system is a declarative query engine:

```php
// Request format
$handler = new AnalyticsQueryHandler();
$response = $handler->handle([
    'sources' => ['visitors', 'views', 'bounce_rate'],
    'group_by' => ['date'],
    'date_from' => '2024-01-01',
    'date_to' => '2024-01-31',
    'filters' => [
        ['column' => 'country', 'operator' => '=', 'value' => 'US']
    ],
    'compare' => true,
    'format' => 'chart'
]);
```

**Components:**
- **Sources** (10): visitors, views, sessions, bounce_rate, avg_session_duration, etc.
- **GroupBy** (19): date, country, browser, device_type, page, etc.
- **Filters** (27): All dimensions can be filtered
- **Formatters** (4): table, flat, chart, export

**Key Files:**
- `src/Service/AnalyticsQuery/AnalyticsQueryHandler.php`
- `src/Service/AnalyticsQuery/Registry/SourceRegistry.php`
- `src/Service/AnalyticsQuery/Registry/GroupByRegistry.php`

## Models System (Deprecated)

Models provide direct database access:

```php
// Direct database queries
$model = new VisitorsModel();
$visitors = $model->countVisitors(['date' => $dateRange]);
$daily = $model->countDailyVisitors(['date' => $dateRange]);
```

**Available Models:**
- VisitorsModel, ViewsModel, SessionModel
- PostsModel, AuthorsModel, TaxonomyModel
- CountryModel, DeviceType, OsModel
- ReferrerModel, OnlineModel, EventsModel
- And more...

**Key Files:**
- `src/Models/*.php`
- `src/Abstracts/BaseModel.php`

## Migration Path for Add-ons

### Current Add-on Pattern (Deprecated):

```php
namespace WP_Statistics\Addon;

use WP_Statistics\Abstracts\BaseModel;

class CustomModel extends BaseModel
{
    public function getData($args)
    {
        return Query::select([...])
            ->from('custom_table')
            ->where(...)
            ->getAll();
    }
}
```

### Recommended v15 Pattern:

Add-ons should integrate with AnalyticsQuery via custom sources:

```php
// Register custom source
add_action('wp_statistics_register_sources', function($registry) {
    $registry->register('custom_metric', [
        'label' => 'Custom Metric',
        'aggregate' => 'COUNT(DISTINCT custom_column)',
        'table' => 'custom_table'
    ]);
});

// Then use via AnalyticsQuery
$handler->handle([
    'sources' => ['custom_metric'],
    'group_by' => ['date']
]);
```

## Deprecation Timeline

### v15.0 (Current)
- Models marked as `@deprecated`
- AnalyticsQuery is primary data layer
- Add-ons still work with Models

### v16.0 (Future)
- Models may be removed
- Add-ons must use AnalyticsQuery
- Migration guide and tools provided

## Key Differences

| Aspect | AnalyticsQuery | Models |
|--------|----------------|--------|
| Query style | Declarative | Imperative |
| Caching | Built-in | Manual |
| Filtering | Registry-based | Ad-hoc |
| Comparison | Automatic | Manual |
| Format output | Multiple formats | Raw data |
| Extension | Registry hooks | Class inheritance |

## Example: Same Data, Different Approaches

### AnalyticsQuery (Recommended):

```php
$handler = new AnalyticsQueryHandler();
$result = $handler->handle([
    'sources' => ['visitors'],
    'group_by' => ['country'],
    'date_from' => $from,
    'date_to' => $to,
    'format' => 'table'
]);
// Returns formatted data ready for display
```

### Models (Deprecated):

```php
$model = new VisitorsModel();
$result = $model->countVisitors([
    'date' => ['from' => $from, 'to' => $to],
    'group_by' => ['location']
]);
// Returns raw data, needs formatting
```

## Background Jobs Exception

For background processing, Models are still appropriate since they handle batch operations efficiently:

```php
// Background job - Models OK
class GeoIPUpdater extends WP_Background_Process
{
    protected function task($item)
    {
        $model = new VisitorsModel();
        $visitor = $model->getVisitorData(['visitor_id' => $item]);
        // Process...
    }
}
```

This is because background jobs need:
- Direct record access by ID
- Batch update capabilities
- No formatting/caching overhead
