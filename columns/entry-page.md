---
title: "Entry Page Column"
type: "column"
status: "Done"
figma: ""
used_in_widgets:
  - "latest-visitors"
  - "top-visitors-table"
  - "top-entry-pages"
---

# Entry Page Column

Shows the first page a visitor landed on in a session.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Latest Visitors](../widgets/latest-visitors.md)
- [Top Visitors Table](../widgets/top-visitors-table.md)
- [Top Entry Pages](../widgets/top-entry-pages.md)

## Attribution Model Behavior

When a visitor has multiple sessions within the selected date range, the entry page shown depends on the [Attribution Model](../global/attribution-settings.md) setting:

- **First Touch Attribution**: Shows entry page from the visitor's first session in the date range
- **Last Touch Attribution** (Default): Shows entry page from the visitor's most recent session in the date range

See [Attribution Settings](../global/attribution-settings.md) for complete details.

## Display

**Label:** Page title

**Truncation:**
- Truncate longer than 35 characters with "…"
- Truncation handled via CSS

**Query String Indicator:**
- Show tiny "i" icon after the label whenever a query string exists in the URL

## Interactive Elements

### Click Action
Opens the [Single Content Report](../reports/single-content-report.md) for this page in the same tab

### Hover Tooltip

**When Query String Exists:**
- Shows only the query string parameters
- Example: `/?utm_source=google&utm_medium=cpc`

**When Title is Long/Truncated:**
- Shows full page title + page path
- Example: `Complete Guide to WordPress Configuration - /blog/wordpress-guide`

## Display Examples

### Example 1: Standard Page

**Visual:** `Getting Started Guide`

**Description:**
- Label: Page title "Getting Started Guide"
- No query string, no icon
- Click: Opens Single Content Report

---

### Example 2: Page with Query String

**Visual:** `Product Features ⓘ`

**Description:**
- Label: Page title "Product Features"
- Has query string, shows "i" icon
- Hover: Shows query string only (e.g., `/?utm_source=google&utm_medium=cpc`)
- Click: Opens Single Content Report

---

### Example 3: Long Title Truncated

**Visual:** `How to Get Started with Advanced…`

**Description:**
- Label: Page title truncated at 35 chars
- Hover: Shows full title + page path (e.g., `How to Get Started with Advanced Features - /blog/advanced-features`)
- Click: Opens Single Content Report

---

### Example 4: Long Title with Query String

**Visual:** `Complete Guide to WordPress Conf… ⓘ`

**Description:**
- Label: Page title truncated at 35 chars
- Has query string, shows "i" icon
- Hover: Shows query string only (e.g., `/?utm_campaign=newsletter&utm_source=email`)
- Click: Opens Single Content Report

## Related Documentation

- [Attribution Settings](../global/attribution-settings.md)
- [Data Model](../global/data-model.md)
- [Latest Visitors Widget](../widgets/latest-visitors.md)
- [Exit Page Column](exit-page.md)
- [Views Report](../reports/views.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-08*
