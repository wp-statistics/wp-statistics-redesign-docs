---
title: "Top Visitors"
type: "report"
group: "Visitors"
show_in_menu: true
add_on: "Free"
status: "Done"
interactions:
  - "Date Picker"
  - "Advanced Filters"
widgets:
  - row: 1
    columns: ["visitors-table"]
predefined_filters:
  - filter: "total_views"
    operator: "greater_than"
    value: 5
default_sort: "total_views"
default_column_visibility:
  views_per_session: "shown"
  bounce_rate: "shown"
---

# Top Visitors Report

Identify and analyze your most frequent and engaged visitors during the selected date range.

## Page Configuration

- **Menu Visibility**: Shown in main menu
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Available Interactions

- **Date Picker**
- **[Advanced Filters](../../global/advanced-filters.md)**: Visitor Analysis filter group with predefined filter `Total Views > 5`

## Report Configuration

This report uses the same widget as the Visitors report but with different default settings:

- **Predefined Filter**: `Total Views > 5` (visible and modifiable by users)
- **Default Sort**: Total Views (descending)
- **Default Column Visibility**: Views Per Session and Bounce Rate shown by default

## Widget Layout

### Row 1 (Full Width)
- [Visitors Table](../../widgets/visitors-table.md)

---

*Last Updated: 2025-11-24*
