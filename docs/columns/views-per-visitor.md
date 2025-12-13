---
title: "Views per Visitor"
type: "column"
status: "Done"
used_in_widgets:
  - "countries-table"
  - "us-states-table"
---

# Views per Visitor Column

Shows the average number of page views per unique visitor.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Countries Table](../widgets/countries-table.md)
- [US States Table](../widgets/us-states-table.md)

## Display

**Label:** Views/Visitor

**Format:** Number with 1 decimal place

**Alignment:** Right

**Examples:** 1.0, 2.5, 4.8

## Calculation

**Formula:** Total Views ÷ Unique Visitors

- Calculated for the selected date range
- Rounded to 1 decimal place
- Higher values indicate more engaged visitors

## Sortable Behavior

- **Sortable:** Yes
- **Default Sort Order:** Descending (highest first)
- **Sort Type:** Numeric

## Related Documentation

- [Countries Table Widget](../widgets/countries-table.md)
- [Countries Report](../reports/geographic/countries.md)
- [Visitors Column](visitors.md)
- [Views Column](views.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-12-13*
