---
title: "Checkbox Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/checkbox.tsx"
storybook: true
---

# Checkbox Component

A checkbox input component from shadcn/ui built on Radix UI with accessible interaction.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/checkbox.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com/?path=/story/ui-checkbox--default)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/checkbox)
- **Dependencies**: `@radix-ui/react-checkbox`, `lucide-react`

## Overview

The Checkbox component provides an accessible checkbox input with proper checked/unchecked states, keyboard support, and visual feedback. Built on Radix UI's Checkbox primitive.

## Import

```typescript
import { Checkbox } from '@/components/ui/checkbox'
```

## Basic Usage

```tsx
<Checkbox />

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms">Accept terms</label>
</div>
```

## Key Features

### Controlled State

```tsx
const [checked, setChecked] = useState(false)

<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
/>
```

### With Description

```tsx
<div className="flex items-start space-x-2">
  <Checkbox id="notifications" className="mt-0.5" />
  <div>
    <label htmlFor="notifications" className="text-sm font-medium">
      Email notifications
    </label>
    <p className="text-sm text-muted-foreground">
      Receive email about your account activity
    </p>
  </div>
</div>
```

### Disabled State

```tsx
<Checkbox disabled />
```

## Related Components

- [Input](input.md) - Other form inputs

---

*Last Updated: 2025-12-16*
