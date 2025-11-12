---
title: "Category Column"
type: "column"
status: "Done"
figma: ""
used_in_widgets:
  - "category-pages-table"
---

# Category Column

Shows the category name with a link to detailed analytics for that category.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Category Pages Table](../widgets/category-pages-table.md)

## Display

**Label:** Category name

**Truncation:**
- Truncate longer than 35 characters with "…"
- Truncation handled via CSS

## Interactive Elements

### Click Action
Opens the Single Category Report for this category in the same tab

### Hover Tooltip
Displays category slug
- Example: `technology` or `news-updates`

## Display Examples

### Example 1: Standard Category

**Visual:** `Technology`

**Description:**
- Label: Category name "Technology"
- Click: Opens Single Category Report
- Hover: Shows category slug (e.g., `technology`)

---

### Example 2: Long Category Name Truncated

**Visual:** `WordPress Development Tips and T…`

**Description:**
- Label: Category name truncated at 35 chars
- Click: Opens Single Category Report
- Hover: Shows category slug (e.g., `wordpress-development-tips`)

## Sortable Behavior

This column is **sortable**.

- Default sort order: Ascending (A-Z)
- Sorts alphabetically by category name

## Related Documentation

- [Category Pages Table Widget](../widgets/category-pages-table.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-12*
