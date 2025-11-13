---
title: "Category Column"
type: "column"
status: "Done"
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
Displays full taxonomy path including taxonomy slug, parent category (if exists), and category slug
- Format: `/taxonomy-slug/parent-category-slug/category-slug/`
- Example with parent: `/category/news/technology/`
- Example without parent: `/category/technology/`
- Example custom taxonomy: `/product-category/electronics/laptops/`

## Display Examples

### Example 1: Standard Category (No Parent)

**Visual:** `Technology`

**Description:**
- Label: Category name "Technology"
- Click: Opens Single Category Report
- Hover: Shows taxonomy path `/category/technology/`

---

### Example 2: Category with Parent

**Visual:** `Laptops`

**Description:**
- Label: Category name "Laptops"
- Click: Opens Single Category Report
- Hover: Shows taxonomy path `/product-category/electronics/laptops/`

---

### Example 3: Long Category Name Truncated

**Visual:** `WordPress Development Tips and T…`

**Description:**
- Label: Category name truncated at 35 chars
- Click: Opens Single Category Report
- Hover: Shows taxonomy path `/category/wordpress-development-tips/`

## Related Documentation

- [Category Pages Table Widget](../widgets/category-pages-table.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-12*
