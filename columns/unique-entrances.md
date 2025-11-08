---
title: "Unique Entrances Column"
type: "column"
status: "Done"
figma: ""
used_in_widgets:
  - "top-entry-pages"
---

# Unique Entrances Column

Shows the count of unique sessions that started on a specific page.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Top Entry Pages](../widgets/top-entry-pages.md)

## Display

**Label:** Number

**Format:** Numeric count

**Alignment:** Right-aligned (typical for numeric data)

## Data Definition

A unique entrance is counted when:
- A session begins on this specific page
- One session = one entrance, regardless of how many times the visitor returns to that page during the session

Example: If a page received 150 unique entrances, it means 150 different sessions started on that page during the selected date range.

## Related Documentation

- [Top Entry Pages Widget](../widgets/top-entry-pages.md)
- [Entry Page Column](entry-page.md)
- [Data Model](../global/data-model.md)
- [Table Component](../components/table.md)

---

*Last Updated: 2025-11-08*
