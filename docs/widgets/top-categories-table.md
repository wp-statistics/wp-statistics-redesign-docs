---
title: "Top Categories Table"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "term_views"
row_limit: 20
used_in_reports:
  - "top-categories"
---

# Top Categories Table

A data table showing taxonomy terms with their content performance metrics including visitors, views, and engagement data.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free (Data Plus for custom taxonomies)
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

- [Top Categories](../reports/content-analytics/top-categories.md)

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|-------------------|
| [Term Name](../columns/term-name.md) | Yes | Shown |
| [Visitors](../columns/visitors.md) | Yes | Shown |
| [Views](../columns/views.md) | Yes | Shown |
| [Published](../columns/published.md) | Yes | Shown |
| [Views per Content](../columns/views-per-content.md) | Yes | Shown |
| [Bounce Rate](../columns/content-bounce-rate.md) | Yes | Hidden |
| [Time on Page](../columns/time-on-page.md) | Yes | Hidden |
| [View Page](../columns/view-page.md) | No | Shown |

## Empty State

When no data available:
- "No terms found for the selected period."

## Related Documentation

- [Top Categories Report](../reports/content-analytics/top-categories.md)
- [Data Table Component](../components/data-table.md)
- [Term Name Column](../columns/term-name.md)

---

*Last Updated: 2025-12-10*
