---
title: "Select Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/select.tsx"
storybook: true
---

# Select Component

A form select component from shadcn/ui with customizable trigger, content, and items.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/select.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com/?path=/story/ui-select--default)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/select)
- **Dependencies**: `@radix-ui/react-select`, `lucide-react`

## Overview

The Select component provides a customizable dropdown select for forms. It supports single selection, grouped items, search scroll buttons, and accessibility features including keyboard navigation and ARIA labels.

## Import

```typescript
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from '@/components/ui/select'
```

## Basic Usage

```tsx
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>
```

## Controlled Value

```tsx
const [value, setValue] = React.useState('')

<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="daily">Daily</SelectItem>
    <SelectItem value="weekly">Weekly</SelectItem>
    <SelectItem value="monthly">Monthly</SelectItem>
  </SelectContent>
</Select>
```

## With Groups

```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select timeframe" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Short Term</SelectLabel>
      <SelectItem value="today">Today</SelectItem>
      <SelectItem value="yesterday">Yesterday</SelectItem>
      <SelectItem value="7days">Last 7 Days</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Long Term</SelectLabel>
      <SelectItem value="30days">Last 30 Days</SelectItem>
      <SelectItem value="90days">Last 90 Days</SelectItem>
      <SelectItem value="year">This Year</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

## Disabled State

```tsx
// Disabled select
<Select disabled>
  <SelectTrigger>
    <SelectValue placeholder="Disabled" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option">Option</SelectItem>
  </SelectContent>
</Select>

// Disabled item
<SelectItem value="unavailable" disabled>
  Not Available
</SelectItem>
```

## Components

| Component | Description |
|-----------|-------------|
| `Select` | Root container managing selection state |
| `SelectTrigger` | Button that opens the dropdown |
| `SelectValue` | Displays the selected value or placeholder |
| `SelectContent` | Container for select options |
| `SelectItem` | Individual selectable option |
| `SelectGroup` | Group of related options |
| `SelectLabel` | Non-selectable group label |
| `SelectSeparator` | Visual divider between groups |
| `SelectScrollUpButton` | Scroll button for long lists |
| `SelectScrollDownButton` | Scroll button for long lists |

## SelectTrigger Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `disabled` | `boolean` | `false` | Disable the trigger |

## SelectContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `'popper' \| 'item-aligned'` | `'popper'` | Positioning mode |

## Styling

Default trigger styling:
- Height: 36px (h-9)
- Border: Input border color
- Background: Transparent
- Shadow: Small shadow
- Focus: Ring outline

## Related Components

- [Dropdown Menu](dropdown-menu.md) - For action menus without selection
- [Input](input.md) - For text input
- [LineChart](../custom/line-chart.md) - Uses select for timeframe

---

*Last Updated: 2025-12-16*
