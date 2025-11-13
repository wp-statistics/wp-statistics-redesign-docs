---
title: "Top Entry Pages Preview"
type: "widget"
component: "table"
add_on: "Data Plus"
status: "Done"
figma: ""
default_sort: "unique-entrances"
row_limit: 5
used_in_reports:
  - "page-insights-overview"
---

# Top Entry Pages Preview

Preview of the top 5 pages where visitors most commonly start their sessions, with a link to the full Entry Pages report.

## Widget Configuration

- **Component**: [Table](../components/table.md)
- **Add-on**: Data Plus
- **Status**: Done
- **Figma Design**: [Add link when available]

## Display Settings

- **Default Sort**: Unique Entrances (descending)
- **Row Limit**: 5

## Used In Reports

- [Page Insights Overview](../reports/page-insights/page-insights-overview.md) - Row 2, Left Column

## Table Structure

| Column | Sortable | Header Label |
|--------|----------|--------------|
| [Entry Page](../columns/entry-page.md) | No | Entry Page |
| [Unique Entrances](../columns/unique-entrances.md) | No | Unique Entrances |
| [View Page](../columns/view-page.md) | No | (No header) |

## Features

### Link to Full Report
- Links to [Entry Pages](../reports/page-insights/entry-pages.md) report for complete data

### Pre-sorted Data
- Shows top 5 entry pages by Unique Entrances
- No interactive sorting available

### Data Plus Required
- Only available when Data Plus add-on is activated

## Empty State

"No entry page data available for the selected period"

---

*Last Updated: 2025-11-12*
