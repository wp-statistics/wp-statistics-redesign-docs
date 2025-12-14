---
title: "Cities Table"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "visitors"
row_limit: 20
used_in_reports:
  - "cities"
---

# Cities Table

A data table showing all cities with visitor metrics and traffic share.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | null |
| **Default Sort** | Visitors (descending) |
| **Row Limit** | 20 |
| **Column Management** | Yes |
| **Pagination** | Yes |

## Used In Reports

- [Cities](../reports/geographic/cities.md)

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|-------------------|
| [City](../columns/city.md) | Yes | Shown |
| [Region](../columns/region.md) | Yes | Shown |
| [Country](../columns/country.md) | Yes | Shown |
| [Visitors](../columns/visitors.md) | Yes | Shown |
| [Views](../columns/views.md) | Yes | Shown |

## Empty State

When no data available:
- "No city data found for the selected period."

## Related Documentation

- [Cities Report](../reports/geographic/cities.md)
- [Countries Report](../reports/geographic/countries.md)
- [Countries Table Widget](countries-table.md)
- [Data Table Component](../components/data-table.md)
- [City Column](../columns/city.md)
- [Region Column](../columns/region.md)

---

*Last Updated: 2025-12-13*
