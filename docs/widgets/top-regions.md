---
title: "Top Regions"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "visitors"
row_limit: 10
used_in_reports:
  - "single-country"
---

# Top Regions Widget

Displays the top 10 regions within the selected country with visitor metrics.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | Top Regions |
| **Default Sort** | Visitors (descending) |
| **Row Limit** | 10 |
| **Column Management** | No |
| **Pagination** | Yes |
| **Link to Full Report** | Yes - [Regions of {Country}](../reports/geographic/regions-of-country.md) |

## Used In Reports

- [Single Country](../reports/geographic/single-country.md)

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|-------------------|
| [Region](../columns/region.md) | Yes | Shown |
| [Visitors](../columns/visitors.md) | Yes | Shown |
| [Views](../columns/views.md) | Yes | Shown |

## Empty State

When no data available:
- "No region data found for the selected period."

## Related Documentation

- [Single Country Report](../reports/geographic/single-country.md)
- [Regions of \{Country\} Report](../reports/geographic/regions-of-country.md)
- [Regions Table Widget](regions-table.md)
- [Data Table Component](../components/data-table.md)
- [Region Column](../columns/region.md)

---

*Last Updated: 2025-12-14*
