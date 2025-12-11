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

## Properties

The header data provides configuration for three main UI elements in the dashboard header: notifications, privacy audit button, and premium upgrade badge.

### notifications

Configures the notifications dropdown in the header. Shows important updates, warnings, and announcements to users.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `isActive` | `boolean` | Yes | Whether notifications are enabled. Controlled by `display_notifications` setting |
| `items` | `array` | Yes | Array of notification objects. Each has `id`, `title`, `content`, `type`, `date` |
| `icon` | `string` | Yes | Lucide icon name displayed in header (default: `'Bell'`) |
| `label` | `string` | Yes | Translated label for accessibility and tooltips |

**Purpose**: Displays a bell icon with badge count. Clicking opens a dropdown showing recent notifications like plugin updates, warnings, or tips.

**Example**:
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
  }
}
```

---

### privacyAudit

Configures the privacy audit button in the header. Provides quick access to privacy compliance tools.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `isActive` | `boolean` | Yes | Whether to show button. Only shown if user has `manage_capability` permission |
| `url` | `string` | Yes | Link to privacy audit page or modal |
| `icon` | `string` | Yes | Lucide icon name displayed in header (default: `'ShieldCheck'`) |
| `label` | `string` | Yes | Translated label for accessibility and tooltips |

**Purpose**: Shows a shield icon that links to privacy audit tools. Helps administrators review and ensure GDPR compliance.

**Example**:
```json
{
  "privacyAudit": {
    "isActive": true,
    "url": "/wp-admin/admin.php?page=wps_privacy_audit",
    "icon": "ShieldCheck",
    "label": "Privacy Audit"
  }
}
```

---

### premiumBadge

Configures the premium upgrade badge in the header. Encourages free users to upgrade to premium version.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `isActive` | `boolean` | Yes | Whether to show badge. Set to `false` if user has valid premium license |
| `url` | `string` | Yes | Link to pricing/upgrade page |
| `icon` | `string` | Yes | Lucide icon name displayed in header (default: `'Crown'`) |
| `label` | `string` | Yes | Translated label shown as button text |

**Purpose**: Displays a crown icon with "Upgrade" text for free users. Hidden for premium users. Clicking navigates to pricing page.

**Example**:
```json
{
  "premiumBadge": {
    "isActive": true,
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
