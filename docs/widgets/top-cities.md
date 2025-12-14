---
title: "Top Cities"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "visitors"
row_limit: 10
used_in_reports:
  - "single-country"
---

# Top Cities Widget

Displays the top 10 cities within the selected country with visitor metrics.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | Top Cities |
| **Default Sort** | Visitors (descending) |
| **Row Limit** | 10 |
| **Column Management** | No |
| **Pagination** | Yes |
| **Link to Full Report** | Yes - [Cities](../reports/geographic/cities.md) |

## Used In Reports

- [Single Country](../reports/geographic/single-country.md)

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|-------------------|
| [City](../columns/city.md) | Yes | Shown |
| [Region](../columns/region.md) | Yes | Shown |
| [Visitors](../columns/visitors.md) | Yes | Shown |
| [Views](../columns/views.md) | Yes | Shown |

## Empty State

When no data available:
- "No city data found for the selected period."

## Related Documentation

- [Single Country Report](../reports/geographic/single-country.md)
- [Cities Report](../reports/geographic/cities.md)
- [Cities Table Widget](cities-table.md)
- [Data Table Component](../components/data-table.md)
- [City Column](../columns/city.md)

---

*Last Updated: 2025-12-14*
