---
title: "Views Per Session Column"
type: "column"
status: "Done"
used_in_widgets:
  - "visitors-table"
  - "top-visitors-table"
  - "referrers-table"
  - "source-categories-table"
---

# Views Per Session Column

Shows the average number of page views per session for each visitor within the active date range.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Visitors Table](../widgets/visitors-table.md)
- [Top Visitors Table](../widgets/top-visitors-table.md)
- [Referrers Table](../widgets/referrers-table.md)
- [Source Categories Table](../widgets/source-categories-table.md)

## Display

**Value:** Decimal number showing average pages per session

**Format:**
- Right-aligned for easier comparison
- 1 decimal place precision (e.g., 3.5, 12.8)
- No thousand separators (typically small values)
- Examples: 1.0, 3.5, 12.8, 45.3

**Calculation:**
- Total Views ÷ Total Sessions
- Calculated using data within the selected date range
- Minimum value: 1.0 (at least 1 view per session)

## Interactive Elements

### Click Action
Opens the [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md) for this visitor in the same tab

### Hover Tooltip
Displays: "\{value\} average page views per session"
- Example: "3.5 average page views per session"
- Example: "12.8 average page views per session"

## Display Examples

### Example: Moderate Engagement

**Visual:** `3.5`

**Description:**
- Value: 3.5 pages per session average
- Click: Opens Single Visitor Report
- Hover: "3.5 average page views per session"

## Related Documentation

- [Visitors Table Widget](../widgets/visitors-table.md)
- [Top Visitors Table Widget](../widgets/top-visitors-table.md)
- [Total Views Column](total-views.md)
- [Total Sessions Column](total-sessions.md)
- [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-12-08*
