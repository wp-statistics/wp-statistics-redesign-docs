---
title: "Referrals Overview"
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
    columns: ["overview-metrics"]
  - row: 2
    columns: ["traffic-trends"]
  - row: 3
    columns: ["top-entry-pages", "top-referrers"]
  - row: 4
    columns: ["top-countries", "top-operating-systems", "top-device-categories"]
  - row: 5
    columns: ["top-source-categories", "top-search-engines", "top-social-media"]
---

# Referrals Overview

Comprehensive snapshot of your website's referred traffic and visitor behavior from external sources.

## Page Configuration

- **Menu Visibility**: Shown in main menu
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Available Interactions

- **Date Picker**
- **[Advanced Filters](../../global/advanced-filters.md)**: Visitor Analysis filter group (applied to referred visitors only)

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
    <WidgetCell>Top Source Categories</WidgetCell>
    <WidgetCell>Top Search Engines</WidgetCell>
    <WidgetCell>Top Social Media</WidgetCell>
  </WidgetRow>
</WidgetLayout>

### Row 1 (Full Width) - Overview Metrics

Uses the [Metrics](../../components/metrics.md) component to display key performance indicators for referred traffic.

#### Component Configuration

- **Component**: [Metrics](../../components/metrics.md)
- **Show Previous Period**: Enabled (for numeric metrics only)
- **Show Source Icons**: Disabled

#### Metrics Display

**First Row (4 metrics):**

| Metric | Value Format | Previous Period |
|--------|--------------|-----------------|
| **Referred Visitors** | Number | ✅ Yes |
| **Top Referrer** | Domain (e.g., google.com) | ❌ No |
| **Top Country** | Country name | ❌ No |
| **Top Browser** | Browser name | ❌ No |

**Second Row (3-4 metrics, conditional):**

| Metric | Value Format | Previous Period | Add-on |
|--------|--------------|-----------------|--------|
| **Top Search Engine** | Domain (e.g., google.com) | ❌ No | Free |
| **Top Social Media** | Platform name (e.g., Facebook) | ❌ No | Free |
| **Top Entry Page** | Page title/URL | ❌ No | Free |
| **Top Campaign** | Campaign name | ❌ No | Marketing |

**Conditional Display:**
- When Marketing add-on is **activated**: All 8 metrics displayed (4x2 grid)
- When Marketing add-on is **not activated**: 7 metrics displayed (Top Campaign hidden)

### Row 2 (Full Width) - Traffic Trends

- [Traffic Trends](../../widgets/traffic-trends.md) - Line chart displaying referred visitor and view trends over time

**Note**: This widget displays data filtered to referred visitors only (excludes direct traffic).

### Row 3 (Two Columns) - Entry Pages & Referrers

**Left Column (Data Plus Premium):**
- [Top Entry Pages](../../widgets/top-entry-pages.md) - Table showing top 5 entry pages for referred visitors

**Right Column (Free):**
- [Top Referrers](../../widgets/top-referrers.md) - Horizontal bar list showing top 5 referrer domains

**Conditional Display:**
- When Data Plus add-on is **activated**: Both widgets displayed side-by-side
- When Data Plus add-on is **not activated**: Only Top Referrers widget displayed (full width)

**Note**: Top Entry Pages displays data filtered to visitors with referrers only.

### Row 4 (Three Columns) - Geographic & Technical Analytics

**Left Column (Free):**
- [Top Countries](../../widgets/top-countries.md) - Horizontal bar list showing top 5 countries with flags

**Middle Column (Free):**
- [Top Operating Systems](../../widgets/top-operating-systems.md) - Horizontal bar list showing top 5 operating systems

**Right Column (Free):**
- [Top Device Categories](../../widgets/top-device-categories.md) - Horizontal bar list showing top 5 device categories

**Note**: All widgets in this row display data filtered to visitors with referrers only.

### Row 5 (Three Columns) - Traffic Sources

**Left Column (Free):**
- [Top Source Categories](../../widgets/top-source-categories.md) - Horizontal bar list showing top 5 source categories (Search Engines, Social Media, etc.)

**Middle Column (Free):**
- [Top Search Engines](../../widgets/top-search-engines.md) - Horizontal bar list showing top 5 search engines

**Right Column (Free):**
- [Top Social Media](../../widgets/top-social-media.md) - Horizontal bar list showing top 5 social media platforms

---

*Last Updated: 2025-12-08*
