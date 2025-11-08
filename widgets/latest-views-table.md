---
title: "Latest Views Table"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
figma: ""
default_sort: "last_view"
row_limit: 50
used_in_reports:
  - "views"
---

# Latest Views Table Widget

Displays the most recent page views across your website in a comprehensive data table.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | (Optional) |
| **Default Sort** | last_view |
| **Row Limit** | 50 |
| **Column Management** | ✅ Yes |
| **Pagination** | ✅ Yes |

## Used In Reports

- [Views](../reports/views.md) - Row 1, full width

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|--------------------|
| [Last View](../columns/last-view.md) | No (default) | Shown |
| [Visitor Informations](../columns/visitor-informations.md) | No | Shown |
| [Referrer](../columns/referrer.md) | No | Shown |
| [Page](../columns/page.md) | No | Shown |
| [Total Views](../columns/total-views.md) | No | Shown |

## Features

### Sorting
- Static default sort by "Last View" descending (most recent first)
- Sorting is not user-changeable

### Pagination
- 50 views per page (default)
- Page size options available

## Empty State

When no views match criteria:
- "No views found for the selected period"

---

*Last Updated: 2025-11-06*
