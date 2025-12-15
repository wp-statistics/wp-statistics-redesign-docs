---
title: "Separator Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/separator.tsx"
storybook: false
---

# Separator Component

A visual divider component from shadcn/ui built on Radix UI for separating content with horizontal or vertical lines.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Status**: Done
- **Location**: `resources/react/src/components/ui/separator.tsx`
- **Source**: [View on GitHub](https://github.com/wp-statistics/wp-statistics/blob/master/resources/react/src/components/ui/separator.tsx)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/separator)
- **Storybook**: Not available yet
- **Dependencies**:
  - `@radix-ui/react-separator` - Accessible separator primitive

## Overview

The Separator component provides a semantic divider for content. Built on Radix UI's Separator primitive, it supports both horizontal and vertical orientations with proper accessibility attributes.

## Import

```typescript
import { Separator } from '@/components/ui/separator'
```

## Basic Usage

### Horizontal Separator (Default)

```tsx
<Separator />
```

### Vertical Separator

```tsx
<Separator orientation="vertical" />
```

## Props

```typescript
interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  className?: string
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
}
```

## Component API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Separator direction |
| `decorative` | `boolean` | `true` | If true, separator is purely visual (not announced to screen readers) |
| `className` | `string` | - | Additional CSS classes |

### Return Type

```typescript
JSX.Element
```

## Default Styles

- `bg-border` - Border color from design system
- `shrink-0` - Prevents shrinking in flex layouts
- `data-[orientation=horizontal]:h-px` - 1px height when horizontal
- `data-[orientation=horizontal]:w-full` - Full width when horizontal
- `data-[orientation=vertical]:h-full` - Full height when vertical
- `data-[orientation=vertical]:w-px` - 1px width when vertical

## Usage Examples

### Between Sections

```tsx
<div>
  <h2>Section 1</h2>
  <p>Content...</p>
  <Separator className="my-4" />
  <h2>Section 2</h2>
  <p>Content...</p>
</div>
```

### In Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <Separator />
  <CardContent>
    <p>Content</p>
  </CardContent>
</Card>
```

### Vertical in Flex Layout

```tsx
<div className="flex h-10 items-center space-x-4">
  <div>Left</div>
  <Separator orientation="vertical" />
  <div>Right</div>
</div>
```

### Custom Spacing

```tsx
<Separator className="my-6" />
```

## Accessibility Features

- Uses proper `role="separator"` or `role="none"` based on decorative prop
- `decorative={true}` (default): separator is visual only, not announced
- `decorative={false}`: separator is semantic, announced to screen readers

## TypeScript Support

```typescript
import type { ComponentProps } from 'react'
import type * as SeparatorPrimitive from '@radix-ui/react-separator'

type SeparatorProps = ComponentProps<typeof SeparatorPrimitive.Root>
```

## Related Components

- **[Card](card.md)** - Dividing card sections
- Content layout dividers

## Best Practices

### Do's ✅

- Use for visual separation of content sections
- Set `decorative={false}` for semantic separators
- Add margin/padding via className for spacing
- Use vertical orientation in flex/grid layouts
- Keep separators subtle

### Don'ts ❌

- Don't overuse (creates visual clutter)
- Don't use for borders (use border utilities instead)
- Don't set explicit dimensions (use defaults)
- Don't forget height/width context for vertical separators

---

*Last Updated: 2025-12-15*
