---
title: "Top Pages Preview"
type: "widget"
component: "table"
add_on: "Free"
status: "Done"
figma: ""
default_sort: "content-views"
row_limit: 5
used_in_reports:
  - "page-insights-overview"
---

# Top Pages Preview

Preview of the top 5 most viewed pages with a link to the full Top Pages report.

## Widget Configuration

- **Component**: [Table](../components/table.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Display Settings

- **Default Sort**: Content Views (descending)
- **Row Limit**: 5

## Used In Reports

- [Page Insights Overview](../reports/page-insights/page-insights-overview.md) - Row 1, Left Column

## Table Structure

| Column | Sortable | Header Label |
|--------|----------|--------------|
| [Page](../columns/page.md) | No | Page |
| [Content Views](../columns/content-views.md) | No | Views |
| [View Page](../columns/view-page.md) | No | (No header) |

## Features

### Link to Full Report
- Links to [Top Pages](../reports/page-insights/top-pages.md) report for complete data

### Pre-sorted Data
- Shows top 5 pages by Content Views
- No interactive sorting available

## Empty State

"No page views recorded for the selected period"

---

*Last Updated: 2025-11-12*
