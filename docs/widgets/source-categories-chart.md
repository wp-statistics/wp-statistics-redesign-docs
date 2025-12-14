---
title: "Source Categories Chart"
type: "widget"
component: "line-chart"
add_on: "Free"
status: "Done"
used_in_reports:
  - "source-categories"
---

# Source Categories Chart Widget

Displays visitor traffic trends by source category over time with breakdown by top categories.

## Widget Configuration

- **Component**: [Line Chart](../components/line-chart.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Reports

- [Source Categories](../reports/referrals/source-categories.md)

## Chart Configuration

| Property | Value |
|----------|-------|
| **Title** | "Traffic by Source Category" |
| **Primary Metric** | Total Visitors (from all sources) |
| **Secondary Metric** | Top source category #1 (by referrals) |
| **Tertiary Metric** | Top source category #2 (by referrals) |
| **Quaternary Metric** | Top source category #3 (by referrals) |
| **Previous Period** | ✅ Yes (for Total Visitors only) |
| **Metric Toggle** | ✅ Yes |
| **Timeframe Selector** | ✅ Yes (Daily/Weekly/Monthly) |
| **Legend Display** | ✅ Yes |
| **Default Timeframe** | Daily |

## Metrics

### Primary Metric: Total Visitors
- Shows combined visitor count from all traffic sources
- Includes previous period comparison (dashed line)
- Represents overall traffic trend across all categories

### Top 3 Source Categories (Secondary/Tertiary/Quaternary)
- Shows the top 3 source categories with the most referrals
- **Example**: Search Engines Visitors, Social Media Visitors, Direct Visitors
- **Note**: These metrics do NOT show previous period comparison
- Displays only current period data for each category
- The specific categories shown are dynamically determined by referral count

## Behavior

- Users can toggle individual metrics on/off by clicking legend labels
- Default view shows all metrics enabled
- Incomplete final period shown as dashed line extension
- Hover displays exact values for all visible metrics

## Empty State

When no traffic data found for the selected period:
- "No data available"

---

*Last Updated: 2025-11-15*
