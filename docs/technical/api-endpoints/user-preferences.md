---
title: "User Preferences"
type: "technical"
category: "api"
status: "Done"
---

# User Preferences

Manages user dashboard preferences (column selections, widget visibility/order) stored in WordPress user meta. Preferences are returned in Analytics Query API response metadata.

---

## Endpoint

| Property | Value |
|----------|-------|
| Action | `wp_statistics_user_preferences` |
| Method | POST |
| Auth | Required |

---

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action_type` | string | Yes | Operation type: `save` or `reset` |
| `context` | string | Yes | Context identifier (e.g., `visitors_visitors_table`, `visitors_overview_widgets`) |
| `data` | object | Yes (for save) | Preferences data to save |

---

## Save Column Preferences

Save column visibility preferences for a table widget.

### Request

```json
{
  "action": "wp_statistics_user_preferences",
  "action_type": "save",
  "context": "visitors_visitors_table",
  "data": {
    "columns": ["visitorInfo", "views", "location"]
  }
}
```

### Response

```json
{
  "success": true,
  "data": {
    "success": true,
    "message": "Preferences saved successfully."
  }
}
```

---

## Save Widget Visibility/Order

Save widget visibility and order preferences for a page.

### Request

```json
{
  "action": "wp_statistics_user_preferences",
  "action_type": "save",
  "context": "visitors_overview_widgets",
  "data": {
    "visibleWidgets": ["traffic_trends", "top_entry_pages", "top_countries", "device_type"],
    "widgetOrder": ["traffic_trends", "top_entry_pages", "top_countries", "device_type"]
  }
}
```

### Response

```json
{
  "success": true,
  "data": {
    "success": true,
    "message": "Preferences saved successfully."
  }
}
```

---

## Reset Preferences

Reset preferences for a specific context to defaults.

### Request

```json
{
  "action": "wp_statistics_user_preferences",
  "action_type": "reset",
  "context": "visitors_visitors_table"
}
```

### Response

```json
{
  "success": true,
  "data": {
    "success": true,
    "message": "Preferences reset successfully."
  }
}
```

---

## Fetching Preferences

Preferences are **NOT** fetched via this endpoint. Instead, preferences are automatically included in the [Analytics Query API](./analytics-query-api.md) response when a `context` parameter is provided.

### Fetch Request (via Analytics Query API)

```json
{
  "queries": [
    {
      "id": "prefs",
      "sources": ["visitors"],
      "group_by": [],
      "per_page": 1,
      "format": "table",
      "context": "visitors_visitors_table"
    }
  ]
}
```

### Response (with preferences in meta)

```json
{
  "success": true,
  "items": {
    "prefs": {
      "data": { ... },
      "meta": {
        "preferences": {
          "columns": ["visitorInfo", "views", "location"],
          "updated_at": "2024-12-13 10:30:00"
        }
      }
    }
  }
}
```

If no preferences are saved for the context, `preferences` will be `null`.

---

## Context Naming Convention

| Context Pattern | Example | Description |
|-----------------|---------|-------------|
| `{page}_{widget}` | `visitors_visitors_table` | Column preferences for a specific widget |
| `{page}_widgets` | `visitors_overview_widgets` | Widget visibility/order for a page |

---

## Storage

Preferences are stored in `wp_usermeta` table under the key `wp_statistics_dashboard_preferences` as a serialized PHP array containing all user preferences keyed by context.

---

## Related Documentation

- [Admin AJAX API](../api/admin-ajax-api.md) - Overview of Admin AJAX endpoints
- [Analytics Query API](./analytics-query-api.md) - Query API that returns preferences in response

---

*Last Updated: 2025-12-15*
