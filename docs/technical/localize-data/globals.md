---
title: "Globals Data"
type: "technical"
category: "localize-data"
status: "Done"
sidebar_position: 1
---

# Globals Data

The `globals` key provides essential application-wide configuration data required for the React dashboard to communicate with the WordPress backend.

---

## Data Structure

```typescript
interface GlobalsData {
  isPremium: boolean;
  ajaxUrl: string;
  nonce: string;
  pluginUrl: string;
  analyticsAction: string;
}
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `isPremium` | `boolean` | Whether a premium license is active |
| `ajaxUrl` | `string` | WordPress admin-ajax.php URL |
| `nonce` | `string` | Security nonce for AJAX requests |
| `pluginUrl` | `string` | Base URL of the WP Statistics plugin |
| `analyticsAction` | `string` | AJAX action name for analytics queries |

---

## Example Output

```json
{
  "isPremium": true,
  "ajaxUrl": "/wp-admin/admin-ajax.php",
  "nonce": "abc123def456",
  "pluginUrl": "/wp-content/plugins/wp-statistics/",
  "analyticsAction": "wp_statistics_analytics"
}
```

---

## JavaScript Usage

```javascript
const { ajaxUrl, nonce, analyticsAction } = window.WP_STATISTICS_DASHBOARD.globals;

// Make AJAX request
const response = await fetch(ajaxUrl, {
  method: 'POST',
  headers: {
    'X-WP-NONCE': nonce,
  },
  body: new URLSearchParams({
    action: analyticsAction,
    data: JSON.stringify(queryParams),
  }),
});
```

---

## WordPress Filter

Customize globals data before sending to React:

```php
add_filter('wp_statistics_dashboard_global_data', function($data) {
    $data['customSetting'] = get_option('my_custom_setting');
    return $data;
});
```

---

## Provider Class

**File**: `src/Service/Admin/DashboardBootstrap/Providers/GlobalDataProvider.php`

**Key**: `globals`

---

*Last Updated: 2025-12-11*
