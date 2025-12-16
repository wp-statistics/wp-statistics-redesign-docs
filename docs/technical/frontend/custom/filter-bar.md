---
title: "FilterBar Component"
type: "frontend-component"
category: "custom"
status: "Done"
component_path: "resources/react/src/components/custom/filter-bar.tsx"
storybook: true
---

# FilterBar Component

A horizontal bar displaying active filters as removable chips with a funnel icon indicator.

## Component Information

- **Type**: Custom Component (Domain-specific)
- **Location**: `resources/react/src/components/custom/filter-bar.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com?path=/story/custom-filterbar--default)
- **Dependencies**: `lucide-react`, `FilterChip`

## Overview

The FilterBar displays currently active filters in a horizontal layout. Each filter is shown as a removable chip. The component auto-hides when no filters are active.

## Import

```typescript
import { FilterBar } from '@/components/custom/filter-bar'
import type { Filter, FilterOperator, FilterBarProps } from '@/components/custom/filter-bar'
```

## Basic Usage

```tsx
const [filters, setFilters] = useState<Filter[]>([
  { id: '1', label: 'Country', operator: '=', value: 'United States' },
  { id: '2', label: 'Visitors', operator: '>', value: 100 },
])

const handleRemove = (id: string) => {
  setFilters(filters.filter(f => f.id !== id))
}

<FilterBar filters={filters} onRemoveFilter={handleRemove} />
```

## API

### FilterBarProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `filters` | `Filter[]` | *required* | Array of active filters |
| `onRemoveFilter` | `(id: string) => void` | *required* | Remove filter callback |
| `className` | `string` | - | Additional CSS classes |

### Filter

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique filter identifier |
| `label` | `string` | Filter field name |
| `operator` | `FilterOperator` | Comparison operator |
| `value` | `string \| number` | Filter value |

### FilterOperator

```typescript
type FilterOperator = '<' | '>' | '=' | '!=' | '<=' | '>=' | 'Contains' | 'Starts with' | 'Ends with'
```

## Behavior

- **Auto-hide**: Returns `null` when filters array is empty
- **Funnel icon**: Visual indicator at the start of the bar
- **Flex wrap**: Chips wrap to multiple lines on narrow screens

## Related Components

- [FilterChip](filter-chip.md) - Individual filter chip

---

*Last Updated: 2025-12-16*
