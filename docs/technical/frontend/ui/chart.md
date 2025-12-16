---
title: "Chart Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/chart.tsx"
storybook: false
---

# Chart Component

A wrapper component from shadcn/ui that provides theming, configuration, and styling utilities for Recharts visualizations.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/chart.tsx`
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/chart)
- **Dependencies**: `recharts`

## Overview

The Chart component provides a consistent wrapper for Recharts with theme-aware styling, CSS variable-based colors, and pre-built tooltip and legend components. It handles responsive container setup and integrates with the design system's color palette.

## Import

```typescript
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart'
import type { ChartConfig } from '@/components/ui/chart'
```

## Basic Usage

```tsx
const chartConfig: ChartConfig = {
  visitors: {
    label: 'Visitors',
    color: 'var(--chart-1)',
  },
  views: {
    label: 'Page Views',
    color: 'var(--chart-2)',
  },
}

<ChartContainer config={chartConfig} className="h-[300px]">
  <LineChart data={data}>
    <XAxis dataKey="date" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Line dataKey="visitors" stroke="var(--color-visitors)" />
    <Line dataKey="views" stroke="var(--color-views)" />
  </LineChart>
</ChartContainer>
```

## ChartConfig

The configuration object defines labels and colors for each data series:

```typescript
type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<'light' | 'dark', string> }
  )
}
```

### With Theme Colors

```tsx
const chartConfig: ChartConfig = {
  visitors: {
    label: 'Visitors',
    theme: {
      light: '#3b82f6',
      dark: '#60a5fa',
    },
  },
}
```

## Components

| Component | Description |
|-----------|-------------|
| `ChartContainer` | Responsive container that provides config context and CSS variables |
| `ChartTooltip` | Re-export of Recharts Tooltip |
| `ChartTooltipContent` | Styled tooltip content with config-aware labels |
| `ChartLegend` | Re-export of Recharts Legend |
| `ChartLegendContent` | Styled legend content with config-aware labels |

## ChartTooltipContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `hideLabel` | `boolean` | `false` | Hide the tooltip label |
| `hideIndicator` | `boolean` | `false` | Hide the color indicator |
| `indicator` | `'line' \| 'dot' \| 'dashed'` | `'dot'` | Indicator style |
| `nameKey` | `string` | - | Key to use for item name |
| `labelKey` | `string` | - | Key to use for label |

## useChart Hook

Access the chart configuration context:

```tsx
function CustomTooltip() {
  const { config } = useChart()
  // Access config for custom rendering
}
```

## CSS Variables

The ChartContainer generates CSS variables for each configured series:

```css
[data-chart="chart-id"] {
  --color-visitors: #3b82f6;
  --color-views: #10b981;
}
```

## Related Components

- [LineChart](../custom/line-chart.md) - Custom line chart implementation using this component

---

*Last Updated: 2025-12-16*
