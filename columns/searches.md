---
title: "Searches Column"
type: "column"
status: "Done"
figma: ""
used_in_widgets:
  - "search-terms-table"
---

# Searches Column

Shows how many times a specific search term was used by visitors when searching the website within the selected date range.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Search Terms Table](../widgets/search-terms-table.md)

## Display

**Value:** Positive integer (never 0)

**Format:**
- Right-aligned for easier comparison
- Thousand separator with comma (e.g., 1,234, 12,567)
- Examples: 5, 23, 147, 1,234

## Behavior

### Sortable
No (data is pre-sorted by this column in descending order)

### Interactive Elements
None - displays as plain text

## Display Examples

### Example 1: Standard Value

**Visual:** `23`

**Description:**
- Value: 23 searches
- Right-aligned
- No interactive elements

---

### Example 2: Large Value with Separator

**Visual:** `1,234`

**Description:**
- Value: 1,234 searches
- Formatted with comma separator
- Right-aligned

---

*Last Updated: 2025-11-11*
