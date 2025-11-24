---
title: "Visitors Overview"
type: "report"
group: "Visitors"
show_in_menu: true
add_on: "Free"
status: "Done"
interactions:
  - "Date Picker"
  - "Advanced Filters"
widgets:
  - row: 1
    columns: ["overview-metrics"]
  - row: 2
    columns: ["traffic-trends"]
  - row: 3
    columns: ["top-entry-pages", "top-referrers"]
  - row: 4
    columns: ["top-countries", "top-operating-systems", "top-device-categories"]
  - row: 5
    columns: ["top-visitors"]
  - row: 6
    columns: ["global-visitor-distribution", "traffic-by-hour"]
---

# Visitors Overview

Comprehensive snapshot of your website's traffic and visitor behavior.

## Page Configuration

- **Menu Visibility**: Shown in main menu
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Available Interactions

- **Date Picker**
- **[Advanced Filters](../../global/advanced-filters.md)**: Visitor Analysis filter group

## Widget Layout

### Page Structure

<WidgetLayout>
  <WidgetRow>
    <WidgetCell fullWidth>Overview Metrics</WidgetCell>
  </WidgetRow>
  <WidgetRow>
    <WidgetCell fullWidth>Traffic Trends</WidgetCell>
  </WidgetRow>
  <WidgetRow>
    <WidgetCell addon="Data Plus">Top Entry Pages</WidgetCell>
    <WidgetCell>Top Referrers</WidgetCell>
  </WidgetRow>
  <WidgetRow>
    <WidgetCell>Top Countries</WidgetCell>
    <WidgetCell>Top Operating Systems</WidgetCell>
    <WidgetCell>Top Device Categories</WidgetCell>
  </WidgetRow>
  <WidgetRow>
    <WidgetCell fullWidth>Top Visitors</WidgetCell>
  </WidgetRow>
  <WidgetRow>
    <WidgetCell>Global Visitor Distribution</WidgetCell>
    <WidgetCell addon="Data Plus">Traffic by Hour</WidgetCell>
  </WidgetRow>
</WidgetLayout>

### Row 1 (Full Width) - Overview Metrics

Uses the [Metrics](../../components/metrics.md) component to display 8 key performance indicators in a 4-column, 2-row grid layout.

#### Component Configuration

- **Component**: [Metrics](../../components/metrics.md)
- **Show Previous Period**: Enabled (for numeric metrics only)
- **Show Source Icons**: Disabled (all metrics from WP Statistics)

#### Metrics Display

**First Row (4 metrics with previous period comparison):**

| Metric | Value Format | Previous Period |
|--------|--------------|-----------------|
| **Visitors** | Number | ✅ Yes |
| **Views** | Number | ✅ Yes |
| **Session Duration** | Time (HH:MM:SS) | ✅ Yes |
| **Views Per Session** | Decimal (e.g., 2.5) | ✅ Yes |

**Second Row (4 metrics):**

| Metric | Value Format | Previous Period |
|--------|--------------|-----------------|
| **Top Country** | Country name | ❌ No |
| **Top Referrer** | Domain (e.g., google.com) | ❌ No |
| **Top Search Term** | Search term text | ❌ No |
| **Logged-in Share** | Percentage | ✅ Yes |

### Row 2 (Full Width) - Traffic Trends

- [Traffic Trends](../../widgets/traffic-trends.md) - Line chart displaying visitor and view trends over time

### Row 3 (Two Columns) - Entry Pages & Referrers

**Left Column (Data Plus Premium):**
- [Top Entry Pages](../../widgets/top-entry-pages.md) - Table showing top 5 entry pages with unique entrances count

**Right Column (Free):**
- [Top Referrers](../../widgets/top-referrers.md) - Horizontal bar list showing top 5 referrer domains

**Conditional Display:**
- When Data Plus add-on is **activated**: Both widgets displayed side-by-side
- When Data Plus add-on is **not activated**: Only Top Referrers widget displayed (full width)

### Row 4 (Three Columns) - Geographic & Technical Analytics

**Left Column (Free):**
- [Top Countries](../../widgets/top-countries.md) - Horizontal bar list showing top 5 countries with flags

**Middle Column (Free):**
- [Top Operating Systems](../../widgets/top-operating-systems.md) - Horizontal bar list showing top 5 operating systems

**Right Column (Free):**
- [Top Device Categories](../../widgets/top-device-categories.md) - Horizontal bar list showing top 5 device categories

### Row 5 (Full Width) - Top Visitors

- [Top Visitors](../../widgets/top-visitors.md) - Simplified table showing top 10 most active visitors with engagement and journey metrics

### Row 6 (Two Columns) - Geographic Distribution & Hourly Traffic

**Left Column (Free):**
- [Global Visitor Distribution](../../widgets/global-visitor-distribution.md) - Interactive world map showing visitor distribution by country

**Right Column (Data Plus Premium):**
- [Traffic by Hour](../../widgets/traffic-by-hour.md) - Vertical bar chart displaying hourly visitors and views

**Conditional Display:**
- When Data Plus add-on is **activated**: Both widgets displayed side-by-side
- When Data Plus add-on is **not activated**: Only Global Visitor Distribution widget displayed (full width)

---

*Last Updated: 2025-11-11*
