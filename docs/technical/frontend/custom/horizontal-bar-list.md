---
title: "HorizontalBarList Component"
type: "frontend-component"
category: "custom"
status: "Done"
component_path: "resources/react/src/components/custom/horizontal-bar-list.tsx"
storybook: true
---

# HorizontalBarList Component

A card-based list of horizontal bar items with title, link action, and empty state handling.

## Component Information

- **Type**: Custom Component (Domain-specific)
- **Location**: `resources/react/src/components/custom/horizontal-bar-list.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com?path=/story/custom-horizontalbarlist--default)
- **Product Docs**: [Horizontal Bar List Component](../../../components/horizontal-bar-list.md) - Configuration options and widget usage
- **Dependencies**: `lucide-react`, `@wordpress/i18n`, `HorizontalBar`, UI components

## Overview

The HorizontalBarList displays a titled card containing multiple HorizontalBar items. Commonly used for "Top X" widgets like top countries, top pages, or top referrers.

## Import

```typescript
import { HorizontalBarList } from '@/components/custom/horizontal-bar-list'
```

## Basic Usage

```tsx
const items = [
  { label: 'United States', value: '1,234', percentage: 45 },
  { label: 'Germany', value: '890', percentage: 32 },
  { label: 'France', value: '456', percentage: 16 },
]

<HorizontalBarList
  title="Top Countries"
  items={items}
  link={{ action: () => navigate('/countries') }}
/>
```

## With Icons and Tooltips

```tsx
const items = [
  {
    icon: <span>🇺🇸</span>,
    label: 'United States',
    value: '1,234',
    percentage: 45,
    isNegative: false,
    tooltipTitle: 'December 2024',
    tooltipSubtitle: '45% of total',
  },
  {
    icon: <span>🇩🇪</span>,
    label: 'Germany',
    value: '890',
    percentage: 32,
    isNegative: true,
  },
]

<HorizontalBarList
  title="Top Countries"
  items={items}
  link={{
    title: 'View All Countries',
    action: () => navigate('/countries'),
  }}
/>
```

## API

### HorizontalBarListProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | *required* | Card title |
| `items` | `HorizontalBarItem[]` | *required* | Array of bar items |
| `link` | `{ title?: string; action(): void }` | *required* | Footer link configuration |

### HorizontalBarItem

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | `string` | Yes | Item label |
| `value` | `string \| number` | Yes | Display value |
| `percentage` | `string \| number` | Yes | Fill percentage |
| `icon` | `React.ReactNode` | No | Optional icon |
| `isNegative` | `boolean` | No | Red trend indicator |
| `tooltipTitle` | `string` | No | Tooltip header |
| `tooltipSubtitle` | `string` | No | Tooltip description |

## Empty State

When `items` is empty, displays "No data available for the selected period" centered in the card.

## Layout

- Card with header, content, and footer sections
- Items stacked vertically with gap
- First item receives bold value styling
- Footer link aligned to the right with chevron icon

## Related Components

- [HorizontalBar](horizontal-bar.md) - Individual bar item
- [Card](../ui/card.md) - Container

---

*Last Updated: 2025-12-16*
