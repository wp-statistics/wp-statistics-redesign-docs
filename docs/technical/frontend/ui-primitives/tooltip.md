---
title: "Tooltip Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/tooltip.tsx"
storybook: true
---

# Tooltip Component

A contextual popup component from shadcn/ui that displays helpful information on hover or focus.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/tooltip.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com/?path=/story/ui-tooltip--default)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/tooltip)
- **Dependencies**: `@radix-ui/react-tooltip`

## Overview

The Tooltip component provides contextual information when users hover or focus on an element. Built on Radix UI's Tooltip primitive with automatic positioning and accessibility support.

## Import

```typescript
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
```

## Basic Usage

```tsx
<Tooltip>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent>
    <p>Helpful information</p>
  </TooltipContent>
</Tooltip>
```

## Component Structure

| Component | Purpose |
|-----------|---------|
| `Tooltip` | Root container (includes TooltipProvider) |
| `TooltipTrigger` | Element that triggers the tooltip |
| `TooltipContent` | The popup content |

## Key Features

### With Button

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="icon">
      <Info size={16} />
    </Button>
  </TooltipTrigger>
  <TooltipContent>More information</TooltipContent>
</Tooltip>
```

### Without Arrow

```tsx
<TooltipContent showArrow={false}>
  No arrow tooltip
</TooltipContent>
```

### Positioning

```tsx
<TooltipContent side="right">Right side</TooltipContent>
<TooltipContent side="bottom">Bottom</TooltipContent>
```

## Usage in WP Statistics

Used in Metrics component for contextual help:

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <button type="button">
      <Info size={14} />
    </button>
  </TooltipTrigger>
  <TooltipContent showArrow={false} side="top">
    {tooltipContent}
  </TooltipContent>
</Tooltip>
```

## Related Components

- [Button](button.md) - Icon buttons with tooltips
- [Metrics](../custom/metrics.md) - Uses tooltips for metric info

---

*Last Updated: 2025-12-16*
