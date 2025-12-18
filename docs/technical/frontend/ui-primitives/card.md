---
title: "Card Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/card.tsx"
storybook: true
---

# Card Component

A flexible container component from shadcn/ui for grouping related content with consistent styling, featuring composable sub-components for headers, content, and footers.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Status**: Done
- **Location**: `resources/react/src/components/ui/card.tsx`
- **Source**: [View on GitHub](https://github.com/wp-statistics/wp-statistics/blob/master/resources/react/src/components/ui/card.tsx)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/card)
- **Storybook**: Available at `UI/Card`
- **Dependencies**: None (pure Tailwind CSS)

## Overview

The Card component is a shadcn/ui component that provides a consistent container for grouping related content. It uses a composition pattern with seven sub-components that work together to create flexible, well-structured cards. All styling is done with Tailwind CSS utility classes and follows the shadcn/ui design system.

### shadcn/ui Philosophy

This component follows the shadcn/ui approach:
- **Copy, don't install** - Component code is copied into your project
- **Full ownership** - Customize the component as needed
- **Tailwind styling** - All styles use Tailwind utility classes
- **Composition pattern** - Multiple sub-components for flexibility

## Import

```typescript
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
```

## Basic Usage

### Simple Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>
```

### Full Card Structure

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description text</CardDescription>
    <CardAction>
      <button>Action</button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>Main content</p>
  </CardContent>
  <CardFooter>
    <button>Footer Action</button>
  </CardFooter>
</Card>
```

## Component Composition

The Card component uses a composition pattern with seven sub-components:

### 1. Card (Root)

The root container that wraps all card content.

```tsx
<Card className="max-w-md">
  {/* Card sub-components */}
</Card>
```

**Default Styles**:
- `bg-card text-card-foreground` - Card background and text colors
- `flex flex-col gap-6` - Vertical layout with 24px gaps
- `rounded-xl` - Extra large border radius
- `border` - Border
- `py-6` - Vertical padding (24px)
- `shadow-sm` - Small shadow
- `data-slot="card"` - Styling slot attribute

### 2. CardHeader

Container for the card's title, description, and action button.

```tsx
<CardHeader>
  <CardTitle>Title</CardTitle>
  <CardDescription>Description</CardDescription>
</CardHeader>
```

**Default Styles**:
- `@container/card-header` - Container query context
- `grid auto-rows-min grid-rows-[auto_auto]` - Grid layout
- `items-start gap-2` - Top alignment with 8px gap
- `px-6` - Horizontal padding (24px)
- `has-data-[slot=card-action]:grid-cols-[1fr_auto]` - Two columns when action present
- `[.border-b]:pb-6` - Bottom padding when border added
- `data-slot="card-header"` - Styling slot attribute

### 3. CardTitle

The card's main heading.

```tsx
<CardTitle>Your Title Here</CardTitle>
```

**Default Styles**:
- `leading-none` - No line height
- `font-semibold` - Semi-bold font weight
- `data-slot="card-title"` - Styling slot attribute

### 4. CardDescription

Secondary descriptive text below the title.

```tsx
<CardDescription>Supporting description text</CardDescription>
```

**Default Styles**:
- `text-muted-foreground` - Muted text color
- `text-sm` - Small text size
- `data-slot="card-description"` - Styling slot attribute

### 5. CardAction

Container for action buttons in the header (top-right position).

```tsx
<CardAction>
  <button>View All</button>
</CardAction>
```

**Default Styles**:
- `col-start-2 row-span-2 row-start-1` - Grid positioning
- `self-start justify-self-end` - Top-right alignment
- `data-slot="card-action"` - Styling slot attribute

**Behavior**:
- Automatically positions in top-right of header
- Spans both title and description rows

### 6. CardContent

The main content area of the card.

```tsx
<CardContent>
  <p>Your content here</p>
</CardContent>
```

**Default Styles**:
- `px-6` - Horizontal padding (24px)
- `data-slot="card-content"` - Styling slot attribute

### 7. CardFooter

Footer area for actions or additional information.

```tsx
<CardFooter>
  <button>Save</button>
  <button>Cancel</button>
</CardFooter>
```

**Default Styles**:
- `flex items-center` - Horizontal layout, centered
- `px-6` - Horizontal padding (24px)
- `[.border-t]:pt-6` - Top padding when border added
- `data-slot="card-footer"` - Styling slot attribute

## Component API

### Card Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `React.ReactNode` | - | Card content |

All standard div props are supported for all sub-components.

### Return Type

```typescript
JSX.Element
```

## Usage Examples

### Card with Header and Content

```tsx
<Card>
  <CardHeader>
    <CardTitle>Analytics Overview</CardTitle>
    <CardDescription>Your traffic summary for this month</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-2">
      <div>Visitors: 12,345</div>
      <div>Page Views: 45,678</div>
    </div>
  </CardContent>
</Card>
```

### Card with Action Button

```tsx
<Card>
  <CardHeader>
    <CardTitle>Top Pages</CardTitle>
    <CardDescription>Most visited pages</CardDescription>
    <CardAction>
      <button className="text-sm text-primary">View All</button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2">
      <li>/home - 1,234 views</li>
      <li>/about - 890 views</li>
    </ul>
  </CardContent>
</Card>
```

### Card with Footer

```tsx
<Card>
  <CardHeader>
    <CardTitle>Settings</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Configure your preferences</p>
  </CardContent>
  <CardFooter className="justify-between">
    <button>Cancel</button>
    <button>Save Changes</button>
  </CardFooter>
</Card>
```

### Card with Borders

```tsx
<Card>
  <CardHeader className="border-b">
    <CardTitle>With Borders</CardTitle>
  </CardHeader>
  <CardContent className="border-b">
    <p>Content with bottom border</p>
  </CardContent>
  <CardFooter className="border-t">
    <button>Action</button>
  </CardFooter>
</Card>
```

### Interactive Card

```tsx
<Card className="hover:shadow-md transition-shadow cursor-pointer">
  <CardHeader>
    <CardTitle>Clickable Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Click anywhere on this card</p>
  </CardContent>
</Card>
```

## Usage in WP Statistics

### Report Card Layout

```tsx
<Card>
  <CardHeader>
    <CardTitle>Top Entry Pages</CardTitle>
  </CardHeader>
</Card>
```

### Stats Card with Data

```tsx
<Card>
  <CardHeader>
    <CardTitle>{__('Visitor Statistics', 'wp-statistics')}</CardTitle>
    <CardDescription>
      {__('Overview of your site traffic', 'wp-statistics')}
    </CardDescription>
  </CardHeader>
  <CardContent>
    <Metrics
      metrics={[
        { label: __('Visitors', 'wp-statistics'), value: '12,345' },
        { label: __('Page Views', 'wp-statistics'), value: '45,678' },
      ]}
      columns={2}
    />
  </CardContent>
</Card>
```

### Report Container

```tsx
<div className="grid grid-cols-12 gap-6">
  <div className="col-span-6">
    <Card>
      <CardHeader>
        <CardTitle>{__('Top Referrers', 'wp-statistics')}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Referrer data */}
      </CardContent>
    </Card>
  </div>
  <div className="col-span-6">
    <Card>
      <CardHeader>
        <CardTitle>{__('Top Countries', 'wp-statistics')}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Country data */}
      </CardContent>
    </Card>
  </div>
</div>
```

### With Custom Components

```tsx
<Card>
  <CardHeader>
    <CardTitle>{__('Traffic Trends', 'wp-statistics')}</CardTitle>
    <CardAction>
      <Button variant="ghost" size="sm">
        {__('Export', 'wp-statistics')}
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <Chart data={chartData} />
  </CardContent>
</Card>
```

## Styling Patterns

### Grid Layouts

```tsx
<div className="grid grid-cols-12 gap-6">
  <div className="col-span-4">
    <Card>{/* Card 1 */}</Card>
  </div>
  <div className="col-span-4">
    <Card>{/* Card 2 */}</Card>
  </div>
  <div className="col-span-4">
    <Card>{/* Card 3 */}</Card>
  </div>
</div>
```

### Responsive Cards

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card>{/* Responsive card */}</Card>
</div>
```

### Custom Card Styling

```tsx
<Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-none">
  <CardHeader>
    <CardTitle className="text-white">Featured</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Custom styled card</p>
  </CardContent>
</Card>
```

## Data Slot Pattern

All Card sub-components use `data-slot` attributes for advanced CSS targeting:

```css
/* Target specific card parts */
[data-slot="card-header"] { }
[data-slot="card-title"] { }
[data-slot="card-content"] { }

/* Example: Add custom border to headers */
.custom-card [data-slot="card-header"] {
  border-bottom: 1px solid theme('colors.neutral.200');
}
```

## Accessibility Features

- Uses semantic HTML (`div` elements)
- Proper heading hierarchy (use `CardTitle` as headings)
- Supports all standard ARIA attributes
- Keyboard accessible when interactive

### Best Practices for Accessibility

```tsx
<Card>
  <CardHeader>
    <CardTitle as="h2">{/* Use semantic heading */}</CardTitle>
  </CardHeader>
</Card>
```

## TypeScript Support

Full TypeScript support with standard React props:

```typescript
import type { ComponentProps } from 'react'

type CardProps = ComponentProps<'div'>
type CardHeaderProps = ComponentProps<'div'>
type CardContentProps = ComponentProps<'div'>

interface StatsCardProps {
  title: string
  description?: string
  children: React.ReactNode
  action?: React.ReactNode
}

function StatsCard({ title, description, children, action }: StatsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        {action && <CardAction>{action}</CardAction>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
```

## Related Components

### UI Components Used
- **[Button](button.md)** - Actions in CardAction and CardFooter
- **[Badge](badge.md)** - Status indicators in cards
- **[Separator](separator.md)** - Dividers between sections

### Custom Components
- Cards are used extensively throughout WP Statistics for report layouts

## Best Practices

### Do's ✅

- Use CardHeader for titles and descriptions
- Keep card content focused on a single topic
- Use consistent spacing with gap-6 default
- Add borders to headers/footers when needed for visual separation
- Use CardAction for primary actions in the header
- Maintain semantic heading hierarchy
- Use responsive grid layouts for card collections

### Don'ts ❌

- Don't nest cards deeply (poor visual hierarchy)
- Don't mix different padding values (breaks consistency)
- Don't forget to include CardHeader when using CardTitle
- Don't use cards for everything (consider alternatives for simple content)
- Don't override the data-slot pattern without good reason
- Don't put critical actions only in CardAction (ensure accessibility)
- Don't use very tall cards (break content into multiple cards)

---

*Last Updated: 2025-12-15*
