---
title: "Top Terms"
type: "widget"
component: "tabbed-list"
add_on: "Free"
status: "Done"
used_in_reports:
  - "categories"
---

# Top Terms Widget

Displays top taxonomy terms in a tabbed interface, showing terms ranked by views or by content publishing activity.

## Widget Configuration

- **Component**: [Tabbed List](../components/tabbed-list.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Items per Tab** | 5 |
| **Show Thumbnail** | ❌ No |
| **Thumbnail Placeholder** | N/A |

## Tab Configuration

### Tab 1: Views

| Property | Value |
|----------|-------|
| **Label** | Views |
| **Sort By** | Views (descending) |
| **Secondary Text** | "\{views\} views" |
| **Link Text** | "See all \{taxonomy\}" |
| **Link Target** | [Top Categories](../reports/content-analytics/top-categories.md) (with taxonomy filter) |

### Tab 2: Publishing

| Property | Value |
|----------|-------|
| **Label** | Publishing |
| **Sort By** | Content count in period (descending) |
| **Secondary Text** | "\{count\} contents" |
| **Link Text** | "See all \{taxonomy\}" |
| **Link Target** | [Top Categories](../reports/content-analytics/top-categories.md) (with taxonomy filter) |

**Note:** \{taxonomy\} is dynamic based on selected filter (e.g., "See all categories", "See all tags", "See all product_cat").

## Used In Reports

- [Categories](../reports/content-analytics/categories.md)

## Empty State

When no term data is available for the selected period:
- "No terms available for the selected period"

## Related Documentation

- [Tabbed List Component](../components/tabbed-list.md)
- [Categories Report](../reports/content-analytics/categories.md)
- [Top Categories Report](../reports/content-analytics/top-categories.md)

---

*Last Updated: 2025-12-10*
