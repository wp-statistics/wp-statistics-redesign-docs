---
title: "Traffic by Hour"
type: "widget"
component: "vertical-bar-chart"
add_on: "Free"
status: "Done"
figma: ""
used_in_reports:
  - "visitors-overview"
---

# Traffic by Hour Widget

Displays hourly traffic patterns showing visitors and views throughout the day using a vertical bar chart format.

## Widget Configuration

- **Component**: [Vertical Bar Chart](../components/vertical-bar-chart.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Primary Metric** | Visitors |
| **Secondary Metric** | Views |
| **Time Format** | Respects WordPress setting (12h or 24h) |
| **Tooltip** | Displays Visitors and Views per hour |
| **Comparison Mode** | ✅ Yes [If enabled] – previous period shown with hatched bars |
| **X-Axis** | Hours of the day (0–23 or 12 AM–11 PM) |
| **Y-Axis** | Dynamic scale based on maximum hourly value |

## Used In Reports

This widget is used in the following reports:

- [Visitors Overview](../reports/visitors-overview.md) - Row 6

## Chart Behavior

The widget displays traffic patterns across 24 hours:
- **Primary bars**: Visitors (solid color)
- **Secondary bars**: Views (different solid color)
- **Previous period**: Shown with hatched overlay if comparison is enabled
- **X-Axis format**: Adapts to WordPress time setting (12-hour or 24-hour)

Users can:
- Hover over bars to see exact visitor and view counts for each hour
- Compare current and previous period traffic patterns
- Identify peak traffic hours at a glance

## Notes

- Only includes data for the current date
- Categories (hours) with no data are not shown or rendered with zero-height bars
- Time format automatically matches WordPress settings

## Empty State

When no traffic data is available for the selected period:
- "No data available for the selected period"

## Related Documentation

- [Vertical Bar Chart Component](../components/vertical-bar-chart.md)
- [Visitors Overview Report](../reports/visitors-overview.md)

---

*Last Updated: 2025-11-11*
