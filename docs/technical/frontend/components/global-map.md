---
title: "GlobalMap Component"
type: "frontend-component"
category: "custom"
status: "Done"
component_path: "resources/react/src/components/custom/global-map.tsx"
storybook: true
---

# GlobalMap Component

An interactive world map visualization using react-simple-maps with country highlighting, zoom controls, and tooltips.

## Component Information

- **Type**: Custom Component (Domain-specific)
- **Location**: `resources/react/src/components/custom/global-map.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com?path=/story/custom-globalmap--default)
- **Product Docs**: [Global Map Component](../../../components/global-map.md) - Configuration options and widget usage
- **Dependencies**: `react-simple-maps`, `lucide-react`, UI components

## Overview

The GlobalMap displays visitor data on an interactive world map. Countries are colored based on visitor count using an indigo color scale. Supports zoom, pan, and hover tooltips.

## Import

```typescript
import { GlobalMap } from '@/components/custom/global-map'
import type { GlobalMapProps, GlobalMapData, CountryData } from '@/components/custom/global-map'
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

## With Custom Configuration

```tsx
<GlobalMap
  data={data}
  title="Geographic Distribution"
  metric="Sessions"
  showZoomControls={true}
  showLegend={true}
  pluginUrl="/wp-content/plugins/wp-statistics/"
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

### GlobalMapData

| Property | Type | Description |
|----------|------|-------------|
| `countries` | `CountryData[]` | Array of country data |

### CountryData

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `code` | `string` | Yes | ISO country code (2 or 3 letter) |
| `name` | `string` | Yes | Country display name |
| `visitors` | `number` | Yes | Visitor count |
| `flag` | `string` | No | Flag image path |

## Features

### Color Scale

Indigo color scale from light to dark based on relative visitor count:
- Gray (`#e5e7eb`) for no data
- `#e0e7ff` to `#4f46e5` gradient based on percentage of max

### Zoom Controls

- Plus/Minus buttons in top-left corner
- Zoom range: 1x to 4x
- Pan by dragging

### Tooltips

Hover over countries to see:
- Country flag (if available)
- Country name
- Visitor count formatted with locale

### Legend

Bottom legend shows:
- Color gradient bar
- Min (0) and max values
- "No data available" when empty

### Map Projection

Uses Equal Earth projection centered at coordinates [15, 15] for balanced global view. Antarctica is filtered out.

## Related Components

- [Card](../ui/card.md) - Container
- [Button](../ui/button.md) - Zoom controls

---

*Last Updated: 2025-12-16*
