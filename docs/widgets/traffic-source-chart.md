---
title: "Traffic Source Chart"
type: "widget"
component: "line-chart"
add_on: "Free"
status: "Done"
used_in_reports:
  - "search-engines"
  - "social-media"
---

# Traffic Source Chart Widget

Displays visitor traffic trends from a specific source category over time with breakdown by top sources. This widget respects the report's source category filter.

## Widget Configuration

- **Component**: [Line Chart](../components/line-chart.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Reports

- [Search Engines](../reports/referrals/search-engines.md)
- [Social Media](../reports/referrals/social-media.md)

## Chart Configuration

| Property | Value |
|----------|-------|
| **Title** | Dynamic based on report context |
| **Primary Metric** | Total Visitors (from filtered source category) |
| **Secondary Metric** | Top source #1 (by referrals) |
| **Tertiary Metric** | Top source #2 (by referrals) |
| **Quaternary Metric** | Top source #3 (by referrals) |
| **Previous Period** | ✅ Yes (for Total Visitors only) |
| **Metric Toggle** | ✅ Yes |
| **Timeframe Selector** | ✅ Yes (Daily/Weekly/Monthly) |
| **Legend Display** | ✅ Yes |
| **Default Timeframe** | Daily |

## Metrics

### Primary Metric: Total Visitors
- Shows combined visitor count from all sources within the filtered category
- Includes previous period comparison (dashed line)
- Represents overall traffic trend for the source category

### Top 3 Sources (Secondary/Tertiary/Quaternary)
- Shows the top 3 individual sources with the most referrals within the category
- **Search Engines example**: Google Visitors, Bing Visitors, Yahoo Visitors
- **Social Media example**: Facebook Visitors, Twitter Visitors, LinkedIn Visitors
- **Note**: These metrics do NOT show previous period comparison
- Displays only current period data for each source
- The specific sources shown are dynamically determined by referral count

## Report Context

This widget adapts based on the report it's used in:

| Report | Filtered To | Example Sources |
|--------|-------------|-----------------|
| Search Engines | Search engine referrers | Google, Bing, Yahoo, DuckDuckGo |
| Social Media | Social media referrers | Facebook, Twitter, LinkedIn, Instagram |

Each report may also have sub-filters for organic vs paid traffic:
- **Search Engines**: Organic Search, Paid Search
- **Social Media**: Organic Social, Paid Social

## Behavior

- Users can toggle individual metrics on/off by clicking legend labels
- Default view shows all metrics enabled
- Incomplete final period shown as dashed line extension
- Hover displays exact values for all visible metrics

## Empty State

When no traffic found for the selected period and source category:
- "No data available"

---

*Last Updated: 2025-12-08*
