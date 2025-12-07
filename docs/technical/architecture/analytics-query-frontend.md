---
title: "Analytics Query Frontend"
type: "technical"
category: "architecture"
status: "Done"
sidebar_position: 5
---

# Analytics Query Frontend Integration

This document explains how to integrate the Analytics Query API into React components for the WP Statistics v15 dashboard.

## Overview

The frontend uses a simple query interface to fetch analytics data. The API accepts metric and dimension names - no SQL knowledge required.

## TypeScript Interfaces

### Query Interface

```typescript
interface AnalyticsQuery {
  metrics: string[];
  dimensions: string[];
  /**
   * Start date/time. Accepts:
   * - Date only: "YYYY-MM-DD" (defaults to 00:00:00)
   * - With time: "YYYY-MM-DD HH:mm:ss" or "YYYY-MM-DDTHH:mm:ss"
   */
  date_from?: string;
  /**
   * End date/time. Accepts:
   * - Date only: "YYYY-MM-DD" (defaults to 23:59:59)
   * - With time: "YYYY-MM-DD HH:mm:ss" or "YYYY-MM-DDTHH:mm:ss"
   */
  date_to?: string;
  compare?: boolean;
  filters?: Record<string, any>;
  page?: number;
  per_page?: number;
  order_by?: string;
  order?: 'ASC' | 'DESC';
}
```

### Response Interface

```typescript
interface AnalyticsResponse {
  success: boolean;
  data: {
    rows?: Array<Record<string, any>>;
    totals: Record<string, any>;
  };
  meta: {
    /** Normalized start date-time (always includes time: "YYYY-MM-DD HH:mm:ss") */
    date_from: string;
    /** Normalized end date-time (always includes time: "YYYY-MM-DD HH:mm:ss") */
    date_to: string;
    /** Comparison period start (when compare=true) */
    compare_from?: string;
    /** Comparison period end (when compare=true) */
    compare_to?: string;
    total_rows: number;
    page?: number;
    per_page?: number;
    total_pages?: number;
    cached: boolean;
    cache_ttl: number;
  };
  error?: {
    code: string;
    message: string;
  };
}
```

---

## API Client

### Basic Query Function

```typescript
async function queryAnalytics(query: AnalyticsQuery): Promise<AnalyticsResponse> {
  const formData = new FormData();
  formData.append('action', 'wp_statistics_analytics');
  formData.append('wps_nonce', wpStatisticsGlobal.rest_api_nonce);
  formData.append('query', JSON.stringify(query));

  const response = await fetch(wpStatisticsGlobal.ajax_url, {
    method: 'POST',
    body: formData,
  });

  return response.json();
}
```

### REST API Alternative

```typescript
async function queryAnalyticsREST(query: AnalyticsQuery): Promise<AnalyticsResponse> {
  const response = await fetch('/wp-json/wp-statistics/v2/analytics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-WP-Nonce': wpStatisticsGlobal.rest_api_nonce,
    },
    body: JSON.stringify(query),
  });

  return response.json();
}
```

---

## React Integration

### Custom Hook

```typescript
import { useQuery, UseQueryResult } from '@tanstack/react-query';

function useAnalytics(
  query: AnalyticsQuery,
  options?: { enabled?: boolean; staleTime?: number }
): UseQueryResult<AnalyticsResponse> {
  return useQuery({
    queryKey: ['analytics', query],
    queryFn: () => queryAnalytics(query),
    staleTime: options?.staleTime ?? 5 * 60 * 1000, // 5 minutes default
    enabled: options?.enabled ?? true,
  });
}
```

### Usage in Components

```typescript
function TopCountriesWidget() {
  const { data, isLoading, error } = useAnalytics({
    metrics: ['visitors', 'sessions'],
    dimensions: ['country'],
    per_page: 10,
    compare: true
  });

  if (isLoading) return <Skeleton />;
  if (error) return <Error message={error.message} />;

  return <HorizontalBarChart data={data.data.rows} />;
}
```

---

## Component Examples

### Line Chart (Time Series)

```typescript
function TrafficTrendsChart() {
  const { data, isLoading } = useAnalytics({
    metrics: ['visitors', 'views'],
    dimensions: ['date'],
    compare: true
  });

  if (isLoading) return <ChartSkeleton />;

  // Transform data for chart library
  const chartData = {
    labels: data.data.rows.map(row => row.date),
    datasets: [
      {
        label: 'Visitors',
        data: data.data.rows.map(row => row.visitors),
        borderColor: '#3b82f6',
      },
      {
        label: 'Views',
        data: data.data.rows.map(row => row.views),
        borderColor: '#10b981',
      }
    ]
  };

  return <Line data={chartData} />;
}
```

### Horizontal Bar Chart (Top Items)

```typescript
function TopCountriesChart() {
  const { data, isLoading } = useAnalytics({
    metrics: ['visitors'],
    dimensions: ['country'],
    per_page: 10,
    order_by: 'visitors',
    order: 'DESC'
  });

  if (isLoading) return <BarChartSkeleton />;

  return (
    <div className="space-y-2">
      {data.data.rows.map(row => (
        <div key={row.country_code} className="flex items-center gap-3">
          <img src={`/flags/${row.flag}.svg`} className="w-5 h-4" />
          <span className="flex-1">{row.country}</span>
          <span className="font-medium">{row.visitors.toLocaleString()}</span>
          {row.change && (
            <ChangeIndicator value={row.change.visitors} />
          )}
        </div>
      ))}
    </div>
  );
}
```

### Metrics Cards (KPI Summary)

```typescript
function MetricsOverview() {
  const { data, isLoading } = useAnalytics({
    metrics: ['visitors', 'views', 'sessions', 'bounce_rate'],
    dimensions: [], // Empty = totals only
    compare: true
  });

  if (isLoading) return <MetricsSkeleton />;

  const { totals } = data.data;

  return (
    <div className="grid grid-cols-4 gap-4">
      <MetricCard
        label="Visitors"
        value={totals.visitors.formatted}
        change={totals.visitors.change}
        trend={totals.visitors.trend}
      />
      <MetricCard
        label="Page Views"
        value={totals.views.formatted}
        change={totals.views.change}
        trend={totals.views.trend}
      />
      <MetricCard
        label="Sessions"
        value={totals.sessions.formatted}
        change={totals.sessions.change}
        trend={totals.sessions.trend}
      />
      <MetricCard
        label="Bounce Rate"
        value={totals.bounce_rate.formatted}
        change={totals.bounce_rate.change}
        trend={totals.bounce_rate.trend}
        invertTrend // Lower is better
      />
    </div>
  );
}
```

### Data Table with Pagination

```typescript
function TopPagesTable() {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('views');
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('DESC');

  const { data, isLoading } = useAnalytics({
    metrics: ['views', 'visitors', 'bounce_rate'],
    dimensions: ['page'],
    page,
    per_page: 10,
    order_by: sortBy,
    order: sortOrder,
    compare: true
  });

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(prev => prev === 'ASC' ? 'DESC' : 'ASC');
    } else {
      setSortBy(column);
      setSortOrder('DESC');
    }
  };

  if (isLoading) return <TableSkeleton rows={10} />;

  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th>Page</th>
            <SortableHeader
              label="Views"
              active={sortBy === 'views'}
              order={sortOrder}
              onClick={() => handleSort('views')}
            />
            <SortableHeader
              label="Visitors"
              active={sortBy === 'visitors'}
              order={sortOrder}
              onClick={() => handleSort('visitors')}
            />
            <SortableHeader
              label="Bounce Rate"
              active={sortBy === 'bounce_rate'}
              order={sortOrder}
              onClick={() => handleSort('bounce_rate')}
            />
          </tr>
        </thead>
        <tbody>
          {data.data.rows.map(row => (
            <tr key={row.page}>
              <td>
                <div>
                  <a href={row.page}>{row.page_title || row.page}</a>
                </div>
              </td>
              <td>{row.views.toLocaleString()}</td>
              <td>{row.visitors.toLocaleString()}</td>
              <td>{row.bounce_rate}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        page={page}
        totalPages={data.meta.total_pages}
        onPageChange={setPage}
      />
    </>
  );
}
```

### World Map

```typescript
function VisitorWorldMap() {
  const { data, isLoading } = useAnalytics({
    metrics: ['visitors'],
    dimensions: ['country'],
    per_page: 250 // Get all countries
  });

  if (isLoading) return <MapSkeleton />;

  // Transform to map format
  const mapData = data.data.rows.reduce((acc, row) => {
    acc[row.country_code] = {
      value: row.visitors,
      tooltip: `${row.country}: ${row.visitors.toLocaleString()} visitors`
    };
    return acc;
  }, {});

  return (
    <WorldMap
      data={mapData}
      scale={data.data.scale}
      colorRange={['#dbeafe', '#1d4ed8']}
    />
  );
}
```

### Pie/Donut Chart

```typescript
function DeviceDistributionChart() {
  const { data, isLoading } = useAnalytics({
    metrics: ['sessions'],
    dimensions: ['device_type']
  });

  if (isLoading) return <PieChartSkeleton />;

  const chartData = {
    labels: data.data.rows.map(row => row.device_type),
    datasets: [{
      data: data.data.rows.map(row => row.sessions),
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b']
    }]
  };

  return (
    <div className="flex items-center gap-8">
      <Doughnut data={chartData} />
      <div className="space-y-2">
        {data.data.rows.map(row => (
          <div key={row.device_type} className="flex items-center gap-2">
            <DeviceIcon type={row.device_type} />
            <span className="capitalize">{row.device_type}</span>
            <span className="font-medium">{row.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## Advanced Patterns

### Batch Queries (Single Request - Recommended)

For initial dashboard load, use the batch API to fetch all data in a single HTTP request:

```typescript
interface BatchQuery extends AnalyticsQuery {
  id: string;
}

async function queryAnalyticsBatch(queries: BatchQuery[]): Promise<Record<string, AnalyticsResponse>> {
  const formData = new FormData();
  formData.append('action', 'wp_statistics_analytics');
  formData.append('wps_nonce', wpStatisticsGlobal.rest_api_nonce);
  formData.append('query', JSON.stringify({ queries }));

  const response = await fetch(wpStatisticsGlobal.ajax_url, {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  return result.data;
}

// React hook for batch queries
function useDashboardBatch() {
  return useQuery({
    queryKey: ['dashboard-batch'],
    queryFn: () => queryAnalyticsBatch([
      { id: 'trends', metrics: ['visitors', 'views'], dimensions: ['date'], compare: true },
      { id: 'countries', metrics: ['visitors'], dimensions: ['country'], per_page: 10 },
      { id: 'pages', metrics: ['views', 'visitors'], dimensions: ['page'], per_page: 10 },
      { id: 'overview', metrics: ['visitors', 'views', 'sessions', 'bounce_rate'], dimensions: [], compare: true }
    ]),
    staleTime: 5 * 60 * 1000,
  });
}

// Usage
function Dashboard() {
  const { data, isLoading } = useDashboardBatch();

  if (isLoading) return <DashboardSkeleton />;

  return (
    <div className="grid grid-cols-2 gap-4">
      <MetricsOverview data={data.overview} />
      <TrafficTrendsChart data={data.trends} />
      <TopCountriesChart data={data.countries} />
      <TopPagesTable data={data.pages} />
    </div>
  );
}
```

### Parallel Queries (Multiple Requests)

If you need independent caching/refetching per widget, use parallel individual queries:

```typescript
function useDashboardData() {
  // Parallel queries for initial dashboard load
  const trafficTrends = useAnalytics({
    metrics: ['visitors', 'views'],
    dimensions: ['date'],
    compare: true
  });

  const topCountries = useAnalytics({
    metrics: ['visitors'],
    dimensions: ['country'],
    per_page: 10
  });

  const topPages = useAnalytics({
    metrics: ['views', 'visitors'],
    dimensions: ['page'],
    per_page: 10
  });

  const overview = useAnalytics({
    metrics: ['visitors', 'views', 'sessions', 'bounce_rate'],
    dimensions: [],
    compare: true
  });

  const isLoading =
    trafficTrends.isLoading ||
    topCountries.isLoading ||
    topPages.isLoading ||
    overview.isLoading;

  return {
    isLoading,
    trafficTrends: trafficTrends.data,
    topCountries: topCountries.data,
    topPages: topPages.data,
    overview: overview.data
  };
}
```

### With Filters

```typescript
function FilteredAnalytics() {
  const [filters, setFilters] = useState({});

  const { data, isLoading } = useAnalytics({
    metrics: ['visitors', 'views'],
    dimensions: ['page'],
    filters,
    per_page: 20
  });

  return (
    <div>
      <FilterBar>
        <CountryFilter
          onChange={(country) => setFilters(f => ({ ...f, country }))}
        />
        <DeviceFilter
          onChange={(device) => setFilters(f => ({ ...f, device_type: device }))}
        />
        <ReferrerFilter
          onChange={(ref) => setFilters(f => ({ ...f, referrer: { contains: ref } }))}
        />
      </FilterBar>

      <DataTable data={data?.data.rows} isLoading={isLoading} />
    </div>
  );
}
```

### Date Range Context

```typescript
// Context for global date range (supports both date-only and date-time formats)
const DateRangeContext = createContext<{
  dateFrom: string;  // "YYYY-MM-DD" or "YYYY-MM-DD HH:mm:ss"
  dateTo: string;    // "YYYY-MM-DD" or "YYYY-MM-DD HH:mm:ss"
  setDateRange: (from: string, to: string) => void;
}>(null);

// Hook that uses context
function useAnalyticsWithDateRange(query: Omit<AnalyticsQuery, 'date_from' | 'date_to'>) {
  const { dateFrom, dateTo } = useContext(DateRangeContext);

  return useAnalytics({
    ...query,
    date_from: dateFrom,
    date_to: dateTo
  });
}

// Usage - Date only (backend defaults to full day 00:00:00 - 23:59:59)
function Widget() {
  const { data } = useAnalyticsWithDateRange({
    metrics: ['visitors'],
    dimensions: ['country']
  });
}

// Usage - Intraday query with specific times
function BusinessHoursWidget() {
  const { data } = useAnalytics({
    metrics: ['visitors', 'views'],
    dimensions: ['hour'],
    date_from: '2024-11-01 09:00:00',  // 9 AM
    date_to: '2024-11-01 17:00:00'     // 5 PM
  });
}
```

### Real-Time Updates (Online Visitors)

```typescript
function OnlineVisitorsWidget() {
  const { data, isLoading } = useAnalytics(
    {
      metrics: ['online_visitors'],
      dimensions: ['visitor'],
      per_page: 50
    },
    {
      staleTime: 30 * 1000, // 30 seconds
      refetchInterval: 60 * 1000 // Refresh every minute
    }
  );

  if (isLoading) return <Skeleton />;

  return (
    <div>
      <div className="text-2xl font-bold">
        {data.data.totals.online_visitors} Online
      </div>
      <div className="mt-4 space-y-2">
        {data.data.rows.map(visitor => (
          <OnlineVisitorRow key={visitor.visitor_id} visitor={visitor} />
        ))}
      </div>
    </div>
  );
}
```

---

## Error Handling

```typescript
function WidgetWithErrorHandling() {
  const { data, isLoading, error, refetch } = useAnalytics({
    metrics: ['visitors'],
    dimensions: ['country']
  });

  if (isLoading) return <Skeleton />;

  if (error) {
    return (
      <ErrorState
        title="Failed to load data"
        message={error.message}
        onRetry={refetch}
      />
    );
  }

  if (!data.success) {
    return (
      <ErrorState
        title={data.error.code}
        message={data.error.message}
      />
    );
  }

  return <Chart data={data.data.rows} />;
}
```

---

## Utility Components

### Change Indicator

```typescript
function ChangeIndicator({
  value,
  invertColors = false
}: {
  value: number;
  invertColors?: boolean;
}) {
  const isPositive = invertColors ? value < 0 : value > 0;
  const color = isPositive ? 'text-green-600' : 'text-red-600';
  const icon = value > 0 ? '↑' : '↓';

  return (
    <span className={`text-sm ${color}`}>
      {icon} {Math.abs(value).toFixed(1)}%
    </span>
  );
}
```

### Sortable Table Header

```typescript
function SortableHeader({
  label,
  active,
  order,
  onClick
}: {
  label: string;
  active: boolean;
  order: 'ASC' | 'DESC';
  onClick: () => void;
}) {
  return (
    <th
      className="cursor-pointer hover:bg-gray-50"
      onClick={onClick}
    >
      <div className="flex items-center gap-1">
        {label}
        {active && (
          <span>{order === 'ASC' ? '↑' : '↓'}</span>
        )}
      </div>
    </th>
  );
}
```

---

## Related Documentation

- [Analytics Query API](../api/analytics-query-api.md)
- [Analytics Query Backend Architecture](./analytics-query-backend.md)

---

*Last Updated: 2025-12-07*
