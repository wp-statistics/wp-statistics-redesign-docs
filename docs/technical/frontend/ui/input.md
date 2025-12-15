---
title: "Input Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/input.tsx"
storybook: false
---

# Input Component

A text input component from shadcn/ui with consistent styling, focus states, and validation support.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Status**: Done
- **Location**: `resources/react/src/components/ui/input.tsx`
- **Source**: [View on GitHub](https://github.com/wp-statistics/wp-statistics/blob/master/resources/react/src/components/ui/input.tsx)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/input)
- **Storybook**: Not available yet
- **Dependencies**: None (pure Tailwind CSS)

## Overview

The Input component provides a styled text input with focus rings, validation states, and file input support. It includes comprehensive focus and error states using Tailwind CSS utilities.

## Import

```typescript
import { Input } from '@/components/ui/input'
```

## Basic Usage

### Text Input

```tsx
<Input type="text" placeholder="Enter text" />
```

### With Label

```tsx
<div className="space-y-2">
  <label htmlFor="email">Email</label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

### Controlled Input

```tsx
const [value, setValue] = useState('')

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Controlled input"
/>
```

## Props

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string
  className?: string
}
```

## Component API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `'text'` | Input type (text, email, password, number, file, etc.) |
| `placeholder` | `string` | - | Placeholder text |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | - | Additional CSS classes |

All standard HTML input attributes are supported.

### Return Type

```typescript
JSX.Element
```

## Default Styles

### Base Styles
- `h-9` - Height (36px)
- `w-full` - Full width
- `min-w-0` - Prevent flex overflow
- `rounded-md` - Medium border radius
- `border border-input` - Border
- `bg-transparent` - Transparent background
- `px-3 py-1` - Padding
- `text-base md:text-sm` - Responsive text size
- `shadow-xs` - Extra small shadow
- `outline-none` - No default outline

### Focus States
- `focus-visible:border-ring` - Border color on focus
- `focus-visible:ring-ring/50` - Ring color
- `focus-visible:ring-[3px]` - Ring width

### Error States
- `aria-invalid:border-destructive` - Red border when invalid
- `aria-invalid:ring-destructive/20` - Red ring when invalid

### Disabled States
- `disabled:pointer-events-none` - No interactions
- `disabled:cursor-not-allowed` - Not-allowed cursor
- `disabled:opacity-50` - 50% opacity

### File Input Styles
- `file:inline-flex file:h-7` - File button styling
- `file:border-0 file:bg-transparent` - No border/background
- `file:text-sm file:font-medium` - Text styling

### Selection & Placeholder
- `selection:bg-primary selection:text-primary-foreground` - Selection colors
- `placeholder:text-muted-foreground` - Placeholder color

## Input Types

### Text

```tsx
<Input type="text" placeholder="Enter name" />
```

### Email

```tsx
<Input type="email" placeholder="email@example.com" />
```

### Password

```tsx
<Input type="password" placeholder="Enter password" />
```

### Number

```tsx
<Input type="number" min="0" max="100" placeholder="0" />
```

### Search

```tsx
<Input type="search" placeholder="Search..." />
```

### File

```tsx
<Input type="file" accept="image/*" />
```

## Validation States

### Error State

```tsx
<Input
  type="email"
  aria-invalid="true"
  placeholder="Invalid email"
/>
```

### With Form Validation

```tsx
<Input
  type="email"
  required
  aria-invalid={!isValid}
  aria-describedby="email-error"
/>
{!isValid && (
  <span id="email-error" className="text-sm text-destructive">
    Please enter a valid email
  </span>
)}
```

## Usage Examples

### With Icon

```tsx
import { Search } from 'lucide-react'

<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
  <Input className="pl-9" type="search" placeholder="Search..." />
</div>
```

### With Button

```tsx
<div className="flex gap-2">
  <Input type="email" placeholder="Enter email" className="flex-1" />
  <button className="px-4">Subscribe</button>
</div>
```

### Full Width Form Field

```tsx
<div className="space-y-2">
  <label htmlFor="username" className="text-sm font-medium">
    Username
  </label>
  <Input id="username" placeholder="john_doe" />
  <p className="text-xs text-muted-foreground">
    Choose a unique username
  </p>
</div>
```

## Usage in WP Statistics

### Search Input in Sidebar

Used in the sidebar component for search functionality:

```tsx
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4" />
  <Input
    type="search"
    placeholder={__('Search...', 'wp-statistics')}
    className="pl-9"
  />
</div>
```

### Filter Input

Used in filter components:

```tsx
<Input
  type="text"
  placeholder={__('Filter results', 'wp-statistics')}
  onChange={(e) => setFilter(e.target.value)}
/>
```

## Accessibility Features

- Proper focus indicators with visible ring
- Support for `aria-invalid` for error states
- Support for `aria-describedby` for error messages
- Disabled state prevents interaction
- Keyboard accessible
- Screen reader compatible

## TypeScript Support

```typescript
import type { ComponentProps } from 'react'

type InputProps = ComponentProps<'input'>

interface SearchInputProps {
  onSearch: (value: string) => void
  placeholder?: string
}

function SearchInput({ onSearch, placeholder }: SearchInputProps) {
  const [value, setValue] = useState('')

  return (
    <Input
      type="search"
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
        onSearch(e.target.value)
      }}
      placeholder={placeholder}
    />
  )
}
```

## Related Components

- **Form validation libraries** - React Hook Form, Zod
- **[Button](button.md)** - Submit buttons with inputs
- **[Card](card.md)** - Form containers

## Best Practices

### Do's ✅

- Always provide accessible labels
- Use appropriate input types
- Include placeholder text for guidance
- Show validation errors clearly
- Use aria-invalid for error states
- Provide aria-describedby for error messages
- Use disabled state appropriately

### Don'ts ❌

- Don't use placeholder as label replacement
- Don't forget required/validation attributes
- Don't override focus styles (accessibility)
- Don't use type="number" for non-numeric data (phone, ZIP)
- Don't make inputs too narrow (hard to read)
- Don't forget mobile keyboard optimization

---

*Last Updated: 2025-12-15*
