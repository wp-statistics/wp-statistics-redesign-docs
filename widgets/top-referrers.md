---
title: "Top Referrers"
type: "widget"
component: "horizontal-bar-list"
add_on: "Free"
status: "Done"
figma: ""
used_in_reports:
  - "visitors-overview"
---

# Top Referrers Widget

Displays the top 5 referrer domains in a horizontal bar list format with previous period comparison.

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
| **Show Icons** | ❌ No |
| **Enable Other Item** | ❌ No |
| **Link to Full Report** | ✅ Yes (links to Referrers report) |

## Used In Reports

This widget is used in the following reports:

- [Visitors Overview](../reports/visitors-overview.md) - Row 3, right column (expands to full width when Data Plus is not activated)

## List Behavior

The widget displays referrer domains (e.g., google.com, facebook.com) ranked by session count in descending order:
- Each item shows the domain name and session count
- Horizontal bar represents relative traffic volume
- Previous period comparison shows percentage change with direction indicator
- Top item receives visual highlighting

Users can:
- View the count value for each referrer
- See previous period comparison percentage
- Hover to see detailed date range comparison tooltip
- Click the link below to view the full Referrers report

## Empty State

When no referrer data is available for the selected period:
- "No data available for the selected period"

## Related Documentation

- [Horizontal Bar List Component](../components/horizontal-bar-list.md)
- [Visitors Overview Report](../reports/visitors-overview.md)

---

*Last Updated: 2025-11-08*
