---
title: "Device Categories Table"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "visitors"
row_limit: 20
used_in_reports:
  - "device-categories"
---

# Device Categories Table

A data table showing all device categories with visitor metrics, engagement data, and traffic share.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | null |
| **Default Sort** | Visitors (descending) |
| **Row Limit** | 20 |
| **Column Management** | Yes |
| **Pagination** | Yes |

## Used In Reports

- [Device Categories](../reports/devices/device-categories.md)

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|-------------------|
| [Device Category](../columns/device-category.md) | Yes | Shown |
| [Visitors](../columns/visitors.md) | Yes | Shown |
| [Views](../columns/views.md) | Yes | Shown |
| [Bounce Rate](../columns/bounce-rate.md) | Yes | Shown |
| [Session Duration](../columns/session-duration.md) | Yes | Shown |
| [Views per Visitor](../columns/views-per-visitor.md) | Yes | Shown |
| [% of Total](../columns/percentage-of-total.md) | Yes | Shown |

## Empty State

When no data available:
- "No device category data found for the selected period."

## Related Documentation

- [Device Categories Report](../reports/devices/device-categories.md)
- [Device Category Column](../columns/device-category.md)
- [Visitors Column](../columns/visitors.md)
- [Views Column](../columns/views.md)
- [Bounce Rate Column](../columns/bounce-rate.md)
- [Session Duration Column](../columns/session-duration.md)
- [Views per Visitor Column](../columns/views-per-visitor.md)
- [Percentage of Total Column](../columns/percentage-of-total.md)
- [Data Table Component](../components/data-table.md)
- [Device Detection](../technical/architecture/device-detection.md)

---

*Last Updated: 2025-12-16*
