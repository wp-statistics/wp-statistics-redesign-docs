---
title: "Top Pages Preview"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
figma: ""
default_sort: "content-views"
row_limit: 5
column_management_mode: "none"
pagination: false
link_to_full_report: true
used_in_reports:
  - "page-insights-overview"
---

# Top Pages Preview

Preview of the top 5 most viewed pages with a link to the full Top Pages report.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Display Settings

| Property | Value |
|----------|-------|
| **Default Sort** | Content Views (descending) |
| **Row Limit** | 5 |
| **Pagination** | No |
| **Column Management Mode** | "none" |
| **Link to Full Report** | Yes - [Top Pages](../reports/page-insights/top-pages.md) |

## Used In Reports

- [Page Insights Overview](../reports/page-insights/page-insights-overview.md) - Row 1, Left Column

## Table Structure

| Column | Sortable | Header Label |
|--------|----------|--------------|
| [Page](../columns/page.md) | No | Page |
| [Views](../columns/views.md) | No | Views |
| [View Page](../columns/view-page.md) | No | (No header) |

## Empty State

"No page views recorded for the selected period"

---

*Last Updated: 2025-11-23*
