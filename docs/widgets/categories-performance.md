---
title: "Categories Performance"
type: "widget"
component: "line-chart"
add_on: "Free"
status: "Done"
used_in_reports:
  - "categories"
---

# Categories Performance Widget

Displays visitor, view, and term publishing trends over time for the selected taxonomy.

## Widget Configuration

- **Component**: [Line Chart](../components/line-chart.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | Performance |
| **Primary Metric** | Visitors |
| **Secondary Metric** | Views |
| **Bar Metric** | Published Terms |
| **Previous Period** | ✅ Yes |
| **Metric Toggle** | ✅ Yes |
| **Timeframe Selector** | ✅ Yes |
| **Legend Display** | ✅ Yes |

**Note:** "Published Terms" counts new terms (categories/tags) created within the selected period.

## Used In Reports

This widget is used in the following reports:

- [Categories](../reports/content-analytics/categories.md) - Row 2, full width

## Empty State

When no data is available for the selected period:
- "No data available"

## Related Documentation

- [Line Chart Component](../components/line-chart.md)
- [Categories Report](../reports/content-analytics/categories.md)

---

*Last Updated: 2025-12-10*
