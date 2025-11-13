---
title: "Author Column"
type: "column"
status: "Done"
used_in_widgets:
  - "author-pages-preview"
  - "author-pages-table"
---

# Author Column

Shows the author name with a link to detailed analytics for that author.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Author Pages Preview](../widgets/author-pages-preview.md)
- [Author Pages Table](../widgets/author-pages-table.md)

## Display

**Label:** Author name

**Truncation:**
- Truncate longer than 35 characters with "…"
- Truncation handled via CSS

## Interactive Elements

### Click Action
Opens the Single Author Report for this author in the same tab

### Hover Tooltip
Displays author URL path
- Format: `/author/author-slug/`
- Example: `/author/john-doe/`

## Display Examples

### Example 1: Standard Author

**Visual:** `John Doe`

**Description:**
- Label: Author name "John Doe"
- Click: Opens Single Author Report
- Hover: Shows author URL path `/author/john-doe/`

---

### Example 2: Long Author Name Truncated

**Visual:** `Dr. Elizabeth Montgomery-Smit…`

**Description:**
- Label: Author name truncated at 35 chars
- Click: Opens Single Author Report
- Hover: Shows author URL path `/author/elizabeth-montgomery-smith/`

## Related Documentation

- [Author Pages Table Widget](../widgets/author-pages-table.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-12*
