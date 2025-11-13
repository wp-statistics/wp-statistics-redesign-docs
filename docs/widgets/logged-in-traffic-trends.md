---
title: "Logged-in Traffic Trends"
type: "widget"
component: "line-chart"
add_on: "Free"
status: "Done"
used_in_reports:
  - "logged-in-users"
---

# Logged-in Traffic Trends Widget

Displays user visitor and anonymous visitor trends over time using an interactive line chart with period comparison and timeframe selection.

## Widget Configuration

- **Component**: [Line Chart](../components/line-chart.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | Traffic Trends |
| **Primary Metric** | User Visitors |
| **Secondary Metric** | Anonymous Visitors |
| **Tertiary Metric** | null |
| **Quaternary Metric** | null |
| **Quinary Metric** | null |
| **Previous Period** | ✅ Yes |
| **Metric Toggle** | ✅ Yes |
| **Timeframe Selector** | ✅ Yes |
| **Legend Display** | ✅ Yes |

## Used In Reports

This widget is used in the following reports:

- [Logged-in Users](../reports/visitor-insights/logged-in-users.md) - Row 1, full width

## Empty State

When no data is available for the selected period:
- "No data available"

## Related Documentation

- [Line Chart Component](../components/line-chart.md)
- [Logged-in Users Report](../reports/visitor-insights/logged-in-users.md)

---

*Last Updated: 2025-11-11*
