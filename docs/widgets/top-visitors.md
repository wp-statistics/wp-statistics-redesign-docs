---
title: "Top Visitors"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "total-views"
row_limit: 10
column_management_mode: "none"
pagination: false
link_to_full_report: true
used_in_reports:
  - "visitors-overview"
---

# Top Visitors Widget

Displays the top 10 most active visitors in a simplified table format showing key engagement and journey metrics.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Display Settings

| Property | Value |
|----------|-------|
| **Default Sort** | Total Views (descending) |
| **Row Limit** | 10 |
| **Pagination** | No |
| **Column Management Mode** | "none" |
| **Link to Full Report** | Yes - [Top Visitors Table](../widgets/top-visitors-table.md) |

## Used In Reports

- [Visitors Overview](../reports/visitor-insights/visitors-overview.md) - Row 5

## Table Structure

| Column | Sortable | Header Label |
|--------|----------|--------------|
| [Visitor Informations](../columns/visitor-info.md) | No | Visitor Informations |
| [Total Views](../columns/total-views.md) | No | Total Views |
| [Referrer](../columns/referrer.md) | No | Referrer |
| [Entry Page](../columns/entry-page.md) | No | Entry Page |
| [Exit Page](../columns/exit-page.md) | No | Exit Page |

## Empty State

"No data available for the selected period"

---

*Last Updated: 2025-11-23*
