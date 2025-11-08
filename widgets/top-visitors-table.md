---
title: "Top Visitors Table"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
figma: ""
default_sort: "total_views"
row_limit: 50
used_in_reports:
  - "top-visitors"
---

# Top Visitors Table Widget

Displays the most frequent and engaged visitors during the selected date range in a comprehensive data table.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Reports

This widget is used in the following reports:

- [Top Visitors](../reports/top-visitors.md)

## Display Settings

- **Default Sort**: Total Views
- **Rows Per Page**: 50

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|--------------------|
| [Total Views](../columns/total-views.md) | No (default) | Shown |
| [Visitor Informations](../columns/visitor-informations.md) | No | Shown |
| [Referrer](../columns/referrer.md) | No | Shown |
| [Entry Page](../columns/entry-page.md) | No | Shown |
| [Exit Page](../columns/exit-page.md) | No | Shown |

## Empty State

When no visitors are found for the selected period:
- "No visitors found for the selected period"

## Related Documentation

- [Top Visitors Report](../reports/top-visitors.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-06*
