---
title: "Top Operating Systems"
type: "widget"
component: "horizontal-bar-list"
add_on: "Free"
status: "Done"
figma: ""
used_in_reports:
  - "visitors-overview"
---

# Top Operating Systems Widget

Displays the top 5 operating systems by visitor count in a horizontal bar list format with OS icons and previous period comparison.

## Widget Configuration

- **Component**: [Horizontal Bar List](../components/horizontal-bar-list.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Max Visible Items** | 5 |
| **Show Previous Period** | ✅ Yes |
| **Show Icons** | ✅ Yes (OS icons) |
| **Enable Other Item** | ❌ No |
| **Link to Full Report** | ✅ Yes ("View Full OS Report") |

## Used In Reports

This widget is used in the following reports:

- [Visitors Overview](../reports/visitors-overview.md) - Row 4

## List Behavior

The widget displays operating systems (e.g., Windows, macOS, Android) ranked by visitor count in descending order:
- Each item shows the OS name with icon and visitor count
- Horizontal bar represents relative traffic volume
- Previous period comparison shows percentage change with direction indicator
- Top item receives visual highlighting

Users can:
- View the visitor count for each operating system
- See previous period comparison percentage
- Hover to see detailed date range comparison tooltip
- Click "View Full OS Report" link to view the full Operating Systems report

## Empty State

When no operating system data is available for the selected period:
- "No data available for the selected period"

## Related Documentation

- [Horizontal Bar List Component](../components/horizontal-bar-list.md)
- [Visitors Overview Report](../reports/visitors-overview.md)

---

*Last Updated: 2025-11-11*
