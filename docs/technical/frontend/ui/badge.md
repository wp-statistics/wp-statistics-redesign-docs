---
title: "Badge Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/badge.tsx"
storybook: false
---

# Badge Component

A small label component from shadcn/ui for displaying status, categories, or metadata with multiple visual variants styled using class-variance-authority and Tailwind CSS.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Status**: Done
- **Location**: `resources/react/src/components/ui/badge.tsx`
- **Source**: [View on GitHub](https://github.com/wp-statistics/wp-statistics/blob/master/resources/react/src/components/ui/badge.tsx)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/badge)
- **Storybook**: Not available yet
- **Dependencies**:
  - `class-variance-authority` - Type-safe variant management

## Overview

The Badge component is a shadcn/ui component that displays small labels for status indicators, categories, counts, or metadata. It uses class-variance-authority (CVA) to provide type-safe variants with consistent styling. The component is designed to be inline and compact, complementing other UI elements without overwhelming the interface.

### shadcn/ui Philosophy

This component follows the shadcn/ui approach:
- **Copy, don't install** - Component code is copied into your project
- **Full ownership** - Customize the component as needed
- **Tailwind styling** - All styles use Tailwind utility classes
- **CVA variants** - Type-safe variant system for consistent styling

## Import

```typescript
import { Badge } from '@/components/ui/badge'
```

## Basic Usage

### Default Badge

```tsx
<Badge>New</Badge>
```

### With Custom Content

```tsx
<Badge>12 Active Users</Badge>
```

## Variants

The Badge component supports 4 visual variants:

### Default (Primary)

The default variant with primary brand colors and shadow.

```tsx
<Badge variant="default">Default</Badge>
```

**Styling**:
- Background: `bg-primary`
- Text: `text-primary-foreground`
- Border: Transparent
- Shadow: Yes
- Hover: 80% opacity

**Use case**: Primary status indicators, featured items, important labels

---

### Secondary

Subtle variant with secondary colors for less prominent badges.

```tsx
<Badge variant="secondary">Secondary</Badge>
```

**Styling**:
- Background: `bg-secondary`
- Text: `text-secondary-foreground`
- Border: Transparent
- Shadow: No
- Hover: 80% opacity

**Use case**: Secondary information, neutral status, metadata

---

### Destructive

Warning variant for errors, alerts, or negative status.

```tsx
<Badge variant="destructive">Error</Badge>
```

**Styling**:
- Background: `bg-destructive`
- Text: `text-destructive-foreground`
- Border: Transparent
- Shadow: Yes
- Hover: 80% opacity

**Use case**: Errors, warnings, critical alerts, negative status

---

### Outline

Minimal variant with border only, inherits text color.

```tsx
<Badge variant="outline">Outline</Badge>
```

**Styling**:
- Background: Transparent
- Text: `text-foreground`
- Border: Visible
- Shadow: No
- Hover: No change

**Use case**: Subtle labels, tags, minimal status indicators

## Props

### Badge Props

```typescript
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  className?: string
  children: React.ReactNode
}
```

## Component API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'secondary' \| 'destructive' \| 'outline'` | `'default'` | Visual style variant |
| `className` | `string` | - | Additional CSS classes |
| `children` | `React.ReactNode` | - | Badge content (text, numbers, icons) |

All standard HTML div attributes are supported.

### Return Type

```typescript
JSX.Element
```

## Default Styles

All variants share these base styles:
- `inline-flex` - Inline layout
- `items-center` - Vertical centering
- `rounded-md` - Medium border radius
- `border` - Border (transparent for filled variants)
- `px-2.5 py-0.5` - Horizontal and vertical padding
- `text-xs` - Extra small text size
- `font-semibold` - Semi-bold font weight
- `transition-colors` - Smooth color transitions
- `focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2` - Focus styling

## Usage Examples

### With Icon

```tsx
import { Check } from 'lucide-react'

<Badge variant="default">
  <Check className="mr-1 size-3" />
  Verified
</Badge>
```

### Status Indicator

```tsx
<div className="flex items-center gap-2">
  <span>Server Status:</span>
  <Badge variant="default">Online</Badge>
</div>
```

### Count Badge

```tsx
<div className="flex items-center gap-2">
  <span>Notifications</span>
  <Badge variant="destructive">5</Badge>
</div>
```

### Multiple Badges

```tsx
<div className="flex flex-wrap gap-2">
  <Badge variant="default">React</Badge>
  <Badge variant="secondary">TypeScript</Badge>
  <Badge variant="outline">Tailwind</Badge>
</div>
```

### Custom Styling

```tsx
<Badge className="bg-blue-500 text-white hover:bg-blue-600">
  Custom Color
</Badge>
```

## Usage in WP Statistics

### Trend Indicator in Metrics

The Badge component is used in the Metrics component to show percentage changes with trend indicators:

```tsx
import { Badge } from '@/components/ui/badge'
import { ChevronUp, ChevronDown } from 'lucide-react'

<Badge
  className={cn(
    'flex items-center py-0.5 px-1 rounded gap-1 shadow-none',
    isNegative
      ? 'bg-red-100 text-red-700 hover:bg-red-100'
      : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100'
  )}
>
  {isNegative ? (
    <ChevronDown className="size-3" />
  ) : (
    <ChevronUp className="size-3" />
  )}
  {percentage}%
</Badge>
```

### Visitor Status

```tsx
<div className="flex items-center gap-2">
  <span>{visitor.name}</span>
  <Badge variant="default">Online</Badge>
</div>
```

### Category Tags

```tsx
<div className="flex flex-wrap gap-1.5">
  {categories.map((category) => (
    <Badge key={category} variant="outline">
      {category}
    </Badge>
  ))}
</div>
```

### With WordPress i18n

```tsx
import { __ } from '@wordpress/i18n'

<Badge variant="default">
  {__('Active', 'wp-statistics')}
</Badge>
```

## Accessibility Features

- Uses semantic `div` element with proper ARIA attributes
- Focus ring for keyboard navigation
- Sufficient color contrast for all variants
- Supports all standard HTML div attributes

## TypeScript Support

The component provides full TypeScript support with exported types:

```typescript
import { Badge, badgeVariants } from '@/components/ui/badge'
import type { BadgeProps } from '@/components/ui/badge'
import type { VariantProps } from 'class-variance-authority'

// Using variant props type
type BadgeVariant = VariantProps<typeof badgeVariants>
```

### Type-Safe Usage

```typescript
interface StatusBadgeProps {
  status: 'active' | 'inactive' | 'error'
}

function StatusBadge({ status }: StatusBadgeProps) {
  const variantMap = {
    active: 'default',
    inactive: 'secondary',
    error: 'destructive',
  } as const

  return <Badge variant={variantMap[status]}>{status}</Badge>
}
```

## Related Components

### UI Components Used
- Works well with **[Button](button.md)** - Can be placed inside buttons
- Works well with **[Avatar](avatar.md)** - Status indicators on avatars
- Works well with **[Card](card.md)** - Labels in card headers

### Custom Components
- **[Metrics](../custom/metrics.md)** - Uses Badge for trend indicators

## Best Practices

### Do's ✅

- Use appropriate variants for different status types
- Keep badge text concise (1-3 words)
- Use consistent variants for similar statuses across the app
- Combine with icons for better visual communication
- Use outline variant for subtle, non-critical information
- Maintain sufficient color contrast

### Don'ts ❌

- Don't use long text in badges (use Tooltip instead)
- Don't mix too many badge variants in one area (reduces clarity)
- Don't use badges for interactive elements (use Button instead)
- Don't override focus styles (accessibility requirement)
- Don't use destructive variant for non-critical information
- Don't rely solely on color (use icons or text for accessibility)

---

*Last Updated: 2025-12-15*
