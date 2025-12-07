---
title: "Analytics Query API"
type: "technical"
category: "api"
status: "Done"
sidebar_position: 2
---

# Analytics Query API

A flexible, secure analytics query system for the WP Statistics v15 React dashboard. This API uses a **metrics + dimensions** approach - you specify what to measure and how to group it, and the backend generates all SQL securely.

## Quick Navigation

- [Endpoint](#endpoint)
- [Authentication](#authentication)
- [Request Parameters](#request-parameters)
  - [Available Metrics](#available-metrics)
  - [Available Dimensions](#available-dimensions)
  - [Available Filters](#available-filters)
- [Request Example](#request-example)
- [Response Structure](#response-structure)
- [Error Codes](#error-codes)
- [Batch Queries](#batch-queries)

## Examples

- [Line Chart](#1-line-chart---time-series)
- [Horizontal Bar](#2-horizontal-bar-chart---top-countries)
- [Pie/Donut Chart](#3-piedonut-chart---device-distribution)
- [Data Table](#4-data-table---top-pages-with-pagination)
- [Metrics Cards](#5-metrics-cards---kpi-summary-no-dimensions)
- [World Map](#6-world-map---geographic-distribution)
- [Online Visitors](#7-online-visitors-real-time)
- [Referrers](#8-traffic-sources-referrers)

---

## Endpoint

### Admin-Ajax (Recommended - avoids adblockers)

```
POST /wp-admin/admin-ajax.php
Content-Type: application/x-www-form-urlencoded
```

**Parameters:**
- `action`: `wp_statistics_analytics`
- `wps_nonce`: WordPress nonce for security
- `query`: JSON-encoded query object (single query or array for batch)

### REST API (Alternative)

```
POST /wp-json/wp-statistics/v2/analytics
Content-Type: application/json
X-WP-Nonce: {nonce}
```

## Authentication

- User must be logged in to WordPress admin
- User must have `wps_read_capability` capability
- Valid nonce required for CSRF protection

---

## Request Parameters

### Required Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `metrics` | array | List of metric names to calculate. At least one required. |
| `dimensions` | array | List of dimension names for grouping. Can be empty for totals only. |

### Optional Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `date_from` | string | 30 days ago | Start date/time. Formats: `YYYY-MM-DD`, `YYYY-MM-DD HH:mm:ss`, or `YYYY-MM-DDTHH:mm:ss`. Defaults to `00:00:00` if time omitted. |
| `date_to` | string | today | End date/time. Formats: `YYYY-MM-DD`, `YYYY-MM-DD HH:mm:ss`, or `YYYY-MM-DDTHH:mm:ss`. Defaults to `23:59:59` if time omitted. |
| `compare` | boolean | `false` | Include previous period comparison |
| `filters` | object | `{}` | Filter criteria (see Filters section) |
| `page` | integer | `1` | Page number for pagination |
| `per_page` | integer | `10` | Results per page (max: 100) |
| `order_by` | string | first metric | Column to sort by |
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
  "metrics": ["visitors", "views"],
  "dimensions": ["hour"],
  "date_from": "2024-11-01 09:00:00",
  "date_to": "2024-11-01 17:00:00"
}
```

---

## Available Metrics

| Metric | Description | Data Type |
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

## Available Dimensions

| Dimension | Description | Extra Fields in Response |
|-----------|-------------|-------------------------|
| `date` | Daily breakdown | - |
| `week` | Weekly breakdown | `week_start`, `week_end` |
| `month` | Monthly breakdown | `month_name` |
| `hour` | Hourly breakdown | `hour_label` |
| `country` | By country | `country_code`, `flag` |
| `city` | By city | `country_code`, `region` |
| `browser` | By browser | `browser_version` |
| `os` | By operating system | `os_version` |
| `device_type` | By device category | - |
| `referrer` | By referrer source | `referrer_type` (search/social/direct/other) |
| `page` | By page URI | `page_title`, `post_id`, `post_type` |
| `post_type` | By content type | - |
| `author` | By author | `author_name`, `author_id` |
| `search_engine` | By search engine | - |
| `search_query` | By search term | - |
| `visitor` | By individual visitor | Full visitor details |

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

## Request Example

A complete request showcasing all available parameters:

```json
{
  "metrics": ["visitors", "views", "sessions", "bounce_rate"],
  "dimensions": ["country"],
  "date_from": "2024-11-01 08:00:00",
  "date_to": "2024-11-30 17:30:00",
  "compare": true,
  "filters": {
    "device_type": "desktop",
    "browser": { "in": ["Chrome", "Firefox", "Safari"] },
    "referrer": { "contains": "google" }
  },
  "page": 1,
  "per_page": 10,
  "order_by": "visitors",
  "order": "DESC"
}
```

**Parameters Breakdown:**

| Parameter | Value | Description |
|-----------|-------|-------------|
| `metrics` | `["visitors", "views", "sessions", "bounce_rate"]` | Request multiple metrics in one query |
| `dimensions` | `["country"]` | Group results by country |
| `date_from` | `"2024-11-01 08:00:00"` | Start of date range (8 AM) |
| `date_to` | `"2024-11-30 17:30:00"` | End of date range (5:30 PM) |
| `compare` | `true` | Include comparison with previous period |
| `filters` | `{...}` | Filter by desktop devices, specific browsers, and Google referrers |
| `page` | `1` | First page of results |
| `per_page` | `10` | Return 10 results per page |
| `order_by` | `"visitors"` | Sort by visitors metric |
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
        "country": "United States",
        "country_code": "US",
        "flag": "us",
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

### Response Without Dimensions (Totals Only)

When `dimensions` is empty, you get aggregate totals:

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
    "code": "invalid_metric",
    "message": "Unknown metric: 'invalid_name'. Valid metrics: visitors, views, sessions, ..."
  }
}
```

---

## Error Codes

| Code | HTTP | Description |
|------|------|-------------|
| `invalid_metric` | 400 | Metric name not recognized |
| `invalid_dimension` | 400 | Dimension name not recognized |
| `invalid_filter` | 400 | Filter key or operator invalid |
| `invalid_date_range` | 400 | Date format or range invalid |
| `unauthorized` | 401 | User not logged in |
| `forbidden` | 403 | User lacks `wps_read_capability` capability |
| `rate_limited` | 429 | Too many requests |
| `server_error` | 500 | Internal server error |

---

## Batch Queries

The API supports batch requests to fetch multiple datasets in a single HTTP call. This is useful for initial dashboard loads where you need data for multiple widgets.

### Batch Request Format

Send an array of queries instead of a single query object:

```json
{
  "queries": [
    {
      "id": "traffic_trends",
      "metrics": ["visitors", "views"],
      "dimensions": ["date"],
      "compare": true
    },
    {
      "id": "top_countries",
      "metrics": ["visitors"],
      "dimensions": ["country"],
      "per_page": 10
    },
    {
      "id": "overview",
      "metrics": ["visitors", "views", "sessions", "bounce_rate"],
      "dimensions": [],
      "compare": true
    },
    {
      "id": "devices",
      "metrics": ["sessions"],
      "dimensions": ["device_type"]
    }
  ]
}
```

### Batch Response Format

```json
{
  "success": true,
  "data": {
    "traffic_trends": {
      "rows": [...],
      "totals": {...}
    },
    "top_countries": {
      "rows": [...],
      "totals": {...}
    },
    "overview": {
      "totals": {...}
    },
    "devices": {
      "rows": [...],
      "totals": {...}
    }
  },
  "meta": {
    "query_count": 4,
    "total_time": 0.342,
    "date_from": "2024-11-01",
    "date_to": "2024-11-30"
  },
  "errors": {}
}
```

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
      "code": "invalid_metric",
      "message": "Unknown metric: 'invalid_metric_name'"
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
    queries: [
      { id: 'trends', metrics: ['visitors', 'views'], dimensions: ['date'], compare: true },
      { id: 'countries', metrics: ['visitors'], dimensions: ['country'], per_page: 10 },
      { id: 'overview', metrics: ['visitors', 'views', 'sessions', 'bounce_rate'], dimensions: [], compare: true },
      { id: 'devices', metrics: ['sessions'], dimensions: ['device_type'] }
    ]
  }));

  const response = await fetch(wpStatisticsGlobal.ajax_url, {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();

  // Access individual results
  const { traffic_trends, top_countries, overview, devices } = result.data;

  return result;
}
```

---

## Request/Response Examples

### 1. Line Chart - Time Series

**Request:**
```json
{
  "metrics": ["visitors", "views"],
  "dimensions": ["date"],
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "compare": true
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "date": "2024-11-01",
        "visitors": 1234,
        "views": 3456,
        "previous": { "visitors": 1100, "views": 3200 },
        "change": { "visitors": 12.2, "views": 8.0 }
      },
      {
        "date": "2024-11-02",
        "visitors": 1456,
        "views": 4012,
        "previous": { "visitors": 1250, "views": 3600 },
        "change": { "visitors": 16.5, "views": 11.4 }
      }
    ],
    "totals": {
      "visitors": 35000,
      "views": 98000,
      "previous": { "visitors": 32000, "views": 90000 },
      "change": { "visitors": 9.4, "views": 8.9 }
    }
  },
  "meta": {
    "date_from": "2024-11-01",
    "date_to": "2024-11-30",
    "compare_from": "2024-10-02",
    "compare_to": "2024-10-31",
    "total_rows": 30,
    "cached": true
  }
}
```

### 2. Horizontal Bar Chart - Top Countries

**Request:**
```json
{
  "metrics": ["visitors", "sessions"],
  "dimensions": ["country"],
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "compare": true,
  "per_page": 10,
  "order_by": "visitors",
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
        "country": "United States",
        "country_code": "US",
        "flag": "us",
        "visitors": 12500,
        "sessions": 15200,
        "percentage": 35.7,
        "previous": { "visitors": 11200, "sessions": 13800 },
        "change": { "visitors": 11.6, "sessions": 10.1 }
      },
      {
        "country": "United Kingdom",
        "country_code": "GB",
        "flag": "gb",
        "visitors": 4500,
        "sessions": 5100,
        "percentage": 12.9,
        "previous": { "visitors": 4200, "sessions": 4800 },
        "change": { "visitors": 7.1, "sessions": 6.3 }
      }
    ],
    "totals": {
      "visitors": 35000,
      "sessions": 42000
    }
  },
  "meta": {
    "date_from": "2024-11-01",
    "date_to": "2024-11-30",
    "total_rows": 145,
    "page": 1,
    "per_page": 10,
    "total_pages": 15
  }
}
```

### 3. Pie/Donut Chart - Device Distribution

**Request:**
```json
{
  "metrics": ["sessions"],
  "dimensions": ["device_type"],
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
      { "device_type": "desktop", "sessions": 25200, "percentage": 60.0 },
      { "device_type": "mobile", "sessions": 14280, "percentage": 34.0 },
      { "device_type": "tablet", "sessions": 2520, "percentage": 6.0 }
    ],
    "totals": {
      "sessions": 42000
    }
  },
  "meta": {
    "date_from": "2024-11-01",
    "date_to": "2024-11-30",
    "total_rows": 3
  }
}
```

### 4. Data Table - Top Pages with Pagination

**Request:**
```json
{
  "metrics": ["views", "visitors", "avg_time_on_page", "bounce_rate"],
  "dimensions": ["page"],
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "compare": true,
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
        "page": "/getting-started/",
        "page_title": "Getting Started Guide",
        "post_id": 123,
        "post_type": "page",
        "views": 5420,
        "visitors": 3200,
        "avg_time_on_page": 245,
        "bounce_rate": 32.5,
        "previous": {
          "views": 4800,
          "visitors": 2900,
          "avg_time_on_page": 230,
          "bounce_rate": 35.2
        },
        "change": {
          "views": 12.9,
          "visitors": 10.3,
          "avg_time_on_page": 6.5,
          "bounce_rate": -7.7
        }
      }
    ],
    "totals": {
      "views": 98000,
      "visitors": 35000,
      "avg_time_on_page": 185,
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

### 5. Metrics Cards - KPI Summary (No Dimensions)

**Request:**
```json
{
  "metrics": [
    "visitors",
    "views",
    "sessions",
    "bounce_rate",
    "avg_session_duration",
    "pages_per_session"
  ],
  "dimensions": [],
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "compare": true
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
      },
      "avg_session_duration": {
        "value": 185,
        "formatted": "3m 5s",
        "previous": 172,
        "change": 7.6,
        "trend": "up"
      },
      "pages_per_session": {
        "value": 2.3,
        "formatted": "2.3",
        "previous": 2.1,
        "change": 9.5,
        "trend": "up"
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
  "metrics": ["visitors"],
  "dimensions": ["country"],
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "per_page": 250
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "rows": [
      { "country": "United States", "country_code": "US", "flag": "us", "lat": 37.0902, "lng": -95.7129, "visitors": 12500 },
      { "country": "United Kingdom", "country_code": "GB", "flag": "gb", "lat": 55.3781, "lng": -3.4360, "visitors": 4500 },
      { "country": "Germany", "country_code": "DE", "flag": "de", "lat": 51.1657, "lng": 10.4515, "visitors": 3200 }
    ],
    "totals": {
      "visitors": 35000
    },
    "scale": {
      "min": 0,
      "max": 12500
    }
  },
  "meta": {
    "date_from": "2024-11-01",
    "date_to": "2024-11-30",
    "total_rows": 145
  }
}
```

### 7. Online Visitors (Real-Time)

**Request:**
```json
{
  "metrics": ["online_visitors"],
  "dimensions": ["visitor"],
  "per_page": 50
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "rows": [
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
        "country": "United States",
        "country_code": "US",
        "browser": "Chrome",
        "os": "Windows",
        "device_type": "desktop"
      }
    ],
    "totals": {
      "online_visitors": 127
    }
  },
  "meta": {
    "total_rows": 127,
    "cache_ttl": 60
  }
}
```

### 8. Traffic Sources (Referrers)

**Request:**
```json
{
  "metrics": ["visitors", "sessions", "bounce_rate"],
  "dimensions": ["referrer"],
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "compare": true,
  "per_page": 10
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "referrer": "google.com",
        "referrer_type": "search",
        "visitors": 8500,
        "sessions": 10200,
        "bounce_rate": 42.3,
        "previous": { "visitors": 7800, "sessions": 9400, "bounce_rate": 44.1 },
        "change": { "visitors": 9.0, "sessions": 8.5, "bounce_rate": -4.1 }
      },
      {
        "referrer": "(direct)",
        "referrer_type": "direct",
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
    }
  },
  "meta": {
    "date_from": "2024-11-01",
    "date_to": "2024-11-30",
    "total_rows": 89
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

## Related Documentation

- [Analytics Query Backend Architecture](../architecture/analytics-query-backend.md)
- [Analytics Query Frontend Integration](../architecture/analytics-query-frontend.md)

---

*Last Updated: 2025-12-07*
