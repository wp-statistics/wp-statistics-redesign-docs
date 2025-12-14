---
title: "Button Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/button.tsx"
storybook: true
---

# Button Component

A versatile, accessible button component from shadcn/ui with multiple variants, sizes, and states styled with Tailwind CSS.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Status**: Done
- **Location**: `resources/react/src/components/ui/button.tsx`
- **Source**: [View on GitHub](https://github.com/wp-statistics/wp-statistics/blob/master/resources/react/src/components/ui/button.tsx)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/button)
- **Storybook**: Available at `UI/Button`
- **Dependencies**:
  - `@radix-ui/react-slot` - Polymorphic component support (from shadcn/ui)
  - `class-variance-authority` - Type-safe variant management
  - `tailwind-merge` & `clsx` - Conditional Tailwind class handling

## Overview

The Button component is a shadcn/ui component styled with Tailwind CSS utility classes. It supports multiple visual variants, sizes, and states. Built with accessibility in mind using Radix UI primitives, it supports advanced features like polymorphic rendering via the `asChild` prop.

### shadcn/ui Philosophy

This component follows the shadcn/ui approach:
- **Copy, don't install** - Component code is copied into your project
- **Full ownership** - Customize the component as needed
- **Tailwind styling** - All styles use Tailwind utility classes
- **Radix primitives** - Built on accessible Radix UI components

## Import

```typescript
import { Button } from '@/components/ui/button'
```

## Basic Usage

### Default Button

```tsx
<Button>Click me</Button>
```

### With Click Handler

```tsx
<Button onClick={() => console.log('Clicked!')}>
  Click me
</Button>
```

### Disabled State

```tsx
<Button disabled>Disabled Button</Button>
```

## Variants

The Button component supports 6 visual variants for different use cases:

### Default (Primary)

The primary action button with brand colors.

```tsx
<Button variant="default">Primary Action</Button>
```

**Use case**: Primary actions, form submissions, main CTAs

---

### Destructive

Indicates dangerous or irreversible actions with warning colors.

```tsx
<Button variant="destructive">Delete Account</Button>
```

**Use case**: Delete operations, destructive actions, permanent changes

---

### Outline

Subtle button with border and background on hover.

```tsx
<Button variant="outline">Secondary Action</Button>
```

**Use case**: Secondary actions, cancel buttons, less prominent actions

---

### Secondary

Alternative style for secondary actions.

```tsx
<Button variant="secondary">View Details</Button>
```

**Use case**: Alternative actions, complementary buttons

---

### Ghost

Minimal button with no background until hover.

```tsx
<Button variant="ghost">More Options</Button>
```

**Use case**: Menu items, toolbar actions, icon buttons in lists

---

### Link

Styled as a text link with underline on hover.

```tsx
<Button variant="link">Learn More</Button>
```

**Use case**: Navigation, external links, inline actions

## Sizes

The Button component provides 6 size options:

### Default

Standard size for most use cases (h-9, px-4).

```tsx
<Button size="default">Standard Button</Button>
```

---

### Small

Compact size for tight spaces (h-8, px-3).

```tsx
<Button size="sm">Small Button</Button>
```

**Use case**: Table actions, compact interfaces, inline buttons

---

### Large

Larger size for emphasis (h-10, px-6).

```tsx
<Button size="lg">Large Button</Button>
```

**Use case**: Hero sections, prominent CTAs, landing pages

---

### Icon

Square button for single icons (9x9).

```tsx
<Button size="icon">
  <IconComponent />
</Button>
```

**Use case**: Icon-only buttons, toolbar actions

---

### Icon Small

Compact square button for icons (8x8).

```tsx
<Button size="icon-sm">
  <IconComponent />
</Button>
```

**Use case**: Dense interfaces, compact toolbars

---

### Icon Large

Large square button for icons (10x10).

```tsx
<Button size="icon-lg">
  <IconComponent />
</Button>
```

**Use case**: Prominent icon actions, hero sections

## Advanced Features

### With Icons

Buttons automatically handle icon sizing and spacing:

```tsx
import { ChevronRight } from 'lucide-react'

<Button>
  <ChevronRight />
  Next Page
</Button>
```

**Icon behavior**:
- Automatically sized to 16px (4 Tailwind units)
- Proper gap spacing (gap-2)
- Maintains aspect ratio
- Works with any SVG icon library

### Polymorphic Rendering (asChild)

The `asChild` prop allows the Button to render as a different element while maintaining button styles:

```tsx
import { Link } from '@tanstack/react-router'

<Button asChild>
  <Link to="/dashboard">Go to Dashboard</Link>
</Button>
```

**Common use cases**:
- Rendering as router links
- Wrapping anchor tags
- Rendering as custom components

**How it works**: Uses Radix UI's `Slot` component to merge props and styles with the child element.

### Custom Styling

Extend button styles using the `className` prop:

```tsx
<Button className="w-full">
  Full Width Button
</Button>
```

The `cn()` utility merges custom classes with variant styles using `tailwind-merge` to avoid conflicts.

## Accessibility Features

The Button component includes comprehensive accessibility support:

### Keyboard Navigation
- Full keyboard support (Enter and Space keys)
- Visible focus indicators with ring styles
- Focus-visible states (only shows on keyboard navigation)

### States
- **Disabled**: `disabled:pointer-events-none disabled:opacity-50`
- **Focus**: Custom focus ring with brand colors
- **Invalid**: Red border and ring when `aria-invalid` is true

### ARIA Support
```tsx
<Button aria-label="Close dialog" size="icon">
  <X />
</Button>
```

All standard button ARIA attributes are supported.

## Component API

### Props

The Button component accepts all standard HTML button props plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | Visual style variant |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon' \| 'icon-sm' \| 'icon-lg'` | `'default'` | Size variant |
| `asChild` | `boolean` | `false` | Render as child element (polymorphic) |
| `className` | `string` | - | Additional CSS classes |
| `disabled` | `boolean` | `false` | Disabled state |
| `onClick` | `() => void` | - | Click handler |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type attribute |

Plus all standard React button props: `id`, `aria-*`, `data-*`, etc.

### Return Type

```typescript
JSX.Element
```

## Styling Details

### Base Styles

All buttons include these base styles:
- `inline-flex` - Flexbox layout
- `items-center justify-center` - Centered content
- `gap-2` - Spacing between children
- `rounded-md` - Rounded corners
- `text-sm font-medium` - Typography
- `transition-all` - Smooth transitions
- `outline-none` - Custom focus handling
- `cursor-pointer` - Pointer cursor

### Focus Management

```css
focus-visible:border-ring
focus-visible:ring-ring/50
focus-visible:ring-[3px]
```

Focus rings only appear on keyboard navigation, not mouse clicks.

### Dark Mode

All variants include dark mode styles:

```tsx
<Button variant="outline">
  {/* Light: bg-background, Dark: bg-input/30 */}
  Button Text
</Button>
```

Dark mode is automatically applied based on the theme context.

## Usage Examples

### Common Patterns

#### Form Actions

```tsx
<div className="flex gap-2">
  <Button type="submit">Save Changes</Button>
  <Button variant="outline" type="button" onClick={handleCancel}>
    Cancel
  </Button>
</div>
```

#### Delete Confirmation

```tsx
<div className="flex gap-2">
  <Button variant="destructive" onClick={handleDelete}>
    Delete
  </Button>
  <Button variant="ghost" onClick={handleCancel}>
    Cancel
  </Button>
</div>
```

#### Navigation with Icon

```tsx
import { ArrowRight } from 'lucide-react'

<Button asChild>
  <Link to="/next-page">
    Continue
    <ArrowRight />
  </Link>
</Button>
```

#### Icon-Only Button with Tooltip

```tsx
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Settings } from 'lucide-react'

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="icon" aria-label="Settings">
      <Settings />
    </Button>
  </TooltipTrigger>
  <TooltipContent>Settings</TooltipContent>
</Tooltip>
```

#### Loading State

```tsx
import { Loader2 } from 'lucide-react'

<Button disabled={isLoading}>
  {isLoading && <Loader2 className="animate-spin" />}
  {isLoading ? 'Saving...' : 'Save'}
</Button>
```

## Implementation in WP Statistics

The Button component is used extensively throughout the WP Statistics interface:

### Filter Actions
```tsx
// From filter-button.tsx
<Button
  variant="outline"
  className={cn({ 'border-indigo-200 bg-indigo-50 text-primary': !!filterCount })}
>
  <Filter className="h-4 w-4" />
  {__('Filters', 'wp-statistics')}
  {filterCount > 0 && (
    <span className="rounded-full bg-primary px-1.5 py-0.5 text-xs">
      {filterCount}
    </span>
  )}
  <ChevronRight className="h-4 w-4" />
</Button>
```

### Data Table Actions
Used in:
- Column toggles
- Sort buttons
- Pagination controls
- Row actions

### Sidebar Navigation
Used in:
- Sidebar toggle
- Menu items
- Collapsible triggers

## Storybook Stories

The component includes comprehensive Storybook stories:

- **Default** - Primary button
- **Destructive** - Delete actions
- **Outline** - Secondary actions
- **Secondary** - Alternative style
- **Ghost** - Minimal style
- **Link** - Text link style
- **Small** - Compact size
- **Large** - Prominent size
- **WithIcon** - Icon + text example

View in Storybook: `UI/Button`

## TypeScript Support

Full TypeScript support with exported types:

```typescript
import { Button, buttonVariants } from '@/components/ui/button'
import type { VariantProps } from 'class-variance-authority'

// Extract variant prop types
type ButtonProps = React.ComponentProps<typeof Button>
type ButtonVariants = VariantProps<typeof buttonVariants>
```

Use `buttonVariants` function directly for custom components:

```typescript
import { buttonVariants } from '@/components/ui/button'

const linkStyles = buttonVariants({ variant: 'link', size: 'sm' })
```

## Related Components

- **Dropdown Menu** - Often triggered by ghost buttons
- **Tooltip** - Provides context for icon buttons
- **Popover** - Triggered by outline buttons
- **Sheet** - Sidebar often uses ghost buttons
- **Dialog** - Action buttons in confirmation dialogs

## Best Practices

### Do's ✅

- Use `variant="default"` for primary actions
- Use `variant="destructive"` for delete/dangerous actions
- Provide `aria-label` for icon-only buttons
- Use `asChild` for navigation buttons with routing
- Use Tailwind utilities for custom styling via `className`
- Leverage `cn()` utility to merge classes properly
- Use icon sizes consistently with button sizes
- Disable buttons during async operations
- Use appropriate sizes for context (sm in tables, lg for CTAs)

### Don'ts ❌

- Don't use multiple primary buttons in the same context
- Don't use destructive variant for non-destructive actions
- Don't forget to add loading states for async actions
- Don't use link variant for important actions
- Don't override base accessibility features
- Don't use buttons for pure navigation (use links)
- Don't apply conflicting Tailwind classes (use `cn()` instead)

## Performance Considerations

### Tailwind CSS Optimization
- **JIT Compilation** - Only used utilities are included in production
- **No Runtime CSS** - All styles are static Tailwind classes
- **Tree-shaking** - Unused variants are removed by bundler
- **Minimal Bundle Size** - Component code is ~2KB

### React Optimization
- **Pure Component** - No internal state, minimal re-renders
- **Icon Optimization** - SVG icons are optimized by bundler
- **Code Splitting** - Can be lazy-loaded with React.lazy()

## Browser Support

Supports all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Migration Guide

If migrating from WordPress core buttons:

```diff
- <button className="button button-primary">Save</button>
+ <Button>Save</Button>

- <button className="button button-secondary">Cancel</button>
+ <Button variant="outline">Cancel</Button>

- <a className="button" href="/link">Go</a>
+ <Button asChild><Link to="/link">Go</Link></Button>
```

---

*Last Updated: 2025-12-14*
