---
title: "404 Pages Table"
type: "widget"
component: "table"
add_on: "Free"
status: "Done"
default_sort: "content_views"
row_limit: 20
used_in_reports:
  - "404-pages"
---

# 404 Pages Table

A table showing 404 error pages with their view counts.

## Widget Configuration

- **Component**: [Table](../components/table.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | null |
| **Default Sort** | Content Views (descending) |
| **Row Limit** | 20 |
| **Pagination** | No |
| **Link to Full Report** | null |

## Used In Reports

This widget appears in the following report pages:

- [404 Pages](../reports/page-insights/404-pages.md) - Row 1, full width

## Table Structure

### Columns

| Column | Label Override | Sortable | Default Visibility |
|--------|----------------|----------|-------------------|
| [URL](../columns/url.md) | - | No (pre-sorted) | Shown |
| [Content Views](../columns/content-views.md) | Views | No (pre-sorted) | Shown |

**Note:** This table uses the Table component (not Data Table), so columns are pre-sorted by Content Views and not interactively sortable.

## Empty State

When no data available:
- "No 404 pages found for the selected period."

## Related Documentation

- [404 Pages Report](../reports/page-insights/404-pages.md)
- [Table Component](../components/table.md)
- [URL Column](../columns/url.md)

---

*Last Updated: 2025-11-12*
