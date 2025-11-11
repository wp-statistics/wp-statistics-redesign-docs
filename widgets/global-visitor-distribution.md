---
title: "Global Visitor Distribution"
type: "widget"
component: "global-map"
add_on: "Free"
status: "Done"
figma: ""
used_in_reports:
  - "visitors-overview"
---

# Global Visitor Distribution Widget

Visualizes visitor distribution across countries using an interactive global map with color-coded regions based on visitor count.

## Widget Configuration

- **Component**: [Global Map](../components/global-map.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Metric** | Visitors |
| **Color Scale** | Based on number of Visitors per country |
| **Hover Interaction** | Country Name, Flag, Visitor Count |
| **Zoom Controls** | ✅ Yes |
| **Legend** | ✅ Yes – shows min to max visitor count range |

## Used In Reports

This widget is used in the following reports:

- [Visitors Overview](../reports/visitors-overview.md) - Row 6

## Map Behavior

The widget displays a world map with countries color-coded based on visitor count:
- **Darker blue shades**: Higher visitor count
- **Lighter blue shades**: Lower visitor count
- **Gray**: Countries with no visitor data

Users can:
- Hover over countries to see visitor count with flag and country name
- Use zoom controls to focus on specific regions
- View the full range of visitor counts via the legend

## Notes

- Countries with no visitor data are shown in gray
- All country names follow ISO 3166-1 naming convention
- Color intensity directly correlates with visitor count

## Empty State

When no visitor data is available for the selected period:
- All countries appear in gray
- Legend shows "No data available for the selected period"

## Related Documentation

- [Global Map Component](../components/global-map.md)
- [Visitors Overview Report](../reports/visitors-overview.md)

---

*Last Updated: 2025-11-11*
