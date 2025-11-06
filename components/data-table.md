---
title: "Data Table Component"
type: "component"
status: "Not Started"
figma: ""
used_in_widgets:
  - "latest-visitors"
  - "visitor-list"
  - "top-pages"
  - "top-visitors-list"
  - "logged-in-users-list"
  - "online-visitors-list"
  - "top-search-terms-list"
---

# Data Table Component

A powerful, flexible data table component for displaying structured data with sorting and pagination.

## Component Configuration

- **Type**: Component (Base UI element)
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Used In Widgets

This component is used by the following widgets:

- [Latest Visitors](../widgets/latest-visitors.md)
- [Visitor List](../widgets/visitor-list.md)
- [Top Pages](../widgets/top-pages.md)
- [Top Visitors List](../widgets/top-visitors-list.md)
- [Logged-in Users List](../widgets/logged-in-users-list.md)
- [Online Visitors List](../widgets/online-visitors-list.md)
- [Top Search Terms List](../widgets/top-search-terms-list.md)

## Overview

The Data Table component is a versatile solution for displaying tabular data with sorting, pagination, and responsive behavior.

## Features

- Single column sorting
- Pagination with navigation controls
- Fixed header on scroll
- Column visibility and reordering

## Column Management

A button in the top-right corner of the table provides column management capabilities:
- **Show/Hide Columns**: Toggle visibility of individual columns
- **Reorder Columns**: Drag and drop to change column order

## Pagination

- First/Previous/Next/Last page buttons
- Current range and total count display

## States

### Empty
- "No data available" message displayed when table has no data

### Error
- Error message with retry option when data loading fails

## Accessibility

- Full keyboard navigation support
- Proper ARIA labels for table structure
- Screen reader announcements for sort and pagination changes
- High contrast mode support

## Related Documentation

- [Latest Visitors Widget](../widgets/latest-visitors.md)
- [Visitor List Widget](../widgets/visitor-list.md)
- [Top Pages Widget](../widgets/top-pages.md)
- [Global Rules](../global/global-rules.md)

---

*Last Updated: 2025-11-06*
