---
title: "Layout Data"
type: "technical"
category: "localize-data"
status: "Done"
sidebar_position: 3
---

# Layout Data

The `layout` key provides sidebar navigation structure and menu configuration for the React dashboard.

---

## Data Structure

```typescript
interface LayoutData {
  sidebar: Record<string, MenuItem>;
}

interface MenuItem {
  icon: string;
  label: string;
  slug: string;
  subPages?: Record<string, SubMenuItem>;
}

interface SubMenuItem {
  label: string;
  slug: string;
}
```

---

## Properties

### MenuItem

| Property | Type | Description |
|----------|------|-------------|
| `icon` | `string` | Lucide icon name (e.g., `'Gauge'`, `'User'`) |
| `label` | `string` | Translated menu item label |
| `slug` | `string` | URL slug for routing |
| `subPages` | `object?` | Nested sub-menu items |

### SubMenuItem

| Property | Type | Description |
|----------|------|-------------|
| `label` | `string` | Translated sub-menu label |
| `slug` | `string` | URL slug for routing |

---

## Example Output

```json
{
  "sidebar": {
    "overview": {
      "icon": "Gauge",
      "label": "General",
      "slug": "overview"
    },
    "visitorInsights": {
      "icon": "User",
      "label": "Visitor Insights",
      "slug": "visitor-insights",
      "subPages": {
        "visitorsOverview": {
          "label": "Visitors Overview",
          "slug": "visitors-overview"
        },
        "visitors": {
          "label": "Visitors",
          "slug": "visitors"
        },
        "views": {
          "label": "Views",
          "slug": "views"
        },
        "onlineVisitors": {
          "label": "Online Visitors",
          "slug": "online-visitors"
        }
      }
    },
    "referrals": {
      "icon": "RefreshCw",
      "label": "Referrals",
      "slug": "referrals",
      "subPages": {
        "referredVisitors": {
          "label": "Referred Visitors",
          "slug": "referred-visitors"
        },
        "referrers": {
          "label": "Referrers",
          "slug": "referrers"
        }
      }
    },
    "geographic": {
      "icon": "Earth",
      "label": "Geographics",
      "slug": "geographic"
    },
    "devices": {
      "icon": "MonitorSmartphone",
      "label": "Devices",
      "slug": "devices"
    }
  }
}
```

---

## Menu Items

| Key | Icon | Label | Has Sub-pages |
|-----|------|-------|---------------|
| `overview` | Gauge | General | No |
| `visitorInsights` | User | Visitor Insights | Yes |
| `pageAnalytics` | File | Page Insights | No |
| `referrals` | RefreshCw | Referrals | Yes |
| `categoryAnalytics` | SquareChartGantt | Category Analytics | No |
| `authorAnalytics` | FileUser | Author Analytics | No |
| `geographic` | Earth | Geographics | No |
| `devices` | MonitorSmartphone | Devices | No |

---

## Icons

Menu icons use [Lucide React](https://lucide.dev/) icon names:

| Icon Name | Usage |
|-----------|-------|
| `Gauge` | Overview/Dashboard |
| `User` | Visitor related |
| `File` | Page/Content related |
| `RefreshCw` | Referrals |
| `FileChartColumn` | Content Analytics |
| `FileUser` | Author Analytics |
| `SquareChartGantt` | Category Analytics |
| `Earth` | Geographic data |
| `MonitorSmartphone` | Device data |

---

## WordPress Filter

Customize layout data before sending to React:

```php
add_filter('wp_statistics_dashboard_layout_data', function($items) {
    // Add custom menu item
    $items['sidebar']['customPage'] = [
        'icon' => 'Star',
        'label' => __('Custom Page', 'my-plugin'),
        'slug' => 'custom-page',
    ];
    return $items;
});
```

---

## Provider Class

**File**: `src/Service/Admin/DashboardBootstrap/Providers/LayoutDataProvider.php`

**Key**: `layout`

---

## Related Documentation

- [Menu Structure](../../global/menu-structure.md) - Menu structure specification

---

*Last Updated: 2025-12-11*
