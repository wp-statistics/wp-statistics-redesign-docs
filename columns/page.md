---
title: "Page Column"
type: "column"
status: "Done"
used_in_widgets:
  - "entry-pages-table"
  - "latest-views-table"
  - "exit-pages-table"
  - "online-visitors-table"
---

# Page Column

Shows the page title for each view in the table.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Entry Pages Table](../widgets/entry-pages-table.md)
- [Exit Pages Table](../widgets/exit-pages-table.md)(../widgets/entry-pages-table.md)
- [Latest Views Table](../widgets/latest-views-table.md)
- [Online Visitors Table](../widgets/online-visitors-table.md)

## Display

**Label:** Page title

**Truncation:**
- Truncate longer than 35 characters with "…"
- Truncation handled via CSS

## Interactive Elements

### Click Action
Opens the [Single Content Report](../reports/single-content-report.md) for this page in the same tab

### Hover Tooltip
Displays full URL path
- Example: `/example-page`

## Display Examples

### Example 1: Standard Page

**Visual:** `Getting Started Guide`

**Description:**
- Label: Page title "Getting Started Guide"
- Click: Opens Single Content Report
- Hover: Shows full URL path (e.g., `/getting-started-guide`)

---

### Example 2: Long Title Truncated

**Visual:** `Complete Guide to WordPress Conf…`

**Description:**
- Label: Page title truncated at 35 chars
- Click: Opens Single Content Report
- Hover: Shows full URL path (e.g., `/complete-guide-to-wordpress-configuration`)

## Related Documentation

- [Latest Views Table Widget](../widgets/latest-views-table.md)
- [Single Content Report](../reports/single-content-report.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-06*
