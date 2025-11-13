---
title: "Top Pages Full"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "visitors"
row_limit: 20
used_in_reports:
  - "top-pages"
---

# Top Pages Full

A comprehensive data table showing the most visited pages with traffic volume and engagement metrics.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | null |
| **Default Sort** | Visitors (descending) |
| **Row Limit** | 20 |
| **Column Management** | ✅ Yes |
| **Pagination** | ✅ Yes |

## Used In Reports

This widget appears in the following report pages:

- [Top Pages](../reports/top-pages.md) - Row 1, full width

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|-------------------|
| [Page](../columns/page.md) | Yes | Shown |
| [Content Visitors](../columns/content-visitors.md) | Yes | Shown |
| [Content Views](../columns/content-views.md) | Yes | Shown |
| [Content Bounce Rate](../columns/content-bounce-rate.md) | Yes | Shown |
| [Content Session Duration](../columns/content-session-duration.md) | Yes | Hidden |
| [Content Published Date](../columns/content-published-date.md) | Yes | Hidden |
| [View Page](../columns/view-page.md) | No | Shown |

## Empty State

When no data available:
- "No pages found for the selected period."

## Related Documentation

- [Top Pages Report](../reports/top-pages.md)
- [Data Table Component](../components/data-table.md)
- [Page Column](../columns/page.md)

---

*Last Updated: 2025-11-12*
