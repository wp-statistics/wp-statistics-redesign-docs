---
title: "Traffic Trends"
type: "widget"
component: "line-chart"
add_on: "Free"
status: "Done"
used_in_reports:
  - "individual-content"
  - "referrals-overview"
  - "single-country"
  - "visitors-overview"
---

# Traffic Trends Widget

Displays visitor and view trends over time using an interactive line chart with period comparison and timeframe selection.

## Widget Configuration

- **Component**: [Line Chart](../components/line-chart.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | Traffic Trends |
| **Primary Metric** | Visitors |
| **Secondary Metric** | Views |
| **Tertiary Metric** | null |
| **Quaternary Metric** | null |
| **Quinary Metric** | null |
| **Previous Period** | ✅ Yes |
| **Metric Toggle** | ✅ Yes |
| **Timeframe Selector** | ✅ Yes |
| **Legend Display** | ✅ Yes |

## Used In Reports

- [Individual Content](../reports/content-analytics/individual-content.md)
- [Referrals Overview](../reports/referrals/referrals-overview.md)
- [Single Country](../reports/geographic/single-country.md)
- [Visitors Overview](../reports/visitor-insights/visitors-overview.md)

## Chart Behavior

The Traffic Trends widget displays two primary metrics:
- **Visitors** (solid blue line) - Total unique visitors over time
- **Views** (solid green line) - Total page views over time

Users can:
- Toggle between Daily, Weekly, and Monthly views using the timeframe selector
- Show/hide the previous period comparison using the toggle in the top-right
- Click metric labels in the legend to show/hide individual metrics
- Hover over any point to see exact values for all visible metrics

## Empty State

When no data is available for the selected period:
- "No data available"

## Related Documentation

- [Line Chart Component](../components/line-chart.md)
- [Visitors Overview Report](../reports/visitor-insights/visitors-overview.md)

---

*Last Updated: 2025-12-14*
