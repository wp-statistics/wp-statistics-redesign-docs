---
title: "Top Entry Pages"
type: "widget"
component: "table"
add_on: "Data Plus"
status: "Done"
used_in_reports:
  - "visitors-overview"
---

# Top Entry Pages Widget

Displays the top 5 entry pages based on unique entrances count in a simplified table format.

## Widget Configuration

- **Component**: [Table](../components/table.md)
- **Add-on**: Data Plus (premium add-on)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | Top Entry Pages |
| **Default Sort** | unique_entrances |
| **Row Limit** | 5 |
| **Pagination** | ❌ No |
| **Link to Full Report** | ✅ Yes (links to Entry Pages report) |

## Used In Reports

This widget is used in the following reports:

- [Visitors Overview](../reports/visitors-overview.md) - Row 3, left column (only shown when Data Plus add-on is activated)

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|-------------------|
| [Entry Page](../columns/entry-page.md) | No | Shown |
| [Unique Entrances](../columns/unique-entrances.md) | No (static sort) | Shown |
| [View Page](../columns/view-page.md) | No | Shown |

**Note**: Data is pre-sorted by Unique Entrances in descending order. This is a static sort and cannot be changed by users.

## Premium Add-on

This widget requires the Data Plus add-on to be activated. When Data Plus is not activated:
- The widget is not displayed in the Visitors Overview report
- The Top Referrers widget expands to full width

## Empty State

When no entry page data is available for the selected period:
- "No data available for the selected period"

## Related Documentation

- [Table Component](../components/table.md)
- [Visitors Overview Report](../reports/visitors-overview.md)
- [Entry Page Column](../columns/entry-page.md)
- [Unique Entrances Column](../columns/unique-entrances.md)
- [View Page Column](../columns/view-page.md)

---

*Last Updated: 2025-11-08*
