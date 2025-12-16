---
title: "Logo Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/logo.tsx"
storybook: false
---

# Logo Component

A custom SVG component displaying the WP Statistics logo.

## Component Information

- **Type**: UI Component (Custom)
- **Location**: `resources/react/src/components/ui/logo.tsx`
- **Dependencies**: None (pure SVG)

## Overview

The Logo component renders the WP Statistics brand logo as an inline SVG. It displays the analytics graph icon alongside the "WP Statistics" wordmark in white color.

## Import

```typescript
import { Logo } from '@/components/ui/logo'
```

## Basic Usage

```tsx
<Logo />
```

## Specifications

| Property | Value |
|----------|-------|
| Width | 135px |
| Height | 32px |
| Color | White (#FFFFFF) |
| Background | Transparent |

## Design Elements

The logo consists of:
1. **Analytics Graph Icon** - A circular chart with line graph and data points
2. **Wordmark** - "WP Statistics" text in custom typography

## Usage Notes

- The logo uses a fixed white color, designed for dark backgrounds
- For light backgrounds, wrap in a container with a dark background or use CSS filters
- The SVG is embedded inline for optimal rendering and no additional network requests

## Example with Dark Background

```tsx
<div className="bg-indigo-600 p-4">
  <Logo />
</div>
```

## Related Components

- [Sidebar](sidebar.md) - Commonly contains the logo in the header

---

*Last Updated: 2025-12-16*
