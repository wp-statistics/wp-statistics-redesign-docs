---
title: "Individual Author"
type: "report"
group: "Content Analytics"
show_in_menu: false
add_on: "Data Plus"
status: "Done"
interactions:
  - "Date Picker"
  - "Post Type Filter"
widgets:
  - row: 1
    columns: ["individual-author-metrics"]
  - row: 2
    columns: ["traffic-summary:1/3", "content-performance:2/3"]
  - row: 3
    columns: ["top-content"]
  - row: 4
    columns: ["top-referrers", "top-search-engines", "top-countries"]
  - row: 5
    columns: ["top-browsers", "top-operating-systems", "top-device-categories"]
---

# Individual Author

Detailed content performance report for a single author, showing metrics for all content created by that author.

## Report Configuration

- **Type**: Report Page (Hidden)
- **Menu Group**: Content Analytics
- **Show in Menu**: No (accessed via drill-down from Authors report)
- **Add-on**: Data Plus
- **Status**: Done
- **Figma Design**: [Add link when available]

## Page Header

### Title

The page title shows the author's display name:
- Example: `John Doe`, `Admin`, `Sarah Smith`

### Author Meta

Displayed below the title:

| Field | Description |
|-------|-------------|
| Avatar | Author profile picture |
| Email | Author email address |
| Role | WordPress role (Administrator, Editor, Author, Contributor, Subscriber) |
| Registration Date | Date when author registered |

### Action Links

- **Visit Profile**: Opens author's profile page
- **View Author Posts**: Opens WordPress admin post list filtered by this author

## Available Interactions

- **Date Picker**: Select time period for data
- **Post Type Filter**: Filter by post type (default: Posts)
  - Posts, Pages, and custom post types (Data Plus)

## Widget Layout

### Row 1 (Full Width) - Metrics

Uses the [Metrics](../../components/metrics.md) component to display key performance indicators for this author's content.

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
| **Bounce Rate** | Percentage | ✅ Yes | Always |
| **Avg. Time on Page** | Time (MM:SS) | ✅ Yes | Always |
| **Comments** | Number | ✅ Yes | If comments enabled |
| **Avg. Comments per \{Post Type\}** | Decimal | ✅ Yes | If comments enabled |

**Note:** \{Post Type\} is dynamic based on selected filter (e.g., "Published Posts", "Published Pages", "Published Products")

### Row 2 (Two Columns: 1/3 + 2/3) - Traffic Overview

- [Traffic Summary](../../widgets/traffic-summary.md) (1/3 width) - Quick overview across time periods
- [Content Performance](../../widgets/content-performance.md) (2/3 width) - Shows visitor, view, and publishing trends for this author's content

### Row 3 (Full Width) - Top Content

- [Top Content](../../widgets/top-content.md) - Shows content items by this author

### Row 4 (Three Columns) - Traffic Sources

- [Top Referrers](../../widgets/top-referrers.md)
- [Top Search Engines](../../widgets/top-search-engines.md)
- [Top Countries](../../widgets/top-countries.md)

### Row 5 (Three Columns) - Device Analytics

- [Top Browsers](../../widgets/top-browsers.md)
- [Top Operating Systems](../../widgets/top-operating-systems.md)
- [Top Device Categories](../../widgets/top-device-categories.md)

## Related Documentation

- [Authors Report](authors.md)
- [Top Authors Report](top-authors.md)
- [Content Analytics Overview](overview.md)
- [Metrics Component](../../components/metrics.md)
- [Traffic Summary Widget](../../widgets/traffic-summary.md)
- [Content Performance Widget](../../widgets/content-performance.md)
- [Top Content Widget](../../widgets/top-content.md)

---

*Last Updated: 2025-12-12*
