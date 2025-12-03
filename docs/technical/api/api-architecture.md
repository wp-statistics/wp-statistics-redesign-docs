---
title: "API Overview"
type: "technical"
category: "api"
status: "Done"
sidebar_position: 1
---

# API Overview

WP Statistics v15 provides a flexible API for fetching analytics data. The API uses **Admin-Ajax** (recommended) or **REST API** endpoints.

## Why Admin-Ajax?

- **Avoids adblockers** - REST API endpoints are often blocked
- **WordPress-native** - Uses built-in WordPress security (nonces, capabilities)
- **Same functionality** - Both endpoints support identical features

## Core Concepts

### Metrics + Dimensions Approach

Instead of predefined widgets, the API uses a semantic query system:

- **Metrics**: What to measure (`visitors`, `views`, `sessions`, `bounce_rate`)
- **Dimensions**: How to group (`date`, `country`, `browser`, `page`)

```json
{
  "metrics": ["visitors", "views"],
  "dimensions": ["country"],
  "compare": true
}
```

The backend generates optimized SQL queries - no SQL knowledge required.

### Security

- All metric/dimension names are whitelisted
- No raw SQL accepted from frontend
- User must have `wps_read_capability` capability
- All values sanitized via prepared statements

---

## Available APIs

### [Analytics Query API](./analytics-query-api.md)

The main API for fetching analytics data with metrics and dimensions.

**Features:**
- Flexible metrics + dimensions queries
- Date range filtering with comparison periods
- Advanced filters with operators
- Pagination and sorting
- Batch queries for dashboard loads
- Intelligent caching

**Example:**
```json
{
  "metrics": ["visitors", "views", "bounce_rate"],
  "dimensions": ["date"],
  "date_from": "2024-11-01",
  "date_to": "2024-11-30",
  "compare": true
}
```

---

## Architecture

### [Backend Architecture](../architecture/analytics-query-backend.md)

How the backend processes queries and generates SQL.

**Key Components:**
- `MetricRegistry` - Defines available metrics and SQL expressions
- `DimensionRegistry` - Defines dimensions, JOINs, and grouping
- `FilterBuilder` - Converts filters to WHERE clauses
- `QueryBuilder` - Assembles complete SQL queries
- `ComparisonHandler` - Calculates previous period data

### [Frontend Integration](../architecture/analytics-query-frontend.md)

React patterns for consuming the API.

**Key Patterns:**
- TypeScript interfaces for type safety
- `useAnalytics` hook for data fetching
- Batch queries for initial dashboard load
- Error handling and loading states
- Component examples for all chart types

---

## Quick Start

### Fetch Data (TypeScript)

```typescript
async function queryAnalytics(query) {
  const formData = new FormData();
  formData.append('action', 'wp_statistics_analytics');
  formData.append('wps_nonce', wpStatisticsGlobal.rest_api_nonce);
  formData.append('query', JSON.stringify(query));

  const response = await fetch(wpStatisticsGlobal.ajax_url, {
    method: 'POST',
    body: formData,
  });

  return response.json();
}

// Get visitors by country
const data = await queryAnalytics({
  metrics: ['visitors'],
  dimensions: ['country'],
  per_page: 10
});
```

### Response Format

```json
{
  "success": true,
  "data": {
    "rows": [
      { "country": "United States", "country_code": "US", "visitors": 12500 },
      { "country": "United Kingdom", "country_code": "GB", "visitors": 4500 }
    ],
    "totals": { "visitors": 35000 }
  },
  "meta": {
    "date_from": "2024-11-01",
    "date_to": "2024-11-30",
    "total_rows": 145,
    "cached": true
  }
}
```

---

## Caching

| Query Type | TTL | Description |
|------------|-----|-------------|
| Real-time (online visitors) | 60s | Live data |
| Current day | 5min | Today's data |
| Last 7 days | 15min | Recent data |
| Last 30 days | 30min | Standard queries |
| Historical (30+ days) | 2hr | Stable data |

---

*Last Updated: 2024-12-03*
