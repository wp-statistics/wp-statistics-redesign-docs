---
title: "DataTable Component"
type: "frontend-component"
category: "components"
status: "In Progress"
component_path: "resources/react/src/components/DataTable.tsx"
storybook: true
---

# DataTable Component

The most important and widely-used component in WP Statistics v15. Displays analytics data in a feature-rich, sortable, filterable table with pagination, column management, and export capabilities.

## Component Information

- **Type**: Custom Component (Domain-specific)
- **Status**: In Progress
- **Location**: `resources/react/src/components/DataTable.tsx`
- **Used In**: Most reports (Visitors, Pages, Referrers, Search Terms, etc.)
- **Storybook**: Available at `Components/DataTable`

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
import { DataTable } from '@/components/DataTable'
import type { DataTableProps, Column } from '@/components/DataTable/types'
```

## Basic Usage

### Simple Table

```tsx
import { DataTable } from '@/components/DataTable'

function VisitorsReport() {
  const columns = [
    { id: 'visitor_id', header: 'Visitor ID', sortable: true },
    { id: 'visits', header: 'Visits', sortable: true },
    { id: 'last_visit', header: 'Last Visit', sortable: false }
  ]

  const data = [
    { visitor_id: 'abc123', visits: 15, last_visit: '2024-12-17' },
    { visitor_id: 'def456', visits: 8, last_visit: '2024-12-16' }
  ]

  return (
    <DataTable
      columns={columns}
      data={data}
      rowsPerPage={10}
    />
  )
}
```

### With Analytics Query API

```tsx
import { DataTable } from '@/components/DataTable'
import { useAnalyticsQuery } from '@/hooks/useAnalyticsQuery'

function TopPagesTable() {
  const { data, loading, error } = useAnalyticsQuery({
    sources: ['visitors', 'views'],
    group_by: ['page'],
    date_from: '2024-01-01',
    date_to: '2024-01-31'
  })

  const columns = [
    {
      id: 'page_uri',
      header: 'Page',
      sortable: true,
      cell: (row) => <a href={row.page_uri}>{row.page_title || row.page_uri}</a>
    },
    {
      id: 'visitors',
      header: 'Visitors',
      sortable: true,
      align: 'right'
    },
    {
      id: 'views',
      header: 'Views',
      sortable: true,
      align: 'right'
    }
  ]

  if (loading) return <DataTable.Skeleton columns={columns} rows={10} />
  if (error) return <DataTable.Error error={error} />

  return (
    <DataTable
      columns={columns}
      data={data.results}
      totalRows={data.meta.total}
      serverSide
      onPageChange={(page) => {/* handle pagination */}}
      onSortChange={(column, order) => {/* handle sorting */}}
    />
  )
}
```

## Props API

### DataTableProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `Column[]` | Required | Array of column definitions |
| `data` | `any[]` | Required | Array of data rows |
| `rowsPerPage` | `number` | `10` | Number of rows per page |
| `totalRows` | `number` | `data.length` | Total rows (for server-side pagination) |
| `serverSide` | `boolean` | `false` | Enable server-side sorting/pagination |
| `loading` | `boolean` | `false` | Show loading state |
| `sortable` | `boolean` | `true` | Enable sorting |
| `searchable` | `boolean` | `true` | Enable search |
| `exportable` | `boolean` | `true` | Enable export functionality |
| `columnManagement` | `boolean` | `true` | Enable column visibility management |
| `emptyMessage` | `string` | `'No data found'` | Message when no data |
| `defaultSort` | `{ column: string, order: 'asc' \| 'desc' }` | `null` | Initial sort |
| `onPageChange` | `(page: number) => void` | - | Page change callback |
| `onSortChange` | `(column: string, order: string) => void` | - | Sort change callback |
| `onSearchChange` | `(query: string) => void` | - | Search change callback |
| `onExport` | `(format: 'csv' \| 'excel') => void` | - | Export callback |

### Column Definition

```typescript
interface Column {
  id: string                           // Column identifier (matches data key)
  header: string | React.ReactNode     // Column header text/component
  sortable?: boolean                   // Enable sorting (default: true)
  searchable?: boolean                 // Include in search (default: true)
  visible?: boolean                    // Initially visible (default: true)
  width?: string | number              // Column width (CSS value)
  align?: 'left' | 'center' | 'right' // Text alignment (default: 'left')
  cell?: (row: any, index: number) => React.ReactNode  // Custom cell renderer
  headerCell?: () => React.ReactNode   // Custom header renderer
  accessor?: string | ((row: any) => any)  // Data accessor function
}
```

## Features

### Column Management

Users can show/hide columns via dropdown menu:

```tsx
<DataTable
  columns={columns}
  data={data}
  columnManagement={true}
  defaultHiddenColumns={['bounce_rate', 'exit_rate']}
/>
```

### Server-Side Operations

For large datasets, use server-side pagination and sorting:

```tsx
function ServerSideTable() {
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState({ column: 'visits', order: 'desc' })

  const { data, loading } = useAnalyticsQuery({
    sources: ['visitors', 'views'],
    group_by: ['page'],
    page: page,
    per_page: 50,
    order_by: sort.column,
    order: sort.order
  })

  return (
    <DataTable
      columns={columns}
      data={data.results}
      totalRows={data.meta.total}
      rowsPerPage={50}
      serverSide={true}
      loading={loading}
      onPageChange={setPage}
      onSortChange={(column, order) => setSort({ column, order })}
    />
  )
}
```

### Custom Cell Rendering

Customize how cells are displayed:

```tsx
const columns = [
  {
    id: 'country',
    header: 'Country',
    cell: (row) => (
      <div className="flex items-center gap-2">
        <CountryFlag code={row.country_code} />
        <span>{row.country_name}</span>
      </div>
    )
  },
  {
    id: 'visitors',
    header: 'Visitors',
    align: 'right',
    cell: (row) => (
      <span className="font-mono">
        {formatNumber(row.visitors)}
      </span>
    )
  },
  {
    id: 'trend',
    header: 'Trend',
    sortable: false,
    cell: (row) => (
      <TrendIndicator
        value={row.visitors}
        previous={row.previous_visitors}
      />
    )
  }
]
```

### Export Functionality

```tsx
<DataTable
  columns={columns}
  data={data}
  exportable={true}
  onExport={(format) => {
    if (format === 'csv') {
      exportToCSV(data, 'report.csv')
    } else {
      exportToExcel(data, 'report.xlsx')
    }
  }}
/>
```

### Empty States

```tsx
<DataTable
  columns={columns}
  data={[]}
  emptyMessage="No visitors found for the selected period"
  emptyAction={
    <Button onClick={clearFilters}>
      Clear Filters
    </Button>
  }
/>
```

### Loading States

```tsx
// Skeleton loader while fetching data
{loading ? (
  <DataTable.Skeleton columns={columns} rows={10} />
) : (
  <DataTable columns={columns} data={data} />
)}
```

## Styling & Theming

The DataTable uses Tailwind CSS classes and respects the global theme:

```tsx
<DataTable
  columns={columns}
  data={data}
  className="custom-table"
  rowClassName={(row, index) =>
    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
  }
  headerClassName="bg-blue-600 text-white"
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

## Performance Optimization

### Virtualization
For tables with 100+ rows, use virtualization:

```tsx
import { VirtualizedDataTable } from '@/components/DataTable'

<VirtualizedDataTable
  columns={columns}
  data={largeDataset}
  rowHeight={48}
  overscan={5}
/>
```

### Memoization
The component uses React.memo and useMemo internally for performance.

### Lazy Loading
Enable lazy loading for server-side tables:

```tsx
<DataTable
  columns={columns}
  data={data}
  serverSide
  lazyLoad
  onLoadMore={(page) => fetchNextPage(page)}
/>
```

## TypeScript Support

```typescript
import type {
  DataTableProps,
  Column,
  SortConfig,
  PaginationConfig
} from '@/components/DataTable/types'

// Typed column definitions
const columns: Column<VisitorData>[] = [
  {
    id: 'visitor_id',
    header: 'Visitor ID',
    accessor: (row) => row.visitor_id,
    cell: (row) => <VisitorLink id={row.visitor_id} />
  }
]

// Typed component
const MyTable: React.FC = () => {
  const data: VisitorData[] = useVisitorData()

  return <DataTable<VisitorData> columns={columns} data={data} />
}
```

## Used In Reports

The DataTable component is used in:
- [Visitors Report](../../reports/visitor-insights/visitors.md)
- [Top Visitors Report](../../reports/visitor-insights/top-visitors.md)
- [Pages Report](../../reports/page-insights/pages.md)
- [Referrers Report](../../reports/referrals/referrers.md)
- [Search Terms Report](../../reports/referrals/search-terms.md)
- And many more...

## Related Components

- [Pagination Component](pagination.md) - Used internally
- [ColumnManager Component](column-manager.md) - Column visibility UI
- [TableSearch Component](table-search.md) - Search functionality
- [ExportButton Component](export-button.md) - Export functionality

## Best Practices

### Do's ✅
- Use server-side pagination for datasets > 100 rows
- Provide meaningful empty states
- Use proper data types for sorting (numbers, dates)
- Implement loading states
- Memoize cell renderers if complex
- Use column management for tables with 10+ columns

### Don'ts ❌
- Don't disable sorting without good reason
- Don't render heavy components in every cell
- Don't use client-side pagination for large datasets
- Don't forget accessibility attributes
- Don't make all columns visible by default if > 10 columns

## Troubleshooting

### Issue: "Table not sorting correctly"
**Solution:** Ensure data types are correct. Numbers stored as strings won't sort numerically.

### Issue: "Performance degradation with large datasets"
**Solution:** Enable server-side operations or use VirtualizedDataTable.

### Issue: "Column widths not working"
**Solution:** Ensure table has explicit width or use `width` prop on columns.

---

*Last Updated: 2024-12-17*
