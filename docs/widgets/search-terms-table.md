---
title: "Search Terms Table"
type: "widget"
component: "table"
add_on: "Data Plus"
status: "Done"
default_sort: "searches"
row_limit: 20
used_in_reports:
  - "search-terms"
---

# Search Terms Table Widget

Displays search terms entered by visitors using the site search functionality, ranked by frequency.

## Widget Configuration

- **Component**: [Table](../components/table.md)
- **Add-on**: Data Plus
- **Status**: Done
- **Figma Design**: [Add link when available]

## Display Settings

| Property | Value |
|----------|-------|
| **Title** | null (no title displayed) |
| **Default Sort** | searches (descending) |
| **Row Limit** | 20 |
| **Pagination** | ✅ Yes |
| **Link to Full Report** | ❌ No (this is the full report) |

## Used In Reports

This widget is used in the following reports:

- [Search Terms](../reports/visitor-insights/search-terms.md) - Row 1

## Table Structure

The table displays 2 columns, all shown by default:

| Column | Sortable | Status | Documentation |
|--------|----------|--------|---------------|
| **Search Term** | ❌ No | Done | [View Docs](../columns/search-term.md) |
| **Searches** | ❌ No | Done | [View Docs](../columns/searches.md) |

## Empty State

When no search term data is available for the selected period:
- "No data available for the selected period"

## Related Documentation

- [Table Component](../components/table.md)
- [Search Terms Report](../reports/visitor-insights/search-terms.md)

---

*Last Updated: 2025-11-11*
