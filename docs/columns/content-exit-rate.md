---
title: "Content Exit Rate Column"
type: "column"
status: "Done"
used_in_widgets:
  - "exit-pages-table"
---

# Content Exit Rate Column

Shows the percentage of page views that were the last in a session.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Exit Pages Table](../widgets/exit-pages-table.md)

## Display

**Label:** Exit Rate

**Format:** Percentage with one decimal place (e.g., 45.2%)

**Alignment:** Right-aligned

## Calculation

Exit rate for a page = (Number of exits from this page / Total page views for this page) × 100

This differs from bounce rate, which measures single-page sessions. Exit rate measures the last page viewed in any session.

## Sortable Behavior

This column is **sortable**.

- Default sort order: Descending (highest to lowest)
- Higher exit rate indicates page is frequently the last one viewed
- May indicate natural endpoint (conversion, thank you page) or engagement issue

## Related Documentation

- [Exit Pages Table Widget](../widgets/exit-pages-table.md)
- [Content Unique Exits Column](content-unique-exits.md)
- [Content Bounce Rate Column](content-bounce-rate.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-12*
