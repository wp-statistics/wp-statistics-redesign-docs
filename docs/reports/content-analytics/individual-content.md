---
title: "Individual Content"
type: "report"
group: "Content Analytics"
show_in_menu: false
add_on: "Free"
status: "Done"
interactions:
  - "Date Picker"
  - "Advanced Filters"
widgets:
  - row: 1
    columns: ["individual-content-metrics"]
  - row: 2
    columns: ["traffic-summary:1/3", "traffic-trends:2/3"]
  - row: 3
    columns: ["top-referrers", "top-search-engines", "top-countries"]
  - row: 4
    columns: ["top-browsers", "top-operating-systems", "top-device-categories"]
---

# Individual Content

Detailed performance report for a single content item (post, page, or custom post type).

## Report Configuration

- **Type**: Report Page (Hidden)
- **Menu Group**: Content Analytics
- **Show in Menu**: No (accessed via drill-down from Content report)
- **Add-on**: Free (Post/Page), Data Plus (Custom post types)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Add-on Requirements

- **Free**: Post and Page post types
- **Data Plus**: Custom post types

## Page Header

### Title

The page title shows the content title with action icons:
- **Title**: Content title (e.g., `How to Build a WordPress Plugin`)
- **View Icon**: Opens content in new tab
- **Edit Icon**: Opens content edit page in WordPress admin

### Content Meta (Line 1)

Displayed below the title:

| Field | Description | Link |
|-------|-------------|------|
| Post Type | Content type label | Links to [Content Report](content.md) filtered by this post type |
| Published Date | Date content was published | - |
| Last Updated | Date content was last modified | Only shown if different from Published Date |
| Author | Content author name | Links to [Individual Author Report](individual-author.md) |

### Content Terms (Line 2)

List of taxonomy terms (categories, tags) assigned to this content. Each term links to its respective report page.

## Available Interactions

- **Date Picker**: Select time period for data
- **Advanced Filters**: [Individual Content Filters](../../global/advanced-filters.md#individual-content-filters)

## Widget Layout

### Row 1 (Full Width) - Content Metrics

Uses the [Metrics](../../components/metrics.md) component to display key performance indicators for this content item.

#### Component Configuration

- **Component**: [Metrics](../../components/metrics.md)
- **Show Previous Period**: Enabled
- **Show Source Icons**: Disabled

#### Metrics Display

| Metric | Description | Format | Previous Period | Conditional |
|--------|-------------|--------|-----------------|-------------|
| **Visitors** | Unique visitors | Number | ✅ Yes | Always |
| **Views** | Total page views | Number | ✅ Yes | Always |
| **Avg. Time on Page** | Average time spent on this content | Time (MM:SS) | ✅ Yes | Always |
| **Bounce Rate** | Percentage of single-page sessions | Percentage | ✅ Yes | Always |
| **Entry Page** | Times this was first page visited | Number | ✅ Yes | Always |
| **Exit Page** | Times this was last page visited | Number | ✅ Yes | Always |
| **Exit Rate** | Percentage of exits from this page | Percentage | ✅ Yes | Always |
| **Comments** | Total comments | Number | ✅ Yes | If comments enabled |

### Row 2 (Two Columns: 1/3 + 2/3) - Traffic Overview

- [Traffic Summary](../../widgets/traffic-summary.md) (1/3 width) - Quick overview across time periods
- [Traffic Trends](../../widgets/traffic-trends.md) (2/3 width) - Shows Visitors and Views over time for this specific content

### Row 3 (Three Columns) - Traffic Sources

- [Top Referrers](../../widgets/top-referrers.md) - With Link to Full Report
- [Top Search Engines](../../widgets/top-search-engines.md) - With Link to Full Report
- [Top Countries](../../widgets/top-countries.md) - With Link to Full Report

### Row 4 (Three Columns) - Device Analytics

- [Top Browsers](../../widgets/top-browsers.md) - No Link to Full Report (device reports don't support resource_id filtering)
- [Top Operating Systems](../../widgets/top-operating-systems.md) - No Link to Full Report
- [Top Device Categories](../../widgets/top-device-categories.md) - No Link to Full Report

## Related Documentation

- [Content Report](content.md)
- [Content Analytics Overview](overview.md)
- [Metrics Component](../../components/metrics.md)
- [Traffic Summary Widget](../../widgets/traffic-summary.md)
- [Traffic Trends Widget](../../widgets/traffic-trends.md)
- [Advanced Filters](../../global/advanced-filters.md)

---

*Last Updated: 2025-12-11*
