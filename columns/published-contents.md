---
title: "Published Contents Column"
type: "column"
status: "Done"
used_in_widgets:
  - "author-pages-table"
---

# Published Contents Column

Shows the number of content items published during the selected date range for a grouping (author, category, tag, etc.).

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Author Pages Table](../widgets/author-pages-table.md)

## Display

**Label:** Published Contents

**Format:** Simple number (e.g., 42)

**Alignment:** Right-aligned

## Data Definition

Counts the number of content items (posts, pages, custom post types) published **during the selected date range** for the grouping (author, category, tag, etc.).

**Important:** This count **IS filtered by the date range**. It only shows content published within the selected time period.

**Example Usage:**
- Authors: If an author published 12 posts during the selected week, displays "12"
- Categories: If 8 posts were published to a category in the selected month, displays "8"
- Tags: If 5 posts with a tag were published in the date range, displays "5"

**Difference from Total Published Content:**
- **Published Contents**: Date-filtered, shows content published during selected period
- **Total Published Content**: Not date-filtered, shows all published content regardless of date

## Related Documentation

- [Author Pages Table Widget](../widgets/author-pages-table.md)
- [Total Published Content Column](total-published-content.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-12*
