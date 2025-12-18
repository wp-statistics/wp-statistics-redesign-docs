---
title: "Avatar Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/avatar.tsx"
storybook: true
---

# Avatar Component

A circular user profile image component from shadcn/ui with automatic fallback support.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/avatar.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com?path=/story/ui-avatar--default)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/avatar)
- **Dependencies**: `@radix-ui/react-avatar`

## Overview

The Avatar component displays user profile images with automatic fallback support. Built on Radix UI's Avatar primitive, it gracefully handles image loading failures by displaying fallback content (initials, icons, or custom elements).

## Import

```typescript
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
```

## Basic Usage

```tsx
<Avatar>
  <AvatarImage src="/user-photo.jpg" alt="John Doe" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

## Component Structure

| Component | Purpose |
|-----------|---------|
| `Avatar` | Root container (default: 32px circular) |
| `AvatarImage` | Profile image with automatic hide on error |
| `AvatarFallback` | Fallback content (initials, icons) |

## Key Features

### Size Customization

```tsx
<Avatar className="size-6">  {/* 24px */}
<Avatar className="size-10"> {/* 40px */}
<Avatar className="size-16"> {/* 64px */}
```

### With Icon Fallback

```tsx
import { User } from 'lucide-react'

<Avatar>
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>
    <User className="size-4" />
  </AvatarFallback>
</Avatar>
```

### Avatar Stack

```tsx
<div className="flex -space-x-2">
  <Avatar className="border-2 border-white">...</Avatar>
  <Avatar className="border-2 border-white">...</Avatar>
</div>
```

## Related Components

- [Tooltip](tooltip.md) - User info on hover

---

*Last Updated: 2025-12-16*
