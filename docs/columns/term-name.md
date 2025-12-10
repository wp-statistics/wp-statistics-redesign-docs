---
title: "Term Name"
type: "column"
status: "Done"
used_in_widgets:
  - "top-categories-table"
---

# Term Name Column

Shows the taxonomy term name (category, tag, or custom taxonomy term).

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Top Categories Table](../widgets/top-categories-table.md)

## Display

**Label:** Term name

**Truncation:**
- Truncate longer than 35 characters with "…"
- Truncation handled via CSS

## Interactive Elements

### Click Action
Opens the [Individual Category Report](../reports/content-analytics/individual-category.md) for this term in the same tab

### Hover Tooltip
Displays full term name if truncated

## Display Examples

### Example 1: Standard Term

**Visual:** `News`

**Description:**
- Label: Term name "News"
- Click: Opens Individual Category Report
- Hover: Shows full term name

### Example 2: Long Term Name Truncated

**Visual:** `WordPress Development Tutorial…`

**Description:**
- Label: Term name truncated at 35 chars
- Click: Opens Individual Category Report
- Hover: Shows full term name (e.g., "WordPress Development Tutorials and Guides")

## Related Documentation

- [Top Categories Table Widget](../widgets/top-categories-table.md)
- [Individual Category Report](../reports/content-analytics/individual-category.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-12-10*
