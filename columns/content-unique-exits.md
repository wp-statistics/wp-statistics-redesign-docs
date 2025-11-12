---
title: "Content Unique Exits Column"
type: "column"
status: "Done"
figma: ""
used_in_widgets:
  - "exit-pages-table"
---

# Content Unique Exits Column

Shows the count of unique sessions that ended on a specific page.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Exit Pages Table](../widgets/exit-pages-table.md)

## Display

**Label:** Unique Exits

**Format:** Numeric count (e.g., 1,234)

**Alignment:** Right-aligned

## Data Definition

A unique exit is counted when:
- A session ends on this specific page
- One session = one exit, regardless of page views during that session
- Includes sessions that end naturally (user leaves) or timeout

Example: If a page had 200 unique exits, it means 200 different sessions ended on that page during the selected date range.

## Sortable Behavior

This column is **sortable**.

- Default sort order: Descending (highest to lowest)
- Shows pages where most sessions end
- Higher values may indicate poor engagement or natural endpoints

## Related Documentation

- [Exit Pages Table Widget](../widgets/exit-pages-table.md)
- [Content Exit Rate Column](content-exit-rate.md)
- [Exit Page Column](exit-page.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-12*
