---
title: "OS Table"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "visitors"
row_limit: 20
used_in_reports:
  - "operating-systems"
---

# OS Table

A data table showing all operating systems with visitor metrics, engagement data, and traffic share.

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

- [Operating Systems](../reports/devices/operating-systems.md)

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|-------------------|
| [OS](../columns/os.md) | Yes | Shown |
| [Visitors](../columns/visitors.md) | Yes | Shown |
| [Views](../columns/views.md) | Yes | Shown |
| [Bounce Rate](../columns/bounce-rate.md) | Yes | Shown |
| [Session Duration](../columns/session-duration.md) | Yes | Shown |
| [Views per Visitor](../columns/views-per-visitor.md) | Yes | Shown |
| [% of Total](../columns/percentage-of-total.md) | Yes | Shown |

## Empty State

When no data available:
- "No operating system data found for the selected period."

## Related Documentation

- [Operating Systems Report](../reports/devices/operating-systems.md)
- [OS Column](../columns/os.md)
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
