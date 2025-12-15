---
title: "Checkbox Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/checkbox.tsx"
storybook: false
---

# Checkbox Component

A checkbox input component from shadcn/ui built on Radix UI with accessible interaction and visual states.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Status**: Done
- **Location**: `resources/react/src/components/ui/checkbox.tsx`
- **Source**: [View on GitHub](https://github.com/wp-statistics/wp-statistics/blob/master/resources/react/src/components/ui/checkbox.tsx)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/checkbox)
- **Storybook**: Not available yet
- **Dependencies**:
  - `@radix-ui/react-checkbox` - Accessible checkbox primitive
  - `lucide-react` - CheckIcon

## Overview

The Checkbox component provides an accessible checkbox input with proper checked/unchecked states, keyboard support, and visual feedback. Built on Radix UI's Checkbox primitive with a check icon indicator.

## Import

```typescript
import { Checkbox } from '@/components/ui/checkbox'
```

## Basic Usage

### Simple Checkbox

```tsx
<Checkbox />
```

### With Label

```tsx
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms" className="text-sm cursor-pointer">
    Accept terms and conditions
  </label>
</div>
```

### Controlled Checkbox

```tsx
const [checked, setChecked] = useState(false)

<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
/>
```

## Props

```typescript
interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  className?: string
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
}
```

## Component API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | - | Controlled checked state |
| `defaultChecked` | `boolean` | - | Default checked state (uncontrolled) |
| `onCheckedChange` | `(checked: boolean) => void` | - | Callback when checked state changes |
| `disabled` | `boolean` | `false` | Disabled state |
| `required` | `boolean` | - | Required for form validation |
| `name` | `string` | - | Form input name |
| `value` | `string` | - | Form input value |
| `className` | `string` | - | Additional CSS classes |

### Return Type

```typescript
JSX.Element
```

## Default Styles

### Checkbox Root
- `size-4` - 16px × 16px
- `shrink-0` - Prevents shrinking
- `rounded-[4px]` - Small border radius
- `border border-input` - Border
- `shadow-xs` - Extra small shadow
- `outline-none` - No default outline

### Checked State
- `data-[state=checked]:bg-primary` - Primary background when checked
- `data-[state=checked]:text-primary-foreground` - Foreground text when checked
- `data-[state=checked]:border-primary` - Primary border when checked

### Focus State
- `focus-visible:border-ring` - Border color on focus
- `focus-visible:ring-ring/50` - Ring color
- `focus-visible:ring-[3px]` - Ring width

### Invalid State
- `aria-invalid:border-destructive` - Red border when invalid
- `aria-invalid:ring-destructive/20` - Red ring when invalid

### Disabled State
- `disabled:cursor-not-allowed` - Not-allowed cursor
- `disabled:opacity-50` - 50% opacity

### Indicator
- Check icon (`CheckIcon` from lucide-react)
- `size-3.5` - Icon size
- `text-current` - Inherits text color
- Animated appearance/disappearance

## Usage Examples

### With Description

```tsx
<div className="flex items-start space-x-2">
  <Checkbox id="notifications" className="mt-0.5" />
  <div className="grid gap-1.5 leading-none">
    <label
      htmlFor="notifications"
      className="text-sm font-medium cursor-pointer"
    >
      Email notifications
    </label>
    <p className="text-sm text-muted-foreground">
      Receive email about your account activity
    </p>
  </div>
</div>
```

### Multiple Checkboxes

```tsx
<div className="space-y-3">
  <div className="flex items-center space-x-2">
    <Checkbox id="option1" />
    <label htmlFor="option1">Option 1</label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="option2" />
    <label htmlFor="option2">Option 2</label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="option3" />
    <label htmlFor="option3">Option 3</label>
  </div>
</div>
```

### In Form

```tsx
<form onSubmit={handleSubmit}>
  <div className="flex items-center space-x-2">
    <Checkbox
      id="agree"
      name="agreement"
      required
      aria-invalid={!isValid}
    />
    <label htmlFor="agree">
      I agree to the terms and conditions *
    </label>
  </div>
  <button type="submit">Submit</button>
</form>
```

### Disabled State

```tsx
<div className="flex items-center space-x-2">
  <Checkbox id="disabled" disabled />
  <label htmlFor="disabled" className="text-muted-foreground">
    Disabled option
  </label>
</div>
```

## Usage in WP Statistics

### Settings Toggle

```tsx
<div className="flex items-center space-x-2">
  <Checkbox
    id="tracking"
    checked={settings.enableTracking}
    onCheckedChange={(checked) =>
      updateSettings({ enableTracking: checked })
    }
  />
  <label htmlFor="tracking">
    {__('Enable visitor tracking', 'wp-statistics')}
  </label>
</div>
```

### Bulk Selection

```tsx
<div className="space-y-2">
  <div className="flex items-center space-x-2">
    <Checkbox
      checked={allSelected}
      onCheckedChange={toggleSelectAll}
    />
    <label>{__('Select all', 'wp-statistics')}</label>
  </div>
  {items.map((item) => (
    <div key={item.id} className="flex items-center space-x-2 pl-6">
      <Checkbox
        checked={selectedItems.includes(item.id)}
        onCheckedChange={() => toggleItem(item.id)}
      />
      <label>{item.name}</label>
    </div>
  ))}
</div>
```

## Accessibility Features

- Proper `role="checkbox"` and ARIA attributes
- Keyboard support (Space to toggle)
- Focus indicators with visible ring
- Label association via `id` and `htmlFor`
- Support for `aria-invalid` and `required`
- Screen reader compatible

## TypeScript Support

```typescript
import type { ComponentProps } from 'react'
import type * as CheckboxPrimitive from '@radix-ui/react-checkbox'

type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root>

interface SettingCheckboxProps {
  label: string
  description?: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

function SettingCheckbox({
  label,
  description,
  checked,
  onCheckedChange,
}: SettingCheckboxProps) {
  return (
    <div className="flex items-start space-x-2">
      <Checkbox
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="mt-0.5"
      />
      <div>
        <label className="text-sm font-medium">{label}</label>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  )
}
```

## Related Components

- **[Input](input.md)** - Other form inputs
- **Form libraries** - React Hook Form integration

## Best Practices

### Do's ✅

- Always provide an associated label
- Use controlled state when needed
- Group related checkboxes logically
- Provide clear, concise labels
- Use descriptions for complex options
- Maintain adequate click/touch targets
- Use required attribute for validation

### Don'ts ❌

- Don't use checkboxes for mutually exclusive options (use radio instead)
- Don't forget labels (accessibility requirement)
- Don't override focus styles
- Don't make checkbox-only clickable (label should work too)
- Don't use for binary toggles in settings (consider Switch/Toggle)
- Don't use very long labels (keep concise)

---

*Last Updated: 2025-12-15*
