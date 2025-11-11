---
title: "Top Countries"
type: "widget"
component: "horizontal-bar-list"
add_on: "Free"
status: "Done"
figma: ""
used_in_reports:
  - "visitors-overview"
---

# Top Countries Widget

Displays the top 5 countries by visitor count in a horizontal bar list format with country flags and previous period comparison.

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
| **Show Icons** | ✅ Yes (country flags) |
| **Enable Other Item** | ❌ No |
| **Link to Full Report** | ✅ Yes (links to Countries report) |

## Used In Reports

This widget is used in the following reports:

- [Visitors Overview](../reports/visitors-overview.md) - Row 4

## List Behavior

The widget displays countries (e.g., United States, United Kingdom, France) ranked by visitor count in descending order:
- Each item shows the country name with flag icon and visitor count
- Horizontal bar represents relative traffic volume
- Previous period comparison shows percentage change with direction indicator
- Top item receives visual highlighting

Users can:
- View the visitor count for each country
- See previous period comparison percentage
- Hover to see detailed date range comparison tooltip
- Click the link below to view the full Countries report

## Empty State

When no country data is available for the selected period:
- "No data available for the selected period"

## Related Documentation

- [Horizontal Bar List Component](../components/horizontal-bar-list.md)
- [Visitors Overview Report](../reports/visitors-overview.md)

---

*Last Updated: 2025-11-11*
