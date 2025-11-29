---
title: "API Architecture"
type: "technical"
category: "api"
status: "In Progress"
sidebar_position: 1
created: "2025-11-29"
---

# WP Statistics v15 API Architecture

## Executive Summary

This document defines the complete API architecture connecting WP Statistics v15's normalized 21-table database to a React frontend within WordPress. The system supports:

- **21 analytics reports** with **37 reusable widgets**
- **Admin-ajax.php** as primary endpoint (avoids adblockers) + REST API for external access
- **Hybrid data fetching**: Page-level initial fetch + widget-level refetch capability
- **Intelligent aggregation**: Summary tables for common queries, real-time for filtered/custom queries
- **Advanced filtering**: 20+ filter types with AND logic composition
- **Dual caching**: Server-side (WordPress transients) + client-side (React Query/SWR)
- **Future-ready**: Architecture supports WebSocket extension with minimal changes

---

## Architecture Overview

### System Layers

```
┌─────────────────────────────────────────────────┐
│  React Frontend Layer                           │
│  - 21 Report Pages                              │
│  - 37 Widget Components                         │
│  - React Query/SWR for state management         │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│  API Abstraction Layer                          │
│  - Unified Request Handler                      │
│  - Admin-Ajax Integration (primary)             │
│  - REST API Integration (external access)       │
│  - Request Validation & Response Formatting     │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│  Data Service Layer                             │
│  - 37 Widget Services (extend base class)       │
│  - Query Builder Engine                         │
│  - Filter Processor (20+ filter types)          │
│  - Date Range Processor                         │
│  - Aggregation Router                           │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│  Caching Layer                                  │
│  - Server: WordPress Transients (varying TTL)   │
│  - Client: React Query (stale-while-revalidate) │
│  - Cache Key Generator & Invalidation Manager   │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│  Database Layer                                 │
│  - Main Tables: sessions, visitors, views       │
│  - Lookup Tables: countries, browsers, devices  │
│  - Summary Tables: per-resource + site-wide     │
└─────────────────────────────────────────────────┘
```

### Core Design Principles

1. **WordPress-Native**: Leverage WordPress hooks, capabilities, nonces, transients
2. **Unified Backend**: Single codebase supporting both admin-ajax and REST API
3. **Configuration-Driven**: Widgets declare data needs via configuration objects
4. **Performance-First**: Intelligent caching and aggregation routing
5. **Filter Composability**: Page filters + widget filters combine with AND logic
6. **Future-Proof**: Extensible to WebSockets with minimal changes

---

## 1. API Layer Architecture

### 1.1 Unified Request Handler

**Core Pattern**: All requests (admin-ajax or REST) route through a single handler:

```php
class WP_Statistics_API_Handler {
    public function handle_data_request( $request ) {
        // 1. Validate request
        // 2. Check permissions
        // 3. Check cache
        // 4. Route to widget service
        // 5. Format response
        // 6. Cache response
        return $response;
    }
}
```

### 1.2 Admin-Ajax Integration (Primary)

- **Endpoint**: `wp-admin/admin-ajax.php`
- **Action**: `wp_statistics_fetch_widget_data`
- **Security**: WordPress nonces + capability check (`read_wp_statistics`)
- **Avoids adblockers**: Yes ✓

### 1.3 REST API Integration (External Access)

- **Namespace**: `wp-statistics/v1`
- **Endpoint**: `/wp-json/wp-statistics/v1/data`
- **Method**: POST
- **Authentication**: WordPress auth (cookie, application passwords, OAuth)

### 1.4 Request/Response Format

**Request**:
```json
{
  "widget_id": "visitors-table",
  "config": {
    "columns": ["visitor_info", "referrer", "total_views"],
    "sort": { "column": "last_view", "order": "desc" },
    "pagination": { "page": 1, "per_page": 50 },
    "filters": [{ "type": "country", "operator": "is", "value": "US" }],
    "dateOverride": { "preset": "last_7_days" }
  },
  "page_filters": [{ "type": "device_type", "operator": "is", "value": "mobile" }],
  "date_range": { "start": "2025-11-01", "end": "2025-11-29", "compare": true }
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "rows": [...],
    "totals": { "count": 1250, "visitors": 845, "views": 3240 },
    "pagination": { "total": 1250, "per_page": 50, "current_page": 1 },
    "comparison": { "period": "previous", "rows": [...], "totals": {...} }
  },
  "meta": {
    "widget_id": "visitors-table",
    "cached": false,
    "cache_ttl": 3600,
    "query_time": 0.234,
    "applied_filters": 2
  }
}
```

**Error Response**:
```json
{
  "success": false,
  "error": {
    "code": "invalid_date_range",
    "message": "Start date must be before end date",
    "status": 400
  }
}
```

---

## 2. Data Service Layer

### 2.1 Widget Service Architecture

Each of the 37 widgets has a dedicated service class extending a base:

```php
abstract class WP_Statistics_Widget_Service {
    protected $query_builder;
    protected $filter_processor;
    protected $date_processor;
    protected $aggregation_router;

    public function fetch_data( $request ) {
        // 1. Process date range (with optional widget override)
        // 2. Combine page filters + widget filters
        // 3. Determine aggregation strategy (summary vs real-time)
        // 4. Build and execute query
        // 5. Transform data for frontend
        return $data;
    }

    abstract protected function fetch_from_summary( $date_range, $filters, $config );
    abstract protected function fetch_real_time( $date_range, $filters, $config );
    abstract protected function transform_data( $data, $config );
}
```

### 2.2 Query Builder Engine

Dynamically constructs SQL queries based on:
- Widget requirements (which columns/tables needed)
- Applied filters (page + widget)
- Date ranges
- Sorting and pagination

**Example**: Visitors query with filters
```php
$query->select(['s.ID', 'v.hash', 's.total_views'])
      ->from('sessions', 's')
      ->join('visitors', 'v', 's.visitor_id = v.ID')
      ->where_between('s.started_at', $start, $end)
      ->where('co.code', '=', 'US')  // Filter applied
      ->order_by('s.started_at', 'DESC')
      ->limit(50);
```

### 2.3 Filter Processor

**Combines filters with AND logic**:
- Page-level filters (e.g., Country = US, Device = Mobile)
- Widget-level filters (e.g., Total Views > 5)
- Result: WHERE country='US' AND device='mobile' AND total_views > 5

**Supports 20+ filter types**:
- Geographic: country, city, region
- Technical: browser, OS, device_type, screen_resolution, timezone, language
- Visitor: user_id, login_status, user_role, visitor_type, ip_address
- Behavior: session_duration, views_per_session, total_views, bounce
- Content: page_url, page_title, resource_type, author
- Marketing: utm_source, utm_medium, utm_campaign, referrer

### 2.4 Date Range Processor

**Handles**:
- Preset ranges (today, yesterday, last_7_days, last_30_days, this_month, etc.)
- Custom ranges (start date, end date)
- Widget-specific overrides (e.g., Traffic by Hour always shows last 7 days)
- Previous period comparison calculation

**Example**: Widget with date override
```json
{
  "dateOverride": { "preset": "last_7_days" }
}
```
Widget uses last 7 days regardless of page date range.

---

## 3. Aggregation Strategy

### 3.1 Aggregation Router

**Decides**: Use summary tables OR real-time queries based on:

1. **Widget compatibility**: Some widgets can't use summary tables (need session/visitor details)
2. **Filter compatibility**: Geographic/device/referrer filters require real-time queries
3. **Date completeness**: Partial days require real-time
4. **Recency**: Today's data uses real-time (summary tables updated nightly)

### 3.2 Summary Table Usage

**When to use**:
- Widget supports aggregation (Traffic Trends, Top Pages, Overview Metrics)
- No filters requiring session joins (no browser/device/country filters)
- Complete days only (not partial days)
- Not today's date

**Example**: Traffic Trends (uses `wp_statistics_summary_totals`)
```sql
SELECT date, visitors, views, sessions
FROM wp_statistics_summary_totals
WHERE date BETWEEN '2025-10-30' AND '2025-11-29'
ORDER BY date ASC
```

**Example**: Top Pages (uses `wp_statistics_summary`)
```sql
SELECT
    r.cached_title,
    ru.uri,
    SUM(s.visitors) as visitors,
    SUM(s.views) as views
FROM wp_statistics_summary s
JOIN wp_statistics_resource_uris ru ON s.resource_uri_id = ru.ID
JOIN wp_statistics_resources r ON ru.resource_id = r.ID
WHERE s.date BETWEEN '2025-10-30' AND '2025-11-29'
GROUP BY ru.resource_id
ORDER BY SUM(s.views) DESC
LIMIT 50
```

### 3.3 Real-Time Queries

**When to use**:
- Filters requiring session data (browser, device, country, referrer)
- Visitor-specific queries
- Today's data
- Partial day ranges

**Example**: Visitors with country filter
```sql
SELECT v.hash, COUNT(s.ID) as sessions, SUM(s.total_views) as views
FROM wp_statistics_sessions s
JOIN wp_statistics_visitors v ON s.visitor_id = v.ID
JOIN wp_statistics_countries co ON s.country_id = co.ID
WHERE s.started_at BETWEEN '2025-11-01' AND '2025-11-29'
  AND co.code = 'US'
GROUP BY v.ID
ORDER BY sessions DESC
```

---

## 4. Caching Architecture

### 4.1 Server-Side Caching (WordPress Transients)

**Cache key generation**:
```php
$cache_key = 'wp_stats_' . $widget_id . '_' . md5(json_encode([
    'config' => $config,
    'page_filters' => $page_filters,
    'date_range' => $date_range
]));
```

**Widget-specific TTL**:
- `online-visitors`: 60 seconds (real-time)
- `overview-metrics`: 900 seconds (15 minutes)
- `visitors-table`: 1800 seconds (30 minutes)
- `traffic-trends`: 3600 seconds (1 hour)
- `top-countries`: 7200 seconds (2 hours)

**Cache invalidation**:
- On new session/view: Invalidate affected widgets
- Pattern-based deletion for date ranges

### 4.2 Client-Side Caching (React Query)

**Configuration**:
```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,      // 5 minutes
      cacheTime: 10 * 60 * 1000,     // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    },
  },
});
```

**Widget-specific stale times**:
- `online-visitors`: 30 seconds
- `overview-metrics`: 2 minutes
- `visitors-table`: 5 minutes
- `traffic-trends`: 10 minutes
- `top-countries`: 15 minutes

**Stale-while-revalidate**: Show cached data instantly while fetching fresh data in background

**Cache invalidation**:
```typescript
// On filter change
queryClient.invalidateQueries(['widget', widgetId]);

// On date range change
queryClient.invalidateQueries(['widget']);
```

---

## 5. Widget Configuration Schema

### 5.1 Configuration Structure

```typescript
interface WidgetConfig {
  widgetId: string;

  // Data columns to fetch
  columns?: string[];

  // Sorting
  sort?: { column: string; order: 'asc' | 'desc' };

  // Pagination
  pagination?: { page: number; perPage: number };

  // Widget-specific filters (added to page filters)
  filters?: Filter[];

  // Date override (if widget uses different date than page)
  dateOverride?: {
    preset?: string;  // 'last_7_days', 'last_30_days'
    start?: string;
    end?: string;
    compare?: boolean;
  };

  // Row limit (for preview widgets)
  rowLimit?: number;

  // Additional options
  options?: {
    showPreviousPeriod?: boolean;
    timeframe?: 'daily' | 'weekly' | 'monthly';
    metricToggle?: boolean;
  };
}
```

### 5.2 Example Configurations

**Full table widget**:
```json
{
  "widgetId": "visitors-table",
  "columns": ["visitor_info", "referrer", "total_views"],
  "sort": { "column": "last_view", "order": "desc" },
  "pagination": { "page": 1, "perPage": 50 }
}
```

**Preview widget with filters**:
```json
{
  "widgetId": "visitors-table",
  "rowLimit": 10,
  "filters": [{ "type": "total_views", "operator": "greater than", "value": 1 }],
  "sort": { "column": "total_views", "order": "desc" }
}
```

**Widget with date override**:
```json
{
  "widgetId": "traffic-by-hour",
  "dateOverride": { "preset": "last_7_days" }
}
```

### 5.3 Filter Inheritance Example

**Page filters**:
```json
[
  { "type": "country", "operator": "is", "value": "US" },
  { "type": "device_type", "operator": "is", "value": "mobile" }
]
```

**Widget filters**:
```json
[
  { "type": "total_views", "operator": "greater than", "value": 5 }
]
```

**Combined (AND logic)**:
```json
[
  { "type": "country", "operator": "is", "value": "US" },
  { "type": "device_type", "operator": "is", "value": "mobile" },
  { "type": "total_views", "operator": "greater than", "value": 5 }
]
```

---

## 6. React Integration Pattern

### 6.1 Project Structure

```
/assets/src/
├── api/
│   ├── widgetApi.ts          # API client functions
│   └── types.ts              # TypeScript types
├── hooks/
│   ├── useWidgetData.ts      # Data fetching hook
│   ├── useFilters.ts         # Filter state management
│   └── useDateRange.ts       # Date range state
├── context/
│   └── ReportContext.tsx     # Page-level state (date + filters)
├── pages/
│   └── VisitorsOverview.tsx  # Report pages
├── widgets/
│   ├── OverviewMetrics.tsx   # Widget components
│   └── TrafficTrends.tsx
└── components/
    ├── DataTable/            # Base components
    └── LineChart/
```

### 6.2 Page-Level Context

Shares date range and filters across all widgets on a page:

```typescript
// ReportContext.tsx
const ReportContext = createContext<{
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  pageFilters: Filter[];
  setPageFilters: (filters: Filter[]) => void;
}>(null);

export function ReportProvider({ children }) {
  const [dateRange, setDateRange] = useState({ preset: 'last_30_days' });
  const [pageFilters, setPageFilters] = useState([]);

  return (
    <ReportContext.Provider value={{ dateRange, setDateRange, pageFilters, setPageFilters }}>
      {children}
    </ReportContext.Provider>
  );
}
```

### 6.3 Widget Data Fetching

```typescript
// Widget component
function TrafficTrends() {
  const { dateRange, pageFilters } = useReportContext();

  const { data, isLoading, error } = useWidgetData(
    'traffic-trends',
    { widgetId: 'traffic-trends', options: { showPreviousPeriod: true } },
    pageFilters,
    dateRange
  );

  if (isLoading) return <Skeleton />;
  if (error) return <ErrorBoundary error={error} />;

  return <LineChart data={data.chartData} />;
}
```

### 6.4 Data Fetching Hook

```typescript
// useWidgetData.ts
export function useWidgetData(
  widgetId: string,
  config: WidgetConfig,
  pageFilters: Filter[],
  dateRange: DateRange
) {
  return useQuery({
    queryKey: ['widget', widgetId, config, pageFilters, dateRange],
    queryFn: () => fetchWidgetData(widgetId, config, pageFilters, dateRange),
    staleTime: widgetStaleTime[widgetId] || 5 * 60 * 1000,
    keepPreviousData: true,
  });
}
```

### 6.5 API Client

```typescript
// widgetApi.ts
export async function fetchWidgetData(
  widgetId: string,
  config: WidgetConfig,
  pageFilters: Filter[],
  dateRange: DateRange
) {
  const response = await fetch(wpStatistics.ajaxUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      action: 'wp_statistics_fetch_widget_data',
      nonce: wpStatistics.nonce,
      widget_id: widgetId,
      config: JSON.stringify(config),
      page_filters: JSON.stringify(pageFilters),
      date_range: JSON.stringify(dateRange),
    }),
  });

  const data = await response.json();
  if (!data.success) throw new Error(data.error.message);
  return data;
}
```

---

## 7. Request Flow Examples

### 7.1 Initial Page Load

**Scenario**: User navigates to Visitors Overview (last 30 days, no filters)

1. **React page mounts** → Sets up context with default date range
2. **8 widgets render in parallel** → Each calls `useWidgetData` hook
3. **React Query batches requests** → 8 parallel API calls to admin-ajax
4. **Backend processes each**:
   - Validates request
   - Checks cache (first load = miss)
   - Routes to widget service
   - Aggregation router decides summary vs real-time
   - Executes query
   - Caches response
5. **Frontend receives data** → Widgets render with data
6. **Subsequent navigation** → React Query returns cached data instantly

### 7.2 Widget with Custom Date Range

**Scenario**: Traffic by Hour widget always shows last 7 days

**Page date**: Last 30 days
**Widget config**: `{ dateOverride: { preset: "last_7_days" } }`

**Backend processing**:
- Date processor detects `dateOverride`
- Uses widget date (last 7 days) instead of page date (last 30 days)
- Query executes with correct date range

### 7.3 Filter Applied

**Scenario**: User adds filter "Country = US" on Visitors page

1. **User clicks filter** → Updates page context
2. **React Query invalidates** → All widget queries invalidated
3. **Widgets refetch** → 8 new API calls with filter included
4. **Backend combines filters** → Page filter + widget filters (AND logic)
5. **Aggregation router** → Detects country filter → uses real-time query (not summary)
6. **Response cached** → New cache keys with filter hash

### 7.4 Auto-Refresh (Online Visitors)

**Scenario**: Real-time updates every 30 seconds

```typescript
const { data } = useWidgetData(
  'online-visitors',
  { widgetId: 'online-visitors' },
  [],
  { preset: 'last_5_minutes' },
  { refetchInterval: 30000 }  // 30 seconds
);
```

- React Query polls every 30 seconds
- Backend caches with TTL=60 seconds
- Minimal database load with caching

---

## 8. Future WebSocket Support

### 8.1 Architecture Extension

Current polling can extend to WebSockets with minimal changes:

**Current**: `React → useQuery (polling) → admin-ajax → Database`
**Future**: `React → useSubscription → WebSocket → Database`

### 8.2 Implementation Approach

1. **WebSocket Server**: Node.js (Socket.IO) or PHP (Ratchet)
2. **Message Bus**: Redis pub/sub for distribution
3. **Backend Publishing**: Publish to Redis when sessions/views created
4. **Frontend Subscription**: Subscribe to real-time channels
5. **Fallback**: Automatically fall back to polling if WebSocket unavailable

**No changes needed** to:
- API layer
- Data service layer
- Widget services

**Changes needed**:
- Add WebSocket server
- Add Redis pub/sub publishing hooks
- Add React WebSocket client hooks
- Add opt-in setting

---

## 9. Implementation Phases

### Phase 1: Core API Infrastructure (Weeks 1-3)

**Deliverables**:
- Unified API handler
- Admin-ajax integration
- REST API integration
- Request validation
- Response formatting
- Error handling

**Key Files**:
- `class-wp-statistics-api-handler.php`
- `class-wp-statistics-ajax-endpoints.php`
- `class-wp-statistics-rest-endpoints.php`

### Phase 2: Data Service Layer (Weeks 4-7)

**Deliverables**:
- Abstract widget service base class
- Query builder engine
- Filter processor (20+ filter types)
- Date range processor
- 5-10 core widget services

**Key Files**:
- `abstract-class-wp-statistics-widget-service.php`
- `class-wp-statistics-query-builder.php`
- `class-wp-statistics-filter-processor.php`
- `class-wp-statistics-date-range-processor.php`

### Phase 3: Aggregation & Caching (Weeks 8-10)

**Deliverables**:
- Aggregation router
- Summary table optimization
- Cache manager
- Cache invalidation logic

**Key Files**:
- `class-wp-statistics-aggregation-router.php`
- `class-wp-statistics-cache-manager.php`

### Phase 4: Remaining Widget Services (Weeks 11-14)

**Deliverables**:
- All 37 widget services
- Export functionality
- Edge case handling

### Phase 5: React Frontend (Weeks 15-18)

**Deliverables**:
- React Query configuration
- API client functions
- Data fetching hooks
- Report context provider
- Error boundaries
- Loading states

**Key Files**:
- `/assets/src/api/widgetApi.ts`
- `/assets/src/hooks/useWidgetData.ts`
- `/assets/src/context/ReportContext.tsx`

### Phase 6: Advanced Features (Weeks 19-21)

**Deliverables**:
- Export (CSV, XLSX, PDF)
- Advanced filter UI
- Auto-refresh
- Performance optimization

### Phase 7: WebSocket Support (Future - Optional)

**Deliverables**:
- WebSocket server
- Redis integration
- Real-time push
- Frontend client
- Fallback to polling

---

## 10. Critical Files for Implementation

### Backend Core (Priority Order)

1. `/includes/api/class-wp-statistics-api-handler.php` - Central request handler
2. `/includes/services/abstract-class-wp-statistics-widget-service.php` - Base service class
3. `/includes/services/class-wp-statistics-query-builder.php` - SQL generation engine
4. `/includes/services/class-wp-statistics-filter-processor.php` - Filter validation/combination
5. `/includes/services/class-wp-statistics-aggregation-router.php` - Performance optimizer
6. `/includes/services/class-wp-statistics-cache-manager.php` - Caching layer
7. `/includes/api/class-wp-statistics-ajax-endpoints.php` - Admin-ajax integration
8. `/includes/api/class-wp-statistics-rest-endpoints.php` - REST API integration

### Frontend Core (Priority Order)

1. `/assets/src/api/widgetApi.ts` - API client
2. `/assets/src/hooks/useWidgetData.ts` - Data fetching hook
3. `/assets/src/context/ReportContext.tsx` - Page-level state
4. `/assets/src/api/types.ts` - TypeScript types
5. `/assets/src/config/reactQueryConfig.ts` - React Query config

---

## Conclusion

This architecture provides a **scalable, performant, and maintainable** foundation for WP Statistics v15:

✓ **WordPress-Native**: Leverages WordPress patterns (transients, nonces, capabilities)
✓ **Unified Backend**: Single codebase supports admin-ajax and REST API
✓ **Performance-Optimized**: Intelligent caching and aggregation routing
✓ **Configuration-Driven**: Widgets declare data needs, backend handles complexity
✓ **Future-Proof**: Extensible to WebSockets with minimal changes
✓ **Developer-Friendly**: Clear separation of concerns, testable components

The phased implementation ensures steady progress with testable milestones at each stage.

---

*Last Updated: 2025-11-29*
