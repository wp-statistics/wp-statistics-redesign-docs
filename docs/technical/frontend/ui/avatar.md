---
title: "Avatar Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/avatar.tsx"
storybook: false
---

# Avatar Component

A circular user profile image component from shadcn/ui with automatic fallback support, built on Radix UI primitives for accessibility.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Status**: Done
- **Location**: `resources/react/src/components/ui/avatar.tsx`
- **Source**: [View on GitHub](https://github.com/wp-statistics/wp-statistics/blob/master/resources/react/src/components/ui/avatar.tsx)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/avatar)
- **Storybook**: Not available yet
- **Dependencies**:
  - `@radix-ui/react-avatar` - Accessible avatar primitive

## Overview

The Avatar component is a shadcn/ui component that displays user profile images with automatic fallback support. Built on Radix UI's Avatar primitive, it gracefully handles image loading failures by displaying fallback content (initials, icons, or custom elements). The component is styled with Tailwind CSS and follows the composition pattern with three sub-components.

### shadcn/ui Philosophy

This component follows the shadcn/ui approach:
- **Copy, don't install** - Component code is copied into your project
- **Full ownership** - Customize the component as needed
- **Tailwind styling** - All styles use Tailwind utility classes
- **Radix primitives** - Built on accessible Radix UI components

## Import

```typescript
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
```

## Basic Usage

### With Image

```tsx
<Avatar>
  <AvatarImage src="/user-photo.jpg" alt="John Doe" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### Fallback Only (No Image)

```tsx
<Avatar>
  <AvatarFallback>AB</AvatarFallback>
</Avatar>
```

### With Icon Fallback

```tsx
import { User } from 'lucide-react'

<Avatar>
  <AvatarImage src="/user-photo.jpg" alt="User" />
  <AvatarFallback>
    <User className="size-4" />
  </AvatarFallback>
</Avatar>
```

## Component Composition

The Avatar component uses a composition pattern with three sub-components that work together:

### 1. Avatar (Root)

The root container that wraps the image and fallback components.

```tsx
<Avatar className="size-10">
  {/* AvatarImage and AvatarFallback go here */}
</Avatar>
```

**Default Styles**:
- `size-8` (32px) - Compact size suitable for lists and tables
- `rounded-full` - Perfect circular shape
- `overflow-hidden` - Clips content to circular boundary
- `relative flex` - Layout container
- `shrink-0` - Prevents shrinking in flex layouts

### 2. AvatarImage

The image element that displays the user's profile photo.

```tsx
<AvatarImage
  src="/path/to/image.jpg"
  alt="User name"
/>
```

**Default Styles**:
- `aspect-square` - Maintains 1:1 aspect ratio
- `size-full` - Fills parent container

**Behavior**:
- Automatically hides and shows fallback if image fails to load
- Handles loading states internally via Radix UI

### 3. AvatarFallback

The fallback content displayed when the image is loading or fails to load.

```tsx
<AvatarFallback>JD</AvatarFallback>
```

**Default Styles**:
- `bg-muted` - Neutral background color from design system
- `flex items-center justify-center` - Centers content
- `rounded-full` - Matches parent circular shape
- `size-full` - Fills parent container

**Behavior**:
- Only visible when image is loading or unavailable
- Can contain text (initials), icons, or any React node

## Size Customization

The Avatar component has a default size of 32px (`size-8`). Customize size using Tailwind's sizing utilities:

### Small Avatar (24px)

```tsx
<Avatar className="size-6">
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>
```

### Medium Avatar (40px)

```tsx
<Avatar className="size-10">
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>
```

### Large Avatar (64px)

```tsx
<Avatar className="size-16">
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>
```

### Custom Size

```tsx
<Avatar className="size-20">
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback className="text-xl">AB</AvatarFallback>
</Avatar>
```

**Tip**: When increasing avatar size, adjust fallback text size accordingly using Tailwind's text utilities (`text-sm`, `text-lg`, etc.).

## Props

All three components inherit props from their respective Radix UI primitives:

### Avatar Props

```typescript
interface AvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root> {
  className?: string
  // All standard div props
}
```

### AvatarImage Props

```typescript
interface AvatarImageProps extends React.ComponentProps<typeof AvatarPrimitive.Image> {
  src: string        // Image URL
  alt: string        // Alt text for accessibility
  className?: string
  // All standard img props
}
```

### AvatarFallback Props

```typescript
interface AvatarFallbackProps extends React.ComponentProps<typeof AvatarPrimitive.Fallback> {
  className?: string
  children: React.ReactNode  // Text, icons, or custom content
  // All standard div props
}
```

## Component API

### Avatar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `React.ReactNode` | - | AvatarImage and AvatarFallback components |

### AvatarImage

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `alt` | `string` | - | Alt text (required for accessibility) |
| `className` | `string` | - | Additional CSS classes |

### AvatarFallback

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Fallback content (initials, icon, etc.) |
| `className` | `string` | - | Additional CSS classes |

### Return Type

```typescript
JSX.Element
```

## Usage Examples

### User Initials

```tsx
<Avatar>
  <AvatarImage src="/john-doe.jpg" alt="John Doe" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### With User Icon

```tsx
import { User } from 'lucide-react'

<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>
    <User className="size-4 text-neutral-500" />
  </AvatarFallback>
</Avatar>
```

### In a List

```tsx
<div className="flex items-center gap-3">
  <Avatar className="size-10">
    <AvatarImage src="/user.jpg" alt="John Doe" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <div>
    <p className="font-medium">John Doe</p>
    <p className="text-sm text-neutral-500">john@example.com</p>
  </div>
</div>
```

### With Tooltip

```tsx
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

<Tooltip>
  <TooltipTrigger>
    <Avatar>
      <AvatarImage src="/user.jpg" alt="John Doe" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  </TooltipTrigger>
  <TooltipContent>
    <p>John Doe</p>
    <p className="text-xs text-neutral-400">Admin</p>
  </TooltipContent>
</Tooltip>
```

### Multiple Avatars (Stack)

```tsx
<div className="flex -space-x-2">
  <Avatar className="border-2 border-white">
    <AvatarImage src="/user1.jpg" alt="User 1" />
    <AvatarFallback>U1</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-white">
    <AvatarImage src="/user2.jpg" alt="User 2" />
    <AvatarFallback>U2</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-white">
    <AvatarImage src="/user3.jpg" alt="User 3" />
    <AvatarFallback>U3</AvatarFallback>
  </Avatar>
</div>
```

### With Status Indicator

```tsx
<div className="relative inline-block">
  <Avatar>
    <AvatarImage src="/user.jpg" alt="John Doe" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-green-500" />
</div>
```

## Usage in WP Statistics

### Visitor Profile Display

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function VisitorProfile({ visitor }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src={visitor.avatar} alt={visitor.name} />
        <AvatarFallback>
          {visitor.name.split(' ').map(n => n[0]).join('').toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">{visitor.name}</p>
        <p className="text-sm text-neutral-500">{visitor.location}</p>
      </div>
    </div>
  )
}
```

### Top Contributors List

```tsx
function TopContributors({ users }) {
  return (
    <div className="space-y-3">
      {users.map((user) => (
        <div key={user.id} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="size-8">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-xs">
                {user.initials}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm">{user.name}</span>
          </div>
          <span className="text-sm font-medium">{user.contributions}</span>
        </div>
      ))}
    </div>
  )
}
```

### Admin Header

```tsx
import { User } from 'lucide-react'

function AdminHeader({ admin }) {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="size-9">
        <AvatarImage src={admin.avatar} alt={admin.name} />
        <AvatarFallback>
          <User className="size-4" />
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{admin.name}</span>
        <span className="text-xs text-neutral-500">{admin.role}</span>
      </div>
    </div>
  )
}
```

### With WordPress i18n

```tsx
import { __ } from '@wordpress/i18n'

<Avatar>
  <AvatarImage src={user.avatar} alt={__('User avatar', 'wp-statistics')} />
  <AvatarFallback aria-label={__('User initials', 'wp-statistics')}>
    {user.initials}
  </AvatarFallback>
</Avatar>
```

## Accessibility Features

The Avatar component is built on Radix UI's Avatar primitive, providing built-in accessibility features:

### Alt Text

Always provide descriptive alt text for images:

```tsx
<AvatarImage src="/user.jpg" alt="John Doe profile picture" />
```

### Fallback Content

The fallback is automatically announced by screen readers:

```tsx
<AvatarFallback aria-label="User initials JD">
  JD
</AvatarFallback>
```

### Semantic HTML

- Uses semantic HTML elements
- Proper ARIA attributes automatically applied by Radix UI
- Keyboard navigation support for interactive avatars

## TypeScript Support

The component provides full TypeScript support through Radix UI's type definitions:

```typescript
import type { ComponentProps } from 'react'
import type * as AvatarPrimitive from '@radix-ui/react-avatar'

type AvatarProps = ComponentProps<typeof AvatarPrimitive.Root>
type AvatarImageProps = ComponentProps<typeof AvatarPrimitive.Image>
type AvatarFallbackProps = ComponentProps<typeof AvatarPrimitive.Fallback>
```

### Type-Safe Usage

```typescript
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

interface UserAvatarProps {
  src: string
  alt: string
  fallback: string
  size?: 'sm' | 'md' | 'lg'
}

function UserAvatar({ src, alt, fallback, size = 'md' }: UserAvatarProps) {
  const sizeClasses = {
    sm: 'size-6',
    md: 'size-8',
    lg: 'size-10',
  }

  return (
    <Avatar className={sizeClasses[size]}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}
```

## Related Components

### UI Components Used
- **[Tooltip](tooltip.md)** - Display user information on hover
- **[Badge](badge.md)** - Status indicators with avatars

## Best Practices

### Do's ✅

- Always provide meaningful alt text for `AvatarImage`
- Include a fallback for every avatar (initials or icon)
- Use consistent sizing across similar contexts
- Keep fallback text short (2-3 characters for initials)
- Optimize avatar images for web (compress, proper format)
- Use descriptive aria-labels for fallback content
- Maintain consistent border styles when stacking avatars

### Don'ts ❌

- Don't use avatars without fallback content
- Don't forget alt text on images (accessibility requirement)
- Don't use very large images without optimization
- Don't use more than 3 characters in fallback text
- Don't mix different avatar sizes in the same group
- Don't override core styles that affect accessibility

---

*Last Updated: 2025-12-15*
