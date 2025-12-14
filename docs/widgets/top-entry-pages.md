---
title: "Top Entry Pages"
type: "widget"
component: "data-table"
add_on: "Data Plus"
status: "Done"
default_sort: "unique-entrances"
row_limit: 5
column_management_mode: "none"
pagination: false
link_to_full_report: true
used_in_reports:
  - "visitors-overview"
  - "referrals-overview"
  - "single-country"
---

# Top Entry Pages Widget

Displays the top 5 entry pages based on unique entrances count in a simplified table format.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Data Plus (premium add-on)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Display Settings

| Property | Value |
|----------|-------|
| **Default Sort** | Unique Entrances (descending) |
| **Row Limit** | 5 |
| **Pagination** | No |
| **Column Management Mode** | "none" |
| **Link to Full Report** | Yes - [Entry Pages](../reports/page-insights/entry-pages.md) |

## Used In Reports

- [Visitors Overview](../reports/visitor-insights/visitors-overview.md) - Row 3, left column (only shown when Data Plus add-on is activated)
- [Referrals Overview](../reports/referrals/referrals-overview.md) - Row 3, left column (only shown when Data Plus add-on is activated)
- [Single Country](../reports/geographic/single-country.md) - Row 3

## Table Structure

| Column | Sortable | Header Label |
|--------|----------|--------------|
| [Entry Page](../columns/entry-page.md) | No | Entry Page |
| [Unique Entrances](../columns/unique-entrances.md) | No | Unique Entrances |
| [View Page](../columns/view-page.md) | No | (No header) |

## Empty State

"No data available for the selected period"

---

*Last Updated: 2025-12-14*
