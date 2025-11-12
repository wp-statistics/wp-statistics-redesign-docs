---
title: "Recent Pages Preview"
type: "widget"
component: "table"
add_on: "Free"
status: "Done"
figma: ""
default_sort: "content-published-date"
row_limit: 5
used_in_reports:
  - "page-insights-overview"
---

# Recent Pages Preview

Preview of the 5 most recently published pages with a link to the Top Pages report ordered by published date.

## Widget Configuration

- **Component**: [Table](../components/table.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Display Settings

- **Default Sort**: Content Published Date (descending)
- **Row Limit**: 5

## Used In Reports

- [Page Insights Overview](../reports/page-insights-overview.md) - Row 1, Right Column

## Table Structure

| Column | Sortable | Header Label |
|--------|----------|--------------|
| [Page](../columns/page.md) | No | Page |
| [Content Views](../columns/content-views.md) | No | Views |
| [View Page](../columns/view-page.md) | No | (No header) |

## Features

### Link to Full Report
- Links to [Top Pages](../reports/top-pages.md) report ordered by published date

### Pre-sorted Data
- Shows 5 most recently published pages
- No interactive sorting available

## Empty State

"No recently published pages found for the selected period"

---

*Last Updated: 2025-11-12*
