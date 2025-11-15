---
title: "Social Media Chart"
type: "widget"
component: "line-chart"
add_on: "Free"
status: "Done"
used_in_reports:
  - "social-media"
---

# Social Media Chart Widget

Displays visitor traffic trends from social media platforms over time with breakdown by top platforms.

## Widget Configuration

- **Component**: [Line Chart](../components/line-chart.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Reports

- [Social Media](../reports/referrals/social-media.md) - Row 1, full width

## Chart Configuration

| Property | Value |
|----------|-------|
| **Title** | "Social Media Traffic" |
| **Primary Metric** | Total Visitors (from all social media platforms) |
| **Secondary Metric** | Top social platform #1 (by referrals) |
| **Tertiary Metric** | Top social platform #2 (by referrals) |
| **Quaternary Metric** | Top social platform #3 (by referrals) |
| **Previous Period** | ✅ Yes (for Total Visitors only) |
| **Metric Toggle** | ✅ Yes |
| **Timeframe Selector** | ✅ Yes (Daily/Weekly/Monthly) |
| **Legend Display** | ✅ Yes |
| **Default Timeframe** | Daily |

## Metrics

### Primary Metric: Total Visitors
- Shows combined visitor count from all social media platforms
- Includes previous period comparison (dashed line)
- Represents overall social media traffic trend

### Top 3 Social Media Platforms (Secondary/Tertiary/Quaternary)
- Shows the top 3 social media platforms with the most referrals
- **Example**: Facebook Visitors, Twitter Visitors, LinkedIn Visitors
- **Note**: These metrics do NOT show previous period comparison
- Displays only current period data for each platform
- The specific platforms shown are dynamically determined by referral count

## Behavior

- Users can toggle individual metrics on/off by clicking legend labels
- Default view shows all metrics enabled
- Incomplete final period shown as dashed line extension
- Hover displays exact values for all visible metrics

## Empty State

When no social media traffic found for the selected period:
- "No data available"

---

*Last Updated: 2025-11-15*
