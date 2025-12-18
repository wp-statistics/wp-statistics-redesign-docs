---
title: "Collapsible Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/collapsible.tsx"
storybook: true
---

# Collapsible Component

An interactive component from shadcn/ui that expands and collapses content sections.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/collapsible.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com/?path=/story/ui-collapsible--default)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/collapsible)
- **Dependencies**: `@radix-ui/react-collapsible`

## Overview

The Collapsible component provides an accessible expand/collapse mechanism for content sections. Built on Radix UI primitives, it handles keyboard navigation, ARIA attributes, and smooth animations automatically.

## Import

```typescript
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible'
```

## Basic Usage

```tsx
import { ChevronsUpDown } from 'lucide-react'

<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost" size="sm">
      <span>Toggle Section</span>
      <ChevronsUpDown className="h-4 w-4" />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <p>This content can be expanded or collapsed.</p>
  </CollapsibleContent>
</Collapsible>
```

## Controlled State

```tsx
const [isOpen, setIsOpen] = React.useState(false)

<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <CollapsibleTrigger asChild>
    <Button>
      {isOpen ? 'Hide' : 'Show'} Details
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <p>Detailed information here.</p>
  </CollapsibleContent>
</Collapsible>
```

## Default Open

```tsx
<Collapsible defaultOpen>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>
    <p>This section starts expanded.</p>
  </CollapsibleContent>
</Collapsible>
```

## Components

| Component | Description |
|-----------|-------------|
| `Collapsible` | Root container managing open/closed state |
| `CollapsibleTrigger` | Button that toggles the collapsible state |
| `CollapsibleContent` | Container for the collapsible content |

## Props

### Collapsible

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | - | Callback when state changes |
| `defaultOpen` | `boolean` | `false` | Initial open state (uncontrolled) |
| `disabled` | `boolean` | `false` | Disable the collapsible |

## With Animation

Add CSS transitions for smooth expand/collapse:

```css
[data-state='open'] {
  animation: slideDown 200ms ease-out;
}

[data-state='closed'] {
  animation: slideUp 200ms ease-out;
}
```

## Related Components

- [Sidebar](sidebar.md) - Uses collapsible for menu sections
- [Card](card.md) - Can contain collapsible sections

---

*Last Updated: 2025-12-16*
