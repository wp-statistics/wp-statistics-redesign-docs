---
title: "Data Table Component"
type: "component"
status: "Done"
figma: ""
used_in_widgets:
  - "latest-visitors"
  - "latest-views-table"
  - "visitor-list"
  - "top-pages"
  - "top-visitors-table"
  - "logged-in-users-list"
  - "logged-in-users-views-table"
  - "online-visitors-table"
  - "top-search-terms-list"
---

# Data Table Component

A powerful, flexible data table component for displaying structured data with sorting and pagination.

## Component Configuration

- **Type**: Component (Base UI element)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This component is used by the following widgets:

- [Latest Visitors](../widgets/latest-visitors.md)
- [Latest Views Table](../widgets/latest-views-table.md)
- [Visitor List](../widgets/visitor-list.md)
- [Top Pages](../widgets/top-pages.md)
- [Top Visitors Table](../widgets/top-visitors-table.md)
- [Logged-in Users Views Table](../widgets/logged-in-users-views-table.md)
- [Logged-in Users List](../widgets/logged-in-users-list.md)
- [Online Visitors Table](../widgets/online-visitors-table.md)
- [Top Search Terms List](../widgets/top-search-terms-list.md)

## Overview

The Data Table component is a versatile solution for displaying tabular data with sorting, pagination, and responsive behavior.

## Configuration Options

Widgets using this component can configure the following options:

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| **Title** | String | Table title/heading displayed at the top | (Optional) |
| **Default Sort** | String | Column to sort by on initial load | null |
| **Row Limit** | Number | Number of rows to display per page | 50 |
| **Column Management** | Boolean | Show/hide column visibility and reordering button | true |
| **Pagination** | Boolean | Enable/disable pagination controls | true |

## Column Management

A button in the top-right corner of the table provides column management capabilities:
- **Show/Hide Columns**: Toggle visibility of individual columns
- **Reorder Columns**: Drag and drop to change column order

## Pagination

- First/Previous/Next/Last page buttons
- Current range and total count display

## Empty State

When table has no data:
- "No data available"

## Related Documentation

- [Latest Visitors Widget](../widgets/latest-visitors.md)
- [Visitor List Widget](../widgets/visitor-list.md)
- [Top Pages Widget](../widgets/top-pages.md)
- [Global Rules](../global/global-rules.md)

---

*Last Updated: 2025-11-06*
