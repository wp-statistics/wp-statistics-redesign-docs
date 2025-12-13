---
title: "Bounce Rate Column"
type: "column"
status: "Done"
used_in_widgets:
  - "countries-table"
  - "top-visitors-table"
  - "us-states-table"
  - "visitors-table"
---

# Bounce Rate Column

Shows the percentage of sessions where the visitor viewed only one page within the active date range.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Countries Table](../widgets/countries-table.md)
- [Top Visitors Table](../widgets/top-visitors-table.md)
- [US States Table](../widgets/us-states-table.md)
- [Visitors Table](../widgets/visitors-table.md)

## Display

**Value:** Percentage (0-100%)

**Format:**
- Right-aligned for easier comparison
- Whole number with % symbol
- Examples: 0%, 25%, 45%, 100%

**Calculation:**
- (Single-page sessions ÷ Total Sessions) × 100
- Single-page session defined as: Entry Page = Exit Page AND Total Views = 1 in that session
- Calculated using sessions within the selected date range
- Rounded to nearest whole percentage

## Interactive Elements

### Click Action
Opens the [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md) for this visitor in the same tab

### Hover Tooltip
Displays: "\{value\}% of sessions viewed only one page"
- Example: "0% of sessions viewed only one page"
- Example: "45% of sessions viewed only one page"
- Example: "100% of sessions viewed only one page"

## Display Examples

### Example: Moderate Bounce Rate

**Visual:** `45%`

**Description:**
- Value: 45% bounce rate - nearly half of sessions were single-page visits
- Click: Opens Single Visitor Report
- Hover: "45% of sessions viewed only one page"

## Related Documentation

- [Visitors Table Widget](../widgets/visitors-table.md)
- [Top Visitors Table Widget](../widgets/top-visitors-table.md)
- [Total Sessions Column](total-sessions.md)
- [Entry Page Column](entry-page.md)
- [Exit Page Column](exit-page.md)
- [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-12-13*
