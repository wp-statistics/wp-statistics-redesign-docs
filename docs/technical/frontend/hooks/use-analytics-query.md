---
title: "useAnalyticsQuery Hook"
type: "frontend-hook"
category: "hooks"
status: "In Progress"
component_path: "resources/react/src/hooks/useAnalyticsQuery.ts"
---

# useAnalyticsQuery

The primary hook for fetching analytics data from the WP Statistics Analytics Query API. Handles data fetching, caching, error handling, and automatic refetching.

## Hook Information

- **Type**: Custom Hook (Data Fetching)
- **Status**: In Progress
- **Location**: `resources/react/src/hooks/useAnalyticsQuery.ts`
- **Used In**: All analytics reports and widgets

## Overview

`useAnalyticsQuery` is a React hook that simplifies fetching analytics data. It:
- Constructs API requests from query parameters
- Handles loading and error states
- Caches responses automatically
- Supports pagination, sorting, and filtering
- Handles previous period comparisons
- Provides automatic refetching on filter changes

## Import

```typescript
import { useAnalyticsQuery } from '@/hooks/useAnalyticsQuery'
import type { AnalyticsQueryParams, AnalyticsQueryResult } from '@/hooks/useAnalyticsQuery'
```

## Basic Usage

### Simple Query

```tsx
import { useAnalyticsQuery } from '@/hooks/useAnalyticsQuery'

function VisitorCount() {
  const { data, loading, error } = useAnalyticsQuery({
    sources: ['visitors', 'views'],
    group_by: [],
    date_from: '2024-01-01',
    date_to: '2024-01-31'
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <p>Visitors: {data.totals.visitors}</p>
      <p>Views: {data.totals.views}</p>
    </div>
  )
}
```

### Grouped Query

```tsx
function TopCountries() {
  const { data, loading } = useAnalyticsQuery({
    sources: ['visitors', 'views'],
    group_by: ['country'],
    date_from: '2024-01-01',
    date_to: '2024-01-31',
    per_page: 10,
    order_by: 'visitors',
    order: 'DESC'
  })

  return (
    <ul>
      {data?.results.map(row => (
        <li key={row.country_id}>
          {row.country_name}: {row.visitors} visitors
        </li>
      ))}
    </ul>
  )
}
```

## Signature

```typescript
function useAnalyticsQuery(
  params: AnalyticsQueryParams,
  options?: UseAnalyticsQueryOptions
): AnalyticsQueryResult
```

## Parameters

### AnalyticsQueryParams

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sources` | `string[]` | Yes | Metrics to fetch (e.g., `['visitors', 'views']`) |
| `group_by` | `string[]` | Yes | Grouping dimensions (e.g., `['country']`, `[]` for totals) |
| `date_from` | `string` | No | Start date (ISO format or `YYYY-MM-DD`) |
| `date_to` | `string` | No | End date (ISO format or `YYYY-MM-DD`) |
| `filters` | `object` | No | Filter criteria (see [Filters](../api-endpoints/analytics-query-api.md#filters)) |
| `page` | `number` | No | Page number (default: 1) |
| `per_page` | `number` | No | Results per page (default: 10, max: 100) |
| `order_by` | `string` | No | Column to sort by (default: first source) |
| `order` | `'ASC' \| 'DESC'` | No | Sort direction (default: `'DESC'`) |
| `compare` | `boolean` | No | Include previous period comparison (default: false) |

### UseAnalyticsQueryOptions

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enabled` | `boolean` | `true` | Enable/disable the query |
| `refetchOnWindowFocus` | `boolean` | `false` | Refetch when window regains focus |
| `refetchInterval` | `number` | `null` | Auto-refetch interval (ms) |
| `cacheTime` | `number` | `300000` | Cache duration (5 minutes) |
| `staleTime` | `number` | `60000` | Data staleness threshold (1 minute) |
| `onSuccess` | `(data) => void` | - | Callback on successful fetch |
| `onError` | `(error) => void` | - | Callback on error |

## Return Value

### AnalyticsQueryResult

| Property | Type | Description |
|----------|------|-------------|
| `data` | `AnalyticsData \| null` | Query results |
| `loading` | `boolean` | Loading state |
| `error` | `Error \| null` | Error object if query failed |
| `refetch` | `() => Promise<void>` | Manual refetch function |
| `isStale` | `boolean` | Whether cached data is stale |
| `isFetching` | `boolean` | Whether actively fetching |

### AnalyticsData Structure

```typescript
interface AnalyticsData {
  results: Array<Record<string, any>>  // Data rows
  totals: Record<string, number>        // Aggregated totals
  meta: {
    page: number                        // Current page
    per_page: number                    // Results per page
    total: number                       // Total result count
    total_pages: number                 // Total pages
    date_from: string                   // Normalized start date
    date_to: string                     // Normalized end date
  }
  comparison?: {                        // If compare=true
    results: Array<Record<string, any>>
    totals: Record<string, number>
    period: { date_from: string, date_to: string }
  }
}
```

## Usage Examples

### With Pagination

```tsx
function PaginatedReport() {
  const [page, setPage] = useState(1)

  const { data, loading } = useAnalyticsQuery({
    sources: ['visitors', 'views'],
    group_by: ['page'],
    page: page,
    per_page: 50
  })

  return (
    <>
      <DataTable data={data?.results} loading={loading} />
      <Pagination
        currentPage={page}
        totalPages={data?.meta.total_pages || 1}
        onPageChange={setPage}
      />
    </>
  )
}
```

### With Filters

```tsx
function FilteredReport() {
  const { filters } = useFilters()  // From filter context

  const { data, loading } = useAnalyticsQuery({
    sources: ['visitors', 'views'],
    group_by: ['country'],
    filters: {
      country_id: filters.country,
      browser_id: filters.browser,
      device_type_id: filters.device
    }
  })

  return <CountryChart data={data?.results} loading={loading} />
}
```

### With Date Range

```tsx
function DateRangeReport() {
  const { dateRange } = useDateRange()  // From date range context

  const { data, loading } = useAnalyticsQuery({
    sources: ['visitors', 'views'],
    group_by: ['date'],
    date_from: dateRange.start,
    date_to: dateRange.end,
    compare: true  // Include previous period
  })

  if (loading) return <Skeleton />

  return (
    <LineChart
      data={data.results}
      comparison={data.comparison?.results}
    />
  )
}
```

### With Manual Refetch

```tsx
function RefreshableReport() {
  const { data, loading, refetch } = useAnalyticsQuery({
    sources: ['visitors'],
    group_by: []
  })

  return (
    <div>
      <div>Visitors: {data?.totals.visitors}</div>
      <Button onClick={refetch} disabled={loading}>
        {loading ? 'Refreshing...' : 'Refresh'}
      </Button>
    </div>
  )
}
```

### Conditional Query

```tsx
function ConditionalQuery() {
  const [enabled, setEnabled] = useState(false)

  const { data, loading } = useAnalyticsQuery(
    {
      sources: ['visitors'],
      group_by: ['country']
    },
    {
      enabled: enabled  // Only fetch when enabled
    }
  )

  return (
    <div>
      <Button onClick={() => setEnabled(true)}>
        Load Data
      </Button>
      {loading && <Spinner />}
      {data && <CountryList countries={data.results} />}
    </div>
  )
}
```

### Real-Time Updates

```tsx
function RealtimeVisitors() {
  const { data } = useAnalyticsQuery(
    {
      sources: ['online_visitors'],
      group_by: []
    },
    {
      refetchInterval: 30000  // Refetch every 30 seconds
    }
  )

  return (
    <div>
      <span className="text-2xl">{data?.totals.online_visitors}</span>
      <span className="text-sm">currently online</span>
    </div>
  )
}
```

### Multiple Queries

```tsx
function Dashboard() {
  // Query 1: Today's totals
  const today = useAnalyticsQuery({
    sources: ['visitors', 'views'],
    group_by: [],
    date_from: formatDate(new Date()),
    date_to: formatDate(new Date())
  })

  // Query 2: Top pages
  const topPages = useAnalyticsQuery({
    sources: ['views'],
    group_by: ['page'],
    per_page: 5,
    order_by: 'views'
  })

  // Query 3: Geographic distribution
  const countries = useAnalyticsQuery({
    sources: ['visitors'],
    group_by: ['country'],
    per_page: 10
  })

  if (today.loading || topPages.loading || countries.loading) {
    return <DashboardSkeleton />
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <TodayCard data={today.data} />
      <TopPagesCard data={topPages.data} />
      <CountriesCard data={countries.data} />
    </div>
  )
}
```

## Error Handling

```tsx
function RobustReport() {
  const { data, loading, error, refetch } = useAnalyticsQuery({
    sources: ['visitors'],
    group_by: ['country']
  })

  if (loading) {
    return <Skeleton />
  }

  if (error) {
    return (
      <ErrorState
        title="Failed to load data"
        message={error.message}
        action={<Button onClick={refetch}>Try Again</Button>}
      />
    )
  }

  if (!data || data.results.length === 0) {
    return <EmptyState message="No data available" />
  }

  return <CountryTable data={data.results} />
}
```

## Caching & Performance

The hook uses React Query internally for smart caching:

```tsx
// First render - fetches from API
const query1 = useAnalyticsQuery({ sources: ['visitors'], group_by: [] })

// Second render (same params) - uses cached data
const query2 = useAnalyticsQuery({ sources: ['visitors'], group_by: [] })

// After 1 minute (staleTime) - marks as stale, refetches in background
// After 5 minutes (cacheTime) - removes from cache
```

### Customize Caching

```tsx
const { data } = useAnalyticsQuery(
  { sources: ['visitors'], group_by: [] },
  {
    staleTime: 5 * 60 * 1000,    // Data fresh for 5 minutes
    cacheTime: 15 * 60 * 1000,   // Keep in cache for 15 minutes
    refetchOnWindowFocus: true    // Refetch on window focus
  }
)
```

## TypeScript Support

```typescript
import type {
  AnalyticsQueryParams,
  AnalyticsData,
  AnalyticsQueryResult
} from '@/hooks/useAnalyticsQuery'

// Typed hook usage
const result: AnalyticsQueryResult = useAnalyticsQuery({
  sources: ['visitors', 'views'],
  group_by: ['country']
})

// Type-safe data access
const visitors: number = result.data?.totals.visitors ?? 0
const countries: Array<{ country_name: string, visitors: number }> =
  result.data?.results ?? []
```

## Integration with Other Hooks

### With useFilters

```tsx
function FilteredVisitors() {
  const { activeFilters } = useFilters()

  const { data } = useAnalyticsQuery({
    sources: ['visitors'],
    group_by: [],
    filters: activeFilters  // Automatically includes all active filters
  })

  return <div>Visitors: {data?.totals.visitors}</div>
}
```

### With useDateRange

```tsx
function DateBasedReport() {
  const { startDate, endDate } = useDateRange()

  const { data } = useAnalyticsQuery({
    sources: ['visitors'],
    group_by: ['date'],
    date_from: startDate,
    date_to: endDate
  })

  return <LineChart data={data?.results} />
}
```

## Related Hooks

- [useFilters](use-filters.md) - Filter management
- [useDateRange](use-date-range.md) - Date range management
- [usePagination](use-pagination.md) - Pagination state
- [useSorting](use-sorting.md) - Sorting state

## Best Practices

### Do's ✅
- Use consistent parameter objects to leverage caching
- Handle loading and error states
- Debounce filters to reduce API calls
- Use `enabled` option for conditional queries
- Memoize query parameters to prevent unnecessary refetches

### Don'ts ❌
- Don't create new query objects on every render (breaks caching)
- Don't ignore error states
- Don't fetch more data than needed (`per_page`)
- Don't use very short `refetchInterval` (< 10s)
- Don't mix server and client-side filtering

## Troubleshooting

### Issue: "Query refetches on every render"
**Solution:** Memoize the params object with `useMemo` or move it outside the component.

### Issue: "Stale data showing"
**Solution:** Decrease `staleTime` or call `refetch()` manually.

### Issue: "Too many API calls"
**Solution:** Increase `staleTime` and `cacheTime`, or debounce filter changes.

---

*Last Updated: 2024-12-17*
