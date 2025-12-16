---
title: "Percentage of Total"
type: "column"
status: "Done"
used_in_widgets:
  - "countries-table"
  - "os-table"
---

# Percentage of Total Column

Shows the percentage share of total visitors for this item.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Countries Table](../widgets/countries-table.md)
- [OS Table](../widgets/os-table.md)

## Display

**Label:** % of Total

**Format:** Percentage with 1 decimal place

**Alignment:** Right

**Examples:** 0.5%, 12.3%, 45.0%

## Calculation

**Formula:** (Item Visitors ÷ Total Visitors) × 100

- Calculated for the selected date range
- Rounded to 1 decimal place
- Sum of all items equals 100%

## Sortable Behavior

- **Sortable:** Yes
- **Default Sort Order:** Descending (highest first)
- **Sort Type:** Numeric

## Related Documentation

- [Countries Table Widget](../widgets/countries-table.md)
- [OS Table Widget](../widgets/os-table.md)
- [Countries Report](../reports/geographic/countries.md)
- [Operating Systems Report](../reports/devices/operating-systems.md)
- [Visitors Column](visitors.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-12-16*
