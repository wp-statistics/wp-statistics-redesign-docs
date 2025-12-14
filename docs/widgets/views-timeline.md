---
title: "Views Timeline"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "date-time"
row_limit: 50
column_management_mode: "none"
pagination: true
used_in_reports:
  - "single-visitor-report"
---

# Views Timeline Widget

Displays a chronological list of all pages viewed by the visitor.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Display Settings

| Property | Value |
|----------|-------|
| **Default Sort** | Date and Time (descending - most recent first) |
| **Row Limit** | 50 |
| **Pagination** | Yes |
| **Column Management Mode** | "none" |

## Used In Reports

- [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md)

## Table Structure

| Column | Sortable | Description |
|--------|----------|-------------|
| Date and Time | Yes | Timestamp formatted per WordPress date/time settings (e.g., "November 11, 1:09 am") |
| Page | No | Page title linked to Single Page Report |

## Empty State

"No page views recorded for this visitor"

## Related Documentation

- [Data Table Component](../components/data-table.md)
- [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md)

---

*Last Updated: 2025-12-10*
