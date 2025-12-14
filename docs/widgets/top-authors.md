---
title: "Top Authors"
type: "widget"
component: "tabbed-list"
add_on: "Free"
status: "Done"
used_in_reports:
  - "categories"
  - "authors"
  - "individual-category"
---

# Top Authors Widget

Displays top authors in a tabbed interface, showing authors ranked by views, publishing activity, or engagement metrics.

## Widget Configuration

- **Component**: [Tabbed List](../components/tabbed-list.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Items per Tab** | 5 |
| **Show Thumbnail** | ✅ Yes (author avatar) |
| **Thumbnail Placeholder** | ✅ Yes (default avatar) |

## Tab Configuration

### Tab 1: Views

| Property | Value |
|----------|-------|
| **Label** | Views |
| **Sort By** | Views (descending) |
| **Secondary Text** | "\{views\} views" |
| **Link Text** | "See all authors" |
| **Link Target** | [Top Authors](../reports/content-analytics/top-authors.md) |

### Tab 2: Publishing

| Property | Value |
|----------|-------|
| **Label** | Publishing |
| **Sort By** | Content count in period (descending) |
| **Secondary Text** | "\{count\} \{post type\}" |
| **Link Text** | "See all authors" |
| **Link Target** | [Top Authors](../reports/content-analytics/top-authors.md) |

### Tab 3: Views per \{Post Type\}

| Property | Value |
|----------|-------|
| **Label** | Views per \{Post Type\} |
| **Sort By** | Views/content ratio (descending) |
| **Secondary Text** | "\{ratio\} views/\{post type\}" |
| **Link Text** | "See all authors" |
| **Link Target** | [Top Authors](../reports/content-analytics/top-authors.md) |

### Tab 4: Comments per \{Post Type\}

| Property | Value |
|----------|-------|
| **Label** | Comments per \{Post Type\} |
| **Sort By** | Comments/content ratio (descending) |
| **Secondary Text** | "\{ratio\} comments/\{post type\}" |
| **Link Text** | "See all authors" |
| **Link Target** | [Top Authors](../reports/content-analytics/top-authors.md) |
| **Conditional** | Only shown if comments are enabled for the post type |

**Note:** \{Post Type\} is dynamic based on selected filter (e.g., "Views per Post", "Comments per Page").

## Context-Specific Behavior

- **Authors Report**: Shows all 4 tabs (or 3 if comments disabled)
- **Categories Report**: Shows only 2 tabs (Views, Publishing) for authors within the selected taxonomy

## Used In Reports

- [Authors](../reports/content-analytics/authors.md)
- [Categories](../reports/content-analytics/categories.md)
- [Individual Category](../reports/content-analytics/individual-category.md)

## Empty State

When no author data is available for the selected period:
- "No authors available for the selected period"

## Related Documentation

- [Tabbed List Component](../components/tabbed-list.md)
- [Authors Report](../reports/content-analytics/authors.md)
- [Top Authors Report](../reports/content-analytics/top-authors.md)
- [Categories Report](../reports/content-analytics/categories.md)

---

*Last Updated: 2025-12-10*
