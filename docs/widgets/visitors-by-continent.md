---
title: "Visitors by Continent"
type: "widget"
component: "horizontal-bar-list"
add_on: "Free"
status: "Done"
used_in_reports:
  - "geographic-overview"
---

# Visitors by Continent Widget

Displays visitor distribution across all continents with data in a horizontal bar list format.

## Widget Configuration

- **Component**: [Horizontal Bar List](../components/horizontal-bar-list.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Max Visible Items** | All (no limit) |
| **Show Previous Period** | No |
| **Show Icons** | No |
| **Enable Other Item** | No |
| **Link to Full Report** | No |

## Continents

The widget displays all continents that have visitor data:
- North America
- Europe
- Asia
- South America
- Africa
- Oceania
- Antarctica

Only continents with at least one visitor during the selected period are shown.

## Used In Reports

- [Geographic Overview](../reports/geographic/geographic-overview.md)

## Empty State

When no continent data is available for the selected period:
- "No data available for the selected period"

## Related Documentation

- [Horizontal Bar List Component](../components/horizontal-bar-list.md)
- [Geographic Overview Report](../reports/geographic/geographic-overview.md)

---

*Last Updated: 2025-12-14*
