---
title: "Skeleton Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/skeleton.tsx"
storybook: false
---

# Skeleton Component

A loading placeholder component from shadcn/ui that displays an animated placeholder while content is loading.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Status**: Done
- **Location**: `resources/react/src/components/ui/skeleton.tsx`
- **Source**: [View on GitHub](https://github.com/wp-statistics/wp-statistics/blob/master/resources/react/src/components/ui/skeleton.tsx)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/skeleton)
- **Storybook**: Not available yet
- **Dependencies**: None (pure Tailwind CSS)

## Overview

The Skeleton component provides a visual placeholder for content that is still loading. It uses a pulsing animation to indicate that content is being fetched, improving perceived performance and user experience.

## Import

```typescript
import { Skeleton } from '@/components/ui/skeleton'
```

## Basic Usage

```tsx
<Skeleton className="h-4 w-full" />
```

## Props

### Skeleton Props

```typescript
interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}
```

## Component API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes (typically for sizing) |

All standard div props are supported.

### Return Type

```typescript
JSX.Element
```

## Default Styles

- `bg-accent` - Background color (neutral/muted)
- `animate-pulse` - Pulsing animation
- `rounded-md` - Medium border radius
- `data-slot="skeleton"` - Styling slot attribute

## Usage Examples

### Text Line Skeleton

```tsx
<div className="space-y-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-5/6" />
  <Skeleton className="h-4 w-4/6" />
</div>
```

### Avatar Skeleton

```tsx
<Skeleton className="size-10 rounded-full" />
```

### Card Skeleton

```tsx
<div className="space-y-3">
  <Skeleton className="h-12 w-12 rounded-lg" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</div>
```

### Table Row Skeleton

```tsx
<div className="flex items-center space-x-4">
  <Skeleton className="size-12 rounded-full" />
  <div className="space-y-2 flex-1">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </div>
</div>
```

## Usage in WP Statistics

### Loading Stats

```tsx
function MetricsSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="p-4 border rounded-xl space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
      ))}
    </div>
  )
}
```

### Loading Table

```tsx
function TableSkeleton() {
  return (
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  )
}
```

### Loading Chart

```tsx
<Skeleton className="h-64 w-full rounded-lg" />
```

## Accessibility Features

- Uses `aria-busy` or `aria-label` when wrapped in loading containers
- Provides visual feedback during loading states
- Smooth animation respects `prefers-reduced-motion`

## TypeScript Support

```typescript
import type { ComponentProps } from 'react'

type SkeletonProps = ComponentProps<'div'>
```

## Related Components

- Used during data fetching with **TanStack Query**
- Pairs with **[Card](card.md)** for loading states
- Complements **[Table](table.md)** loading indicators

## Best Practices

### Do's ✅

- Match skeleton dimensions to actual content
- Use multiple skeletons for multi-line content
- Maintain layout structure during loading
- Use rounded-full for circular avatars
- Keep animation smooth and subtle

### Don'ts ❌

- Don't use for very short loading times (less than 200ms)
- Don't mismatch skeleton and content layouts
- Don't override animate-pulse without good reason
- Don't use too many skeletons (simplify complex layouts)

---

*Last Updated: 2025-12-15*
