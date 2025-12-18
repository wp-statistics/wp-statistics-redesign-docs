---
title: "DataTable Component"
type: "frontend-component"
category: "components"
status: "Done"
component_path: "resources/react/src/components/custom/data-table.tsx"
storybook: true
---

# DataTable Component

The most important and widely-used component in WP Statistics v15. Displays analytics data in a feature-rich, sortable, filterable table with pagination, column management, and export capabilities.

## Component Information

- **Type**: Custom Component (Domain-specific)
- **Status**: Done
- **Location**: `resources/react/src/components/custom/data-table.tsx`
- **Used In**: Most reports (Visitors, Pages, Referrers, Search Terms, etc.)
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com?path=/story/custom-datatable--default)
- **Product Docs**: [Data Table Component](../../../components/data-table.md) - Configuration options and widget usage
- **Dependencies**: `@tanstack/react-table`, `lucide-react`, `@wordpress/i18n`, UI components

## Overview

The DataTable component is the core data display component used across all list-based reports. It handles:
- Dynamic column configuration
- Sorting (client and server-side)
- Pagination
- Column visibility management
- Search/filtering
- Data export (CSV, Excel)
- Loading and empty states
- Responsive design

## Import

```typescript
import { DataTable } from '@/components/custom/data-table'
import type { ColumnDef } from '@tanstack/react-table'
```

## Basic Usage

### Simple Table

```tsx
import { DataTable } from '@/components/custom/data-table'

interface VisitorData {
  visitor_id: string
  visits: number
  last_visit: string
}

const columns: ColumnDef<VisitorData>[] = [
  { accessorKey: 'visitor_id', header: 'Visitor ID' },
  { accessorKey: 'visits', header: 'Visits' },
  { accessorKey: 'last_visit', header: 'Last Visit' }
]

const data: VisitorData[] = [
  { visitor_id: 'abc123', visits: 15, last_visit: '2024-12-17' },
  { visitor_id: 'def456', visits: 8, last_visit: '2024-12-16' }
]

<DataTable columns={columns} data={data} title="Visitors" />
```

### With Sorting and Pagination

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

### With Full Report Link

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

### Empty States

```tsx
<DataTable
  columns={columns}
  data={[]}
  emptyStateMessage="No visitors found for the selected period"
/>
```

## Accessibility Features

### Keyboard Navigation
- **Arrow Keys**: Navigate cells
- **Tab**: Move between interactive elements
- **Enter/Space**: Activate buttons and links
- **Escape**: Close modals (column management, export)

### Screen Readers
- Proper ARIA labels on all interactive elements
- Column headers announced as table headers
- Sort direction announced
- Page numbers and total count announced

### Focus Management
- Visible focus indicators
- Logical tab order
- Focus trap in modals

## Related Components

- [Card](../ui-primitives/card.md) - Container wrapper
- [Button](../ui-primitives/button.md) - Pagination controls
- [Table](../ui-primitives/table.md) - Base table styling

---

*Last Updated: 2025-12-18*
