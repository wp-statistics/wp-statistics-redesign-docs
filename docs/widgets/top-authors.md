---
title: "Top Authors"
type: "widget"
component: "tabbed-list"
add_on: "Free"
status: "Done"
used_in_reports:
  - "categories"
---

# Top Authors Widget

Displays top authors in a tabbed interface, showing authors ranked by views or by content publishing activity.

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
| **Link Target** | Authors report |

### Tab 2: Publishing

| Property | Value |
|----------|-------|
| **Label** | Publishing |
| **Sort By** | Content count in period (descending) |
| **Secondary Text** | "\{count\} contents" |
| **Link Text** | "See all authors" |
| **Link Target** | Authors report |

## Used In Reports

This widget is used in the following reports:

- [Categories](../reports/content-analytics/categories.md) - Row 5

## Empty State

When no author data is available for the selected period:
- "No authors available for the selected period"

## Related Documentation

- [Tabbed List Component](../components/tabbed-list.md)
- [Categories Report](../reports/content-analytics/categories.md)

---

*Last Updated: 2025-12-10*
