---
title: "Search Engines Chart"
type: "widget"
component: "line-chart"
add_on: "Free"
status: "Done"
used_in_reports:
  - "search-engines"
---

# Search Engines Chart Widget

Displays visitor traffic trends from search engines over time with breakdown by top search engines.

## Widget Configuration

- **Component**: [Line Chart](../components/line-chart.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Reports

- [Search Engines](../reports/referrals/search-engines.md) - Row 1, full width

## Chart Configuration

| Property | Value |
|----------|-------|
| **Title** | "Search Engine Traffic" |
| **Primary Metric** | Total Visitors (from all search engines) |
| **Secondary Metric** | Top search engine #1 (by referrals) |
| **Tertiary Metric** | Top search engine #2 (by referrals) |
| **Quaternary Metric** | Top search engine #3 (by referrals) |
| **Previous Period** | ✅ Yes (for Total Visitors only) |
| **Metric Toggle** | ✅ Yes |
| **Timeframe Selector** | ✅ Yes (Daily/Weekly/Monthly) |
| **Legend Display** | ✅ Yes |
| **Default Timeframe** | Daily |

## Metrics

### Primary Metric: Total Visitors
- Shows combined visitor count from all search engines
- Includes previous period comparison (dashed line)
- Represents overall search engine traffic trend

### Top 3 Search Engines (Secondary/Tertiary/Quaternary)
- Shows the top 3 search engines with the most referrals
- **Example**: Google Visitors, Bing Visitors, Yahoo Visitors
- **Note**: These metrics do NOT show previous period comparison
- Displays only current period data for each search engine
- The specific search engines shown are dynamically determined by referral count

## Behavior

- Users can toggle individual metrics on/off by clicking legend labels
- Default view shows all metrics enabled
- Incomplete final period shown as dashed line extension
- Hover displays exact values for all visible metrics

## Empty State

When no search engine traffic found for the selected period:
- "No data available"

---

*Last Updated: 2025-11-15*
