---
title: "Popover Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/popover.tsx"
storybook: true
---

# Popover Component

A floating content panel from shadcn/ui that displays rich content in a portal triggered by a button.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/popover.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com/?path=/story/ui-popover--default)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/popover)
- **Dependencies**: `@radix-ui/react-popover`

## Overview

The Popover component displays floating content relative to a trigger element. It supports customizable positioning, animations, and auto-dismissal. Built on Radix UI primitives, it handles focus management and accessibility automatically.

## Import

```typescript
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from '@/components/ui/popover'
```

## Basic Usage

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>This is the popover content.</p>
  </PopoverContent>
</Popover>
```

## With Form Content

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button>Edit Profile</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div className="grid gap-2">
        <Input placeholder="Width" />
        <Input placeholder="Height" />
      </div>
    </div>
  </PopoverContent>
</Popover>
```

## Positioning

```tsx
// Align to start
<PopoverContent align="start">Content</PopoverContent>

// Align to end
<PopoverContent align="end">Content</PopoverContent>

// Custom offset
<PopoverContent sideOffset={8}>Content</PopoverContent>
```

## Components

| Component | Description |
|-----------|-------------|
| `Popover` | Root container managing open/closed state |
| `PopoverTrigger` | Element that triggers the popover |
| `PopoverContent` | Container for the floating content |
| `PopoverAnchor` | Custom anchor point (optional) |

## PopoverContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Horizontal alignment |
| `sideOffset` | `number` | `4` | Distance from trigger |
| `className` | `string` | - | Additional CSS classes |

## Default Styling

- Width: 18rem (288px)
- Background: Popover background color
- Border: 1px border with rounded corners
- Shadow: Medium shadow for elevation
- Padding: 1rem (16px)

## Animations

The popover includes built-in animations:
- Fade in/out
- Zoom in/out (95% to 100%)
- Slide from edge based on position

## Related Components

- [Tooltip](tooltip.md) - For simple text hints
- [Dropdown Menu](dropdown-menu.md) - For action menus

---

*Last Updated: 2025-12-16*
