---
title: "Session Duration Column"
type: "column"
status: "Done"
used_in_widgets:
  - "latest-visitors"
  - "top-visitors-table"
---

# Session Duration Column

Shows the average time visitors spend during their sessions within the active date range.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Latest Visitors](../widgets/latest-visitors.md)
- [Top Visitors Table](../widgets/top-visitors-table.md)

## Display

**Value:** Time duration in HH:MM:SS format

**Format:**
- Hours:Minutes:Seconds with zero-padding
- Examples: 00:02:34, 00:15:42, 01:08:15, 12:45:30

**Calculation:**
- Average of all session durations for this visitor within the selected date range
- If visitor has only 1 session: shows that session's duration
- If visitor has multiple sessions: shows mean duration across all sessions

## Interactive Elements

### Click Action
Opens the [Single Visitor Report](../reports/single-visitor-report.md) for this visitor in the same tab

### Hover Tooltip
Displays: "Average session duration: {value}"
- Example: "Average session duration: 00:02:34"
- Example: "Average session duration: 01:08:15"

## Display Examples

### Example: Medium Engagement

**Visual:** `00:15:42`

**Description:**
- Value: 15 minutes and 42 seconds average
- Click: Opens Single Visitor Report
- Hover: "Average session duration: 00:15:42"

## Related Documentation

- [Latest Visitors Widget](../widgets/latest-visitors.md)
- [Top Visitors Table Widget](../widgets/top-visitors-table.md)
- [Single Visitor Report](../reports/single-visitor-report.md)
- [Online For Column](online-for.md) - Shows current session duration for online visitors
- [Data Model](../global/data-model.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-08*
