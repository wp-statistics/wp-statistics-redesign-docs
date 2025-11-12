---
title: "View Page Column"
type: "column"
status: "Done"
figma: ""
used_in_widgets:
  - "category-pages-table"
  - "entry-pages-table"
  - "exit-pages-table"
  - "top-entry-pages"
---

# View Page Column

Provides a button/link to view the actual page content on the website.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Category Pages Table](../widgets/category-pages-table.md)
- [Entry Pages Table](../widgets/entry-pages-table.md)
- [Exit Pages Table](../widgets/exit-pages-table.md)(../widgets/entry-pages-table.md)
- [Top Entry Pages](../widgets/top-entry-pages.md)

## Display

**Label:** "View Page"

**Format:** Button or link styled element

**Alignment:** Center or right-aligned

## Sortable Behavior

This column is **not sortable** as it contains an action button rather than data values.

## Click Action

When clicked:
- Opens the page's public URL on the website
- Opens in a **new tab** (target="_blank")
- Takes the user directly to the live page content

Example: If the entry page is "Getting Started Guide" with URL `/blog/getting-started`, clicking "View Page" opens `https://yoursite.com/blog/getting-started` in a new tab.

## Purpose

Allows users to quickly navigate from analytics data to the actual page content for context, review, or verification purposes.

## Related Documentation

- [Category Pages Table Widget](../widgets/category-pages-table.md)
- [Entry Pages Table Widget](../widgets/entry-pages-table.md)
- [Exit Pages Table Widget](../widgets/exit-pages-table.md)
- [Top Entry Pages Widget](../widgets/top-entry-pages.md)
- [Category Column](category.md)
- [Entry Page Column](entry-page.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-12*
