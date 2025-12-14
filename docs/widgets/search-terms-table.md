---
title: "Search Terms Table"
type: "widget"
component: "data-table"
add_on: "Data Plus"
status: "Done"
default_sort: "searches"
row_limit: 20
column_management_mode: "none"
pagination: true
used_in_reports:
  - "search-terms"
---

# Search Terms Table Widget

Displays search terms entered by visitors using the site search functionality, ranked by frequency.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Data Plus
- **Status**: Done
- **Figma Design**: [Add link when available]

## Display Settings

| Property | Value |
|----------|-------|
| **Default Sort** | Searches (descending) |
| **Row Limit** | 20 |
| **Pagination** | Yes |
| **Column Management Mode** | "none" |

## Used In Reports

- [Search Terms](../reports/visitor-insights/search-terms.md)

## Table Structure

| Column | Sortable | Header Label |
|--------|----------|--------------|
| [Search Term](../columns/search-term.md) | No | Search Term |
| [Searches](../columns/searches.md) | No | Searches |

## Empty State

"No data available for the selected period"

---

*Last Updated: 2025-11-23*
