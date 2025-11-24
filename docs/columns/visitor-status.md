---
title: "Visitor Status Column"
type: "column"
status: "Done"
used_in_widgets:
  - "visitors-table"
  - "top-visitors-table"
---

# Visitor Status Column

Shows whether a visitor is new (first-ever session) or returning (has prior sessions) based on their complete visit history.

**TODO**: Consider integrating this badge into the [Visitor Informations Column](visitor-informations.md) as an additional element, rather than maintaining as a separate column.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Visitors Table](../widgets/visitors-table.md)
- [Top Visitors Table](../widgets/top-visitors-table.md)

## Display

**Value:** Badge or indicator showing visitor lifecycle status

**Options:**
- **New**: Visitor having their first session ever
- **Returning**: Visitor who has had at least one prior session

**Format:**
- Displayed as badge, tag, or icon integrated with Visitor Informations column
- Visual treatment distinguishes new from returning visitors

**Classification Logic:**
- All-time classification (not date-range dependent)
- "New" = First session timestamp is within the selected date range AND it's their first-ever session
- "Returning" = First session timestamp was before the selected date range OR has multiple sessions in history

## Interactive Elements

### Hover Tooltip

**For New Visitors:**
Displays: "First visit: \{date\}"
- Example: "First visit: Nov 8, 2025"

**For Returning Visitors:**
Displays: "Returning visitor since \{date\}"
- Example: "Returning visitor since Oct 15, 2025"

## Display Examples

### Example 1: New Visitor

**Visual:** `[New]` badge next to visitor information

**Description:**
- Visitor is having their first session
- Classification never changes for this visitor
- Hover: "First visit: Nov 8, 2025"

---

### Example 2: Returning Visitor

**Visual:** `[Returning]` badge next to visitor information

**Description:**
- Visitor has had prior sessions
- Hover: "Returning visitor since Oct 15, 2025"

## Behavior Filters

This column works with the [Behavior Filters](../global/interactions.md) option "New vs Returning Visitors" which allows filtering the table to show only new or only returning visitors.

## Classification Scope

**Important:** This classification is based on all-time visitor history, not the selected date range.

**Example Scenarios:**

**Scenario 1:** Visitor's first session was Jan 1, 2025. Viewing data for October 2025.
- Result: Shows as "Returning" (even though they may have been active in October)

**Scenario 2:** Visitor's first session was Oct 15, 2025. Viewing data for October 2025.
- Result: Shows as "New" (first session is within the selected period)

**Scenario 3:** Visitor's first session was Oct 15, 2025. Viewing data for November 2025.
- Result: Shows as "Returning" (first session was in a previous period)

## Related Documentation

- [Visitors Table Widget](../widgets/visitors-table.md)
- [Top Visitors Table Widget](../widgets/top-visitors-table.md)
- [Behavior Filters](../global/interactions.md)
- [Data Model](../global/data-model.md)
- [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md)
- [Visitor Informations Column](visitor-informations.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-08*
