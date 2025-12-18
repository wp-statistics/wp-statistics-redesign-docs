---
title: "FilterChip Component"
type: "frontend-component"
category: "custom"
status: "Done"
component_path: "resources/react/src/components/custom/filter-chip.tsx"
storybook: true
---

# FilterChip Component

A compact, removable chip displaying a single filter condition with label, operator, and value.

## Component Information

- **Type**: Custom Component (Domain-specific)
- **Location**: `resources/react/src/components/custom/filter-chip.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com?path=/story/custom-filterchip--default)
- **Dependencies**: `lucide-react`

## Overview

The FilterChip displays a single filter as a compact, removable tag. Shows the field label, comparison operator, and value with an X button to remove.

## Import

```typescript
import { FilterChip } from '@/components/custom/filter-chip'
import type { FilterChipProps } from '@/components/custom/filter-chip'
```

## Basic Usage

```tsx
<FilterChip
  label="Country"
  operator="="
  value="United States"
  onRemove={() => handleRemoveFilter('country')}
/>
```

## With Different Operators

```tsx
<FilterChip label="Visitors" operator=">" value={100} onRemove={handleRemove} />
<FilterChip label="Page" operator="Contains" value="blog" onRemove={handleRemove} />
<FilterChip label="Date" operator="<=" value="2024-12-01" onRemove={handleRemove} />
```

## API

### FilterChipProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | *required* | Filter field name |
| `operator` | `string` | *required* | Comparison operator |
| `value` | `string \| number` | *required* | Filter value |
| `onRemove` | `() => void` | *required* | Remove callback |
| `className` | `string` | - | Additional CSS classes |

## Visual Design

- Rounded chip with border
- Light background (`bg-chip`)
- Layout: `label | operator value ×`
- Vertical separator between label and condition
- Operator and value in medium font weight
- X button with hover state

## Accessibility

- Remove button has `aria-label` with filter context
- Button is focusable and keyboard accessible

## Related Components

- [FilterBar](filter-bar.md) - Parent container
- [Badge](../ui/badge.md) - Similar styling

---

*Last Updated: 2025-12-16*
