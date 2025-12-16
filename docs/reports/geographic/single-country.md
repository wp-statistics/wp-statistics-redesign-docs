---
title: "Single Country"
type: "report"
group: "Geographic"
show_in_menu: false
add_on: "Data Plus"
status: "Done"
interactions:
  - "Date Picker"
  - "Advanced Filters"
widgets:
  - row: 1
    columns: ["country-metrics"]
  - row: 2
    columns: ["traffic-trends"]
  - row: 3
    columns: ["top-regions", "top-cities"]
  - row: 4
    columns: ["top-entry-pages", "top-referrers", "top-search-engines"]
  - row: 5
    columns: ["top-browsers", "top-operating-systems", "top-device-categories"]
---

# Single Country

Detailed drill-down view for analyzing traffic and visitor behavior from a specific country.

## Report Configuration

- **Type**: Report Page (Hidden)
- **Menu Group**: Geographic
- **Show in Menu**: No
- **Add-on**: Data Plus
- **Status**: Done
- **Figma Design**: [Add link when available]

## Dynamic Page Title

The page title changes based on the selected country:

| Format | Example |
|--------|---------|
| `Country: {Country Name}` | `Country: United States` |

## Available Interactions

- **Date Picker**: Select time period for data
- **[Advanced Filters](../../global/advanced-filters.md)**: Geographic Detail Filters group

## Widget Layout

### Row 1 (Full Width) - Country Metrics

Uses the [Metrics](../../components/metrics.md) component to display 10 key performance indicators in a 3-row layout (4 + 3 + 3).

#### Component Configuration

- **Component**: [Metrics](../../components/metrics.md)
- **Show Previous Period**: Enabled (for numeric metrics only)
- **Show Source Icons**: Disabled

#### Metrics Display

**First Row (4 metrics with previous period comparison):**

| Metric | Value Format | Previous Period |
|--------|--------------|-----------------|
| **Visitors** | Number | Yes |
| **Views** | Number | Yes |
| **Bounce Rate** | Percentage | Yes |
| **Avg. Session Duration** | Time (HH:MM:SS) | Yes |

**Second Row (3 metrics):**

| Metric | Value Format | Previous Period |
|--------|--------------|-----------------|
| **Views per Visitor** | Decimal (e.g., 2.5) | Yes |
| **Top Region** | Region name | No |
| **Top City** | City name | No |

**Third Row (3 metrics):**

| Metric | Value Format | Previous Period |
|--------|--------------|-----------------|
| **Top Referrer** | Domain (e.g., google.com) | No |
| **Top Browser** | Browser name | No |
| **Top OS** | OS name | No |

### Row 2 (Full Width) - Traffic Trends

- [Traffic Trends](../../widgets/traffic-trends.md) - Line chart displaying visitor and view trends over time for this country

### Row 3 (Two Columns) - Geographic Breakdown

- [Top Regions](../../widgets/top-regions.md)
- [Top Cities](../../widgets/top-cities.md)

### Row 4 (Three Columns) - Traffic Sources

- [Top Entry Pages](../../widgets/top-entry-pages.md)
- [Top Referrers](../../widgets/top-referrers.md)
- [Top Search Engines](../../widgets/top-search-engines.md)

### Row 5 (Three Columns) - Device Analytics

- [Top Browsers](../../widgets/top-browsers.md)
- [Top Operating Systems](../../widgets/top-operating-systems.md)
- [Top Device Categories](../../widgets/top-device-categories.md)

**Note:** These widgets display data without "See all" links in this context (device reports don't support country filtering).

## Related Documentation

- [Countries Report](countries.md)
- [Countries Table Widget](../../widgets/countries-table.md)
- [Country Column](../../columns/country.md)
- [Metrics Component](../../components/metrics.md)

---

*Last Updated: 2025-12-14*
