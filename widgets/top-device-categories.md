---
title: "Top Device Categories"
type: "widget"
component: "horizontal-bar-list"
add_on: "Free"
status: "Done"
figma: ""
used_in_reports:
  - "visitors-overview"
---

# Top Device Categories Widget

Displays the top 5 device categories by visitor count in a horizontal bar list format with device icons and previous period comparison.

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
| **Show Icons** | ✅ Yes (device icons) |
| **Enable Other Item** | ❌ No |
| **Link to Full Report** | ✅ Yes (links to Device Categories report) |

## Used In Reports

This widget is used in the following reports:

- [Visitors Overview](../reports/visitors-overview.md) - Row 4

## List Behavior

The widget displays device categories (e.g., Desktop, Mobile, Tablet) ranked by visitor count in descending order:
- Each item shows the device category name with icon and visitor count
- Horizontal bar represents relative traffic volume
- Previous period comparison shows percentage change with direction indicator
- Top item receives visual highlighting

Users can:
- View the visitor count for each device category
- See previous period comparison percentage
- Hover to see detailed date range comparison tooltip
- Click the link below to view the full Device Categories report

## Empty State

When no device category data is available for the selected period:
- "No data available for the selected period"

## Related Documentation

- [Horizontal Bar List Component](../components/horizontal-bar-list.md)
- [Visitors Overview Report](../reports/visitors-overview.md)

---

*Last Updated: 2025-11-11*
