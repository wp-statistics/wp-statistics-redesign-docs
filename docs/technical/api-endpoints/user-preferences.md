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

## Data Storage Format

Preferences are stored in `wp_usermeta` table under the key `wp_statistics_dashboard_preferences` as a serialized PHP array containing all user preferences keyed by context.

### Meta Key

```php
wp_statistics_dashboard_preferences
```

### Data Structure Schema

All preferences are stored in a single user meta entry as a nested associative array, keyed by context identifiers:

```php
[
    'context_identifier_1' => [
        // Column preferences (for table widgets)
        'columns' => ['column1', 'column2', 'column3'],

        // Widget preferences (for page widget layout)
        'visibleWidgets' => ['widget1', 'widget2'],
        'widgetOrder' => ['widget1', 'widget2'],

        // Auto-added timestamp
        'updated_at' => '2024-12-15 10:30:00'
    ],
    'context_identifier_2' => [
        // ...
    ]
]
```

### Example Stored Data

```php
[
    'visitors_visitors_table' => [
        'columns' => ['visitorInfo', 'views', 'location', 'referrer'],
        'updated_at' => '2024-12-15 10:30:00'
    ],
    'visitors_overview_widgets' => [
        'visibleWidgets' => ['traffic_trends', 'top_entry_pages', 'top_countries'],
        'widgetOrder' => ['traffic_trends', 'top_entry_pages', 'top_countries'],
        'updated_at' => '2024-12-15 11:45:00'
    ],
    'content_pages_table' => [
        'columns' => ['page', 'views', 'visitors'],
        'updated_at' => '2024-12-16 09:00:00'
    ]
]
```

### Serialized Format in Database

> **Note:** WordPress automatically serializes arrays when saving to `wp_usermeta`. The data is stored as a PHP serialized string in the `meta_value` column.

**Example serialized value:**

```
a:2:{s:22:"visitors_visitors_table";a:2:{s:7:"columns";a:3:{i:0;s:11:"visitorInfo";i:1;s:5:"views";i:2;s:8:"location";}s:10:"updated_at";s:19:"2024-12-15 10:30:00";}s:24:"visitors_overview_widgets";a:3:{s:14:"visibleWidgets";a:2:{i:0;s:13:"traffic_trends";i:1;s:15:"top_entry_pages";}s:11:"widgetOrder";a:2:{i:0;s:13:"traffic_trends";i:1;s:15:"top_entry_pages";}s:10:"updated_at";s:19:"2024-12-15 11:45:00";}}
```

### Data Types

| Field | Type | Description |
|-------|------|-------------|
| `columns` | `string[]` | Array of visible column identifiers (array order determines display order) |
| `visibleWidgets` | `string[]` | Array of visible widget identifiers |
| `widgetOrder` | `string[]` | Array of widget identifiers in display order |
| `updated_at` | `string` | MySQL datetime format (`Y-m-d H:i:s`) |

---

## Related Documentation

- [Admin AJAX API](../api/admin-ajax-api.md) - Overview of Admin AJAX endpoints
- [Analytics Query API](./analytics-query-api.md) - Query API that returns preferences in response

---

*Last Updated: 2025-12-29*
