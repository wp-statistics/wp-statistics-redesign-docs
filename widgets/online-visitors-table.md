---
title: "Online Visitors Table"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
figma: ""
default_sort: "last_view"
row_limit: 50
used_in_reports:
  - "online-visitors"
---

# Online Visitors Table Widget

Displays visitors currently browsing your website in a comprehensive data table.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | null |
| **Default Sort** | last_view |
| **Row Limit** | 50 |
| **Column Management** | ✅ Yes |
| **Pagination** | ✅ Yes |

## Used In Reports

This widget is used in the following reports:

- [Online Visitors](../reports/online-visitors.md)

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|--------------------|
| [Last View](../columns/last-view.md) | No (default) | Shown |
| [Online For](../columns/online-for.md) | No | Shown |
| [Visitor Informations](../columns/visitor-informations.md) | No | Shown |
| [Referrer](../columns/referrer.md) | No | Shown |
| [Page](../columns/page.md) | No | Shown |

## Empty State

When no visitors are currently online:
- "No visitors are currently online"

## Related Documentation

- [Online Visitors Report](../reports/online-visitors.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-06*
