---
title: "Table"
type: "component"
status: "Done"
used_in_widgets:
  - "404-pages-table"
  - "top-entry-pages"
  - "top-visitors"
  - "search-terms-table"
---

# Table Component

A simplified table component for displaying pre-sorted structured data without interactive sorting or column management features.

## Component Configuration

- **Type**: Component
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This component is used by the following widgets:

- [404 Pages Table](../widgets/404-pages-table.md)
- [Top Entry Pages](../widgets/top-entry-pages.md)
- [Top Visitors](../widgets/top-visitors.md)
- [Search Terms Table](../widgets/search-terms-table.md)

## Overview

The Table component provides a straightforward way to display tabular data that has been pre-sorted by a specific column. Unlike the Data Table component, this simplified version does not include interactive sorting, column management, or reordering capabilities. The table displays data in a clean, readable format with optional pagination and an optional link to view the full report.

## Configuration Options

Widgets using this component can configure the following options:

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| **Title** | String | Table title/heading displayed at the top | null |
| **Default Sort** | String | Column that data is pre-sorted by | (Required) |
| **Row Limit** | Number | Number of rows to display per page | 10 |
| **Pagination** | Boolean | Enable/disable pagination controls | false |
| **Link to Full Report** | Object/Boolean | Link configuration {text, url} or true for default pattern | null |

## Default Sort

The table displays data that has been pre-sorted by the specified column:

- Data arrives already sorted from the data source
- No interactive sorting controls or clickable column headers
- Sort column and direction are fixed based on widget configuration
- Users cannot change the sort order

## Pagination

When enabled, pagination provides navigation controls:

- **Controls**: First/Previous/Next/Last page buttons
- **Display**: Current range and total count display
- **Default**: Disabled (shows all rows up to row limit)
- **When Enabled**: Displays rows per page based on row limit setting

## Link to Full Report

When configured, a link appears below the table:

- **Position**: Bottom of the component
- **Behavior**:
  - If set to `true`: Uses default link pattern
  - If set to object: Uses custom text and URL from configuration
- **Purpose**: Navigate to full report page to view complete data set

## Fixed Columns

- Columns are specified at the widget level in the Table Structure section
- No column management controls (cannot show/hide or reorder)
- All configured columns are always visible
- Column order is fixed as defined in widget configuration

## Empty State

When no data is available for the selected period:
- "No data available for the selected period"

## Related Documentation

- [Data Table Component](../components/data-table.md) - For tables requiring sorting and column management
- [Components Overview](../README.md#components)

---

*Last Updated: 2025-11-08*
