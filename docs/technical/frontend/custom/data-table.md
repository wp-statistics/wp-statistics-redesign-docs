---
title: "DataTable Component"
type: "frontend-component"
category: "custom"
status: "Done"
component_path: "resources/react/src/components/custom/data-table.tsx"
storybook: true
---

# DataTable Component

A feature-rich data table component built on TanStack Table with sorting, pagination, column management, and responsive design.

## Component Information

- **Type**: Custom Component (Domain-specific)
- **Location**: `resources/react/src/components/custom/data-table.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com?path=/story/custom-datatable--default)
- **Product Docs**: [Data Table Component](../../../components/data-table.md) - Configuration options and widget usage
- **Dependencies**: `@tanstack/react-table`, `lucide-react`, `@wordpress/i18n`, UI components

## Overview

The DataTable component provides a complete table solution with built-in sorting, pagination, column visibility toggle, and empty state handling. It wraps TanStack Table with WP Statistics styling.

## Import

```typescript
import { DataTable } from '@/components/custom/data-table'
import type { ColumnDef } from '@tanstack/react-table'
```

## Basic Usage

```tsx
interface User {
  id: number
  name: string
  visits: number
}

const columns: ColumnDef<User>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'visits', header: 'Visits' },
]

const data: User[] = [
  { id: 1, name: 'John', visits: 150 },
  { id: 2, name: 'Jane', visits: 230 },
]

<DataTable columns={columns} data={data} title="Users" />
```

## With Sorting and Pagination

```tsx
<DataTable
  columns={columns}
  data={data}
  title="Top Pages"
  defaultSort="visits"
  rowLimit={10}
  showPagination={true}
  showColumnManagement={true}
/>
```

## With Full Report Link

```tsx
<DataTable
  columns={columns}
  data={data}
  title="Recent Visitors"
  fullReportLink={{
    text: 'View All Visitors',
    action: () => navigate('/visitors'),
  }}
/>
```

## API

### DataTableProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `ColumnDef<TData, TValue>[]` | *required* | TanStack Table column definitions |
| `data` | `TData[]` | *required* | Array of data rows |
| `title` | `string` | - | Table title in card header |
| `defaultSort` | `string` | - | Column key for initial sort (descending) |
| `rowLimit` | `number` | `50` | Rows per page |
| `showColumnManagement` | `boolean` | `true` | Show column visibility toggle |
| `showPagination` | `boolean` | `true` | Show pagination controls |
| `fullReportLink` | `FullReportLink` | - | Link to full report page |
| `hiddenColumns` | `string[]` | `[]` | Initially hidden column keys |
| `emptyStateMessage` | `string` | `'No data available'` | Empty state message |

### FullReportLink

| Property | Type | Description |
|----------|------|-------------|
| `text` | `string` | Link text |
| `action` | `() => void` | Click handler |

## Features

### Column Management

Users can show/hide columns via the column toggle dropdown in the header.

### Sorting

Click column headers to sort. Default sort is descending when `defaultSort` is provided.

### Pagination

- First/Last page buttons
- Previous/Next navigation
- Page number buttons with ellipsis for many pages
- Direct page input with "Go" button
- Shows "X-Y of Z Items" count

### Alternating Rows

Rows alternate between white and slate-50 backgrounds for readability.

## Related Components

- [Card](../ui/card.md) - Container wrapper
- [Button](../ui/button.md) - Pagination controls
- [Table](../ui/table.md) - Base table styling

---

*Last Updated: 2025-12-16*
