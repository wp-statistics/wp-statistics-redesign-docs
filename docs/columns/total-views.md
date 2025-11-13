---
title: "Total Views Column"
type: "column"
status: "Done"
used_in_widgets:
  - "latest-visitors"
  - "latest-views-table"
  - "top-visitors-table"
  - "top-visitors"
---

# Total Views Column

Shows the count of page-views made by the visitor within the active date range.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Latest Visitors](../widgets/latest-visitors.md)
- [Latest Views Table](../widgets/latest-views-table.md)
- [Top Visitors Table](../widgets/top-visitors-table.md)
- [Top Visitors](../widgets/top-visitors.md)

## Display

**Value:** Positive integer (never 0)

**Format:**
- Right-aligned for easier comparison
- Thousand separator with comma (e.g., 1,234, 12,567)
- Examples: 5, 23, 147, 1,234

## Interactive Elements

### Click Action
Opens the [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md) for this visitor in the same tab

### Hover Tooltip
Displays: "\{value\} Page Views from this visitor in selected period"
- Example: "5 Page Views from this visitor in selected period"
- Example: "1,234 Page Views from this visitor in selected period"

## Display Examples

### Example 1: Standard Value

**Visual:** `23`

**Description:**
- Value: 23 Page Views
- Click: Opens Single Visitor Report
- Hover: "23 Page Views from this visitor in selected period"

---

### Example 2: Large Value with Separator

**Visual:** `1,234`

**Description:**
- Value: 1,234 Page Views (formatted with comma separator)
- Click: Opens Single Visitor Report
- Hover: "1,234 Page Views from this visitor in selected period"

## Related Documentation

- [Data Model](../global/data-model.md)
- [Latest Visitors Widget](../widgets/latest-visitors.md)
- [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md)
- [Views Report](../reports/visitor-insights/views.md)
- [Total Sessions Column](total-sessions.md)
- [Views Per Session Column](views-per-session.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-08*
