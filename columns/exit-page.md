---
title: "Exit Page Column"
type: "column"
status: "Not Started"
figma: ""
used_in_widgets:
  - "latest-visitors"
---

# Exit Page Column

Displays the last page a visitor viewed before leaving your website.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Latest Visitors](../widgets/latest-visitors.md)

## Data Displayed

### Content
- **Page Title**: Display the page/post title (preferred)
- **URL Path**: Show URL if title unavailable
- **Format**: Clean, readable format

### Display Examples

**With Title:**
```
Contact Us
Checkout
Thank You Page
Product Details
```

**With URL (fallback):**
```
/blog/article-name
/cart
/thank-you
```

**Same as Entry (Single Page Visit):**
```
Home (same as entry)
```

## Display Format

### Standard Display
- Show page title
- Truncate long titles with ellipsis (max ~50 characters)
- Full title available on hover

### Special Cases

**Single Page Visit:**
- When entry and exit are the same
- Optional indicator: "(same as entry)" or "=" icon
- Helps identify bounced visitors

**Active Session:**
- For visitors still on site (Online Visitors)
- Display: "Currently browsing" or "Active"
- May show current page they're on

### Icons/Indicators
- 🚪 Exit icon (optional)
- 📄 Page type indicator
- ↪️ Same-page indicator (when entry = exit)

## Behavior

### Sortable
**Yes** - This column is sortable

- **Alphabetical**: Sort by page title or URL
- **By frequency**: Group common exit pages

### Interactive Elements
- **Click**: Open exit page in new tab (view the actual page)
- **Hover**: Show full page title and complete URL in tooltip
- **Compare**: Visual indicator when exit = entry (bounce)

## Empty State

When exit page data not available:
- Display: "Unknown" or "-"
- May occur for active sessions or incomplete data

## Responsive Behavior

### Desktop
- Full page title or URL
- Clear, readable format
- Hover tooltips active

### Tablet
- Abbreviated titles
- Truncate with ellipsis
- Touch-friendly

### Mobile
- Very short format (max 25 characters)
- Icon + truncated text
- Tap to see full details

## Analytics Insights

### Exit Page Analysis
Exit pages help identify:
- **Conversion Pages**: Where users complete goals
- **Problem Pages**: High exit rates may indicate issues
- **Natural Exits**: Contact, thank you, or completion pages
- **Bounce Analysis**: When entry = exit on first page

## Related Documentation

- [Latest Visitors Widget](../widgets/latest-visitors.md)
- [Entry Page Column](entry-page.md)
- [Views Report](../reports/views.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-06*
