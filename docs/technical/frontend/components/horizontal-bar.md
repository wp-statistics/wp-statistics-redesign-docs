---
title: "HorizontalBar Component"
type: "frontend-component"
category: "custom"
status: "Done"
component_path: "resources/react/src/components/custom/horizontal-bar.tsx"
storybook: true
---

# HorizontalBar Component

A single horizontal bar item with percentage fill, value display, and trend indicator. Used as a child of HorizontalBarList.

## Component Information

- **Type**: Custom Component (Domain-specific)
- **Location**: `resources/react/src/components/custom/horizontal-bar.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com?path=/story/custom-horizontalbar--default)
- **Dependencies**: `lucide-react`, `@/components/ui/tooltip`

## Overview

The HorizontalBar displays a single data item with a percentage-based background fill, optional icon, value, and trend indicator. It supports tooltips for additional context.

## Import

```typescript
import { HorizontalBar } from '@/components/custom/horizontal-bar'
import type { HorizontalBarProps } from '@/components/custom/horizontal-bar'
```

## Basic Usage

```tsx
<HorizontalBar
  label="United States"
  value="1,234"
  percentage={45}
/>
```

## With Icon and Trend

```tsx
<HorizontalBar
  icon={<span>🇺🇸</span>}
  label="United States"
  value="1,234"
  percentage={45}
  isNegative={false}
/>
```

## With Tooltip

```tsx
<HorizontalBar
  icon={<span>🇺🇸</span>}
  label="United States"
  value="1,234"
  percentage={45}
  tooltipTitle="December 2024"
  tooltipSubtitle="45% of total visitors"
/>
```

## API

### HorizontalBarProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | *required* | Item label text |
| `value` | `string \| number` | *required* | Display value |
| `percentage` | `string \| number` | *required* | Fill percentage (0-100) |
| `icon` | `React.ReactNode` | - | Optional icon (emoji, image, etc.) |
| `isNegative` | `boolean` | `false` | Red indicator if true |
| `tooltipTitle` | `string` | - | Tooltip header text |
| `tooltipSubtitle` | `string` | - | Tooltip description |
| `isFirst` | `boolean` | `false` | Bold styling for first item |

## Visual Design

- Background fill width matches the percentage value
- Fill color is light purple (`#F2F0FF`)
- Trend indicator shows up/down chevron with color:
  - Green (`#196140`) for positive
  - Red (`#D54037`) for negative
- First item in a list can have bold value styling

## Related Components

- [HorizontalBarList](horizontal-bar-list.md) - Parent container
- [Tooltip](../ui/tooltip.md) - Hover information

---

*Last Updated: 2025-12-16*
