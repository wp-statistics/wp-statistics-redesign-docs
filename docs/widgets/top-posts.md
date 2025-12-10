---
title: "Top Posts"
type: "widget"
component: "tabbed-list"
add_on: "Free"
status: "Not Started"
used_in_reports:
  - "content"
---

# Top Posts Widget

Displays content items in a tabbed interface with three views: Most Popular, Most Commented, and Most Recent. Each item shows a thumbnail, title, and relevant metrics.

## Widget Configuration

- **Component**: [Tabbed List](../components/tabbed-list.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Items per Tab** | 5 |
| **Show Thumbnail** | ✅ Yes (featured image) |
| **Thumbnail Placeholder** | ✅ Yes (placeholder when no featured image) |

## Tabs Configuration

### Tab 1: Most Popular

| Property | Value |
|----------|-------|
| **Label** | Most Popular |
| **Sort By** | Views (descending) |
| **Secondary Text** | "\{views\} views" |
| **Link to Report** | [Top Pages](../reports/page-insights/top-pages.md) with sort=views, respects date range |

### Tab 2: Most Commented

| Property | Value |
|----------|-------|
| **Label** | Most Commented |
| **Sort By** | Comments (descending) |
| **Secondary Text** | "\{comments\} comments · \{views\} views" |
| **Link to Report** | None |

### Tab 3: Most Recent

| Property | Value |
|----------|-------|
| **Label** | Most Recent |
| **Sort By** | Published Date (descending) |
| **Secondary Text** | "\{date\} · \{views\} views" |
| **Link to Report** | [Top Pages](../reports/page-insights/top-pages.md) with sort=date, respects date range |

## Used In Reports

This widget is used in the following reports:

- [Content](../reports/content-analytics/content.md) - Row 3, full width

## List Item Display

Each item in the list shows:

| Element | Description |
|---------|-------------|
| **Thumbnail** | Post featured image (left side), placeholder if none |
| **Title** | Post title (primary text) |
| **Metrics** | Tab-specific secondary text (views, comments, date) |

## "See All" Links

- **Most Popular**: "See all posts" → Top Pages report (sorted by views, current date range applied)
- **Most Commented**: No link
- **Most Recent**: "See all posts" → Top Pages report (sorted by date, current date range applied)

## Empty State

When no content is available for the selected period and post type:
- "No content available for the selected period"

## Related Documentation

- [Tabbed List Component](../components/tabbed-list.md)
- [Content Report](../reports/content-analytics/content.md)
- [Top Pages Report](../reports/page-insights/top-pages.md)

---

*Last Updated: 2025-12-10*
