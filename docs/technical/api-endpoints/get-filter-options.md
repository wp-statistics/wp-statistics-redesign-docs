---
title: "Get Filter Options"
type: "technical"
category: "api"
status: "Done"
---

# Get Filter Options

Retrieves options for filter dropdowns (countries, browsers, etc.) used across all dashboard pages in WP Statistics v15.

---

## Endpoint

| Property | Value |
|----------|-------|
| Action | `wp_statistics_get_filter_options` |
| Method | POST |
| Auth | Required |

---

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `filter` | string | Yes | Filter name (e.g., `country`, `browser`, `os`) |
| `search` | string | No | Search term for searchable filters |
| `limit` | int | No | Maximum results (default: 20) |

---

## Response

```json
{
  "success": true,
  "data": {
    "success": true,
    "options": [
      {"value": "US", "label": "United States"},
      {"value": "GB", "label": "United Kingdom"}
    ]
  }
}
```

---

## Available Filters

See [Analytics Query API - Available Filters](./analytics-query-api.md#available-filters) for the complete list of available filters and their properties.

---

## Related Documentation

- [Admin AJAX API](../api/admin-ajax-api.md) - Overview of Admin AJAX endpoints
- [Analytics Query API](./analytics-query-api.md) - For complex data queries

---

*Last Updated: 2025-12-10*
