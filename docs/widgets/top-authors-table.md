---
title: "Top Authors Table"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "views"
row_limit: 20
used_in_reports:
  - "top-authors"
---

# Top Authors Table

A data table showing authors with their content performance metrics including visitors, views, and engagement data.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free (Data Plus for custom post types)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | null |
| **Default Sort** | Views (descending) |
| **Row Limit** | 20 |
| **Column Management** | ✅ Yes |
| **Pagination** | ✅ Yes |

## Used In Reports

- [Top Authors](../reports/content-analytics/top-authors.md)

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|-------------------|
| [Author Name](../columns/author-name.md) | Yes | Shown |
| [Visitors](../columns/visitors.md) | Yes | Shown |
| [Views](../columns/views.md) | Yes | Shown |
| [Published](../columns/published.md) | Yes | Shown |
| [Views per Content](../columns/views-per-content.md) | Yes | Shown |
| [Bounce Rate](../columns/content-bounce-rate.md) | Yes | Hidden |
| [Time on Page](../columns/time-on-page.md) | Yes | Hidden |

## Empty State

When no data available:
- "No authors found for the selected period."

## Related Documentation

- [Top Authors Report](../reports/content-analytics/top-authors.md)
- [Data Table Component](../components/data-table.md)
- [Author Name Column](../columns/author-name.md)

---

*Last Updated: 2025-12-10*
