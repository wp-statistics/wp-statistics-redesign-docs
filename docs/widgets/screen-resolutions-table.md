---
title: "Screen Resolutions Table"
type: "widget"
component: "data-table"
add_on: "Data Plus"
status: "Done"
default_sort: "visitors"
row_limit: 20
used_in_reports:
  - "screen-resolutions"
---

# Screen Resolutions Table

A data table showing all screen resolutions with visitor metrics, engagement data, and traffic share.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Data Plus
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

- [Screen Resolutions](../reports/devices/screen-resolutions.md)

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|-------------------|
| [Resolution](../columns/resolution.md) | Yes | Shown |
| [Visitors](../columns/visitors.md) | Yes | Shown |
| [Views](../columns/views.md) | Yes | Shown |
| [Bounce Rate](../columns/bounce-rate.md) | Yes | Shown |
| [Session Duration](../columns/session-duration.md) | Yes | Shown |
| [Views per Visitor](../columns/views-per-visitor.md) | Yes | Shown |
| [% of Total](../columns/percentage-of-total.md) | Yes | Shown |

## Empty State

When no data available:
- "No screen resolution data found for the selected period."

## Related Documentation

- [Screen Resolutions Report](../reports/devices/screen-resolutions.md)
- [Resolution Column](../columns/resolution.md)
- [Visitors Column](../columns/visitors.md)
- [Views Column](../columns/views.md)
- [Bounce Rate Column](../columns/bounce-rate.md)
- [Session Duration Column](../columns/session-duration.md)
- [Views per Visitor Column](../columns/views-per-visitor.md)
- [Percentage of Total Column](../columns/percentage-of-total.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-12-16*
