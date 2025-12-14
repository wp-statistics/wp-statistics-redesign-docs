---
title: "Exit Pages Table"
type: "widget"
component: "data-table"
add_on: "Data Plus"
status: "Done"
default_sort: "unique_exits"
row_limit: 20
used_in_reports:
  - "exit-pages"
---

# Exit Pages Table

A data table showing pages where visitor sessions end, with exit counts and engagement metrics.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Data Plus
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | null |
| **Default Sort** | Unique Exits (descending) |
| **Row Limit** | 20 |
| **Column Management** | ✅ Yes |
| **Pagination** | ✅ Yes |

## Used In Reports

- [Exit Pages](../reports/page-insights/exit-pages.md)

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|-------------------|
| [Exit Page](../columns/page.md) | Yes | Shown |
| [Visitors](../columns/visitors.md) | Yes | Shown |
| [Content Unique Exits](../columns/content-unique-exits.md) | Yes | Shown |
| [Content Exit Rate](../columns/content-exit-rate.md) | Yes | Shown |
| [View Page](../columns/view-page.md) | No | Shown |

## Empty State

When no data available:
- "No exit pages found for the selected period."

## Related Documentation

- [Exit Pages Report](../reports/page-insights/exit-pages.md)
- [Data Table Component](../components/data-table.md)
- [Page Column](../columns/page.md)

---

*Last Updated: 2025-11-12*
