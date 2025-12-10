---
title: "Authors"
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
    columns: ["authors-metrics"]
  - row: 2
    columns: ["top-authors"]
---

# Authors

Shows content performance metrics aggregated by author. Unlike Author Pages (which tracks author archive page visits), this report tracks how content created by each author performs.

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

## Comparison with Author Pages

| Report | Focus | Example |
|--------|-------|---------|
| **Authors** (this report) | Content created by authors | How are John's 50 articles performing? |
| **Author Pages** | Author archive page URLs | How many visitors viewed `/author/john/`? |

## Available Interactions

- **Date Picker**: Select time period for data
- **Post Type Filter**: Filter by post type (default: Posts)
  - Free: Posts, Pages
  - Data Plus: Custom post types

## Widget Layout

### Row 1 (Full Width) - Metrics

Uses the [Metrics](../../components/metrics.md) component to display key performance indicators for authors of the selected post type.

#### Component Configuration

- **Component**: [Metrics](../../components/metrics.md)
- **Show Previous Period**: Enabled
- **Show Source Icons**: Disabled

#### Metrics Display

| Metric | Value Format | Previous Period | Conditional |
|--------|--------------|-----------------|-------------|
| **Published \{Post Type\}** | Number | ✅ Yes | Always |
| **Active Authors** | Number | ✅ Yes | Always |
| **Visitors** | Number | ✅ Yes | Always |
| **Views** | Number | ✅ Yes | Always |
| **Views per Author** | Decimal | ✅ Yes | Always |
| **Avg. \{Post Type\} per Author** | Decimal | ✅ Yes | Always |
| **Bounce Rate** | Percentage | ✅ Yes | Always |
| **Avg. Time on Page** | Time (MM:SS) | ✅ Yes | Always |

**Note:** \{Post Type\} is dynamic based on selected filter (e.g., "Published Posts", "Published Pages", "Published Products")

**Active Authors:** Authors who published content of the selected post type within the date range.

### Row 2 (Full Width) - Top Authors

- [Top Authors](../../widgets/top-authors.md)

## Related Documentation

- [Individual Author Report](individual-author.md)
- [Content Report](content.md)
- [Categories Report](categories.md)
- [Author Pages Report](../page-insights/author-pages.md) (different focus)
- [Content Analytics Menu Group](../../global/menu-structure.md)
- [Metrics Component](../../components/metrics.md)
- [Top Authors Widget](../../widgets/top-authors.md)

---

*Last Updated: 2025-12-10*
