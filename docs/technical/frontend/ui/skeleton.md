---
title: "Skeleton Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/skeleton.tsx"
storybook: true
---

# Skeleton Component

A loading placeholder component from shadcn/ui that displays an animated placeholder while content is loading.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/skeleton.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com/?path=/story/ui-skeleton--default)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/skeleton)
- **Dependencies**: None (pure Tailwind CSS)

## Overview

The Skeleton component provides a visual placeholder for content that is still loading. It uses a pulsing animation to indicate that content is being fetched.

## Import

```typescript
import { Skeleton } from '@/components/ui/skeleton'
```

## Basic Usage

```tsx
<Skeleton className="h-4 w-full" />
```

## Key Features

### Text Lines

```tsx
<div className="space-y-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-5/6" />
  <Skeleton className="h-4 w-4/6" />
</div>
```

### Avatar

```tsx
<Skeleton className="size-10 rounded-full" />
```

### Card Loading State

```tsx
<div className="space-y-3">
  <Skeleton className="h-12 w-12 rounded-lg" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</div>
```

### Metrics Loading

```tsx
<div className="grid grid-cols-3 gap-4">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="p-4 border rounded-xl space-y-2">
      <Skeleton className="h-3 w-20" />
      <Skeleton className="h-8 w-24" />
    </div>
  ))}
</div>
```

## Related Components

- [Card](card.md) - Loading states in cards

---

*Last Updated: 2025-12-16*
