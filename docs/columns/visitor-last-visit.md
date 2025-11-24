---
title: "Visitor Last Visit Column"
type: "column"
status: "Done"
used_in_widgets:
  - "visitors-table"
  - "latest-views-table"
  - "online-visitors-table"
---

# Visitor Last Visit Column

Displays the date and time of a visitor's most recent visit to the website.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Visitors Table](../widgets/visitors-table.md)
- [Latest Views Table](../widgets/latest-views-table.md)
- [Online Visitors Table](../widgets/online-visitors-table.md)

## Data Displayed

### Type
`datetime`

### Example Output
`May 21, 7:09 am`

### Display Rules

- **Time Format (12h / 24h)**:
  Follows the current time format set in the WordPress settings.

- **Date Format (Month & Day)**:
  Uses the site's date format, but the **month is always shown in short form** (e.g., `May`, `Dec`, `Aug`).

- **Year**:
  Not displayed.

### Precision
- Displays date and time down to the minute
- Time zone: Uses WordPress site timezone setting

## Related Documentation

- [Visitors Table Widget](../widgets/visitors-table.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-06*
