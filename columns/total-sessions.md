---
title: "Total Sessions Column"
type: "column"
status: "Done"
used_in_widgets:
  - "latest-visitors"
  - "top-visitors-table"
---

# Total Sessions Column

Shows the count of distinct sessions by the visitor within the active date range.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Latest Visitors](../widgets/latest-visitors.md)
- [Top Visitors Table](../widgets/top-visitors-table.md)

## Display

**Value:** Positive integer (never 0)

**Format:**
- Right-aligned for easier comparison
- Thousand separator with comma for values ≥ 1,000 (e.g., 1,234, 12,567)
- Examples: 1, 5, 23, 147, 1,234

## Session Definition

A session is a group of page views by a visitor that occur within a continuous period of activity. Sessions end after 30 minutes of inactivity. See [Data Model](../global/data-model.md) for complete session definition.

## Interactive Elements

### Click Action
Opens the [Single Visitor Report](../reports/single-visitor-report.md) for this visitor in the same tab

### Hover Tooltip
Displays: "{value} sessions in selected period"
- Example: "1 session in selected period"
- Example: "23 sessions in selected period"
- Example: "1,234 sessions in selected period"

## Display Examples

### Example: Multiple Sessions

**Visual:** `23`

**Description:**
- Value: 23 Sessions
- Click: Opens Single Visitor Report
- Hover: "23 sessions in selected period"

## Related Documentation

- [Latest Visitors Widget](../widgets/latest-visitors.md)
- [Top Visitors Table Widget](../widgets/top-visitors-table.md)
- [Single Visitor Report](../reports/single-visitor-report.md)
- [Data Model](../global/data-model.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-08*
