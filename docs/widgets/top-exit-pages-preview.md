---
title: "Top Exit Pages Preview"
type: "widget"
component: "table"
add_on: "Data Plus"
status: "Done"
figma: ""
default_sort: "content-unique-exits"
row_limit: 5
used_in_reports:
  - "page-insights-overview"
---

# Top Exit Pages Preview

Preview of the top 5 pages where visitors most commonly end their sessions, with a link to the full Exit Pages report.

## Widget Configuration

- **Component**: [Table](../components/table.md)
- **Add-on**: Data Plus
- **Status**: Done
- **Figma Design**: [Add link when available]

## Display Settings

- **Default Sort**: Content Unique Exits (descending)
- **Row Limit**: 5

## Used In Reports

- [Page Insights Overview](../reports/page-insights-overview.md) - Row 2, Right Column

## Table Structure

| Column | Sortable | Header Label |
|--------|----------|--------------|
| [Exit Page](../columns/exit-page.md) | No | Exit Page |
| [Content Unique Exits](../columns/content-unique-exits.md) | No | Unique Exits |
| [View Page](../columns/view-page.md) | No | (No header) |

## Features

### Link to Full Report
- Links to [Exit Pages](../reports/exit-pages.md) report for complete data

### Pre-sorted Data
- Shows top 5 exit pages by Content Unique Exits
- No interactive sorting available

### Data Plus Required
- Only available when Data Plus add-on is activated

## Empty State

"No exit page data available for the selected period"

---

*Last Updated: 2025-11-12*
