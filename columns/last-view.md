---
title: "Last View Column"
type: "column"
status: "Not Started"
figma: ""
used_in_widgets:
  - "latest-visitors"
---

# Last View Column

Displays the date and time of a visitor's most recent visit to the website.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Latest Visitors](../widgets/latest-visitors.md)

## Data Displayed

### Format
- **Full Format**: "January 15, 2025 at 2:30 PM"
- **Relative Format** (optional): "5 minutes ago", "2 hours ago", "3 days ago"

### Precision
- Displays date and time down to the minute
- Time zone: Uses WordPress site timezone setting
- Updates in real-time for "Online Visitors" contexts

## Behavior

### Sortable
**Yes** - This column is sortable

- **Default Sort**: Descending (most recent first)
- **Ascending**: Oldest visits first
- **Descending**: Newest visits first

### Display Rules
- Recent visits (< 24 hours): May show relative time format
- Older visits: Show full date and time
- Consistent format across the column

## Responsive Behavior

### Desktop
- Full date and time format
- Clear timestamp display

### Tablet
- May use shorter date format
- Time still visible

### Mobile
- Abbreviated format: "Jan 15, 2:30 PM"
- Or relative format: "2 hours ago"

## Related Documentation

- [Latest Visitors Widget](../widgets/latest-visitors.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-06*
