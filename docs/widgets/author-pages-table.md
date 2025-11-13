---
title: "Author Pages Table"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "content_visitors"
row_limit: 20
used_in_reports:
  - "author-pages"
---

# Author Pages Table

A data table showing author performance with visitor metrics and published content counts.

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

This widget appears in the following report pages:

- [Author Pages](../reports/page-insights/author-pages.md) - Row 1, full width

## Table Structure

### Columns

| Column | Label Override | Sortable | Default Visibility |
|--------|----------------|----------|-------------------|
| [Author](../columns/author.md) | - | Yes | Shown |
| [Content Visitors](../columns/content-visitors.md) | Author's Page Views | Yes | Shown |
| [Published Contents](../columns/published-contents.md) | - | Yes | Shown |
| [View Page](../columns/view-page.md) | View Author Page | No | Shown |

**Note:** The Content Visitors column displays with the label "Author's Page Views" and the View Page column displays with the label "View Author Page" in this widget to clarify they relate to the author's archive page.

## Empty State

When no data available:
- "No authors found for the selected period."

## Related Documentation

- [Author Pages Report](../reports/page-insights/author-pages.md)
- [Data Table Component](../components/data-table.md)
- [Author Column](../columns/author.md)

---

*Last Updated: 2025-11-12*
