---
title: "Geographic Overview"
type: "report"
group: "Geographic"
show_in_menu: true
add_on: "Free"
status: "In Progress"
interactions:
  - "Date Picker"
  - "Advanced Filters"
widgets:
  - row: 1
    columns: ["geographic-metrics"]
  - row: 2
    columns: ["global-visitor-distribution"]
  - row: 3
    columns: ["top-countries", "top-cities-overview", "top-european-countries"]
---

# Geographic Overview

Comprehensive snapshot of your website's geographic visitor distribution.

## Page Configuration

- **Menu Visibility**: Shown in main menu
- **Add-on**: Free (included in base plugin)
- **Status**: In Progress
- **Figma Design**: [Add link when available]

## Available Interactions

- **Date Picker**
- **[Advanced Filters](../../global/advanced-filters.md)**: Geographic filter group

## Widget Layout

### Page Structure

<WidgetLayout>
  <WidgetRow>
    <WidgetCell fullWidth>Geographic Metrics</WidgetCell>
  </WidgetRow>
  <WidgetRow>
    <WidgetCell fullWidth>Global Visitor Distribution</WidgetCell>
  </WidgetRow>
  <WidgetRow>
    <WidgetCell>Top Countries</WidgetCell>
    <WidgetCell>Top Cities</WidgetCell>
    <WidgetCell>Top European Countries</WidgetCell>
  </WidgetRow>
</WidgetLayout>

### Row 1 (Full Width) - Geographic Metrics

Uses the [Metrics](../../components/metrics.md) component to display 3 key geographic indicators in a single row.

#### Component Configuration

- **Component**: [Metrics](../../components/metrics.md)
- **Show Previous Period**: Disabled
- **Show Source Icons**: Disabled

#### Metrics Display

| Metric | Value Format | Previous Period |
|--------|--------------|-----------------|
| **Top Country** | Country name with flag | No |
| **Top Region** | Region name | No |
| **Top City** | City name | No |

### Row 2 (Full Width) - Global Visitor Distribution

- [Global Visitor Distribution](../../widgets/global-visitor-distribution.md) - Interactive world map showing visitor distribution by country

### Row 3 (Three Columns) - Geographic Breakdown

**Left Column:**
- [Top Countries](../../widgets/top-countries.md) - Top 5 countries with flags

**Middle Column:**
- [Top Cities](../../widgets/top-cities-overview.md) - Top 5 cities globally

**Right Column:**
- [Top European Countries](../../widgets/top-european-countries.md) - Top 5 European countries with flags

---

*Last Updated: 2025-12-14*
