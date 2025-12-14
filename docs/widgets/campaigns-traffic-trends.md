---
title: "Campaigns Traffic Trends"
type: "widget"
component: "line-chart"
add_on: "Marketing"
status: "Done"
used_in_reports:
  - "campaigns"
---

# Campaigns Traffic Trends Widget

Displays traffic trends for visitors referred from UTM campaign URLs over time.

## Widget Configuration

- **Component**: [Line Chart](../components/line-chart.md)
- **Add-on**: Marketing
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Reports

- [Campaigns](../reports/referrals/campaigns.md)

## Chart Configuration

| Property | Value |
|----------|-------|
| **Title** | "Campaign Traffic" |
| **Primary Metric** | Visitors (from campaign URLs) |
| **Secondary Metric** | Views (from campaign URLs) |
| **Previous Period** | ✅ Yes (for both metrics) |
| **Metric Toggle** | ✅ Yes |
| **Timeframe Selector** | ✅ Yes (Daily/Weekly/Monthly) |
| **Legend Display** | ✅ Yes |
| **Default Timeframe** | Daily |

## Metrics

### Primary Metric: Visitors
- Shows visitor count from URLs with UTM campaign parameters
- Includes previous period comparison (dashed line)
- Represents total campaign-driven visitor traffic

### Secondary Metric: Views
- Shows page views from URLs with UTM campaign parameters
- Includes previous period comparison (dashed line)
- Represents total campaign-driven page view traffic

## Behavior

- Users can toggle individual metrics on/off by clicking legend labels
- Default view shows both metrics enabled
- Incomplete final period shown as dashed line extension
- Hover displays exact values for each visible metric

## Empty State

When no campaign traffic found for the selected period:
- "No data available"

---

*Last Updated: 2025-11-15*
