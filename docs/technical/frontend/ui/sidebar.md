---
title: "Sidebar Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/sidebar.tsx"
storybook: true
---

# Sidebar Component

A comprehensive sidebar navigation component from shadcn/ui with collapsible states, mobile responsiveness, and rich menu structures.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/sidebar.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com/?path=/story/ui-sidebar--default)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/sidebar)
- **Dependencies**: `@radix-ui/react-slot`, `class-variance-authority`, `lucide-react`

## Overview

The Sidebar component provides a full-featured navigation sidebar with support for collapsible states (expanded/collapsed), mobile sheet variant, keyboard shortcuts, and extensive menu item options. It persists state via cookies and adapts automatically for mobile viewports.

## Import

```typescript
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarInset,
  useSidebar,
} from '@/components/ui/sidebar'
```

## Basic Usage

```tsx
<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <Logo />
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/dashboard">Dashboard</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <UserMenu />
    </SidebarFooter>
  </Sidebar>
  <SidebarInset>
    <main>{/* Page content */}</main>
  </SidebarInset>
</SidebarProvider>
```

## Collapsible Modes

```tsx
// Offcanvas (slides off screen)
<Sidebar collapsible="offcanvas">...</Sidebar>

// Icon (collapses to icons only)
<Sidebar collapsible="icon">...</Sidebar>

// None (always expanded)
<Sidebar collapsible="none">...</Sidebar>
```

## Variants

```tsx
// Default sidebar
<Sidebar variant="sidebar">...</Sidebar>

// Floating (detached with shadow)
<Sidebar variant="floating">...</Sidebar>

// Inset (inside content area)
<Sidebar variant="inset">...</Sidebar>
```

## Side Position

```tsx
// Left (default)
<Sidebar side="left">...</Sidebar>

// Right
<Sidebar side="right">...</Sidebar>
```

## With Submenu

```tsx
<SidebarMenu>
  <SidebarMenuItem>
    <SidebarMenuButton>
      <span>Reports</span>
    </SidebarMenuButton>
    <SidebarMenuSub>
      <SidebarMenuSubItem>
        <SidebarMenuSubButton asChild>
          <a href="/reports/traffic">Traffic</a>
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    </SidebarMenuSub>
  </SidebarMenuItem>
</SidebarMenu>
```

## useSidebar Hook

```tsx
function MyComponent() {
  const {
    state,        // 'expanded' | 'collapsed'
    open,         // boolean
    setOpen,      // (open: boolean) => void
    openMobile,   // boolean
    setOpenMobile,// (open: boolean) => void
    isMobile,     // boolean
    toggleSidebar // () => void
  } = useSidebar()

  return (
    <Button onClick={toggleSidebar}>
      {state === 'expanded' ? 'Collapse' : 'Expand'}
    </Button>
  )
}
```

## Components

| Component | Description |
|-----------|-------------|
| `SidebarProvider` | Context provider for sidebar state |
| `Sidebar` | Main sidebar container |
| `SidebarTrigger` | Toggle button for sidebar |
| `SidebarRail` | Draggable edge for toggling |
| `SidebarInset` | Main content area wrapper |
| `SidebarHeader` | Top section of sidebar |
| `SidebarFooter` | Bottom section of sidebar |
| `SidebarContent` | Scrollable content area |
| `SidebarGroup` | Section grouping |
| `SidebarGroupLabel` | Section heading |
| `SidebarGroupContent` | Section content container |
| `SidebarGroupAction` | Action button in group header |
| `SidebarMenu` | Menu list container |
| `SidebarMenuItem` | Menu item wrapper |
| `SidebarMenuButton` | Clickable menu button |
| `SidebarMenuAction` | Secondary action in menu item |
| `SidebarMenuBadge` | Badge indicator |
| `SidebarMenuSkeleton` | Loading placeholder |
| `SidebarMenuSub` | Submenu container |
| `SidebarMenuSubItem` | Submenu item wrapper |
| `SidebarMenuSubButton` | Clickable submenu button |
| `SidebarInput` | Search input in sidebar |
| `SidebarSeparator` | Visual divider |

## Configuration

| Constant | Value | Description |
|----------|-------|-------------|
| `SIDEBAR_WIDTH` | `16rem` | Expanded width |
| `SIDEBAR_WIDTH_MOBILE` | `18rem` | Mobile width |
| `SIDEBAR_WIDTH_ICON` | `3rem` | Collapsed width |
| `SIDEBAR_KEYBOARD_SHORTCUT` | `b` | Toggle shortcut (Ctrl/Cmd + B) |
| `SIDEBAR_COOKIE_NAME` | `sidebar_state` | Cookie for persistence |

## Related Components

- [Sheet](sheet.md) - Used for mobile sidebar
- [Button](button.md) - Used for trigger
- [Tooltip](tooltip.md) - Used for collapsed icon tooltips

---

*Last Updated: 2025-12-16*
