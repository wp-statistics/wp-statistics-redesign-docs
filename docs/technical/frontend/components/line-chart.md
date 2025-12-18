---
title: "LineChart Component"
type: "frontend-component"
category: "custom"
status: "Done"
component_path: "resources/react/src/components/custom/line-chart.tsx"
storybook: true
---

# LineChart Component

A time-series line chart built on Recharts with multiple metrics, comparison periods, and interactive legend.

## Component Information

- **Type**: Custom Component (Domain-specific)
- **Location**: `resources/react/src/components/custom/line-chart.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com?path=/story/custom-linechart--default)
- **Product Docs**: [Line Chart Component](../../../components/line-chart.md) - Configuration options and widget usage
- **Dependencies**: `recharts`, UI components (Card, Select, ChartContainer)

## Overview

The LineChart displays time-series data with support for multiple metrics, previous period comparison, timeframe selection, and interactive metric toggling. Ideal for traffic trends and analytics dashboards.

## Import

```typescript
import { LineChart } from '@/components/custom/line-chart'
import type { LineChartDataPoint, LineChartMetric, LineChartProps } from '@/components/custom/line-chart'
```

## Basic Usage

```tsx
const data = [
  { date: '2024-12-01', visitors: 100 },
  { date: '2024-12-02', visitors: 150 },
  { date: '2024-12-03', visitors: 120 },
]

const metrics = [
  { key: 'visitors', label: 'Visitors', value: '370' },
]

<LineChart data={data} metrics={metrics} title="Traffic Trends" />
```

## With Multiple Metrics

```tsx
const data = [
  { date: '2024-12-01', visitors: 100, views: 250 },
  { date: '2024-12-02', visitors: 150, views: 380 },
]

const metrics = [
  { key: 'visitors', label: 'Visitors', value: '250', color: 'var(--chart-1)' },
  { key: 'views', label: 'Page Views', value: '630', color: 'var(--chart-2)' },
]

<LineChart data={data} metrics={metrics} />
```

## With Previous Period Comparison

```tsx
const data = [
  { date: '2024-12-01', visitors: 100, visitorsPrevious: 80 },
  { date: '2024-12-02', visitors: 150, visitorsPrevious: 120 },
]

const metrics = [
  { key: 'visitors', label: 'Visitors', value: '250', previousValue: '200' },
]

<LineChart
  data={data}
  metrics={metrics}
  showPreviousPeriod={true}
/>
```

## With Timeframe Selector

```tsx
<LineChart
  data={data}
  metrics={metrics}
  timeframe="daily"
  onTimeframeChange={(tf) => setTimeframe(tf)}
/>
```

## API

### LineChartProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `LineChartDataPoint[]` | *required* | Chart data points |
| `metrics` | `LineChartMetric[]` | *required* | Metric configurations |
| `title` | `string` | - | Chart title |
| `showPreviousPeriod` | `boolean` | `true` | Enable period comparison |
| `timeframe` | `'daily' \| 'weekly' \| 'monthly'` | `'daily'` | Time granularity |
| `onTimeframeChange` | `(tf) => void` | - | Timeframe change handler |
| `className` | `string` | - | Additional CSS classes |

### LineChartDataPoint

| Property | Type | Description |
|----------|------|-------------|
| `date` | `string` | Date string (YYYY-MM-DD) |
| `[key]` | `string \| number` | Metric values (dynamic keys) |

### LineChartMetric

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `key` | `string` | Yes | Data key for this metric |
| `label` | `string` | Yes | Display label |
| `color` | `string` | No | Line color (CSS variable or hex) |
| `enabled` | `boolean` | No | Initially visible (default: true) |
| `value` | `string \| number` | No | Summary value in legend |
| `previousValue` | `string \| number` | No | Previous period summary |

## Features

### Interactive Legend

- Click metric values to toggle visibility
- Click previous period values to toggle comparison lines
- "Previous period" toggle affects all comparison lines
- Strikethrough text indicates hidden series

### Timeframe Selection

Dropdown selector for daily, weekly, or monthly views with appropriate date formatting.

### Tooltip

Rich tooltip showing:
- Current period date and values
- Previous period date and values (when enabled)
- Color-coded line indicators

### Chart Colors

Default colors from CSS variables: `--chart-1` through `--chart-5`

## Related Components

- [Card](../ui/card.md) - Container
- [Select](../ui/select.md) - Timeframe dropdown

---

*Last Updated: 2025-12-16*
