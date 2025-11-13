---
title: "Entry Pages Table"
type: "widget"
component: "data-table"
add_on: "Data Plus"
status: "Done"
default_sort: "unique_entrances"
row_limit: 20
used_in_reports:
  - "entry-pages"
---

# Entry Pages Table

A data table showing pages where visitor sessions begin, with entrance counts and metadata.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Data Plus
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | null |
| **Default Sort** | Unique Entrances (descending) |
| **Row Limit** | 20 |
| **Column Management** | ✅ Yes |
| **Pagination** | ✅ Yes |

## Used In Reports

This widget appears in the following report pages:

- [Entry Pages](../reports/page-insights/entry-pages.md) - Row 1, full width

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|-------------------|
| [Entry Page](../columns/page.md) | Yes | Shown |
| [Unique Entrances](../columns/unique-entrances.md) | Yes | Shown |
| [Content Published Date](../columns/content-published-date.md) | Yes | Hidden |
| [View Page](../columns/view-page.md) | No | Shown |

## Empty State

When no data available:
- "No entry pages found for the selected period."

## Related Documentation

- [Entry Pages Report](../reports/page-insights/entry-pages.md)
- [Data Table Component](../components/data-table.md)
- [Page Column](../columns/page.md)

---

*Last Updated: 2025-11-12*
