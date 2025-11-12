---
title: "Logged-in Users Views Table"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
figma: ""
default_sort: "last_view"
row_limit: 20
used_in_reports:
  - "logged-in-users"
---

# Logged-in Users Views Table Widget

Displays the most recent page views from logged-in users in a comprehensive data table.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|----------|
| **Title** | Latest Views |
| **Default Sort** | last_view |
| **Row Limit** | 20 |
| **Column Management** | ✅ Yes |
| **Pagination** | ✅ Yes |

## Used In Reports

- [Logged-in Users](../reports/logged-in-users.md) - Row 2, full width

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|-------------------|
| [Visitor Last Visit](../columns/visitor-last-visit.md) | No (default) | Shown |
| [Visitor Info](../columns/visitor-info.md) | No | Shown |
| [Referrer](../columns/referrer.md) | No | Shown |
| [Page](../columns/page.md) | No | Shown |
| [Total Views](../columns/total-views.md) | No | Shown |

## Empty State

When no views match criteria:
- "No views found for the selected period"

## Related Documentation

- [Data Table Component](../components/data-table.md)
- [Latest Views Table](../widgets/latest-views-table.md) - Similar widget with 50 rows for Views report
- [Logged-in Users Report](../reports/logged-in-users.md)

---

*Last Updated: 2025-11-11*
