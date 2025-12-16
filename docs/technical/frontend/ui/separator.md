---
title: "Separator Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/separator.tsx"
storybook: true
---

# Separator Component

A visual divider component from shadcn/ui for separating content with horizontal or vertical lines.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/separator.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com/?path=/story/ui-separator--horizontal)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/separator)
- **Dependencies**: `@radix-ui/react-separator`

## Overview

The Separator component provides a semantic divider for content. Built on Radix UI's Separator primitive, it supports both horizontal and vertical orientations.

## Import

```typescript
import { Separator } from '@/components/ui/separator'
```

## Basic Usage

```tsx
{/* Horizontal (default) */}
<Separator />

{/* Vertical */}
<Separator orientation="vertical" />
```

## Key Features

### Between Sections

```tsx
<div>
  <h2>Section 1</h2>
  <Separator className="my-4" />
  <h2>Section 2</h2>
</div>
```

### Vertical in Flex

```tsx
<div className="flex h-10 items-center space-x-4">
  <span>Left</span>
  <Separator orientation="vertical" />
  <span>Right</span>
</div>
```

## Related Components

- [Card](card.md) - Dividing card sections

---

*Last Updated: 2025-12-16*
