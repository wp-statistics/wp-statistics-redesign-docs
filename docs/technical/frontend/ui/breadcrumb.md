---
title: "Breadcrumb Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/breadcrumb.tsx"
storybook: true
---

# Breadcrumb Component

A navigation component from shadcn/ui for displaying hierarchical page structure with accessible breadcrumb trails.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/breadcrumb.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com/?path=/story/ui-breadcrumb--default)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/breadcrumb)
- **Dependencies**: `@radix-ui/react-slot`, `lucide-react`

## Overview

The Breadcrumb component displays a navigation trail showing the user's current location within the site hierarchy. Built with proper ARIA attributes for accessibility, it supports customizable separators, ellipsis for truncation, and polymorphic link rendering.

## Import

```typescript
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb'
```

## Basic Usage

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/reports">Reports</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Traffic Overview</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## With Router Link

```tsx
import { Link } from 'react-router-dom'

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link to="/">Home</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## With Ellipsis

For long breadcrumb trails, use ellipsis to collapse intermediate items:

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Components

| Component | Description |
|-----------|-------------|
| `Breadcrumb` | Root container with `nav` element and aria-label |
| `BreadcrumbList` | Ordered list container for items |
| `BreadcrumbItem` | Individual breadcrumb item wrapper |
| `BreadcrumbLink` | Clickable link for navigable items |
| `BreadcrumbPage` | Current page indicator (non-clickable) |
| `BreadcrumbSeparator` | Visual separator between items (default: ChevronRight) |
| `BreadcrumbEllipsis` | Ellipsis indicator for collapsed items |

## Custom Separator

```tsx
<BreadcrumbSeparator>
  /
</BreadcrumbSeparator>
```

## Related Components

- [Button](button.md) - For navigation actions
- [Dropdown Menu](dropdown-menu.md) - Can be used with ellipsis for collapsed items

---

*Last Updated: 2025-12-16*
