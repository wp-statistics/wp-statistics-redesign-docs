---
title: "Entry Page Column"
type: "column"
status: "Not Started"
figma: ""
used_in_widgets:
  - "latest-visitors"
---

# Entry Page Column

Displays the first page a visitor landed on during their session.

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
Home
Getting Started Guide
Contact Us
Product Features
```

**With URL (fallback):**
```
/blog/article-name
/product/item-123
/category/news
```

**Homepage:**
```
Home (/)
```

## Display Format

### Standard Display
- Show page title
- Truncate long titles with ellipsis (max ~50 characters)
- Full title available on hover

### Icons/Indicators
- 🏠 Homepage icon (optional)
- 📄 Page type indicator (post, page, product)
- Link icon for external pages

### URL Display
- Remove domain (show relative path only)
- Clean format without query parameters (unless significant)
- Keep readable structure

## Behavior

### Sortable
**Yes** - This column is sortable

- **Alphabetical**: Sort by page title or URL
- **By popularity**: Group frequently visited entry pages

### Interactive Elements
- **Click**: Open entry page in new tab (view the actual page)
- **Hover**: Show full page title and complete URL in tooltip
- **Right-click**: Copy URL option

## Empty State

When entry page data not available:
- Display: "Unknown" or "-"
- May occur for very old data or incomplete tracking

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

## Page Type Detection

### WordPress Content Types
- **Post**: Blog post title
- **Page**: Static page title
- **Homepage**: "Home" or site name
- **Archive**: "Category: [Name]" or "Tag: [Name]"
- **Search Results**: "Search: [term]"
- **Custom Post Type**: Type-specific display

## Related Documentation

- [Latest Visitors Widget](../widgets/latest-visitors.md)
- [Exit Page Column](exit-page.md)
- [Views Report](../reports/views.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-06*
