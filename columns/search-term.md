---
title: "Search Term Column"
type: "column"
status: "Done"
used_in_widgets:
  - "search-terms-table"
---

# Search Term Column

Shows the keyword or phrase that a visitor entered when searching within the website.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Search Terms Table](../widgets/search-terms-table.md)

## Display

**Label:** The search term or keyword phrase

**Truncation:**
- Truncate longer than 50 characters with "…"
- Truncation handled via CSS

## Behavior

### Sortable
No (data is pre-sorted by Searches column)

### Interactive Elements
None - displays as plain text

## Display Examples

### Example 1: Standard Search Term

**Visual:** `wordpress statistics plugin`

**Description:**
- Label: Full search term
- No truncation needed
- Plain text display

---

### Example 2: Long Search Term

**Visual:** `how to install and configure wordpress statisti…`

**Description:**
- Label: Search term truncated at 50 chars
- Truncation applied via CSS

---

*Last Updated: 2025-11-11*
