---
title: "GlobalMap Component"
type: "frontend-component"
category: "custom"
status: "Done"
component_path: "resources/react/src/components/custom/global-map.tsx"
storybook: true
---

# GlobalMap Component

An interactive world map visualization using react-simple-maps with country highlighting, city drilldown, dynamic zoom, province boundaries, and tooltips.

## Component Information

- **Type**: Custom Component (Domain-specific)
- **Location**: `resources/react/src/components/custom/global-map.tsx`
- **Constants**: `resources/react/src/constants/map-data.ts`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com?path=/story/custom-globalmap--default)
- **Product Docs**: [Global Map Component](../../../components/global-map.md) - Configuration options and widget usage
- **Dependencies**: `react-simple-maps`, `lucide-react`, `@tanstack/react-query`, UI components

## Overview

The GlobalMap displays visitor data on an interactive world map with two view modes:

1. **World View (Countries)**: Color-coded countries based on visitor count
2. **Country View (Cities & Regions)**: Zoomed view showing province boundaries and city markers

Features include dynamic zoom calculation, smooth animations, hover tooltips, metric toggle, and integration with the Analytics Query API.

## Import

```typescript
import { GlobalMap } from '@/components/custom/global-map'
import type {
  GlobalMapProps,
  GlobalMapData,
  CountryData
} from '@/components/custom/global-map'
```

## Basic Usage

```tsx
const data = {
  countries: [
    { code: 'US', name: 'United States', visitors: 5000 },
    { code: 'DE', name: 'Germany', visitors: 2500 },
    { code: 'FR', name: 'France', visitors: 1200 },
  ],
}

<GlobalMap data={data} title="Visitors by Country" />
```

## With City Drilldown

```tsx
<GlobalMap
  data={data}
  title="Geographic Distribution"
  enableCityDrilldown={true}
  dateFrom="2024-11-01"
  dateTo="2024-11-30"
  showZoomControls={true}
  showLegend={true}
/>
```

## With Metric Toggle

```tsx
<GlobalMap
  data={data}
  title="Geographic Distribution"
  enableMetricToggle={true}
  availableMetrics={[
    { value: 'visitors', label: 'Visitors' },
    { value: 'views', label: 'Views' },
  ]}
/>
```

## API

### GlobalMapProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `GlobalMapData` | *required* | Country data |
| `title` | `string` | - | Card title |
| `metric` | `string` | `'Visitors'` | Metric label in tooltips |
| `showZoomControls` | `boolean` | `true` | Show +/- zoom buttons |
| `showLegend` | `boolean` | `true` | Show color scale legend |
| `pluginUrl` | `string` | `''` | Base URL for flag images |
| `className` | `string` | - | Additional CSS classes |
| `enableCityDrilldown` | `boolean` | `false` | Enable country click to zoom into cities |
| `enableMetricToggle` | `boolean` | `false` | Enable metric toggle UI |
| `availableMetrics` | `MetricOption[]` | `[]` | Available metrics for toggle |
| `dateFrom` | `string` | - | Start date for city data query (YYYY-MM-DD) |
| `dateTo` | `string` | - | End date for city data query (YYYY-MM-DD) |

### GlobalMapData

| Property | Type | Description |
|----------|------|-------------|
| `countries` | `CountryData[]` | Array of country data |

### CountryData

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `code` | `string` | Yes | ISO country code (2-letter: US, GB, IR) |
| `name` | `string` | Yes | Country display name |
| `visitors` | `number` | Yes | Visitor count |
| `flag` | `string` | No | Flag image path |

### MetricOption

| Property | Type | Description |
|----------|------|-------------|
| `value` | `string` | Metric identifier (e.g., 'visitors', 'views') |
| `label` | `string` | Display label |

## Features

### Two View Modes

**World View (Countries)**
- Shows all countries colored by visitor count
- Hover shows country tooltip with flag, name, and visitor count
- Click country (if `enableCityDrilldown` enabled) to zoom into city view

**Country View (Cities & Regions)**
- Shows province/state boundaries from Natural Earth data
- Displays cities as markers (coordinates from hardcoded lookup)
- Hover shows city tooltip with name, region, and visitor count
- Back button with country flag returns to world view

### Dynamic Zoom Calculation

The component uses `calculateZoomForBounds` to automatically determine optimal zoom levels based on country's geographic size (bounding box dimensions):

- **Very large countries** (`>60°` dimension): 3.5x zoom - Russia, Canada
- **Large countries** (`40-60°` dimension): 4.5x zoom - China, USA
- **Medium countries** (`25-40°` dimension): 6x zoom - Iran, Mexico
- **Small countries** (`10-25°` dimension): 8x zoom - Germany, UK, Netherlands
- **Very small countries** (`<5°` dimension): 14x zoom - Singapore, Luxembourg

This eliminates hardcoded country IDs and ensures every country displays at an appropriate zoom level.

### Color Scale

Indigo color scale from light to dark based on relative visitor count:
- Gray (`#e5e7eb`) for no data
- `#e0e7ff` to `#4f46e5` gradient (6 levels) based on percentage of max
- Defined in `constants/map-data.ts` as `COLOR_SCALE`

### Zoom Controls

- Plus/Minus buttons in top-left corner
- World view: 1x zoom
- Country view: Dynamic zoom (3.5x to 14x based on country size)
- Manual zoom: 1x to 8x range
- Smooth animation transitions (400ms, easeOutCubic)

### Tooltips

**Country Tooltip (World View):**
- Country flag (if available)
- Country name
- Visitor count formatted with locale

**City Tooltip (Country View):**
- City name
- Region/state name
- Visitor count formatted with locale

**Province Tooltip (Country View):**
- Province/state name
- Region code
- "Hover over cities for details" hint

### Legend

Bottom legend shows:
- Color gradient bar with 6 levels
- Min (0) and max values
- Current metric label
- "No data available" when empty

### Metric Toggle

When `enableMetricToggle` is true and multiple metrics are available:
- Toggle button in top-right corner
- Switch between metrics (Visitors, Views)
- Re-colors map based on selected metric
- Automatically hidden if only one metric available

### Map Projection

- Equal Earth projection centered at [15, 15] for balanced global view
- Antarctica filtered out
- Province boundaries from Natural Earth 10m resolution data
- Country boundaries from Natural Earth 110m resolution data

## Data Sources

### From Analytics Query API (Dynamic)

The component fetches real data from the Analytics Query API:

**Country data** (provided via props):
```typescript
POST /wp-admin/admin-ajax.php
{
  "action": "wp_statistics_analytics",
  "sources": ["visitors", "views"],
  "group_by": ["country"],
  "date_from": "2024-11-01",
  "date_to": "2024-11-30"
}
```

**City data** (fetched on country click):
```typescript
POST /wp-admin/admin-ajax.php
{
  "action": "wp_statistics_analytics",
  "sources": ["visitors"],
  "group_by": ["city"],
  "filters": {
    "country": {
      "operator": "is",
      "value": "IR"
    }
  },
  "date_from": "2024-11-01",
  "date_to": "2024-11-30"
}
```

API returns:
- Country/city names
- Region names
- Visitor counts
- View counts

### Hardcoded Data (Frontend)

**Temporary** (will be removed when backend adds coordinates to database):

1. **City coordinates** (`lib/city-coordinates.ts`)
   - 265 major cities worldwide with [longitude, latitude]
   - Used for city marker positioning
   - Format: `{ 'New York|US': [-74.006, 40.7128] }`

2. **Fake city data** (`constants/map-data.ts`)
   - 51 cities across 16 countries with demo data
   - Fallback when API fails or for Storybook
   - Will be removed when API is stable

**Permanent** (OK to keep):

1. **Country centers** (`lib/country-centers.ts`)
   - Geographic center points for 195 countries
   - Used for zoom transitions
   - Rarely changes, not visitor analytics data

2. **Color scale** (`constants/map-data.ts`)
   - Tailwind CSS Indigo color palette (6 levels)
   - UI configuration

3. **Map GeoJSON URLs** (`constants/map-data.ts`)
   - Natural Earth Vector data URLs
   - Country boundaries (110m low resolution)
   - Province boundaries (10m high resolution)

### Future Migration Path

When backend adds `latitude` and `longitude` columns to `wp_statistics_cities` table:

1. API will return coordinates in city data response
2. Remove `city-coordinates.ts` lookup file
3. Remove `FAKE_CITY_DATA` constant
4. Component will use API coordinates directly

See `constants/map-data.ts` for detailed inline documentation about data sources.

## Performance Optimizations

1. **Province Loading**: Provinces only load when zoomed into a country, not in world view
2. **Animation Optimization**: Province rendering disabled during zoom animation
3. **State Management**: 8 useState hooks managing independent state
4. **Memoization**: useMemo for expensive calculations (color scales, filtered cities)
5. **Query Caching**: react-query caches city data by country

## Accessibility

- Zoom controls have proper ARIA labels
- Keyboard accessible zoom buttons
- Country names in tooltips for screen readers
- Color scale with legend for non-color vision

## Storybook Stories

The component has 14+ stories demonstrating:

1. **Default** - Basic usage with country data
2. **WithTitle** - Map with custom title
3. **WithCityDrilldown** - Interactive city drilldown feature
4. **WithMetricToggle** - Metric switching (Visitors/Views)
5. **FullyInteractive** - All features enabled
6. **CountryCitiesView** - Pre-zoomed to Iran showing cities
7. **USRegionalView** - Pre-zoomed to USA showing states
8. **DynamicZoom** - Demonstrates dynamic zoom with different country sizes
9. **WithProvinceView** - Province/region boundaries
10. **EmptyData** - Empty state handling
11. **LimitedData** - Sparse data scenarios
12. And more...

[View all stories in Storybook](https://ui.wp-statistics.com?path=/story/custom-globalmap--default)

## Related Components

- [Card](../ui/card.md) - Container
- [Button](../ui/button.md) - Zoom controls and metric toggle
- [Tabs](../ui/tabs.md) - Metric toggle UI

## Related Documentation

- [Analytics Query API](../../api-endpoints/analytics-query-api.md) - API for fetching geographic data
- [Database Schema](../../database/cities.md) - Cities table structure
- [Database Schema](../../database/countries.md) - Countries table structure

---

*Last Updated: 2025-12-20*
