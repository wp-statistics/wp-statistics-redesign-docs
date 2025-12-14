---
title: "Regions Table"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "visitors"
row_limit: 20
used_in_reports:
  - "regions-of-country"
  - "us-states"
---

# Regions Table

A data table showing all regions of the detected country with visitor metrics and engagement data.

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

- [Regions of \{Country\}](../reports/geographic/regions-of-country.md)
- [US States](../reports/geographic/us-states.md)

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|-------------------|
| [Region](../columns/region.md) | Yes | Shown |
| [Visitors](../columns/visitors.md) | Yes | Shown |
| [Views](../columns/views.md) | Yes | Shown |
| [Bounce Rate](../columns/bounce-rate.md) | Yes | Shown |
| [Session Duration](../columns/session-duration.md) | Yes | Shown |
| [Views per Visitor](../columns/views-per-visitor.md) | Yes | Shown |

## Empty State

When no data available:
- "No region data found for the selected period."

## Related Documentation

- [Regions of \{Country\} Report](../reports/geographic/regions-of-country.md)
- [US States Report](../reports/geographic/us-states.md)
- [Countries Report](../reports/geographic/countries.md)
- [Data Table Component](../components/data-table.md)
- [Region Column](../columns/region.md)

---

*Last Updated: 2025-12-14*
