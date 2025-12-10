---
title: "Categories"
type: "report"
group: "Content Analytics"
show_in_menu: true
add_on: "Free"
status: "Done"
interactions:
  - "Date Picker"
  - "Taxonomy Filter"
widgets:
  - row: 1
    columns: ["categories-metrics"]
  - row: 2
    columns: ["categories-performance"]
  - row: 3
    columns: ["top-terms"]
  - row: 4
    columns: ["top-content"]
  - row: 5
    columns: ["top-authors"]
  - row: 6
    columns: ["top-referrers", "top-search-engines", "top-countries"]
  - row: 7
    columns: ["top-browsers", "top-operating-systems", "top-device-categories"]
---

# Categories

Shows content performance metrics aggregated by taxonomy (categories, tags, custom taxonomies). Unlike Category Pages (which tracks category archive page visits), this report tracks how content within each category/taxonomy performs.

## Report Configuration

- **Type**: Report Page
- **Menu Group**: Content Analytics
- **Show in Menu**: Yes
- **Add-on**: Free (Data Plus required for custom taxonomies)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Add-on Requirements

- **Free**: Category and Tags taxonomies
- **Data Plus**: Custom taxonomies

## Comparison with Category Pages

| Report | Focus | Example |
|--------|-------|---------|
| **Categories** (this report) | Content within taxonomies | How are the 30 posts in "News" category performing? |
| **Category Pages** | Category archive page URLs | How many visitors viewed `/category/news/`? |

## Available Interactions

- **Date Picker**: Select time period for data
- **Taxonomy Filter**: Filter by taxonomy type (default: Categories)
  - Free: Categories, Tags
  - Data Plus: Custom taxonomies

## Widget Layout

### Row 1 (Full Width) - Metrics

Uses the [Metrics](../../components/metrics.md) component to display key performance indicators for the selected taxonomy.

#### Component Configuration

- **Component**: [Metrics](../../components/metrics.md)
- **Show Previous Period**: Enabled
- **Show Source Icons**: Disabled

#### Metrics Display

| Metric | Value Format | Previous Period | Conditional |
|--------|--------------|-----------------|-------------|
| **Terms** | Number | ✅ Yes | Always |
| **Contents** | Number | ✅ Yes | Always |
| **Visitors** | Number | ✅ Yes | Always |
| **Views** | Number | ✅ Yes | Always |
| **Views per Term** | Decimal | ✅ Yes | Always |
| **Avg. Contents per Term** | Decimal | ✅ Yes | Always |
| **Bounce Rate** | Percentage | ✅ Yes | Always |
| **Avg. Time on Page** | Time (MM:SS) | ✅ Yes | Always |

### Row 2 (Full Width) - Performance

- [Categories Performance](../../widgets/categories-performance.md)

### Row 3 (Full Width) - Top Terms

- [Top Terms](../../widgets/top-terms.md)

### Row 4 (Full Width) - Top Content

- [Top Content](../../widgets/top-content.md)

### Row 5 (Full Width) - Top Authors

- [Top Authors](../../widgets/top-authors.md)

**Note:** Shows only authors who have content in the selected taxonomy.

### Row 6 (Three Columns) - Traffic Sources

- [Top Referrers](../../widgets/top-referrers.md)
- [Top Search Engines](../../widgets/top-search-engines.md)
- [Top Countries](../../widgets/top-countries.md)

**Note:** These widgets display data without "See all" links in this context.

### Row 7 (Three Columns) - Device Analytics

- [Top Browsers](../../widgets/top-browsers.md)
- [Top Operating Systems](../../widgets/top-operating-systems.md)
- [Top Device Categories](../../widgets/top-device-categories.md)

**Note:** These widgets display data without "See all" links in this context.

## Related Documentation

- [Individual Category Report](individual-category.md)
- [Content Report](content.md)
- [Authors Report](authors.md)
- [Category Pages Report](../page-insights/category-pages.md) (different focus)
- [Content Analytics Menu Group](../../global/menu-structure.md)
- [Metrics Component](../../components/metrics.md)
- [Categories Performance Widget](../../widgets/categories-performance.md)
- [Top Terms Widget](../../widgets/top-terms.md)
- [Top Content Widget](../../widgets/top-content.md)
- [Top Authors Widget](../../widgets/top-authors.md)

---

*Last Updated: 2025-12-10*
