---
title: "Countries Table"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "visitors"
row_limit: 20
used_in_reports:
  - "countries"
  - "european-countries"
---

# Countries Table

A data table showing all countries with visitor metrics, engagement data, and traffic share.

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

- [Countries](../reports/geographic/countries.md)
- [European Countries](../reports/geographic/european-countries.md)

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|-------------------|
| [Country](../columns/country.md) | Yes | Shown |
| [Visitors](../columns/visitors.md) | Yes | Shown |
| [Views](../columns/views.md) | Yes | Shown |
| [Bounce Rate](../columns/bounce-rate.md) | Yes | Shown |
| [Session Duration](../columns/session-duration.md) | Yes | Shown |
| [Views per Visitor](../columns/views-per-visitor.md) | Yes | Shown |
| [% of Total](../columns/percentage-of-total.md) | Yes | Shown |

## Empty State

When no data available:
- "No country data found for the selected period."

## Related Documentation

- [Countries Report](../reports/geographic/countries.md)
- [European Countries Report](../reports/geographic/european-countries.md)
- [Single Country Report](../reports/geographic/single-country.md)
- [Top Countries Widget](top-countries.md)
- [Data Table Component](../components/data-table.md)
- [Country Column](../columns/country.md)

---

*Last Updated: 2025-12-13*
