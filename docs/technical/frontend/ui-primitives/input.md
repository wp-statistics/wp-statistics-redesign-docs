---
title: "Input Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/input.tsx"
storybook: true
---

# Input Component

A text input component from shadcn/ui with consistent styling, focus states, and validation support.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/input.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com/?path=/story/ui-input--default)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/input)
- **Dependencies**: None (pure Tailwind CSS)

## Overview

The Input component provides a styled text input with focus rings, validation states, and file input support. Includes comprehensive focus and error states.

## Import

```typescript
import { Input } from '@/components/ui/input'
```

## Basic Usage

```tsx
<Input type="text" placeholder="Enter text" />

<Input type="email" placeholder="email@example.com" />

<Input type="password" placeholder="Password" />
```

## Key Features

### With Label

```tsx
<div className="space-y-2">
  <label htmlFor="email">Email</label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

### With Icon

```tsx
import { Search } from 'lucide-react'

<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
  <Input className="pl-9" type="search" placeholder="Search..." />
</div>
```

### Error State

```tsx
<Input
  type="email"
  aria-invalid="true"
  placeholder="Invalid email"
/>
```

### Disabled

```tsx
<Input disabled placeholder="Disabled" />
```

## Input Types

Supports all standard HTML input types: `text`, `email`, `password`, `number`, `search`, `file`, etc.

## Related Components

- [Checkbox](checkbox.md) - Other form inputs
- [Button](button.md) - Form submit buttons

---

*Last Updated: 2025-12-16*
