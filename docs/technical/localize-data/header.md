---
title: "Header Data"
type: "technical"
category: "localize-data"
status: "Done"
sidebar_position: 4
---

# Header Data

The `header` key provides configuration for the dashboard header area, including notifications, badges, and action buttons.

---

## Data Structure

```typescript
interface HeaderData {
  notifications: NotificationConfig;
  privacyAudit: ActionConfig;
  premiumBadge: BadgeConfig;
}

interface NotificationConfig {
  isActive: boolean;
  items: Notification[];
  icon: string;
  label: string;
}

interface ActionConfig {
  isActive: boolean;
  url: string;
  icon: string;
  label: string;
}

interface BadgeConfig {
  isActive: boolean;
  url: string;
  icon: string;
  label: string;
}

interface Notification {
  id: string;
  title: string;
  content: string;
  type: 'info' | 'warning' | 'success';
  date: string;
}
```

---

## Properties

### notifications

| Property | Type | Description |
|----------|------|-------------|
| `isActive` | `boolean` | Whether notifications are enabled in settings |
| `items` | `array` | Array of notification objects |
| `icon` | `string` | Lucide icon name (`'Bell'`) |
| `label` | `string` | Translated label |

### privacyAudit

| Property | Type | Description |
|----------|------|-------------|
| `isActive` | `boolean` | Whether user has manage capability |
| `url` | `string` | Link to privacy audit page |
| `icon` | `string` | Lucide icon name (`'ShieldCheck'`) |
| `label` | `string` | Translated label |

### premiumBadge

| Property | Type | Description |
|----------|------|-------------|
| `isActive` | `boolean` | Whether to show upgrade badge (false if premium) |
| `url` | `string` | Link to pricing page |
| `icon` | `string` | Lucide icon name (`'Crown'`) |
| `label` | `string` | Translated label |

---

## Example Output

```json
{
  "notifications": {
    "isActive": true,
    "items": [
      {
        "id": "update-available",
        "title": "Update Available",
        "content": "WP Statistics 15.1 is available.",
        "type": "info",
        "date": "2025-12-11"
      }
    ],
    "icon": "Bell",
    "label": "Notifications"
  },
  "privacyAudit": {
    "isActive": true,
    "url": "#",
    "icon": "ShieldCheck",
    "label": "Privacy Audit"
  },
  "premiumBadge": {
    "isActive": false,
    "url": "https://wp-statistics.com/pricing/",
    "icon": "Crown",
    "label": "Upgrade To Premium"
  }
}
```

---

## Visibility Rules

### Notifications
- Shown when `display_notifications` option is enabled
- Badge count shows unread notifications

### Privacy Audit
- Shown when user has `manage_capability` permission
- Controlled by `wp_statistics_enable_help_icon` filter

### Premium Badge
- Hidden when valid premium license is active
- Shows upgrade CTA for free users

---

## WordPress Filter

Customize header data before sending to React:

```php
add_filter('wp_statistics_dashboard_header_data', function($data) {
    // Add custom header action
    $data['customAction'] = [
        'isActive' => true,
        'url' => admin_url('admin.php?page=custom'),
        'icon' => 'Settings',
        'label' => __('Custom Action', 'my-plugin'),
    ];
    return $data;
});
```

---

## Provider Class

**File**: `src/Service/Admin/DashboardBootstrap/Providers/HeaderDataProvider.php`

**Key**: `header`

---

*Last Updated: 2025-12-11*
