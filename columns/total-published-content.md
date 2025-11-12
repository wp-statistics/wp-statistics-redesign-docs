---
title: "Total Published Content Column"
type: "column"
status: "Done"
figma: ""
used_in_widgets:
  - "category-pages-table"
---

# Total Published Content Column

Shows the number of published content items in a taxonomy term, tag, author, or other grouping.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Category Pages Table](../widgets/category-pages-table.md)

## Display

**Label:** Published Content

**Format:** Simple number (e.g., 42)

**Alignment:** Right-aligned

## Data Definition

Counts the **total** number of published content items (posts, pages, custom post types) assigned to the grouping (category, tag, author, etc.).

**Important:** This count is **not filtered by the date range**. It shows the total published content in the grouping, regardless of when they were published or viewed.

**Example Usage:**
- Categories: If a category has 42 total published posts, displays "42"
- Tags: If a tag is used on 18 total posts, displays "18"
- Authors: If an author has 156 total published articles, displays "156"

The date range filter affects other metrics (like visitors, views) but not this total count.

## Related Documentation

- [Category Pages Table Widget](../widgets/category-pages-table.md)
- [Category Column](category.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-12*
