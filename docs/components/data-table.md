---
title: "Data Table Component"
type: "component"
status: "Done"
used_in_widgets:
  - "404-pages-preview"
  - "404-pages-table"
  - "author-pages-preview"
  - "author-pages-table"
  - "campaigns-table"
  - "category-pages-table"
  - "entry-pages-table"
  - "exit-pages-table"
  - "visitors-table"
  - "latest-views-table"
  - "logged-in-users-list"
  - "online-visitors-table"
  - "recent-pages-preview"
  - "referrers-table"
  - "search-terms-table"
  - "source-categories-table"
  - "top-entry-pages"
  - "top-entry-pages-preview"
  - "top-exit-pages-preview"
  - "top-pages"
  - "top-pages-full"
  - "top-pages-preview"
  - "top-search-terms-list"
  - "top-visitors"
  - "visitor-list"
  - "top-categories-table"
---

# Data Table Component

A powerful, flexible data table component for displaying structured data with configurable sorting, pagination, and column management options.

## Component Configuration

- **Type**: Component (Base UI element)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This component is used by the following widgets:

- [404 Pages Preview](../widgets/404-pages-preview.md)
- [404 Pages Table](../widgets/404-pages-table.md)
- [Author Pages Preview](../widgets/author-pages-preview.md)
- [Author Pages Table](../widgets/author-pages-table.md)
- [Campaigns Table](../widgets/campaigns-table.md)
- [Category Pages Table](../widgets/category-pages-table.md)
- [Entry Pages Table](../widgets/entry-pages-table.md)
- [Exit Pages Table](../widgets/exit-pages-table.md)
- [Visitors Table](../widgets/visitors-table.md)
- [Latest Views Table](../widgets/latest-views-table.md)
- [Logged-in Users List](../widgets/logged-in-users-list.md)
- [Online Visitors Table](../widgets/online-visitors-table.md)
- [Recent Pages Preview](../widgets/recent-pages-preview.md)
- [Referrers Table](../widgets/referrers-table.md)
- [Search Terms Table](../widgets/search-terms-table.md)
- [Source Categories Table](../widgets/source-categories-table.md)
- [Top Entry Pages](../widgets/top-entry-pages.md)
- [Top Entry Pages Preview](../widgets/top-entry-pages-preview.md)
- [Top Exit Pages Preview](../widgets/top-exit-pages-preview.md)
- [Top Pages](../widgets/top-pages.md)
- [Top Pages Full](../widgets/top-pages-full.md)
- [Top Pages Preview](../widgets/top-pages-preview.md)
- [Top Search Terms List](../widgets/top-search-terms-list.md)
- [Top Visitors](../widgets/top-visitors.md)
- [Visitor List](../widgets/visitor-list.md)
- [Top Categories Table](../widgets/top-categories-table.md)

## Overview

The Data Table component is a versatile solution for displaying tabular data with configurable sorting, pagination, and column management capabilities. It can be configured from simple static displays to full-featured interactive tables.

## Configuration Options

Widgets using this component can configure the following options:

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| **Title** | String | Table title/heading displayed at the top | (Optional) |
| **Default Sort** | String | Column to sort by on initial load | null |
| **Row Limit** | Number | Number of rows to display per page | 50 |
| **Column Management Mode** | String | Column control level: "none", "visibility", or "full" | "full" |
| **Pagination** | Boolean | Enable/disable pagination controls | true |
| **Link to Full Report** | Object/Boolean | Link configuration \{text, url\} or true for default pattern | null |

## Column Management Modes

The component supports three levels of column management:

- **"none"**: No column controls, all columns fixed and visible (static display)
- **"visibility"**: Show/hide column controls only, no reordering
- **"full"**: Full column management with show/hide and drag-to-reorder capabilities

When set to "visibility" or "full", a button appears in the top-right corner of the table providing the configured column management capabilities.

## Link to Full Report

When configured, a link appears below the table:

- **Position**: Bottom of the component
- **Behavior**:
  - If set to `true`: Uses default link pattern
  - If set to object: Uses custom text and URL from configuration
- **Purpose**: Navigate to full report page to view complete data set

## Pagination

- First/Previous/Next/Last page buttons
- Current range and total count display

## Empty State

When table has no data:
- "No data available"

## Related Documentation

- [Visitors Table Widget](../widgets/visitors-table.md)
- [Visitor List Widget](../widgets/visitor-list.md)
- [Top Pages Widget](../widgets/top-pages.md)
- [Global Rules](../global/global-rules.md)

---

*Last Updated: 2025-11-24*
