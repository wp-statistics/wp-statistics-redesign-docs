---
title: "Admin AJAX API"
type: "technical"
category: "api"
status: "Done"
sidebar_position: 2
---

# Admin AJAX API

WP Statistics v15 uses WordPress Admin AJAX for dashboard data fetching. This approach avoids adblocker interference that commonly blocks REST API endpoints.

---

## Base URL

```
POST /wp-admin/admin-ajax.php
```

All AJAX actions are prefixed with `wp_statistics_` and registered through the `Ajax::register()` helper.

---

## Authentication

Most endpoints require:
- Valid WordPress nonce (`wp_statistics_dashboard_nonce`)
- User capability: `manage_options` or WP Statistics access permissions (`wps_read_capability`)

### Request Headers

```
X-WP-Nonce: {nonce_value}
Content-Type: application/x-www-form-urlencoded
```

---

## Available Endpoints

| Endpoint | Description |
|----------|-------------|
| [Get Filter Options](../api-endpoints/get-filter-options.md) | Filter options for dropdowns (countries, browsers, etc.) |
| [Analytics Query API](../api-endpoints/analytics-query-api.md) | Flexible metrics + dimensions based query API |

---

## Error Handling

All endpoints return standardized error responses:

```json
{
  "success": false,
  "data": {
    "code": "error_code",
    "message": "Human-readable error message"
  }
}
```

### Common Error Codes

| Code | HTTP | Description |
|------|------|-------------|
| `bad_nonce` | 403 | Security check failed - invalid or expired nonce |
| `forbidden` | 403 | User lacks required permissions |
| `missing_filter` | 400 | Required filter parameter not provided |
| `invalid_filter` | 400 | Filter name is not valid |

---

*Last Updated: 2025-12-10*
