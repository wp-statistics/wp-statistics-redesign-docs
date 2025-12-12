---
title: "Individual Category"
type: "report"
group: "Content Analytics"
show_in_menu: false
add_on: "Free"
status: "Done"
interactions:
  - "Date Picker"
widgets:
  - row: 1
    columns: ["individual-category-metrics"]
  - row: 2
    columns: ["traffic-summary:1/3", "categories-performance:2/3"]
  - row: 3
    columns: ["top-content"]
  - row: 4
    columns: ["top-authors"]
  - row: 5
    columns: ["top-referrers", "top-search-engines", "top-countries"]
  - row: 6
    columns: ["top-browsers", "top-operating-systems", "top-device-categories"]
---

# Individual Category

Detailed content performance report for a single category, tag, or custom taxonomy term, showing metrics for all content within that term.

## Report Configuration

- **Type**: Report Page (Hidden)
- **Menu Group**: Content Analytics
- **Show in Menu**: No (accessed via drill-down from Categories report)
- **Add-on**: Free (Data Plus required for custom taxonomy terms)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Add-on Requirements

- **Free**: Category and Tag terms
- **Data Plus**: Custom taxonomy terms

## Page Header

### Title

The page title shows the term name:
- Example: `News`, `WordPress`, `Tutorials`

### Term Meta

Displayed below the title:

| Field | Description |
|-------|-------------|
| Taxonomy Type | Category, Tag, or custom taxonomy name |

## Available Interactions

- **Date Picker**: Select time period for data

## Widget Layout

### Row 1 (Full Width) - Metrics

Uses the [Metrics](../../components/metrics.md) component to display key performance indicators for content within this term.

#### Component Configuration

- **Component**: [Metrics](../../components/metrics.md)
- **Show Previous Period**: Enabled
- **Show Source Icons**: Disabled

#### Metrics Display

| Metric | Description | Format | Previous Period |
|--------|-------------|--------|-----------------|
| **Contents** | Number of content items in this term | Number | ✅ Yes |
| **Visitors** | Unique visitors to content in this term | Number | ✅ Yes |
| **Views** | Total page views for content in this term | Number | ✅ Yes |
| **Bounce Rate** | Bounce rate for content in this term | Percentage | ✅ Yes |
| **Avg. Time on Page** | Average time spent on content in this term | Time (MM:SS) | ✅ Yes |
| **Comments** | Total comments on content in this term | Number | ✅ Yes |
| **Avg. Comments per Content** | Average comments per content item | Decimal | ✅ Yes |

### Row 2 (Two Columns: 1/3 + 2/3) - Traffic Overview

- [Traffic Summary](../../widgets/traffic-summary.md) (1/3 width) - Quick overview across time periods
- [Categories Performance](../../widgets/categories-performance.md) (2/3 width) - Shows visitor, view, and content publishing trends over time for this term

### Row 3 (Full Width) - Top Content

- [Top Content](../../widgets/top-content.md) - Shows content items within this term

### Row 4 (Full Width) - Top Authors

- [Top Authors](../../widgets/top-authors.md) - Shows authors who have contributed content to this term

### Row 5 (Three Columns) - Traffic Sources

- [Top Referrers](../../widgets/top-referrers.md)
- [Top Search Engines](../../widgets/top-search-engines.md)
- [Top Countries](../../widgets/top-countries.md)

**Note:** These widgets display data without "See all" links in this context.

### Row 6 (Three Columns) - Device Analytics

- [Top Browsers](../../widgets/top-browsers.md)
- [Top Operating Systems](../../widgets/top-operating-systems.md)
- [Top Device Categories](../../widgets/top-device-categories.md)

**Note:** These widgets display data without "See all" links in this context.

## Related Documentation

- [Categories Report](categories.md)
- [Content Analytics Overview](overview.md)
- [Metrics Component](../../components/metrics.md)
- [Traffic Summary Widget](../../widgets/traffic-summary.md)
- [Categories Performance Widget](../../widgets/categories-performance.md)
- [Top Content Widget](../../widgets/top-content.md)
- [Top Authors Widget](../../widgets/top-authors.md)

---

*Last Updated: 2025-12-12*
