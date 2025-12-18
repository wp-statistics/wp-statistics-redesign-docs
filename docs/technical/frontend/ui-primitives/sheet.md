---
title: "Sheet Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/sheet.tsx"
storybook: true
---

# Sheet Component

A slide-out panel component from shadcn/ui that extends from any edge of the screen.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/sheet.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com/?path=/story/ui-sheet--default)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/sheet)
- **Dependencies**: `@radix-ui/react-dialog`, `lucide-react`

## Overview

The Sheet component provides a slide-out panel that overlays the main content. It can slide from any edge (top, right, bottom, left) and includes built-in overlay, close button, and accessibility features. Commonly used for mobile navigation, filters, and detail panels.

## Import

```typescript
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet'
```

## Basic Usage

```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4">
      {/* Sheet content */}
    </div>
    <SheetFooter>
      <Button type="submit">Save changes</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

## Side Variants

```tsx
// Right side (default)
<SheetContent side="right">Content</SheetContent>

// Left side
<SheetContent side="left">Content</SheetContent>

// Top
<SheetContent side="top">Content</SheetContent>

// Bottom
<SheetContent side="bottom">Content</SheetContent>
```

## Controlled State

```tsx
const [open, setOpen] = React.useState(false)

<Sheet open={open} onOpenChange={setOpen}>
  <SheetTrigger asChild>
    <Button>Open</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Controlled Sheet</SheetTitle>
    </SheetHeader>
    <Button onClick={() => setOpen(false)}>Close</Button>
  </SheetContent>
</Sheet>
```

## Components

| Component | Description |
|-----------|-------------|
| `Sheet` | Root container managing open/closed state |
| `SheetTrigger` | Element that opens the sheet |
| `SheetContent` | Slide-out panel container |
| `SheetHeader` | Header section with title/description |
| `SheetFooter` | Footer section for actions |
| `SheetTitle` | Accessible title |
| `SheetDescription` | Accessible description |
| `SheetClose` | Close button element |

## SheetContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` | Edge to slide from |
| `className` | `string` | - | Additional CSS classes |

## Sizing by Side

| Side | Default Size |
|------|--------------|
| `left` / `right` | Width: 75% (max 24rem on desktop) |
| `top` / `bottom` | Height: auto |

## Features

- **Overlay**: Semi-transparent backdrop (50% opacity black)
- **Close Button**: Top-right X icon with hover effects
- **Animations**: Slide in/out with fade transitions
- **Focus Trap**: Focus stays within the sheet when open
- **Escape to Close**: Press Escape to dismiss

## Related Components

- [Sidebar](sidebar.md) - Uses Sheet for mobile navigation
- [Dialog](../custom/dialog.md) - For centered modal dialogs

---

*Last Updated: 2025-12-16*
