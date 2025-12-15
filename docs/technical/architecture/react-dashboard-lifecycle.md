---
title: "React Dashboard Lifecycle"
type: "technical"
category: "architecture"
status: "Done"
sidebar_position: 7
---

# React Dashboard Lifecycle

This document explains the complete lifecycle of the WP Statistics v15 React dashboard, from initial page load to widget rendering and user interactions.

## Quick Navigation

- [Overview](#overview)
- [Complete Lifecycle Flow](#complete-lifecycle-flow)
- [Lifecycle Phases](#lifecycle-phases)
- [Request Strategies](#request-strategies)
- [Request Strategy Comparison](#request-strategy-comparison)
- [Performance Considerations](#performance-considerations)
- [Related Documentation](#related-documentation)

---

## Overview

The React dashboard follows a structured data flow pattern:

1. WordPress loads the page and injects initial configuration via **[localized data](/technical/localize-data/overview)**
2. React app bootstraps and initializes global state
3. Widgets mount and fetch data from the **[Analytics Query API](/technical/api-endpoints/analytics-query-api)**
4. Backend processes queries and returns formatted responses
5. Frontend receives data and renders visualizations
6. User interactions trigger state updates and new data requests

Understanding this flow helps developers debug issues, optimize performance, and extend functionality.

---

## Complete Lifecycle Flow

The lifecycle flow varies based on the [Request Strategy](#request-strategies) used. Here's the common flow with strategy-specific variations:

```
┌──────────────────────────────────────────────────────────────────┐
│                    PHASE 1: PAGE LOAD                            │
└──────────────────────────────────────────────────────────────────┘
                              ↓
        [WordPress Loads Dashboard Page]
                              ↓
        [Enqueue React Assets (JS/CSS)]
                              ↓
        [Inject Configuration via wp_localize_script]
          • globals (AJAX URL, nonce)
          • filters (definitions)
          • layout (menu structure)
          • header (notifications)

┌──────────────────────────────────────────────────────────────────┐
│                 PHASE 2: REACT APP BOOTSTRAP                     │
└──────────────────────────────────────────────────────────────────┘
                              ↓
        [React App Mounts]
                              ↓
        [Read window.WP_STATISTICS_DASHBOARD]
                              ↓
        [Initialize Global State]
          • Date range
          • Active filters
          • Comparison mode
                              ↓
        [Render Dashboard Shell]
          • Sidebar
          • Header
          • Content area

┌──────────────────────────────────────────────────────────────────┐
│              PHASE 3: DATA FETCHING (Strategy-Dependent)         │
└──────────────────────────────────────────────────────────────────┘
                              ↓
        [Widget Components Mount]
                              ↓
        [Build Analytics Query Objects]
                              ↓
     ┌────────────────────────────────────────────────┐
     │  REQUEST STRATEGY DETERMINES NEXT STEPS:       │
     │                                                 │
     │  A) Batch - Wait for All:                      │
     │     → Combine all queries                      │
     │     → Send 1 HTTP request                      │
     │     → Wait for complete response               │
     │     → Render all widgets together              │
     │                                                 │
     │  B) Individual Requests:                       │
     │     → Each widget sends own request            │
     │     → N HTTP requests in parallel              │
     │     → Render each widget independently         │
     │                                                 │
     │  C) Batch - Progressive:                       │
     │     → Combine all queries                      │
     │     → Send 1 HTTP request                      │
     │     → Stream responses as ready                │
     │     → Render widgets progressively             │
     └────────────────────────────────────────────────┘
                              ↓
        [Execute API Request(s)]
                              ↓

        ┌─────── FRONTEND ───────┐      ┌─────── BACKEND ─────────┐
        │                        │      │                          │
        │  Send Query            │──────│→ Receive Request        │
        │                        │      │                          │
        │                        │      │  Validate:               │
        │                        │      │  • Nonce                 │
        │                        │      │  • User permissions      │
        │                        │      │  • Sources & group_by    │
        │                        │      │  • Filters               │
        │                        │      │  • Date range            │
        │                        │      │         ↓                │
        │                        │      │  Build SQL Query:        │
        │                        │      │  • SELECT sources        │
        │                        │      │  • JOIN tables           │
        │                        │      │  • WHERE clauses         │
        │                        │      │  • GROUP BY              │
        │                        │      │  • ORDER BY              │
        │                        │      │         ↓                │
        │                        │      │  Execute via $wpdb       │
        │                        │      │         ↓                │
        │                        │      │  Format Response:        │
        │                        │      │  • Calculate totals      │
        │                        │      │  • Add comparison data   │
        │                        │      │  • Apply format type     │
        │                        │      │         ↓                │
        │  Receive Response      │←─────│─ Return JSON            │
        │                        │      │                          │
        └────────────────────────┘      └──────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                    PHASE 4: RENDER WIDGETS                       │
└──────────────────────────────────────────────────────────────────┘
                              ↓
        [React Query Caches Response]
          • Cache by query key
          • Set stale time (5 min)
          • Enable background refetch
                              ↓
        [Transform Data for Visualization]
          • Line charts → labels + datasets
          • Bar charts → items + percentages
          • Tables → rows + sorting
          • Metrics → formatted values + trends
                              ↓
        [Render Widgets]
          • Charts
          • Tables (sortable)
          • Metrics cards
          • Maps

┌──────────────────────────────────────────────────────────────────┐
│                PHASE 5: USER INTERACTIONS                        │
└──────────────────────────────────────────────────────────────────┘
                              ↓
        [User Action Triggers]
          • Change date range
          • Apply/remove filters
          • Sort table column
          • Change page
          • Toggle comparison
                              ↓
        [Update Application State]
                              ↓
        [Invalidate Affected Queries]
                              ↓
        [Re-fetch Data with New Parameters]
                              ↓
        (Loop back to Phase 3)

        Note: For batch requests, all widgets re-fetch together.
        For individual requests, only affected widget(s) re-fetch.
```

### Key Points by Request Strategy

**Batch - Wait for All:**
- Single round-trip to backend
- All widgets show loading state together
- All widgets render together when data arrives
- Best for: Small dashboards, critical data

**Individual Requests:**
- Multiple parallel round-trips to backend
- Each widget shows independent loading state
- Widgets render as their data arrives
- Best for: Lazy-loaded widgets, independent caching

**Batch - Progressive:**
- Single round-trip to backend
- Each widget shows independent loading state
- Widgets render as backend completes their queries
- Best for: Large dashboards, mixed query speeds

---

## Lifecycle Phases

### Phase 1: Page Load & Initialization

WordPress loads the page and injects initial configuration data into the HTML.

**Key actions:**
- Enqueue React app assets (JS/CSS)
- Inject configuration via `wp_localize_script` as `window.WP_STATISTICS_DASHBOARD`
- Includes: globals, filters, layout, header data

**📚 See:** **[Localize Data Overview](/technical/localize-data/overview)** for complete data structure and providers.

### Phase 2: React Application Bootstrap

React app mounts and initializes application state.

**Key actions:**
- Read configuration from `window.WP_STATISTICS_DASHBOARD`
- Initialize global state (date range, filters, comparison mode)
- Render dashboard shell (sidebar, header, content area)

### Phase 3: Component Mounting & Data Fetching

Widgets mount and build analytics query requests based on global state.

**Key actions:**
- Construct query objects with sources, group_by, filters, date range
- Choose request strategy (batch, individual, or progressive)
- Send requests to Analytics Query API

**📚 See:** **[Analytics Query API](/technical/api-endpoints/analytics-query-api)** for request/response specification.

### Phase 4: Backend Query Processing

Backend receives requests, validates, builds SQL, executes queries, and formats responses.

**Key actions:**
- Validate sources, group_by, filters, permissions
- Generate SQL using QueryBuilder
- Execute via `$wpdb`
- Format response with totals and comparison data

**📚 See:** **[Analytics Query Backend](/technical/architecture/analytics-query-backend)** for detailed query processing logic.

### Phase 5: Frontend Data Reception & Rendering

React Query receives responses, caches data, and triggers widget rendering.

**Key actions:**
- Cache responses with configurable stale time
- Transform data for visualization (charts, tables, cards)
- Render widgets with charts, tables, metrics cards, and maps

**📚 See:** **[Analytics Query Frontend](/technical/architecture/analytics-query-frontend)** for React patterns and hooks.

### Phase 6: User Interactions & Updates

User actions trigger state updates and data re-fetching.

| User Action | Frontend Response | Backend Impact |
|-------------|-------------------|----------------|
| **Change date range** | Update global state → Invalidate all queries → Re-fetch with new dates | New queries with updated `date_from`/`date_to` |
| **Apply filter** | Update global state → Invalidate affected queries → Re-fetch with filters | New queries with additional WHERE clauses |
| **Sort table** | Update local component state → Re-fetch with new `order_by` | New query with different ORDER BY clause |
| **Paginate** | Update local component state → Re-fetch with new `page` | New query with updated OFFSET |
| **Toggle comparison** | Update global state → Invalidate queries → Re-fetch with `compare: true` | Dual queries (current + previous period) |

React Query manages the entire fetch lifecycle:
- Optimistic UI updates where applicable
- Automatic retries on network failures
- Cancellation of stale requests
- Cache deduplication to prevent redundant queries

---

## Request Strategies

There are three ways to fetch data for dashboard widgets, each with different trade-offs.

### 1. Batch Request - Wait for All (Initial Page Load)

**Description**: Single HTTP request with all widget queries. Wait for entire batch to complete before rendering any widget.

**Flow**:
```
[Page Load] → [Construct Batch Query with All Widgets]
                    ↓
            [Single HTTP Request]
                    ↓
            [Backend Processes ALL Queries]
                    ↓
            [Wait for Complete Response]
                    ↓
            [Render All Widgets at Once]
```

**Use Case**: Initial page load when all widgets are critical

### 2. Individual Requests - Per Widget

**Description**: Each widget executes its own independent HTTP request.

**Flow**:
```
[Page Load] → [Widget 1 Mounts] → [Request 1] → [Render Widget 1]
           ↓
           → [Widget 2 Mounts] → [Request 2] → [Render Widget 2]
           ↓
           → [Widget 3 Mounts] → [Request 3] → [Render Widget 3]
           ↓
           → [Widget N Mounts] → [Request N] → [Render Widget N]

All requests execute in parallel
```

**Use Case**: Lazy-loaded widgets, different cache requirements per widget

### 3. Batch Request - Progressive Rendering (Stream Response)

**Description**: Single HTTP request with multiple queries. Render each widget as its query completes, without waiting for the entire batch.

**Flow**:
```
[Page Load] → [Construct Batch Query]
                    ↓
            [Single HTTP Request]
                    ↓
            [Backend Processes Queries]
                    ↓
            [Query 1 Complete] → [Stream Response 1] → [Render Widget 1]
                    ↓
            [Query 2 Complete] → [Stream Response 2] → [Render Widget 2]
                    ↓
            [Query 3 Complete] → [Stream Response 3] → [Render Widget 3]
                    ↓
            [All Queries Complete]
```

**Use Case**: Optimize perceived performance - show fast queries immediately while slow queries continue processing

---

## Request Strategy Comparison

| Strategy | HTTP Requests | Time to First Widget | Time to Full Dashboard | Server Load | Complexity | Best For |
|----------|---------------|---------------------|----------------------|-------------|------------|----------|
| **Batch - Wait for All** | 1 | Slow (waits for slowest query) | Same as first widget | Single connection | Simple | Critical data, small dashboards |
| **Individual Requests** | N (one per widget) | Fast (first query to complete) | Slow (waits for slowest) | N parallel connections | Simple | Lazy widgets, independent caching |
| **Batch - Progressive** | 1 | Fast (first query to complete) | Same as slowest query | Single connection | Complex | Large dashboards, mixed query speeds |

### Detailed Comparison

#### Time to First Widget
- **Batch - Wait for All**: ❌ Slowest - Must wait for ALL queries to complete
- **Individual Requests**: ✅ Fast - First widget renders when its query completes
- **Batch - Progressive**: ✅ Fast - First widget renders when its query completes

#### Total HTTP Overhead
- **Batch - Wait for All**: ✅ Minimal - 1 request/response cycle
- **Individual Requests**: ❌ High - N request/response cycles
- **Batch - Progressive**: ✅ Minimal - 1 request, multiple streamed responses

#### Server Resource Usage
- **Batch - Wait for All**: ✅ Efficient - Single connection, processes all queries together
- **Individual Requests**: ❌ High - N simultaneous connections, N separate query processes
- **Batch - Progressive**: ✅ Efficient - Single connection, can optimize query execution order

#### User Experience
- **Batch - Wait for All**: ❌ Poor - Blank page until everything loads
- **Individual Requests**: ✅ Good - Widgets appear progressively
- **Batch - Progressive**: ✅ Best - Widgets appear progressively, minimal overhead

#### Cache Management
- **Batch - Wait for All**: ❌ Limited - All-or-nothing caching
- **Individual Requests**: ✅ Flexible - Independent cache per widget
- **Batch - Progressive**: ⚠️ Moderate - Can cache individual responses, more complex

#### Error Handling
- **Batch - Wait for All**: ❌ Fragile - One failed query blocks entire dashboard
- **Individual Requests**: ✅ Resilient - Failed widget doesn't affect others
- **Batch - Progressive**: ✅ Resilient - Failed query doesn't block other widgets

### Recommended Strategy by Scenario

| Scenario | Recommended Strategy | Reason |
|----------|---------------------|---------|
| **Initial page load (< 5 widgets)** | Batch - Wait for All | Simple, minimal overhead, fast enough |
| **Initial page load (5-10 widgets)** | Batch - Progressive | Balance speed and efficiency |
| **Initial page load (10+ widgets)** | Batch - Progressive | Critical for perceived performance |
| **Lazy-loaded widget** | Individual Request | Widget has independent lifecycle |
| **Real-time widget (auto-refresh)** | Individual Request | Different refresh interval than others |
| **Widget with heavy query** | Individual Request or Batch - Progressive | Prevents blocking faster widgets |
| **Filtered dashboard reload** | Batch - Wait for All | All data changes together, fast queries |

---

## Performance Considerations

### Caching Strategy

| Data Type | React Query staleTime | Backend Cache TTL |
|-----------|----------------------|-------------------|
| Real-time (online visitors) | 30 seconds | 60 seconds |
| Current day data | 5 minutes | 5 minutes |
| Last 7 days | 5 minutes | 15 minutes |
| Last 30 days | 5 minutes | 30 minutes |
| Historical (30+ days) | 15 minutes | 2 hours |

### Pagination

For large datasets (e.g., all pages, all countries):
- Use `per_page` parameter (max 100 rows)
- Implement cursor-based or offset pagination
- Load first page immediately, subsequent pages on demand

---

## Related Documentation

- [Localize Data Overview](/technical/localize-data/overview) - Initial configuration data structure
- [Analytics Query API](/technical/api-endpoints/analytics-query-api) - Complete API specification
- [Analytics Query Backend](/technical/architecture/analytics-query-backend) - Backend query processing architecture
- [Analytics Query Frontend](/technical/architecture/analytics-query-frontend) - React integration patterns and hooks

---

*Last Updated: 2024-12-14*
