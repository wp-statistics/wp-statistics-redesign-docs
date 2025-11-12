---
title: "Author Pages Preview"
type: "widget"
component: "table"
add_on: "Free"
status: "Done"
figma: ""
default_sort: "content-visitors"
row_limit: 5
used_in_reports:
  - "page-insights-overview"
---

# Author Pages Preview

Preview of the top 5 authors by page views with a link to the full Author Pages report.

## Widget Configuration

- **Component**: [Table](../components/table.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Display Settings

- **Default Sort**: Content Visitors (descending)
- **Row Limit**: 5

## Used In Reports

- [Page Insights Overview](../reports/page-insights-overview.md) - Row 3, Right Column

## Table Structure

| Column | Sortable | Header Label |
|--------|----------|--------------|
| [Author](../columns/author.md) | No | Author |
| [Content Visitors](../columns/content-visitors.md) | No | Author's Page Views |
| [View Page](../columns/view-page.md) | No | (No header) |

## Features

### Link to Full Report
- Links to [Author Pages](../reports/author-pages.md) report for complete data

### Pre-sorted Data
- Shows top 5 authors by page visitors
- No interactive sorting available

## Empty State

"No author page data available for the selected period"

---

*Last Updated: 2025-11-12*
