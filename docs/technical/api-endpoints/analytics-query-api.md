---
title: "Analytics Query API"
type: "technical"
category: "api"
status: "Done"
---

# Analytics Query API

A flexible, secure analytics query system for the WP Statistics v15 React dashboard. This API uses a **sources + group_by** approach - you specify what to measure and how to group it, and the backend generates all SQL securely.

## Quick Navigation

- [Endpoint](#endpoint)
- [Request Parameters](#request-parameters)
  - [Available Sources](#available-sources)
  - [Available Group By](#available-group-by)
  - [Available Filters](#available-filters)
  - [Column Filtering](#column-filtering)
  - [Response Formats](#response-formats)
- [Request Example](#request-example)
- [Response Structure](#response-structure)
- [Error Codes](#error-codes)
- [Batch Queries](#batch-queries)

## Examples

- [Line Chart](#1-line-chart---time-series)
- [Horizontal Bar](#2-horizontal-bar-chart---top-countries)
- [Pie/Donut Chart](#3-piedonut-chart---device-distribution)
- [Data Table](#4-data-table---top-pages-with-pagination)
- [Metrics Cards](#5-metrics-cards---kpi-summary-no-group-by)
- [World Map](#6-world-map---geographic-distribution)
- [Online Visitors](#7-online-visitors-real-time)
- [Referrers](#8-traffic-sources-referrers)

---

## Endpoint

| Property | Value |
|----------|-------|
| Action | `wp_statistics_analytics` |
| Method | POST |
| Auth | Required |

---

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string (JSON) | Yes | JSON-encoded query object (single query or array for batch) |

### Query Object Parameters

#### Required

| Parameter | Type | Description |
|-----------|------|-------------|
| `sources` | array | List of source names to calculate. At least one required. [See available sources](#available-sources) |
| `group_by` | array | List of group by options for grouping. Can be empty for totals only. [See available options](#available-group-by) |

#### Optional

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `date_from` | string | 30 days ago | Start date/time. Formats: `YYYY-MM-DD`, `YYYY-MM-DD HH:mm:ss`, or `YYYY-MM-DDTHH:mm:ss`. Defaults to `00:00:00` if time omitted. |
| `date_to` | string | today | End date/time. Formats: `YYYY-MM-DD`, `YYYY-MM-DD HH:mm:ss`, or `YYYY-MM-DDTHH:mm:ss`. Defaults to `23:59:59` if time omitted. |
| `compare` | boolean | `false` | Include previous period comparison |
| `filters` | object | `{}` | Filter criteria. [See available filters](#available-filters) |
| `format` | string | `standard` | Response format. [See response formats](#response-formats) |
| `columns` | array | `null` | Columns to include in response. [See column filtering](#column-filtering) |
| `page` | integer | `1` | Page number for pagination |
| `per_page` | integer | `10` | Results per page (max: 100) |
| `order_by` | string | first source | Column to sort by |
| `order` | string | `DESC` | Sort direction: `ASC` or `DESC` |

### Date/Time Format

The `date_from` and `date_to` parameters accept flexible date-time formats:

| Format | Example | Description |
|--------|---------|-------------|
| Date only | `2024-11-01` | Time defaults to `00:00:00` for `date_from`, `23:59:59` for `date_to` |
| With space | `2024-11-01 14:30:00` | Exact time specified (24-hour format) |
| ISO 8601 | `2024-11-01T14:30:00` | JavaScript-friendly format with `T` separator |

**Default Time Behavior:**
- When only a date is provided, `date_from` defaults to midnight (`00:00:00`) and `date_to` defaults to end of day (`23:59:59`)
- This ensures full-day queries when times are omitted
- The response `meta` object returns the actual normalized date-time values used

**Example - Intraday Query:**

Query only business hours (9 AM to 5 PM):

```json
{
  "sources": ["visitors", "views"],
  "group_by": ["hour"],
  "date_from": "2024-11-01 09:00:00",
  "date_to": "2024-11-01 17:00:00"
}
```

---

## Available Sources

| Source | Description | Data Type |
|--------|-------------|-----------|
| `visitors` | Unique visitors count | integer |
| `views` | Total page views | integer |
| `sessions` | Total sessions | integer |
| `bounce_rate` | Bounce rate percentage | float |
| `avg_session_duration` | Average session duration (seconds) | integer |
| `pages_per_session` | Average pages viewed per session | float |
| `new_visitors` | First-time visitors | integer |
| `returning_visitors` | Returning visitors | integer |
| `online_visitors` | Currently online visitors | integer |
| `avg_time_on_page` | Average time spent on page (seconds) | integer |

---

## Available Group By

| Group By | Primary Column | Extra Columns in Response |
|-----------|----------------|---------------------------|
| `date` | `date` | - |
| `week` | `week` | `week_start`, `week_end` |
| `month` | `month` | `month_name` |
| `hour` | `hour` | `hour_label` |
| `country` | `country_name` | `country_id`, `country_code`, `country_continent`, `country_continent_code` |
| `city` | `city_name` | `city_id`, `city_region_code`, `city_region_name`, `city_country_id`, `country_code`, `country_name` |
| `continent` | `continent_name` | `continent_code` |
| `browser` | `browser_name` | `browser_id`, `browser_version`, `browser_version_id` |
| `os` | `os_name` | `os_id` |
| `device_type` | `device_type_name` | `device_type_id` |
| `referrer` | `referrer_domain` | `referrer_id`, `referrer_channel`, `referrer_name` |
| `language` | `language_name` | `language_id`, `language_code`, `language_region` |
| `resolution` | `resolution` | `resolution_id`, `resolution_width`, `resolution_height` |
| `page` | `page_uri` | `page_uri_id`, `resource_id`, `page_title`, `page_wp_id`, `page_type` |
| `post_type` | `post_type` | - |
| `author` | `author_name` | `author_id` |
| `search_engine` | `search_engine` | - |
| `search_query` | `search_query` | - |
| `visitor` | `visitor_id` | Full visitor details |

---

## Available Filters

| Filter | Type | Description |
|--------|------|-------------|
| `country` | string | Country code (e.g., `"US"`, `"GB"`) |
| `city` | string | City name |
| `browser` | string | Browser name (e.g., `"Chrome"`, `"Safari"`) |
| `os` | string | Operating system (e.g., `"Windows"`, `"macOS"`) |
| `device_type` | string | `"desktop"`, `"mobile"`, or `"tablet"` |
| `referrer` | string | Referrer domain (e.g., `"google.com"`) |
| `post_type` | string/array | WordPress post type(s) |
| `author_id` | integer | WordPress author ID |
| `user_id` | integer | WordPress user ID |
| `logged_in` | boolean | Only logged-in visitors |
| `page` | string | Page URI path |
| `search_query` | string | Search term used |

### Filter Operators

For advanced filtering, use operator syntax:

```json
{
  "filters": {
    "country": { "in": ["US", "GB", "CA"] },
    "referrer": { "contains": "google" },
    "visitors": { "gt": 100 },
    "page": { "starts_with": "/blog/" }
  }
}
```

| Operator | Description | Example |
|----------|-------------|---------|
| `is` / (direct value) | Equals | `"country": "US"` |
| `is_not` | Not equals | `"country": { "is_not": "US" }` |
| `in` | In list | `"country": { "in": ["US", "GB"] }` |
| `not_in` | Not in list | `"country": { "not_in": ["CN", "RU"] }` |
| `contains` | Contains substring | `"referrer": { "contains": "google" }` |
| `starts_with` | Starts with | `"page": { "starts_with": "/blog/" }` |
| `gt` | Greater than | `"visitors": { "gt": 100 }` |
| `gte` | Greater than or equal | `"visitors": { "gte": 100 }` |
| `lt` | Less than | `"bounce_rate": { "lt": 50 }` |
| `lte` | Less than or equal | `"bounce_rate": { "lte": 50 }` |

---

## Column Filtering

The `columns` parameter allows you to filter the response to include only specific columns. This is useful for reducing response size and selecting only the data you need.

### How It Works

- **Default behavior**: When `columns` is not provided (or `null`), all available columns from sources and group_by are returned
- **Filtered response**: When `columns` is provided, only the specified columns appear in rows and totals
- **Column order**: The order of columns in the response matches the order specified in the `columns` array

### Available Columns

Valid column names include:
- All source names (e.g., `visitors`, `views`, `sessions`, `bounce_rate`)
- Primary column from group_by (e.g., `country_name`, `device_type_name`, `os_name`)
- Extra columns from group_by (e.g., `country_code`, `browser_id`, `referrer_channel`)

### Example: Select Specific Columns

**Request:**
```json
{
  "sources": ["visitors", "views", "sessions", "bounce_rate"],
  "group_by": ["country"],
  "columns": ["country_name", "country_code", "visitors"],
  "date_from": "2024-11-01",
  "date_to": "2024-11-30"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "rows": [
      { "country_name": "United States", "country_code": "US", "visitors": 12500 },
      { "country_name": "United Kingdom", "country_code": "GB", "visitors": 4500 }
    ],
    "totals": {
      "visitors": 35000
    }
  }
}
```

Note: Even though `views`, `sessions`, and `bounce_rate` are in sources, they're excluded from the response because they're not in `columns`.

### Column Filtering in Batch Queries

Each query in a batch can specify its own `columns` parameter:

```json
{
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "queries": [
    {
      "id": "top_countries",
      "sources": ["visitors"],
      "group_by": ["country"],
      "columns": ["country_name", "country_code", "visitors"],
      "per_page": 5
    },
    {
      "id": "top_devices",
      "sources": ["visitors"],
      "group_by": ["device_type"],
      "columns": ["device_type_name", "visitors"],
      "per_page": 5
    }
  ]
}
```

### Error Handling

Invalid column names result in an error:

```json
{
  "success": false,
  "error": {
    "code": "invalid_column",
    "message": "Invalid column: 'invalid_column'. Column must be from sources or group_by fields."
  }
}
```

---

## Response Formats

The `format` parameter controls the structure of the API response. Different formats are optimized for different use cases.

### Available Formats

| Format | Use Case | Description |
|--------|----------|-------------|
| `standard` | Default, backward compatible | Nested structure with `data.rows`, `data.totals`, and `meta` |
| `flat` | Simple widgets, mobile apps | Flattened structure with `items[]` array at top level |
| `chart` | Chart.js, Recharts, ApexCharts | Chart-ready with `labels[]` and `datasets[]` |
| `export` | CSV/Excel exports, PDF reports | Tabular format with `headers[]` and `rows[][]` |

### Standard Format (Default)

The default format maintains backward compatibility. Best for data tables and complex widgets.

**Request:**
```json
{
  "sources": ["visitors", "views"],
  "group_by": ["country"],
  "format": "standard"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "rows": [
      { "country_name": "United States", "country_code": "US", "visitors": 12500, "views": 35000 },
      { "country_name": "United Kingdom", "country_code": "GB", "visitors": 4500, "views": 12000 }
    ],
    "totals": {
      "visitors": 35000,
      "views": 98000
    }
  },
  "meta": {
    "date_from": "2024-11-01 00:00:00",
    "date_to": "2024-11-30 23:59:59",
    "total_rows": 145,
    "page": 1,
    "per_page": 10,
    "total_pages": 15
  }
}
```

### Flat Format

Simplified structure for easy iteration. Best for simple widgets, lists, and mobile apps.

**Request:**
```json
{
  "sources": ["visitors", "views"],
  "group_by": ["country"],
  "format": "flat"
}
```

**Response:**
```json
{
  "success": true,
  "items": [
    { "country_name": "United States", "country_code": "US", "visitors": 12500, "views": 35000 },
    { "country_name": "United Kingdom", "country_code": "GB", "visitors": 4500, "views": 12000 }
  ],
  "totals": {
    "visitors": 35000,
    "views": 98000
  },
  "meta": {
    "date_from": "2024-11-01 00:00:00",
    "date_to": "2024-11-30 23:59:59"
  }
}
```

### Chart Format

Optimized for chart libraries. Requires at least one `group_by` field to generate labels.

**Request:**
```json
{
  "sources": ["visitors", "views"],
  "group_by": ["date"],
  "format": "chart"
}
```

**Response:**
```json
{
  "success": true,
  "labels": ["2024-11-01", "2024-11-02", "2024-11-03"],
  "datasets": [
    {
      "label": "Visitors",
      "key": "visitors",
      "data": [1234, 1456, 1389]
    },
    {
      "label": "Views",
      "key": "views",
      "data": [3456, 4012, 3890]
    }
  ],
  "meta": {
    "date_from": "2024-11-01 00:00:00",
    "date_to": "2024-11-03 23:59:59"
  }
}
```

**Chart Format with Comparison:**
```json
{
  "success": true,
  "labels": ["2024-11-01", "2024-11-02", "2024-11-03"],
  "datasets": [
    {
      "label": "Visitors",
      "key": "visitors",
      "data": [1234, 1456, 1389]
    },
    {
      "label": "Visitors (Previous)",
      "key": "visitors_previous",
      "data": [1100, 1250, 1180],
      "comparison": true
    },
    {
      "label": "Views",
      "key": "views",
      "data": [3456, 4012, 3890]
    },
    {
      "label": "Views (Previous)",
      "key": "views_previous",
      "data": [3200, 3600, 3400],
      "comparison": true
    }
  ],
  "meta": {
    "date_from": "2024-11-01 00:00:00",
    "date_to": "2024-11-03 23:59:59",
    "compare_from": "2024-10-29 00:00:00",
    "compare_to": "2024-10-31 23:59:59"
  }
}
```

**Error when no group_by:**
```json
{
  "success": false,
  "error": {
    "code": "chart_requires_group_by",
    "message": "Chart format requires at least one group_by field to generate labels."
  }
}
```

### Export Format

CSV-ready format with headers and row arrays. Best for data exports and reports.

**Request:**
```json
{
  "sources": ["visitors", "views"],
  "group_by": ["country"],
  "format": "export"
}
```

**Response:**
```json
{
  "success": true,
  "headers": ["Country", "Visitors", "Views"],
  "rows": [
    ["United States", 12500, 35000],
    ["United Kingdom", 4500, 12000],
    ["Germany", 3200, 8500]
  ],
  "meta": {
    "date_from": "2024-11-01 00:00:00",
    "date_to": "2024-11-30 23:59:59"
  }
}
```

**Export Format with Comparison:**
```json
{
  "success": true,
  "headers": ["Country", "Visitors", "Visitors (Previous)", "Change %", "Views", "Views (Previous)", "Change %"],
  "rows": [
    ["United States", 12500, 11200, "+11.6%", 35000, 32000, "+9.4%"],
    ["United Kingdom", 4500, 4200, "+7.1%", 12000, 11000, "+9.1%"]
  ],
  "meta": {
    "date_from": "2024-11-01 00:00:00",
    "date_to": "2024-11-30 23:59:59",
    "compare_from": "2024-10-02 00:00:00",
    "compare_to": "2024-10-31 23:59:59"
  }
}
```

### Format in Batch Queries

Each query in a batch can specify its own format:

```json
{
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "queries": [
    {
      "id": "traffic_chart",
      "sources": ["visitors", "views"],
      "group_by": ["date"],
      "format": "chart"
    },
    {
      "id": "top_countries",
      "sources": ["visitors"],
      "group_by": ["country"],
      "format": "flat",
      "per_page": 5
    },
    {
      "id": "countries_table",
      "sources": ["visitors", "views", "sessions"],
      "group_by": ["country"],
      "format": "standard"
    }
  ]
}
```

---

## Request Example

A complete request showcasing all available parameters:

```json
{
  "sources": ["visitors", "views", "sessions", "bounce_rate"],
  "group_by": ["country"],
  "date_from": "2024-11-01 08:00:00",
  "date_to": "2024-11-30 17:30:00",
  "compare": true,
  "filters": {
    "device_type": "desktop",
    "browser": { "in": ["Chrome", "Firefox", "Safari"] },
    "referrer": { "contains": "google" }
  },
  "format": "standard",
  "page": 1,
  "per_page": 10,
  "order_by": "visitors",
  "order": "DESC"
}
```

**Parameters Breakdown:**

| Parameter | Value | Description |
|-----------|-------|-------------|
| `sources` | `["visitors", "views", "sessions", "bounce_rate"]` | Request multiple sources in one query |
| `group_by` | `["country"]` | Group results by country |
| `date_from` | `"2024-11-01 08:00:00"` | Start of date range (8 AM) |
| `date_to` | `"2024-11-30 17:30:00"` | End of date range (5:30 PM) |
| `compare` | `true` | Include comparison with previous period |
| `filters` | `{...}` | Filter by desktop devices, specific browsers, and Google referrers |
| `format` | `"standard"` | Response format (standard, flat, chart, export) |
| `page` | `1` | First page of results |
| `per_page` | `10` | Return 10 results per page |
| `order_by` | `"visitors"` | Sort by visitors source |
| `order` | `"DESC"` | Sort in descending order (highest first) |

---

## Response Structure

### Success Response

Response for the [Request Example](#request-example) above:

```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "country_name": "United States",
        "country_id": 1,
        "country_code": "US",
        "country_continent": "North America",
        "country_continent_code": "NA",
        "visitors": 12500,
        "views": 35000,
        "sessions": 15200,
        "bounce_rate": 42.3,
        "previous": {
          "visitors": 11200,
          "views": 32000,
          "sessions": 13800,
          "bounce_rate": 44.1
        },
        "change": {
          "visitors": 11.6,
          "views": 9.4,
          "sessions": 10.1,
          "bounce_rate": -4.1
        }
      }
    ],
    "totals": {
      "visitors": 35000,
      "views": 98000,
      "sessions": 42000,
      "bounce_rate": 45.2,
      "previous": {
        "visitors": 32000,
        "views": 90000,
        "sessions": 38000,
        "bounce_rate": 47.8
      },
      "change": {
        "visitors": 9.4,
        "views": 8.9,
        "sessions": 10.5,
        "bounce_rate": -5.4
      }
    }
  },
  "meta": {
    "date_from": "2024-11-01 08:00:00",
    "date_to": "2024-11-30 17:30:00",
    "compare_from": "2024-10-02 08:00:00",
    "compare_to": "2024-10-31 17:30:00",
    "total_rows": 145,
    "page": 1,
    "per_page": 10,
    "total_pages": 15,
    "cached": true,
    "cache_ttl": 1800
  }
}
```

### Response Without Group By (Totals Only)

When `group_by` is empty, you get aggregate totals:

```json
{
  "success": true,
  "data": {
    "totals": {
      "visitors": 35000,
      "views": 98000,
      "sessions": 42000,
      "bounce_rate": 45.2,
      "previous": {
        "visitors": 32000,
        "views": 90000,
        "sessions": 38000,
        "bounce_rate": 47.8
      },
      "change": {
        "visitors": 9.4,
        "views": 8.9,
        "sessions": 10.5,
        "bounce_rate": -5.4
      }
    }
  },
  "meta": { ... }
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "invalid_source",
    "message": "Unknown source: 'invalid_name'. Valid sources: visitors, views, sessions, ..."
  }
}
```

---

## Error Codes

| Code | HTTP | Description |
|------|------|-------------|
| `invalid_source` | 400 | Source name not recognized |
| `invalid_group_by` | 400 | Group by option not recognized |
| `invalid_filter` | 400 | Filter key or operator invalid |
| `invalid_date_range` | 400 | Date format or range invalid |
| `unauthorized` | 401 | User not logged in |
| `forbidden` | 403 | User lacks `wps_read_capability` capability |
| `rate_limited` | 429 | Too many requests |
| `server_error` | 500 | Internal server error |

---

## Batch Queries

The API supports batch requests to fetch multiple datasets in a single HTTP call. This is useful for initial dashboard loads where you need data for multiple widgets.

### Global Parameters

Batch queries support global `date_from`, `date_to`, `filters`, and `compare` parameters that apply to all child queries by default. This reduces repetition and makes batch requests more concise.

#### Supported Global Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `date_from` | string | Default start date for all queries |
| `date_to` | string | Default end date for all queries |
| `filters` | object | Default filters for all queries |
| `compare` | boolean | Default comparison flag for all queries |

#### Inheritance Behavior

- **Filters**: Child filters **merge** with global filters. Child values override matching keys, and keys not specified in child are inherited from global.
- **Dates**: If child specifies dates, it must provide both `date_from` and `date_to` (complete override). If neither specified, inherit from global.
- **Compare**: Child compare value overrides global compare. If not specified in child, inherits from global (defaults to `false`).

#### Example: Filter Merging

```json
{
  "filters": { "country": "US", "device_type": "desktop" },
  "queries": [
    {
      "id": "mobile_users",
      "sources": ["visitors"],
      "group_by": ["country"],
      "format": "flat",
      "filters": { "device_type": "mobile" }
    }
  ]
}
```

**Resolved filters for `mobile_users`:** `{ "country": "US", "device_type": "mobile" }`

The child's `device_type: "mobile"` overrides global's `device_type: "desktop"`, while `country: "US"` is inherited.

### Batch Request Format

Send an array of queries with optional global parameters:

```json
{
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "compare": true,
  "filters": {
    "country": "US"
  },
  "queries": [
    {
      "id": "traffic_trends",
      "sources": ["visitors", "views"],
      "group_by": ["date"],
      "format": "chart"
    },
    {
      "id": "top_countries",
      "sources": ["visitors"],
      "group_by": ["country"],
      "format": "flat",
      "per_page": 10
    },
    {
      "id": "mobile_stats",
      "sources": ["visitors", "sessions"],
      "group_by": [],
      "format": "standard",
      "filters": { "device_type": "mobile" }
    },
    {
      "id": "yesterday",
      "sources": ["visitors"],
      "group_by": [],
      "format": "standard",
      "date_from": "2024-10-31",
      "date_to": "2024-10-31"
    }
  ]
}
```

In this example:
- `traffic_trends` and `top_countries` inherit global dates, filters, and `compare: true`
- `mobile_stats` inherits global dates and compare, merges filters to `{ "country": "US", "device_type": "mobile" }`
- `yesterday` overrides dates, inherits global filters and compare

### Batch Response Format

Each query result uses its specified format structure:

```json
{
  "success": true,
  "items": {
    "traffic_trends": {
      "success": true,
      "labels": ["2024-11-01", "2024-11-02", "..."],
      "datasets": [
        { "label": "Visitors", "key": "visitors", "data": [1234, 1456, "..."] },
        { "label": "Views", "key": "views", "data": [3456, 4012, "..."] }
      ],
      "meta": { "date_from": "2024-11-01 00:00:00", "date_to": "2024-11-30 23:59:59" }
    },
    "top_countries": {
      "success": true,
      "items": [
        { "country_name": "United States", "country_code": "US", "visitors": 12500 },
        { "country_name": "United Kingdom", "country_code": "GB", "visitors": 4500 }
      ],
      "totals": { "visitors": 35000 },
      "meta": { "date_from": "2024-11-01 00:00:00", "date_to": "2024-11-30 23:59:59" }
    },
    "mobile_stats": {
      "success": true,
      "data": {
        "totals": { "visitors": 8500, "sessions": 10200 }
      },
      "meta": { "date_from": "2024-11-01 00:00:00", "date_to": "2024-11-30 23:59:59" }
    },
    "yesterday": {
      "success": true,
      "data": {
        "totals": { "visitors": 1200 }
      },
      "meta": { "date_from": "2024-10-31 00:00:00", "date_to": "2024-10-31 23:59:59" }
    }
  },
  "errors": {}
}
```

### Example: Override Global Compare

You can override the global `compare` setting for individual queries:

```json
{
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "compare": true,
  "queries": [
    {
      "id": "with_comparison",
      "sources": ["visitors"],
      "group_by": [],
      "format": "standard"
    },
    {
      "id": "without_comparison",
      "sources": ["visitors"],
      "group_by": [],
      "format": "standard",
      "compare": false
    }
  ]
}
```

In this example:
- `with_comparison` inherits global `compare: true` and will include comparison data
- `without_comparison` explicitly sets `compare: false` to override global and will NOT include comparison data

### Partial Failure Handling

If some queries succeed and others fail, the response includes both:

```json
{
  "success": true,
  "data": {
    "traffic_trends": { "rows": [...] },
    "top_countries": { "rows": [...] }
  },
  "errors": {
    "invalid_query": {
      "code": "invalid_source",
      "message": "Unknown source: 'invalid_source_name'"
    }
  },
  "meta": {
    "query_count": 3,
    "success_count": 2,
    "error_count": 1
  }
}
```

### Batch Limits

| Limit | Value | Description |
|-------|-------|-------------|
| Max queries per batch | 20 | Maximum number of queries in a single batch |
| Max total rows | 1000 | Combined row limit across all queries |
| Timeout | 30s | Maximum execution time for batch |

### Frontend Batch Usage

```typescript
async function fetchDashboardBatch() {
  const formData = new FormData();
  formData.append('action', 'wp_statistics_analytics');
  formData.append('wps_nonce', wpStatisticsGlobal.rest_api_nonce);
  formData.append('query', JSON.stringify({
    // Global parameters apply to all queries
    date_from: '2024-11-01',
    date_to: '2024-11-30',
    compare: true,
    filters: { country: 'US' },
    queries: [
      { id: 'trends', sources: ['visitors', 'views'], group_by: ['date'], format: 'chart' },
      { id: 'countries', sources: ['visitors'], group_by: ['country'], format: 'flat', per_page: 10 },
      { id: 'overview', sources: ['visitors', 'views', 'sessions', 'bounce_rate'], group_by: [], format: 'standard' },
      // Override filters for this query (merges with global)
      { id: 'mobile', sources: ['sessions'], group_by: ['device_type'], format: 'flat', filters: { device_type: 'mobile' } }
    ]
  }));

  const response = await fetch(wpStatisticsGlobal.ajax_url, {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();

  // Access individual results
  const { trends, countries, overview, mobile } = result.data;

  // Access resolved parameters per query
  const mobileFilters = result.meta.queries.mobile.filters;
  // { country: 'US', device_type: 'mobile' }

  return result;
}
```

---

## Request/Response Examples

### 1. Line Chart - Time Series

**Request:**
```json
{
  "sources": ["visitors", "views"],
  "group_by": ["date"],
  "columns": ["date", "visitors", "views"],
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "compare": true,
  "format": "chart"
}
```

**Response:**
```json
{
  "success": true,
  "labels": ["2024-11-01", "2024-11-02", "2024-11-03", "..."],
  "datasets": [
    {
      "label": "Visitors",
      "key": "visitors",
      "data": [1234, 1456, 1389, "..."]
    },
    {
      "label": "Visitors (Previous)",
      "key": "visitors_previous",
      "data": [1100, 1250, 1180, "..."],
      "comparison": true
    },
    {
      "label": "Views",
      "key": "views",
      "data": [3456, 4012, 3890, "..."]
    },
    {
      "label": "Views (Previous)",
      "key": "views_previous",
      "data": [3200, 3600, 3400, "..."],
      "comparison": true
    }
  ],
  "meta": {
    "date_from": "2024-11-01 00:00:00",
    "date_to": "2024-11-30 23:59:59",
    "compare_from": "2024-10-02 00:00:00",
    "compare_to": "2024-10-31 23:59:59"
  }
}
```

### 2. Horizontal Bar Chart - Top Countries

**Request:**
```json
{
  "sources": ["visitors", "sessions"],
  "group_by": ["country"],
  "columns": ["country_name", "country_code", "visitors"],
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "compare": true,
  "format": "flat",
  "per_page": 10,
  "order_by": "visitors",
  "order": "DESC"
}
```

**Response:**
```json
{
  "success": true,
  "items": [
    {
      "country_name": "United States",
      "country_code": "US",
      "visitors": 12500,
      "percentage": 35.7,
      "previous": { "visitors": 11200 },
      "change": { "visitors": 11.6 }
    },
    {
      "country_name": "United Kingdom",
      "country_code": "GB",
      "visitors": 4500,
      "percentage": 12.9,
      "previous": { "visitors": 4200 },
      "change": { "visitors": 7.1 }
    }
  ],
  "totals": {
    "visitors": 35000
  },
  "meta": {
    "date_from": "2024-11-01 00:00:00",
    "date_to": "2024-11-30 23:59:59",
    "compare_from": "2024-10-02 00:00:00",
    "compare_to": "2024-10-31 23:59:59"
  }
}
```

### 3. Pie/Donut Chart - Device Distribution

**Request:**
```json
{
  "sources": ["sessions"],
  "group_by": ["device_type"],
  "columns": ["device_type_name", "sessions"],
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "format": "flat"
}
```

**Response:**
```json
{
  "success": true,
  "items": [
    { "device_type_name": "desktop", "sessions": 25200, "percentage": 60.0 },
    { "device_type_name": "mobile", "sessions": 14280, "percentage": 34.0 },
    { "device_type_name": "tablet", "sessions": 2520, "percentage": 6.0 }
  ],
  "totals": {
    "sessions": 42000
  },
  "meta": {
    "date_from": "2024-11-01 00:00:00",
    "date_to": "2024-11-30 23:59:59"
  }
}
```

### 4. Data Table - Top Pages with Pagination

**Request:**
```json
{
  "sources": ["views", "visitors", "avg_time_on_page", "bounce_rate"],
  "group_by": ["page"],
  "columns": ["page_uri", "page_title", "page_type", "views", "visitors", "bounce_rate"],
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "compare": true,
  "format": "standard",
  "page": 1,
  "per_page": 10,
  "order_by": "views",
  "order": "DESC"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "page_uri": "/getting-started/",
        "page_title": "Getting Started Guide",
        "page_type": "page",
        "views": 5420,
        "visitors": 3200,
        "bounce_rate": 32.5,
        "previous": {
          "views": 4800,
          "visitors": 2900,
          "bounce_rate": 35.2
        },
        "change": {
          "views": 12.9,
          "visitors": 10.3,
          "bounce_rate": -7.7
        }
      }
    ],
    "totals": {
      "views": 98000,
      "visitors": 35000,
      "bounce_rate": 42.5
    }
  },
  "meta": {
    "date_from": "2024-11-01",
    "date_to": "2024-11-30",
    "total_rows": 1250,
    "page": 1,
    "per_page": 10,
    "total_pages": 125
  }
}
```

### 5. Metrics Cards - KPI Summary (No Group By)

**Request:**
```json
{
  "sources": [
    "visitors",
    "views",
    "sessions",
    "bounce_rate",
    "avg_session_duration",
    "pages_per_session"
  ],
  "group_by": [],
  "columns": ["visitors", "views", "sessions", "bounce_rate"],
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "compare": true,
  "format": "standard"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totals": {
      "visitors": {
        "value": 35000,
        "formatted": "35K",
        "previous": 32000,
        "change": 9.4,
        "trend": "up"
      },
      "views": {
        "value": 98000,
        "formatted": "98K",
        "previous": 90000,
        "change": 8.9,
        "trend": "up"
      },
      "sessions": {
        "value": 42000,
        "formatted": "42K",
        "previous": 38000,
        "change": 10.5,
        "trend": "up"
      },
      "bounce_rate": {
        "value": 45.2,
        "formatted": "45.2%",
        "previous": 47.8,
        "change": -5.4,
        "trend": "down"
      }
    }
  },
  "meta": {
    "date_from": "2024-11-01",
    "date_to": "2024-11-30",
    "compare_from": "2024-10-02",
    "compare_to": "2024-10-31"
  }
}
```

### 6. World Map - Geographic Distribution

**Request:**
```json
{
  "sources": ["visitors"],
  "group_by": ["country"],
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "format": "flat",
  "per_page": 250
}
```

**Response:**
```json
{
  "success": true,
  "items": [
    { "country_name": "United States", "country_id": 1, "country_code": "US", "country_continent": "North America", "country_continent_code": "NA", "flag": "us", "lat": 37.0902, "lng": -95.7129, "visitors": 12500 },
    { "country_name": "United Kingdom", "country_id": 2, "country_code": "GB", "country_continent": "Europe", "country_continent_code": "EU", "flag": "gb", "lat": 55.3781, "lng": -3.4360, "visitors": 4500 },
    { "country_name": "Germany", "country_id": 3, "country_code": "DE", "country_continent": "Europe", "country_continent_code": "EU", "flag": "de", "lat": 51.1657, "lng": 10.4515, "visitors": 3200 }
  ],
  "totals": {
    "visitors": 35000
  },
  "meta": {
    "date_from": "2024-11-01 00:00:00",
    "date_to": "2024-11-30 23:59:59"
  }
}
```

### 7. Online Visitors (Real-Time)

**Request:**
```json
{
  "sources": ["online_visitors"],
  "group_by": ["visitor"],
  "format": "flat",
  "per_page": 50
}
```

**Response:**
```json
{
  "success": true,
  "items": [
    {
      "visitor_id": 12345,
      "visitor_hash": "abc123",
      "user_id": 5,
      "user_name": "John Doe",
      "current_page": "/pricing/",
      "page_title": "Pricing Plans",
      "last_activity": "2024-11-30 14:32:10",
      "seconds_ago": 15,
      "ip_address": "192.168.1.xxx",
      "country_name": "United States",
      "country_code": "US",
      "browser_name": "Chrome",
      "os_name": "Windows",
      "device_type_name": "desktop"
    }
  ],
  "totals": {
    "online_visitors": 127
  },
  "meta": {
    "cache_ttl": 60
  }
}
```

### 8. Traffic Sources (Referrers)

**Request:**
```json
{
  "sources": ["visitors", "sessions", "bounce_rate"],
  "group_by": ["referrer"],
  "columns": ["referrer_domain", "referrer_channel", "visitors", "sessions", "bounce_rate"],
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "compare": true,
  "format": "flat",
  "per_page": 10
}
```

**Response:**
```json
{
  "success": true,
  "items": [
    {
      "referrer_domain": "google.com",
      "referrer_channel": "search",
      "visitors": 8500,
      "sessions": 10200,
      "bounce_rate": 42.3,
      "previous": { "visitors": 7800, "sessions": 9400, "bounce_rate": 44.1 },
      "change": { "visitors": 9.0, "sessions": 8.5, "bounce_rate": -4.1 }
    },
    {
      "referrer_domain": "(direct)",
      "referrer_channel": "direct",
      "visitors": 6200,
      "sessions": 7500,
      "bounce_rate": 35.8,
      "previous": { "visitors": 5800, "sessions": 7000, "bounce_rate": 37.2 },
      "change": { "visitors": 6.9, "sessions": 7.1, "bounce_rate": -3.8 }
    }
  ],
  "totals": {
    "visitors": 35000,
    "sessions": 42000,
    "bounce_rate": 45.2
  },
  "meta": {
    "date_from": "2024-11-01 00:00:00",
    "date_to": "2024-11-30 23:59:59",
    "compare_from": "2024-10-02 00:00:00",
    "compare_to": "2024-10-31 23:59:59"
  }
}
```

---

## Cache Strategy

| Query Type | TTL | Description |
|------------|-----|-------------|
| Real-time (online visitors) | 60s | Live data |
| Current day | 5min | Today's data changes frequently |
| Last 7 days | 15min | Recent data |
| Last 30 days | 30min | Standard dashboard queries |
| Historical (30+ days) | 2hr | Stable historical data |

---

## Architecture

### [Backend Architecture](../architecture/analytics-query-backend.md)

How the backend processes queries and generates SQL.

- MetricRegistry - Available metrics and SQL expressions
- DimensionRegistry - Dimensions, JOINs, and grouping
- FilterBuilder - Filter to WHERE clause conversion
- QueryBuilder - SQL query assembly

### [Frontend Integration](../architecture/analytics-query-frontend.md)

React patterns for consuming the API.

- TypeScript interfaces
- `useAnalytics` hook
- Batch queries for dashboard loads
- Component examples

---

## Related Documentation

- [Admin AJAX API](../api/admin-ajax-api.md) - Overview of Admin AJAX endpoints

---

*Last Updated: 2025-12-15*
