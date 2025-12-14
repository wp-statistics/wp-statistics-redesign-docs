---
title: "Search Engines"
type: "report"
group: "Referrals"
show_in_menu: true
add_on: "Free"
status: "Done"
interactions:
  - "Date Picker"
  - "Advanced Filters"
widgets:
  - row: 1
    columns: ["traffic-source-chart"]
  - row: 2
    columns: ["referrers-table"]
---

# Search Engines

Shows search engine traffic driving visitors to your website, with trend analysis and detailed breakdown by search engine.

## Page Configuration

- **Menu Visibility**: Shown in main menu
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Available Interactions

- **Date Picker**: Select date range for analysis
- **Source Category**: Filter by traffic type (default = All)
  - All: Shows both organic and paid search traffic
  - Organic Search: Shows only organic search traffic
  - Paid Search: Shows only paid search traffic
- **[Advanced Filters](../../global/advanced-filters.md#referrer-analysis-filters)**: Referrer Analysis Filters

## Widget Layout

### Row 1 (Full Width)

[Traffic Source Chart](../../widgets/traffic-source-chart.md) - Line chart showing visitor trends from search engines with breakdown by top 3 search engines. This widget is filtered to display only search engine traffic.

### Row 2 (Full Width)

[Referrers Table](../../widgets/referrers-table.md) - Data table showing detailed metrics for each search engine. This widget is filtered to display only search engine referrers (Google, Bing, Yahoo, etc.).

**Note**: The Referrers Table widget is reused here but displays only search engine traffic, not all referrers.

---

*Last Updated: 2025-12-14*
