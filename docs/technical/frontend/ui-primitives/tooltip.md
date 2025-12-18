---
title: "Tooltip Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/tooltip.tsx"
storybook: false
---

# Tooltip Component

A contextual popup component from shadcn/ui that displays helpful information on hover or focus, built on Radix UI's Tooltip primitive with customizable positioning and styling.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Status**: Done
- **Location**: `resources/react/src/components/ui/tooltip.tsx`
- **Source**: [View on GitHub](https://github.com/wp-statistics/wp-statistics/blob/master/resources/react/src/components/ui/tooltip.tsx)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/tooltip)
- **Storybook**: Not available yet
- **Dependencies**:
  - `@radix-ui/react-tooltip` - Accessible tooltip primitive

## Overview

The Tooltip component is a shadcn/ui component that provides contextual information when users hover or focus on an element. Built on Radix UI's Tooltip primitive, it offers automatic positioning, portal rendering, and full accessibility support. The component includes an optional arrow and supports custom delay duration.

### shadcn/ui Philosophy

This component follows the shadcn/ui approach:
- **Copy, don't install** - Component code is copied into your project
- **Full ownership** - Customize the component as needed
- **Tailwind styling** - All styles use Tailwind utility classes
- **Radix primitives** - Built on accessible Radix UI components

## Import

```typescript
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'
```

## Basic Usage

### Simple Tooltip

```tsx
<Tooltip>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent>
    <p>Helpful information</p>
  </TooltipContent>
</Tooltip>
```

### With Button Trigger

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <button>Click me</button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Button description</p>
  </TooltipContent>
</Tooltip>
```

### Without Arrow

```tsx
<Tooltip>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent showArrow={false}>
    <p>No arrow</p>
  </TooltipContent>
</Tooltip>
```

## Component Composition

The Tooltip component uses a composition pattern with four sub-components:

### 1. Tooltip (Root)

The root container that manages tooltip state and wraps TooltipProvider automatically.

```tsx
<Tooltip>
  {/* TooltipTrigger and TooltipContent */}
</Tooltip>
```

**Features**:
- Automatically includes TooltipProvider with `delayDuration={0}`
- Manages open/closed state
- Handles hover and focus interactions

### 2. TooltipProvider

Provider component that sets default behavior for all tooltips. Automatically included in the Tooltip component.

```tsx
<TooltipProvider delayDuration={200}>
  {/* Multiple tooltips can share this provider */}
</TooltipProvider>
```

**Default Configuration**:
- `delayDuration={0}` - No delay before showing tooltip

### 3. TooltipTrigger

The element that triggers the tooltip on hover or focus.

```tsx
<TooltipTrigger asChild>
  <button>Trigger element</button>
</TooltipTrigger>
```

**Props**:
- `asChild` - Use when wrapping a custom component to merge props

### 4. TooltipContent

The popup content that appears above/below/beside the trigger.

```tsx
<TooltipContent
  side="top"
  sideOffset={0}
  showArrow={true}
>
  <p>Content here</p>
</TooltipContent>
```

**Default Styles**:
- `bg-foreground text-background` - Inverted colors
- `rounded-md` - Rounded corners
- `px-3 py-1.5` - Padding
- `text-xs` - Small text
- `z-50` - High z-index for layering
- Animated entrance/exit with fade and zoom effects

## Props

### Tooltip Props

```typescript
interface TooltipProps extends React.ComponentProps<typeof TooltipPrimitive.Root> {
  // Inherits all Radix UI Tooltip.Root props
}
```

### TooltipProvider Props

```typescript
interface TooltipProviderProps extends React.ComponentProps<typeof TooltipPrimitive.Provider> {
  delayDuration?: number  // Delay before showing (default: 0)
}
```

### TooltipTrigger Props

```typescript
interface TooltipTriggerProps extends React.ComponentProps<typeof TooltipPrimitive.Trigger> {
  asChild?: boolean  // Merge props with child element
}
```

### TooltipContent Props

```typescript
interface TooltipContentProps extends React.ComponentProps<typeof TooltipPrimitive.Content> {
  className?: string
  sideOffset?: number    // Distance from trigger (default: 0)
  showArrow?: boolean    // Show arrow pointer (default: true)
  side?: 'top' | 'right' | 'bottom' | 'left'  // Preferred side
  align?: 'start' | 'center' | 'end'           // Alignment
}
```

## Component API

### TooltipContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sideOffset` | `number` | `0` | Distance in pixels from trigger |
| `showArrow` | `boolean` | `true` | Show arrow pointer |
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | Preferred placement side |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alignment relative to trigger |
| `className` | `string` | - | Additional CSS classes |
| `children` | `React.ReactNode` | - | Tooltip content |

### Return Type

```typescript
JSX.Element
```

## Positioning

### Side Placement

```tsx
{/* Top (default) */}
<TooltipContent side="top">Top tooltip</TooltipContent>

{/* Right */}
<TooltipContent side="right">Right tooltip</TooltipContent>

{/* Bottom */}
<TooltipContent side="bottom">Bottom tooltip</TooltipContent>

{/* Left */}
<TooltipContent side="left">Left tooltip</TooltipContent>
```

### Alignment

```tsx
{/* Center aligned (default) */}
<TooltipContent align="center">Centered</TooltipContent>

{/* Start aligned */}
<TooltipContent align="start">Start aligned</TooltipContent>

{/* End aligned */}
<TooltipContent align="end">End aligned</TooltipContent>
```

### Offset

```tsx
{/* More distance from trigger */}
<TooltipContent sideOffset={10}>
  Further away
</TooltipContent>
```

## Usage Examples

### With Icon Button

```tsx
import { Info } from 'lucide-react'

<Tooltip>
  <TooltipTrigger asChild>
    <button type="button" className="text-neutral-500 hover:text-neutral-600">
      <Info size={16} />
    </button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Additional information</p>
  </TooltipContent>
</Tooltip>
```

### Multi-line Content

```tsx
<Tooltip>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent className="max-w-xs">
    <p className="font-semibold">Title</p>
    <p className="text-xs text-neutral-400">
      Longer description that wraps to multiple lines
    </p>
  </TooltipContent>
</Tooltip>
```

### With Custom Styling

```tsx
<Tooltip>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent className="bg-blue-600 text-white">
    <p>Custom colors</p>
  </TooltipContent>
</Tooltip>
```

### Disabled Element

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <span>
      <button disabled className="opacity-50">
        Disabled
      </button>
    </span>
  </TooltipTrigger>
  <TooltipContent>
    <p>This action is currently unavailable</p>
  </TooltipContent>
</Tooltip>
```

## Usage in WP Statistics

### Metric Information Tooltip

The Tooltip component is used in the Metrics component to provide additional context about metrics:

```tsx
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Info } from 'lucide-react'

{tooltipContent && (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        className="text-neutral-500 hover:text-neutral-600 transition-colors"
        type="button"
      >
        <Info size={14} />
      </button>
    </TooltipTrigger>
    <TooltipContent showArrow={false} side="top">
      {tooltipContent}
    </TooltipContent>
  </Tooltip>
)}
```

### Data Point Explanation

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <button className="underline decoration-dotted">
      {value}
    </button>
  </TooltipTrigger>
  <TooltipContent>
    <p className="font-medium">Unique Visitors</p>
    <p className="text-xs text-neutral-300">
      Total number of unique visitors in the selected period
    </p>
  </TooltipContent>
</Tooltip>
```

### Table Cell Information

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <span className="cursor-help">{truncatedText}</span>
  </TooltipTrigger>
  <TooltipContent side="bottom">
    <p className="max-w-xs">{fullText}</p>
  </TooltipContent>
</Tooltip>
```

### With WordPress i18n

```tsx
import { __ } from '@wordpress/i18n'

<Tooltip>
  <TooltipTrigger asChild>
    <button>
      <Info size={16} />
    </button>
  </TooltipTrigger>
  <TooltipContent>
    {__('Click to see more details', 'wp-statistics')}
  </TooltipContent>
</Tooltip>
```

## Accessibility Features

The Tooltip component is built on Radix UI's Tooltip primitive, providing comprehensive accessibility:

### Keyboard Navigation
- Automatically shows on focus
- Dismisses on `Escape` key
- Maintains focus on trigger element

### Screen Readers
- Proper ARIA attributes (`aria-describedby`)
- Content announced when tooltip appears
- Semantic HTML structure

### Mouse and Touch
- Shows on hover with configurable delay
- Auto-hides when mouse leaves
- Touch-friendly on mobile devices

### Best Practices
- Keep content concise and scannable
- Don't put critical actions in tooltips
- Use for supplementary information only
- Ensure trigger element is keyboard accessible

## Portal Rendering

TooltipContent automatically renders in a portal at the document body root level, ensuring:
- Tooltips appear above all other content (z-index: 50)
- No clipping by parent overflow constraints
- Proper stacking context

## Animation

The component includes smooth animations:

### Enter Animation
- Fade in (`fade-in-0`)
- Zoom in (`zoom-in-95`)
- Slide from appropriate direction based on `side`

### Exit Animation
- Fade out (`fade-out-0`)
- Zoom out (`zoom-out-95`)
- Respects `prefers-reduced-motion`

## TypeScript Support

Full TypeScript support with exported types:

```typescript
import type { TooltipProps, TooltipContentProps } from '@radix-ui/react-tooltip'

interface CustomTooltipProps {
  content: string
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
}

function CustomTooltip({ content, children, side = 'top' }: CustomTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side}>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  )
}
```

## Related Components

### UI Components Used
- Works well with **[Button](button.md)** - Info buttons with tooltips
- Works well with **[Badge](badge.md)** - Explain badge meanings
- Works well with **[Avatar](avatar.md)** - User information on hover

### Custom Components
- **[Metrics](../custom/metrics.md)** - Uses Tooltip for metric explanations

## Best Practices

### Do's ✅

- Keep tooltip content concise (1-2 sentences)
- Use for supplementary, non-critical information
- Provide meaningful context, not redundant text
- Use `asChild` prop when wrapping custom components
- Position tooltips to avoid covering important content
- Use consistent positioning across similar elements
- Test on mobile devices (touch interactions differ)

### Don'ts ❌

- Don't put essential actions or information in tooltips
- Don't use very long text (consider Popover instead)
- Don't nest interactive elements inside TooltipContent
- Don't override z-index (portal handles layering)
- Don't use tooltips on disabled elements directly (wrap in span)
- Don't use for information that should be visible by default
- Don't forget keyboard accessibility on trigger elements

---

*Last Updated: 2025-12-15*
