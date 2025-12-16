---
title: "Badge Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/badge.tsx"
storybook: true
---

# Badge Component

A small label component from shadcn/ui for displaying status, categories, or metadata.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/badge.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com/?path=/story/ui-badge--default)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/badge)
- **Dependencies**: `class-variance-authority`

## Overview

The Badge component displays small labels for status indicators, categories, counts, or metadata. It uses class-variance-authority (CVA) to provide type-safe variants.

## Import

```typescript
import { Badge } from '@/components/ui/badge'
```

## Basic Usage

```tsx
<Badge>New</Badge>
<Badge variant="secondary">Draft</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Tag</Badge>
```

## Variants

| Variant | Use Case |
|---------|----------|
| `default` | Primary status, featured items |
| `secondary` | Secondary info, neutral status |
| `destructive` | Errors, warnings, critical alerts |
| `outline` | Subtle labels, tags |

## Key Features

### With Icon

```tsx
import { Check } from 'lucide-react'

<Badge>
  <Check className="mr-1 size-3" />
  Verified
</Badge>
```

### Trend Indicator (WP Statistics)

```tsx
<Badge className="bg-emerald-100 text-emerald-700">
  <ChevronUp className="size-3" />
  15%
</Badge>
```

## Related Components

- [Metrics](../custom/metrics.md) - Uses Badge for trend indicators

---

*Last Updated: 2025-12-16*
