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
        }
      }
    }
  }
}
```

---

## Properties

### MenuItem

A **MenuItem** represents a top-level menu item in the sidebar navigation. It can be a standalone page or a parent menu that contains sub-pages.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `icon` | `string` | Yes | Lucide icon name (e.g., `'Gauge'`, `'User'`) |
| `label` | `string` | Yes | Translated menu item label shown in sidebar |
| `slug` | `string` | Yes | URL slug for routing (e.g., `'overview'` → `/overview`) |
| `subPages` | `object` | No | Optional nested sub-menu items. If present, creates expandable menu |

**Example 1: Simple MenuItem (no sub-pages)**
```json
{
  "overview": {
    "icon": "Gauge",
    "label": "General",
    "slug": "overview"
  }
}
```
This creates a single menu item that navigates directly to `/overview`.

**Example 2: MenuItem with sub-pages**
```json
{
  "visitorInsights": {
    "icon": "User",
    "label": "Visitor Insights",
    "slug": "visitor-insights",
    "subPages": {
      "visitors": {
        "label": "Visitors",
        "slug": "visitors"
      },
      "views": {
        "label": "Views",
        "slug": "views"
      }
    }
  }
}
```
This creates an expandable menu with two sub-items. Clicking "Visitor Insights" expands the menu to show "Visitors" and "Views" sub-pages.

---

### SubMenuItem

A **SubMenuItem** represents a nested page under a parent MenuItem. Sub-menu items appear indented under their parent when expanded.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | `string` | Yes | Translated sub-menu label shown in sidebar |
| `slug` | `string` | Yes | URL slug for routing (e.g., `'visitors'` → `/visitors`) |

**Example: SubMenuItem**
```json
{
  "visitors": {
    "label": "Visitors",
    "slug": "visitors"
  }
}
```
This sub-item appears under its parent menu and navigates to `/visitors` when clicked.

**Visual Representation:**
```
📊 Visitor Insights (MenuItem - parent)
   ├─ Visitors Overview (SubMenuItem)
   ├─ Visitors (SubMenuItem)
   └─ Views (SubMenuItem)

📍 Geographic (MenuItem - no sub-pages)
```

---

## Current Menu Items

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
