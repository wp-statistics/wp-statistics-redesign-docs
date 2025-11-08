---
title: "Exit Page Column"
type: "column"
status: "Done"
figma: ""
used_in_widgets:
  - "latest-visitors"
  - "top-visitors-table"
---

# Exit Page Column

Shows the last page a visitor viewed in the current session.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Latest Visitors](../widgets/latest-visitors.md)
- [Top Visitors Table](../widgets/top-visitors-table.md)

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
- Example: `/blog/article-name`

## Display Examples

### Example 1: Standard Page

**Visual:** `Contact Us`

**Description:**
- Label: Page title "Contact Us"
- Click: Opens Single Content Report
- Hover: Shows full URL path

---

### Example 2: Long Title Truncated

**Visual:** `Complete Guide to WordPress Conf…`

**Description:**
- Label: Page title truncated at 35 chars
- Click: Opens Single Content Report
- Hover: Shows full URL path

---

### Example 3: Page with Query String

**Visual:** `Thank You Page`

**Description:**
- Label: Page title "Thank You Page"
- Click: Opens Single Content Report
- Hover: Shows full URL path (e.g., `/thank-you`)

---

### Example 4: Same as Entry (Bounce)

**Visual:** `Home Page`

**Description:**
- Label: Page title "Home Page"
- This is a single-page visit (entry = exit)
- Click: Opens Single Content Report
- Hover: Shows full URL

## Related Documentation

- [Latest Visitors Widget](../widgets/latest-visitors.md)
- [Entry Page Column](entry-page.md)
- [Views Report](../reports/views.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-06*
