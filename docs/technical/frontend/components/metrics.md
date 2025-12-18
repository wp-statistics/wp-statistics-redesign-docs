---
title: "Metrics Component"
type: "frontend-component"
category: "custom"
status: "Done"
component_path: "resources/react/src/components/custom/metrics.tsx"
storybook: false
---

# Metrics Component

A flexible, grid-based component for displaying key performance indicators (KPIs) with optional trend indicators and tooltips, built with Tailwind CSS.

## Component Information

- **Type**: Custom Component (Domain-specific)
- **Status**: Done
- **Location**: `resources/react/src/components/custom/metrics.tsx`
- **Source**: [View on GitHub](https://github.com/wp-statistics/wp-statistics/blob/master/resources/react/src/components/custom/metrics.tsx)
- **Used In**: Dashboard overview pages, analytics reports
- **Dependencies**:
  - `lucide-react` - ChevronDown, ChevronUp, Info icons
  - `@/components/ui/badge` - Trend indicator badges
  - `@/components/ui/tooltip` - Contextual help tooltips
  - `@/lib/utils` - cn() utility for class merging

## Overview

The Metrics component displays multiple metric cards in a responsive grid layout. Each metric can show a value, an optional percentage change with trend indicator (up/down), an icon, and a tooltip for additional context. Perfect for dashboards displaying analytics data like visitor counts, page views, engagement rates, etc.

### Key Features

- **Flexible Grid** - 1 to 12 column layouts
- **Trend Indicators** - Up/down arrows with percentage change
- **Tooltips** - Contextual help for each metric
- **Smart Borders** - Corner rounding only on grid edges
- **Responsive** - Adapts to different screen sizes
- **Type-Safe** - Full TypeScript support

## Import

```typescript
import { Metrics } from '@/components/custom/metrics'
import type { MetricItem, MetricsProps } from '@/components/custom/metrics'
```

## Basic Usage

### Simple Metrics Grid

```tsx
import { Metrics } from '@/components/custom/metrics'

const metrics = [
  { label: 'Visitors', value: '12,345' },
  { label: 'Page Views', value: '45,678' },
  { label: 'Avg. Duration', value: '3:24' },
]

<Metrics metrics={metrics} columns={3} />
```

### With Trend Indicators

```tsx
const metricsWithTrends = [
  {
    label: 'Visitors',
    value: '12,345',
    percentage: 15.5,
    isNegative: false,
  },
  {
    label: 'Bounce Rate',
    value: '42%',
    percentage: 8.2,
    isNegative: true, // Shows red with down arrow
  },
]

<Metrics metrics={metricsWithTrends} columns={2} />
```

### With Icons and Tooltips

```tsx
import { Users, Eye, Clock } from 'lucide-react'

const metricsWithExtras = [
  {
    label: 'Visitors',
    value: '12,345',
    percentage: 15.5,
    icon: <Users className="h-5 w-5 text-neutral-400" />,
    tooltipContent: 'Unique visitors in the selected period',
  },
  {
    label: 'Views',
    value: '45,678',
    percentage: 23.1,
    icon: <Eye className="h-5 w-5 text-neutral-400" />,
    tooltipContent: 'Total page views including repeat visits',
  },
]

<Metrics metrics={metricsWithExtras} columns={2} />
```

## API Reference

### Metrics Props

```typescript
interface MetricsProps {
  metrics: MetricItem[]
  columns?: 1 | 2 | 3 | 4 | 6 | 12
  className?: string
}
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `metrics` | `MetricItem[]` | *required* | Array of metric items to display |
| `columns` | `1 \| 2 \| 3 \| 4 \| 6 \| 12` | `3` | Number of columns in the grid |
| `className` | `string` | - | Additional CSS classes for the container |

### MetricItem Interface

```typescript
interface MetricItem {
  label: string
  value: string | number
  percentage?: string | number
  isNegative?: boolean
  icon?: React.ReactNode
  tooltipContent?: string
}
```

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | `string` | Yes | Metric label (e.g., "Visitors") |
| `value` | `string \| number` | Yes | Metric value (e.g., "12,345" or 12345) |
| `percentage` | `string \| number` | No | Percentage change for trend indicator |
| `isNegative` | `boolean` | No | If true, shows red trend indicator (default: false) |
| `icon` | `React.ReactNode` | No | Icon to display in top-right |
| `tooltipContent` | `string` | No | Tooltip text for help icon |

## Grid Layouts

### Column Options

The component supports 1, 2, 3, 4, 6, or 12 column layouts:

```tsx
// 1 column (full width)
<Metrics metrics={data} columns={1} />

// 2 columns (50% each)
<Metrics metrics={data} columns={2} />

// 3 columns (33.33% each) - DEFAULT
<Metrics metrics={data} columns={3} />

// 4 columns (25% each)
<Metrics metrics={data} columns={4} />

// 6 columns (16.66% each)
<Metrics metrics={data} columns={6} />

// 12 columns (8.33% each)
<Metrics metrics={data} columns={12} />
```

### Metric Limit

The component automatically limits display to a maximum of 12 metrics:

```tsx
const manyMetrics = [...Array(20)].map((_, i) => ({
  label: `Metric ${i + 1}`,
  value: Math.floor(Math.random() * 10000),
}))

// Only first 12 metrics will be displayed
<Metrics metrics={manyMetrics} columns={4} />
```

## Styling Details

### Border System

The component uses a smart border system with corner rounding only on edges:

- **Top-left metric** - `rounded-tl-xl`
- **Top-right metric** - `rounded-tr-xl`
- **Bottom-left metric** - `rounded-bl-xl`
- **Bottom-right metric** - `rounded-br-xl`
- **Internal metrics** - No rounded corners

### Tailwind Classes

**Container:**
```css
grid gap-0 w-full overflow-hidden rounded-xl
```

**Metric Card:**
```css
bg-white p-4 flex flex-col gap-3
border-t border-l border-neutral-200
```

**Label:**
```css
text-xs font-medium text-neutral-500 uppercase tracking-wide
```

**Value:**
```css
text-2xl font-normal text-card-foreground leading-none
```

### Trend Indicators

Positive trends (green):
```css
bg-emerald-50 text-emerald-800 hover:bg-emerald-50
```

Negative trends (red):
```css
bg-red-50 text-red-800 hover:bg-red-50
```

## Usage Examples

### Dashboard Overview

```tsx
import { Metrics } from '@/components/custom/metrics'
import { Users, Eye, Clock, TrendingUp } from 'lucide-react'

function DashboardOverview() {
  const overviewMetrics = [
    {
      label: 'Total Visitors',
      value: '24,567',
      percentage: 12.5,
      isNegative: false,
      icon: <Users className="h-5 w-5 text-neutral-400" />,
      tooltipContent: 'Unique visitors in the last 30 days',
    },
    {
      label: 'Page Views',
      value: '89,234',
      percentage: 8.3,
      isNegative: false,
      icon: <Eye className="h-5 w-5 text-neutral-400" />,
      tooltipContent: 'Total page views including repeats',
    },
    {
      label: 'Avg. Session Duration',
      value: '4:32',
      percentage: 5.7,
      isNegative: true,
      icon: <Clock className="h-5 w-5 text-neutral-400" />,
      tooltipContent: 'Average time spent per session',
    },
    {
      label: 'Engagement Rate',
      value: '67.8%',
      percentage: 3.2,
      isNegative: false,
      icon: <TrendingUp className="h-5 w-5 text-neutral-400" />,
      tooltipContent: 'Percentage of engaged sessions',
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Overview</h2>
      <Metrics metrics={overviewMetrics} columns={4} />
    </div>
  )
}
```

### Content Performance

```tsx
function ContentMetrics() {
  const contentMetrics = [
    { label: 'Top Page', value: '/blog/analytics-guide' },
    { label: 'Top Referrer', value: 'google.com' },
    { label: 'Top Country', value: 'United States' },
  ]

  return <Metrics metrics={contentMetrics} columns={3} />
}
```


## Integration with WP Statistics

### Used In Reports

The Metrics component is used extensively in WP Statistics reports:

- **Visitors Overview** - Displays key visitor metrics (8 metrics in 4x2 grid)
- **Content Analytics** - Shows top content performance
- **Geographic Reports** - Displays location-based metrics
- **Referral Traffic** - Shows referrer statistics

### With WordPress i18n

```tsx
import { __ } from '@wordpress/i18n'

const metrics = [
  {
    label: __('Visitors', 'wp-statistics'),
    value: '12,345',
    tooltipContent: __('Unique visitors in the selected period', 'wp-statistics'),
  },
]

<Metrics metrics={metrics} />
```

## TypeScript Support

The component exports TypeScript interfaces for type-safe usage:

```typescript
import type { MetricItem, MetricsProps } from '@/components/custom/metrics'
```

## Accessibility Features

### Keyboard Navigation

- Tooltip trigger buttons are keyboard accessible
- Tab order follows natural reading flow

### Screen Readers

```tsx
// Tooltip trigger includes semantic button
<button
  className="text-neutral-500 hover:text-neutral-600"
  type="button"
  aria-label="More information"
>
  <Info size={14} />
</button>
```

### ARIA Support

All tooltip content is properly announced by screen readers using Radix UI's built-in ARIA implementation.

## Performance Considerations

- Component only re-renders when the `metrics` array reference changes
- Memoize the metrics array in parent components to prevent unnecessary re-renders

## Related Components

### UI Components Used
- **[Badge](../ui/badge.md)** - Trend indicator styling
- **[Tooltip](../ui/tooltip.md)** - Contextual help


## Best Practices

### Do's ✅

- Use consistent number formatting across metrics
- Provide tooltips for metrics that need explanation
- Keep metric labels concise (1-3 words)
- Use `isNegative` appropriately (true = bad trend, shows red indicator)
- Memoize metrics array to prevent re-renders

### Don'ts ❌

- Don't exceed 12 metrics (component automatically limits to 12)
- Don't use very long metric labels (may overflow)
- Don't create metrics array inline (causes unnecessary re-renders)



---

*Last Updated: 2025-12-14*
