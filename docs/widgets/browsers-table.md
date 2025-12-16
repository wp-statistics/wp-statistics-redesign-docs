---
title: "Browsers Table"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "visitors"
row_limit: 20
expandable_rows: true
used_in_reports:
  - "browsers"
---

# Browsers Table

A data table showing all browsers with visitor metrics and expandable rows for version breakdown.

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
| **Expandable Rows** | Yes |

## Used In Reports

- [Browsers](../reports/devices/browsers.md)

## Table Structure

### Parent Row Columns

| Column | Sortable | Default Visibility |
|--------|----------|-------------------|
| [Browser](../columns/browser.md) | Yes | Shown |
| [Visitors](../columns/visitors.md) | Yes | Shown |
| [Views](../columns/views.md) | Yes | Shown |
| [Bounce Rate](../columns/bounce-rate.md) | Yes | Shown |
| [Session Duration](../columns/session-duration.md) | Yes | Shown |
| [Views per Visitor](../columns/views-per-visitor.md) | Yes | Shown |
| [% of Total](../columns/percentage-of-total.md) | Yes | Shown |

### Child Row Columns (Expanded)

When a browser row is expanded, child rows show version breakdown with simplified columns:

| Column | Sortable | Notes |
|--------|----------|-------|
| [Browser Version](../columns/browser-version.md) | No | Indented, shows version number |
| [Visitors](../columns/visitors.md) | No | Visitors for this version |
| [% of Total](../columns/percentage-of-total.md) | No | Percentage of browser's total |

**Note:** Child rows are not sortable to keep the interface simple.

## Expandable Row Behavior

- **Expand Icon**: Chevron on the left of each browser row
- **Click Action**: Expands to show version breakdown
- **Child Data**: Shows top versions for that browser
- **Aggregation**: Parent row shows totals across all versions

## Empty State

When no data available:
- "No browser data found for the selected period."

## Related Documentation

- [Browsers Report](../reports/devices/browsers.md)
- [Browser Column](../columns/browser.md)
- [Browser Version Column](../columns/browser-version.md)
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
