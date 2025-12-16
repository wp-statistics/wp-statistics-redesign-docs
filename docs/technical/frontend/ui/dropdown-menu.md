---
title: "Dropdown Menu Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/dropdown-menu.tsx"
storybook: true
---

# Dropdown Menu Component

A versatile dropdown menu component from shadcn/ui with support for items, checkboxes, radio groups, and submenus.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/dropdown-menu.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com/?path=/story/ui-dropdownmenu--default)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/dropdown-menu)
- **Dependencies**: `@radix-ui/react-dropdown-menu`, `lucide-react`

## Overview

The Dropdown Menu component provides a fully accessible dropdown menu system with keyboard navigation, focus management, and ARIA support. It supports various item types including standard items, checkbox items, radio groups, and nested submenus.

## Import

```typescript
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu'
```

## Basic Usage

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## With Checkboxes

```tsx
const [showStatus, setShowStatus] = React.useState(true)

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuCheckboxItem
      checked={showStatus}
      onCheckedChange={setShowStatus}
    >
      Show Status Bar
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## With Radio Group

```tsx
const [position, setPosition] = React.useState('bottom')

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Position</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
      <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>
```

## With Submenu

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>Option 1</DropdownMenuItem>
        <DropdownMenuItem>Option 2</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>
```

## With Keyboard Shortcuts

```tsx
<DropdownMenuItem>
  Save
  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
</DropdownMenuItem>
```

## Item Variants

```tsx
// Default item
<DropdownMenuItem>Default Item</DropdownMenuItem>

// Destructive item (for delete/dangerous actions)
<DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>

// Inset item (extra left padding for alignment)
<DropdownMenuItem inset>Indented Item</DropdownMenuItem>
```

## Components

| Component | Description |
|-----------|-------------|
| `DropdownMenu` | Root container |
| `DropdownMenuTrigger` | Element that opens the menu |
| `DropdownMenuContent` | Container for menu items |
| `DropdownMenuItem` | Standard clickable item |
| `DropdownMenuCheckboxItem` | Item with checkbox |
| `DropdownMenuRadioGroup` | Group for radio items |
| `DropdownMenuRadioItem` | Item with radio selection |
| `DropdownMenuLabel` | Non-interactive label |
| `DropdownMenuSeparator` | Visual divider |
| `DropdownMenuShortcut` | Keyboard shortcut hint |
| `DropdownMenuGroup` | Group of related items |
| `DropdownMenuSub` | Submenu container |
| `DropdownMenuSubTrigger` | Trigger for submenu |
| `DropdownMenuSubContent` | Submenu content |

## Related Components

- [Button](button.md) - Common trigger element
- [Select](select.md) - For single value selection

---

*Last Updated: 2025-12-16*
