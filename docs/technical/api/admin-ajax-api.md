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
| [User Preferences](../api-endpoints/user-preferences.md) | Save/reset user dashboard preferences (columns, widget order) |

---

## Initial Data (Localize Data)

Before making AJAX requests, the dashboard receives initial configuration via WordPress localize script. See [Localize Data](../localize-data) for details on:

- [Globals](../localize-data/globals.md) - AJAX URL, nonce, license status
- [Filters](../localize-data/filters.md) - Filter definitions and operators
- [Layout](../localize-data/layout.md) - Sidebar menu structure
- [Header](../localize-data/header.md) - Header area configuration

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

## Tracker Request (Hit Recording)

The tracker endpoint records page views via AJAX when ad-blocker bypass is enabled. This is a **public endpoint** that doesn't require WordPress authentication.

### Action

```
wp_statistics_hit_record
```

### When Active

This endpoint is only registered when both settings are enabled:
- Client-side tracking (`use_cache_plugin`)
- Ad-blocker bypass (`bypass_ad_blockers`)

### Authentication

Unlike dashboard endpoints, the tracker uses **signature-based validation** instead of nonce:
- `signature` parameter validates request authenticity
- Generated from `resource_type` and `resource_id` using HMAC

### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | string | Yes | Must be `wp_statistics_hit_record` |
| `resource_id` | number | Yes | WordPress post/page ID |
| `resource_type` | string | No | Content type (e.g., `post`, `page`, `category`) |
| `resourceUriId` | number | Yes | URI identifier for the resource |
| `resourceUri` | string | Yes* | Base64-encoded page URI (nullable) |
| `timezone` | string | Yes | Visitor's timezone |
| `language` | string | Yes | Browser language code |
| `languageFullName` | string | Yes | Full language name |
| `screenWidth` | string | Yes | Screen width in pixels |
| `screenHeight` | string | Yes | Screen height in pixels |
| `referred` | string | Yes* | Base64-encoded referrer URL (nullable) |
| `signature` | string | Conditional | HMAC signature (required when signature validation is enabled) |

*Nullable fields can be empty but must be present in the request.

### Success Response

```json
{
  "status": true
}
```

### Error Response

```json
{
  "status": false,
  "data": "Error message"
}
```

### Error Codes

| HTTP | Description |
|------|-------------|
| 403 | Invalid signature |
| 400 | Invalid hit request (validation failed) |

---

## Batch Tracking

The batch endpoint handles engagement tracking and custom events in a single request. This reduces HTTP overhead and ensures reliable data delivery during page exits (e.g., using `navigator.sendBeacon`).

### Action

```
wp_statistics_batch
```

### When Active

This endpoint is registered when client-side tracking is enabled:
- Client-side tracking (`use_cache_plugin`)

### Authentication

This is a **public endpoint** - no nonce or signature required. The session is identified server-side using the visitor's IP hash.

### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | string | Yes | Must be `wp_statistics_batch` |
| `batch_data` | string | Yes | JSON-encoded payload (see structure below) |

### Payload Structure

```json
{
  "engagement_time": 5000,
  "events": [
    {
      "type": "custom_event",
      "data": {
        "event_name": "click",
        "event_data": {}
      }
    }
  ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `engagement_time` | number | Time spent on page in milliseconds |
| `events` | array | Array of event objects to process |
| `events[].type` | string | Event type (currently supports `custom_event`) |
| `events[].data` | object | Event-specific data |

### Success Response

```json
{
  "status": true,
  "processed": 2,
  "errors": []
}
```

| Field | Type | Description |
|-------|------|-------------|
| `status` | boolean | `true` if request was processed |
| `processed` | number | Count of successfully processed items |
| `errors` | array | Array of error messages for failed items |

### Error Response

```json
{
  "status": false,
  "data": "Missing batch data"
}
```

### Error Codes

| HTTP | Description |
|------|-------------|
| 400 | Missing batch data or invalid JSON payload |

---

*Last Updated: 2025-12-31*
