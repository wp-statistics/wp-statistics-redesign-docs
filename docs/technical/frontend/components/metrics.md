---
title: "Metrics Component"
type: "frontend-component"
category: "custom"
status: "Done"
component_path: "resources/react/src/components/custom/metrics.tsx"
storybook: true
---

# Metrics Component

A grid-based component for displaying key performance indicators (KPIs) with trend indicators and tooltips.

## Component Information

- **Type**: Custom Component (Domain-specific)
- **Location**: `resources/react/src/components/custom/metrics.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com?path=/story/custom-metrics--default)
- **Product Docs**: [Metrics Component](../../../components/metrics.md) - Configuration options and layout behavior
- **Dependencies**: `lucide-react`, `@/components/ui/badge`, `@/components/ui/tooltip`

## Overview

The Metrics component displays multiple metric cards in a responsive grid layout. Each metric can show a value, percentage change with trend indicator, icon, and tooltip.

## Import

```typescript
import { Metrics } from '@/components/custom/metrics'
import type { MetricItem, MetricsProps } from '@/components/custom/metrics'
```

## Basic Usage

```tsx
const metrics = [
  { label: 'Visitors', value: '12,345' },
  { label: 'Page Views', value: '45,678' },
  { label: 'Avg. Duration', value: '3:24' },
]

<Metrics metrics={metrics} columns={3} />
```

## With Trend Indicators

```tsx
const metrics = [
  {
    label: 'Visitors',
    value: '12,345',
    percentage: 15.5,
    isNegative: false,  // Green, up arrow
  },
  {
    label: 'Bounce Rate',
    value: '42%',
    percentage: 8.2,
    isNegative: true,   // Red, down arrow
  },
]

<Metrics metrics={metrics} columns={2} />
```

## With Icons and Tooltips

```tsx
import { Users } from 'lucide-react'

const metrics = [
  {
    label: 'Visitors',
    value: '12,345',
    percentage: 15.5,
    icon: <Users className="h-5 w-5 text-neutral-400" />,
    tooltipContent: 'Unique visitors in the selected period',
  },
]

<Metrics metrics={metrics} />
```

## API

### MetricsProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `metrics` | `MetricItem[]` | *required* | Array of metrics |
| `columns` | `1 \| 2 \| 3 \| 4 \| 6 \| 12` | `3` | Grid columns |
| `className` | `string` | - | Additional classes |

### MetricItem

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | `string` | Yes | Metric name |
| `value` | `string \| number` | Yes | Metric value |
| `percentage` | `string \| number` | No | Trend percentage |
| `isNegative` | `boolean` | No | Red indicator if true |
| `icon` | `React.ReactNode` | No | Optional icon |
| `tooltipContent` | `string` | No | Tooltip text |

## Grid Columns

```tsx
<Metrics metrics={data} columns={1} />  // Full width
<Metrics metrics={data} columns={2} />  // 2 columns
<Metrics metrics={data} columns={3} />  // 3 columns (default)
<Metrics metrics={data} columns={4} />  // 4 columns
```

**Limit**: Maximum 12 metrics displayed.

## With WordPress i18n

```tsx
import { __ } from '@wordpress/i18n'

const metrics = [
  {
    label: __('Visitors', 'wp-statistics'),
    value: '12,345',
    tooltipContent: __('Unique visitors', 'wp-statistics'),
  },
]
```

## Related Documentation

- [Metrics Component (Product)](../../../components/metrics.md) - Product-level documentation
- [Badge](../ui/badge.md) - Trend indicator styling
- [Tooltip](../ui/tooltip.md) - Contextual help

---

*Last Updated: 2025-12-16*
