---
title: "Button Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/button.tsx"
storybook: true
---

# Button Component

A versatile, accessible button component from shadcn/ui with multiple variants, sizes, and states.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/button.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com/?path=/story/ui-button--default) - See all variants, sizes, and interactive examples
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/button)
- **Dependencies**: `@radix-ui/react-slot`, `class-variance-authority`

## Overview

The Button component is a shadcn/ui component styled with Tailwind CSS. It supports multiple visual variants, sizes, and states. Built with accessibility in mind using Radix UI primitives, it supports polymorphic rendering via the `asChild` prop.

## Import

```typescript
import { Button } from '@/components/ui/button'
```

## Basic Usage

```tsx
<Button>Click me</Button>

<Button variant="outline" onClick={handleClick}>
  Secondary Action
</Button>

<Button disabled>Disabled</Button>
```

## Variants

| Variant | Use Case |
|---------|----------|
| `default` | Primary actions, form submissions |
| `destructive` | Delete operations, dangerous actions |
| `outline` | Secondary actions, cancel buttons |
| `secondary` | Alternative actions |
| `ghost` | Menu items, toolbar actions |
| `link` | Navigation, inline actions |

## Sizes

| Size | Use Case |
|------|----------|
| `default` | Standard buttons |
| `sm` | Compact interfaces, tables |
| `lg` | Hero sections, prominent CTAs |
| `icon` | Icon-only buttons (square) |
| `icon-sm` | Small icon buttons |
| `icon-lg` | Large icon buttons |

## Key Features

### Polymorphic Rendering

Use `asChild` to render as a different element:

```tsx
<Button asChild>
  <Link to="/dashboard">Go to Dashboard</Link>
</Button>
```

### With Icons

```tsx
import { ChevronRight } from 'lucide-react'

<Button>
  Next <ChevronRight />
</Button>
```

### Loading State

```tsx
<Button disabled={isLoading}>
  {isLoading && <Loader2 className="animate-spin" />}
  {isLoading ? 'Saving...' : 'Save'}
</Button>
```

## Storybook

For detailed props documentation, all variants, sizes, and interactive examples, see the **[Button Storybook](https://ui.wp-statistics.com/?path=/story/ui-button--default)**.

Available stories:
- Default, Destructive, Outline, Secondary, Ghost, Link variants
- Small, Large, Icon sizes
- With icons examples
- Loading states

## Related Components

- [Tooltip](tooltip.md) - For icon button context
- [Dropdown Menu](dropdown-menu.md) - Often triggered by buttons

---

*Last Updated: 2025-12-16*
