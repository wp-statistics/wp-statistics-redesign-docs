---
title: "Table (Deprecated)"
type: "component"
status: "Deprecated"
deprecated: true
replaced_by: "data-table"
used_in_widgets: []
---

# Table Component (Deprecated)

> **⚠️ DEPRECATED**: This component has been deprecated and replaced by the [Data Table Component](../components/data-table.md) with `columnManagementMode: "none"`. All widgets have been migrated to use Data Table. This documentation is kept for historical reference only.

A simplified table component for displaying pre-sorted structured data without interactive sorting or column management features.

## Migration Notice

This component has been consolidated into the Data Table component. To achieve the same behavior:

- Use [Data Table Component](../components/data-table.md)
- Set `columnManagementMode: "none"`
- Configure other options as needed (pagination, linkToFullReport, etc.)

## Component Configuration

- **Type**: Component
- **Status**: Deprecated
- **Replaced By**: [Data Table Component](../components/data-table.md)

## Previously Used In Widgets

All of these widgets have been migrated to use the Data Table component:

- [404 Pages Preview](../widgets/404-pages-preview.md) - Now uses Data Table
- [404 Pages Table](../widgets/404-pages-table.md) - Now uses Data Table
- [Author Pages Preview](../widgets/author-pages-preview.md) - Now uses Data Table
- [Recent Pages Preview](../widgets/recent-pages-preview.md) - Now uses Data Table
- [Search Terms Table](../widgets/search-terms-table.md) - Now uses Data Table
- [Top Entry Pages](../widgets/top-entry-pages.md) - Now uses Data Table
- [Top Entry Pages Preview](../widgets/top-entry-pages-preview.md) - Now uses Data Table
- [Top Exit Pages Preview](../widgets/top-exit-pages-preview.md) - Now uses Data Table
- [Top Pages Preview](../widgets/top-pages-preview.md) - Now uses Data Table
- [Top Visitors](../widgets/top-visitors.md) - Now uses Data Table

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
| **Link to Full Report** | Object/Boolean | Link configuration \{text, url\} or true for default pattern | null |

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
- [Components Overview](../intro.md)

---

*Last Updated: 2025-11-23*
*Deprecated: 2025-11-23*
