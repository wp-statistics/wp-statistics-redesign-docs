---
title: "Category Pages Table"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "content_visitors"
row_limit: 20
used_in_reports:
  - "category-pages"
---

# Category Pages Table

A data table showing category performance with visitor metrics and published content counts.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | null |
| **Default Sort** | Content Visitors (descending) |
| **Row Limit** | 20 |
| **Column Management** | ✅ Yes |
| **Pagination** | ✅ Yes |

## Used In Reports

- [Category Pages](../reports/page-insights/category-pages.md)

## Table Structure

### Columns

| Column | Label Override | Sortable | Default Visibility |
|--------|----------------|----------|-------------------|
| [Category](../columns/category.md) | - | Yes | Shown |
| [Visitors](../columns/visitors.md) | Category Page Views | Yes | Shown |
| [Total Published Content](../columns/total-published-content.md) | - | Yes | Shown |
| [View Page](../columns/view-page.md) | - | No | Shown |

**Note:** The Visitors column displays with the label "Category Page Views" in this widget to clarify it shows views of the category page itself, not content within the category.

## Empty State

When no data available:
- "No categories found for the selected period."

## Related Documentation

- [Category Pages Report](../reports/page-insights/category-pages.md)
- [Data Table Component](../components/data-table.md)
- [Category Column](../columns/category.md)

---

*Last Updated: 2025-11-12*
