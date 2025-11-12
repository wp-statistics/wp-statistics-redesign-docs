---
title: "URL Column"
type: "column"
status: "Done"
used_in_widgets:
  - "404-pages-table"
---

# URL Column

Shows the URL path with a link to detailed analytics for that URL.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [404 Pages Table](../widgets/404-pages-table.md)

## Display

**Label:** URL

**Truncation:**
- Truncate longer than 50 characters with "…"
- Truncation handled via CSS

## Interactive Elements

### Click Action
Opens the Single URL Report for this URL in the same tab

### Hover Tooltip
Displays full URL path
- Example: `/blog/category/wordpress-development/tutorials/advanced-techniques/page/3`

## Display Examples

### Example 1: Standard URL

**Visual:** `/changelog/page/2`

**Description:**
- Label: URL path "/changelog/page/2"
- Click: Opens Single URL Report
- Hover: Shows full URL path

---

### Example 2: Long URL Truncated

**Visual:** `/blog/category/wordpress-development/tutori…`

**Description:**
- Label: URL truncated at 50 chars
- Click: Opens Single URL Report
- Hover: Shows full URL path `/blog/category/wordpress-development/tutorials/advanced-techniques/page/3`

## Related Documentation

- [404 Pages Table Widget](../widgets/404-pages-table.md)
- [Table Component](../components/table.md)

---

*Last Updated: 2025-11-12*
