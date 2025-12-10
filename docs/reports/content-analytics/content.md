---
title: "Content"
type: "report"
group: "Content Analytics"
show_in_menu: true
add_on: "Free"
status: "Done"
interactions:
  - "Date Picker"
  - "Post Type Filter"
widgets:
  - row: 1
    columns: ["content-metrics"]
  - row: 2
    columns: ["content-performance"]
  - row: 3
    columns: ["top-content"]
  - row: 4
    columns: ["top-referrers", "top-search-engines", "top-countries"]
  - row: 5
    columns: ["top-browsers", "top-operating-systems", "top-device-categories"]
---

# Content

Shows performance metrics for individual content items (posts, pages, custom post types).

## Report Configuration

- **Type**: Report Page
- **Menu Group**: Content Analytics
- **Show in Menu**: Yes
- **Add-on**: Free (Data Plus required for custom post types)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Add-on Requirements

- **Free**: Post and Page post types
- **Data Plus**: Custom post types

## Available Interactions

- **Date Picker**: Select time period for data
- **Post Type Filter**: Filter content by post type (default: Posts)
  - Free: Post and Page
  - Data Plus: Custom post types

## Widget Layout

### Row 1 (Full Width) - Content Metrics

Uses the [Metrics](../../components/metrics.md) component to display key performance indicators for the selected post type.

#### Component Configuration

- **Component**: [Metrics](../../components/metrics.md)
- **Show Previous Period**: Enabled
- **Show Source Icons**: Disabled

#### Metrics Display

| Metric | Value Format | Previous Period | Conditional |
|--------|--------------|-----------------|-------------|
| **Published \{Post Type\}** | Number | ✅ Yes | Always |
| **Visitors** | Number | ✅ Yes | Always |
| **Views** | Number | ✅ Yes | Always |
| **Views per \{Post Type\}** | Decimal | ✅ Yes | Always |
| **Bounce Rate** | Percentage | ✅ Yes | Always |
| **Time on Page** | Time (MM:SS) | ✅ Yes | Always |
| **Comments** | Number | ✅ Yes | If comments enabled for post type |
| **Avg. Comments per \{Post Type\}** | Decimal | ✅ Yes | If comments enabled for post type |

**Note:** \{Post Type\} is dynamic based on selected filter (e.g., "Published Posts", "Published Pages", "Published Products")

**Conditional Display:**
- When comments are **enabled** for the selected post type: All 8 metrics displayed
- When comments are **disabled** for the selected post type: 6 metrics displayed (Comments and Avg. Comments hidden)

### Row 2 (Full Width) - Performance

- [Content Performance](../../widgets/content-performance.md) - Line chart displaying visitor and view trends over time for the selected post type

### Row 3 (Full Width) - Top Content

- [Top Content](../../widgets/top-content.md) - Tabbed list showing Most Popular, Most Commented, and Most Recent content with thumbnails

### Row 4 (Three Columns) - Traffic Sources

- [Top Referrers](../../widgets/top-referrers.md) - Top referring websites
- [Top Search Engines](../../widgets/top-search-engines.md) - Top search engines
- [Top Countries](../../widgets/top-countries.md) - Top visitor countries

**Note:** These widgets display data without "See all" links in this context.

### Row 5 (Three Columns) - Device Analytics

- [Top Browsers](../../widgets/top-browsers.md) - Top browsers
- [Top Operating Systems](../../widgets/top-operating-systems.md) - Top operating systems
- [Top Device Categories](../../widgets/top-device-categories.md) - Top device categories

**Note:** These widgets display data without "See all" links in this context.

## Related Documentation

- [Individual Content Report](individual-content.md)
- [Content Analytics Overview](overview.md)
- [Content Analytics Menu Group](../../global/menu-structure.md)
- [Metrics Component](../../components/metrics.md)
- [Content Performance Widget](../../widgets/content-performance.md)
- [Top Content Widget](../../widgets/top-content.md)

---

*Last Updated: 2025-12-10*
