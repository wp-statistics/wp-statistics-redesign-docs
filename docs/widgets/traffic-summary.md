---
title: "Traffic Summary"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
column_management_mode: "none"
pagination: false
used_in_reports:
  - "individual-content"
  - "individual-category"
  - "individual-author"
---

# Traffic Summary Widget

Displays a quick overview of traffic across different time periods with previous period comparison.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Display Settings

| Property | Value |
|----------|-------|
| **Column Management Mode** | "none" (static display) |
| **Pagination** | No |
| **Sorting** | No |

## Used In Reports

- [Individual Content](../reports/content-analytics/individual-content.md) - Row 2
- [Individual Category](../reports/content-analytics/individual-category.md) - Row 2
- [Individual Author](../reports/content-analytics/individual-author.md) - Row 2

## Table Structure

### Columns

| Column | Description |
|--------|-------------|
| Time Period | Label for the date range |
| Visitors | Visitor count with previous period comparison |
| Views | View count with previous period comparison |

### Rows

| Time Period | Previous Period Comparison |
|-------------|---------------------------|
| Today | ✅ Yes |
| Yesterday | ✅ Yes |
| Last 7 Days | ✅ Yes |
| Last 28 Days | ✅ Yes |
| Total | ❌ No (all-time count) |

## Previous Period Comparison

For rows with previous period comparison enabled:
- **Today** vs Yesterday
- **Yesterday** vs day before yesterday
- **Last 7 Days** vs previous 7 days
- **Last 28 Days** vs previous 28 days

Displays percentage change with up/down indicator.

## Empty State

"No traffic data available"

## Related Documentation

- [Data Table Component](../components/data-table.md)
- [Individual Content Report](../reports/content-analytics/individual-content.md)

---

*Last Updated: 2025-12-11*
