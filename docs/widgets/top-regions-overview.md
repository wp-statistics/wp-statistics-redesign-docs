---
title: "Top Regions Overview"
type: "widget"
component: "horizontal-bar-list"
add_on: "Free"
status: "Done"
used_in_reports:
  - "geographic-overview"
---

# Top Regions Overview Widget

Displays the top 5 regions of the detected country by visitor count in a horizontal bar list format.

## Widget Configuration

- **Component**: [Horizontal Bar List](../components/horizontal-bar-list.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Max Visible Items** | 5 |
| **Show Previous Period** | No |
| **Show Icons** | No |
| **Enable Other Item** | No |
| **Link to Full Report** | Yes (links to Regions of \{Country\} report) |

## Dynamic Title

The widget title displays "Top Regions of \{Country\}" where `{Country}` is replaced with the detected country name based on WordPress timezone setting.

**Examples:**
- "Top Regions of Germany"
- "Top Regions of France"
- "Top Regions of Canada"

## Used In Reports

- [Geographic Overview](../reports/geographic/geographic-overview.md)

## Empty State

When no region data is available for the selected period:
- "No data available for the selected period"

## Related Documentation

- [Horizontal Bar List Component](../components/horizontal-bar-list.md)
- [Geographic Overview Report](../reports/geographic/geographic-overview.md)
- [Regions of \{Country\} Report](../reports/geographic/regions-of-country.md)
- [Top Regions Widget](top-regions.md)

---

*Last Updated: 2025-12-14*
