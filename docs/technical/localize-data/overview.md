---
title: "Localize Data"
type: "technical"
category: "localize-data"
status: "Done"
sidebar_position: 3
---

# Localize Data

The Localize Data system provides initial configuration and data to the React dashboard through WordPress's `wp_localize_script()` mechanism.

---

## Overview

When the dashboard loads, WordPress injects a JavaScript object (`WP_STATISTICS_DASHBOARD`) containing all necessary configuration for the React application. This data is provided by registered **Data Providers**.

---

## JavaScript Access

```javascript
// Access localized data in React
const { globals, filters, layout, header } = window.WP_STATISTICS_DASHBOARD;
```

---

## Data Providers

Data is organized into sections, each managed by a dedicated provider class:

| Key | Provider | Description |
|-----|----------|-------------|
| `globals` | [GlobalDataProvider](./globals.md) | AJAX URL, nonce, license status, plugin URL |
| `filters` | [FiltersProvider](./filters.md) | Filter definitions and operators for filter UI |
| `layout` | [LayoutDataProvider](./layout.md) | Sidebar menu structure and navigation |
| `header` | [HeaderDataProvider](./header.md) | Header area data (notifications, badges) |

---

## Architecture

### LocalizeDataManager

Coordinates multiple data providers using the composite pattern.

```
LocalizeDataManager
├── registerProvider(provider)
├── addLocalizedData(data)    ← Called by WordPress filter
└── providers[]
    ├── GlobalDataProvider
    ├── FiltersProvider
    ├── LayoutDataProvider
    └── HeaderDataProvider
```

### LocalizeDataProviderInterface

All providers implement this interface:

| Method | Return | Description |
|--------|--------|-------------|
| `getKey()` | `string` | Top-level key in localized object (e.g., `'filters'`) |
| `getData()` | `array` | Data to be localized under this key |

---

## WordPress Filter

Providers hook into the localization process via:

```php
add_filter('wp_statistics_react_localized_data', [$this, 'addLocalizedData'], 10);
```

### Extending Data

Third-party plugins can add custom data:

```php
add_filter('wp_statistics_react_localized_data', function($data) {
    $data['custom'] = [
        'myKey' => 'myValue',
    ];
    return $data;
}, 20);
```

---

## Related Documentation

- [Admin AJAX API](../api/admin-ajax-api.md) - AJAX endpoints for data fetching
- [Analytics Query API](../api-endpoints/analytics-query-api.md) - Query endpoint specification

---

*Last Updated: 2025-12-11*
