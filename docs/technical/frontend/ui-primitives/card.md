---
title: "Card Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/card.tsx"
storybook: true
---

# Card Component

A flexible container component from shadcn/ui for grouping related content with composable sub-components.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/card.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com?path=/story/ui-card--default)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/card)
- **Dependencies**: None (pure Tailwind CSS)

## Overview

The Card component provides a consistent container for grouping related content. It uses a composition pattern with sub-components for flexible, well-structured layouts.

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

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Optional description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>
```

## Component Structure

| Component | Purpose |
|-----------|---------|
| `Card` | Root container with border, shadow, padding |
| `CardHeader` | Header section with grid layout |
| `CardTitle` | Main heading |
| `CardDescription` | Secondary text |
| `CardAction` | Top-right action button slot |
| `CardContent` | Main content area |
| `CardFooter` | Footer for actions |

## Key Features

### With Action Button

```tsx
<Card>
  <CardHeader>
    <CardTitle>Top Pages</CardTitle>
    <CardAction>
      <Button variant="ghost" size="sm">View All</Button>
    </CardAction>
  </CardHeader>
  <CardContent>...</CardContent>
</Card>
```

### Grid Layout

```tsx
<div className="grid grid-cols-12 gap-6">
  <div className="col-span-6">
    <Card>...</Card>
  </div>
  <div className="col-span-6">
    <Card>...</Card>
  </div>
</div>
```

## Storybook

For all variations and interactive examples, see the **[Card Storybook](https://ui.wp-statistics.com?path=/story/ui-card--default)**.

## Related Components

- [Button](button.md) - Actions in CardAction and CardFooter

---

*Last Updated: 2025-12-16*
