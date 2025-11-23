---
title: "Author Pages Preview"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
figma: ""
default_sort: "content-visitors"
row_limit: 5
column_management_mode: "none"
pagination: false
link_to_full_report: true
used_in_reports:
  - "page-insights-overview"
---

# Author Pages Preview

Preview of the top 5 authors by page views with a link to the full Author Pages report.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Display Settings

| Property | Value |
|----------|-------|
| **Default Sort** | Content Visitors (descending) |
| **Row Limit** | 5 |
| **Pagination** | No |
| **Column Management Mode** | "none" |
| **Link to Full Report** | Yes - [Author Pages](../reports/page-insights/author-pages.md) |

## Used In Reports

- [Page Insights Overview](../reports/page-insights/page-insights-overview.md) - Row 3, Right Column

## Table Structure

| Column | Sortable | Header Label |
|--------|----------|--------------|
| [Author](../columns/author.md) | No | Author |
| [Content Visitors](../columns/content-visitors.md) | No | Author's Page Views |
| [View Page](../columns/view-page.md) | No | (No header) |

## Empty State

"No author page data available for the selected period"

---

*Last Updated: 2025-11-23*
