---
title: "Frontend Documentation"
sidebar_position: 1
---

# Frontend Documentation

This section contains technical documentation for the WP Statistics v15 React frontend application located in `resources/react/`.

## Overview

The WP Statistics v15 interface is built with modern React and TypeScript, providing a fast, interactive analytics dashboard for WordPress administrators.

## Resources Folder Structure

The plugin's frontend assets are organized in the `resources/` directory:

```
resources/
├── react/          # ✨ Modern React Dashboard (THIS DOCUMENTATION)
│   ├── src/        # React application source code
│   │   ├── components/  # UI and custom components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utilities
│   │   ├── routes/      # File-based routing
│   │   ├── services/    # API services
│   │   └── types/       # TypeScript definitions
│   ├── docs/       # Storybook documentation
│   └── index.react.html
├── frontend/       # Frontend code for site visitors (to be documented separately)
│   ├── css/        # Public-facing CSS
│   ├── js/         # Public-facing JavaScript
│   └── entries/    # Entry points
├── legacy/         # Legacy dashboard code (pre-v15, to be documented separately)
│   ├── javascript/ # Old admin JS
│   ├── sass/       # Old admin styles
│   ├── mail/       # Email templates
│   └── vendor/     # Third-party libraries
└── json/           # Static JSON data (to be documented separately)
    └── source-channels.json
```

```
public/
└── react/          # Build output directory (compiled assets from resources/react/)
    ├── css/        # Compiled stylesheets
    ├── js/         # Bundled JavaScript
    └── assets/     # Other compiled assets
```

**Scope**: This documentation covers **only** the React dashboard in `resources/react/`. The other directories serve different purposes:
- **`react/`** - Modern admin dashboard (v15) - **DOCUMENTED HERE**
- **`frontend/`** - Code for site visitors (public-facing)
- **`legacy/`** - Legacy admin dashboard (pre-v15)
- **`json/`** - Static data files
- **`public/react/`** - Build output from `resources/react/`

## Tech Stack

### Core Framework
- **React 19** - Modern React with concurrent features
- **TypeScript** - Type-safe development
- **TanStack Router** - File-based routing system
- **TailwindCSS** - Utility-first CSS framework

### UI Components
- **Radix UI** - Accessible, unstyled component primitives
- **shadcn/ui** - Beautiful, customizable component library
- **Lucide React** - Icon library
- **Recharts** - Chart and data visualization

### State Management & Data
- **TanStack Query** - Async state management and data fetching
- **WordPress i18n** - Internationalization support

### Development Tools
- **Vite** - Fast build tool and dev server
- **Storybook** - Component development and documentation
- **class-variance-authority** - Type-safe variant styles
- **tailwind-merge & clsx** - Conditional class name utilities

## Architecture

### React Application Structure (`resources/react/src/`)

```
resources/react/src/
├── components/
│   ├── ui/              # Base UI components (Button, Input, Card, etc.)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── select.tsx
│   │   ├── table.tsx
│   │   ├── sidebar.tsx
│   │   └── ... (21 components)
│   └── custom/          # Custom composite components
│       ├── data-table.tsx
│       ├── filter-button.tsx
│       ├── filter-panel.tsx
│       ├── horizontal-bar-list.tsx
│       └── ... (domain-specific)
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
│   └── utils.ts        # cn() helper and utilities
├── routes/              # File-based routing (TanStack Router)
│   ├── (visitor-insights)/  # Visitor analytics routes
│   ├── (referrals)/         # Referral traffic routes
│   └── ... (route groups)
├── services/            # API services and data fetching
│   └── visitor-insight/ # Visitor data services
├── types/               # TypeScript type definitions
├── app.tsx              # Root application component
├── main.tsx             # Application entry point
├── router.tsx           # Router configuration
└── globals.css          # Global styles and Tailwind imports
```

### Component Organization

**UI Components** (`components/ui/`)
- shadcn/ui components copied into the project
- Built on Radix UI primitives (Dialog, Popover, Select, etc.)
- Styled with Tailwind CSS utility classes
- Customizable and themeable via CSS variables
- Fully accessible (WCAG 2.1 AA compliant)
- Type-safe with TypeScript
- Documented with Storybook

**Custom Components** (`components/custom/`)
- Domain-specific WP Statistics components
- Composed from UI components
- Include business logic and state management
- Data fetching and API integration
- Analytics-specific functionality

## Documentation Sections

### UI Components
Base component library documentation (shadcn/ui):
- [Button](ui/button.md) - Primary interactive element with variants and sizes
- More UI components coming soon...

### Custom Components
WP Statistics domain-specific components:
- [Metrics](custom/metrics.md) - Grid-based KPI display with trend indicators
- More custom components coming soon...

### Patterns & Guidelines
Development patterns and best practices:
- Coming soon...

## Getting Started

### Location

All React source code is in:
```
/wp-content/plugins/wp-statistics/resources/react/
```

### Local Development

```bash
# Navigate to react directory
cd wp-content/plugins/wp-statistics/resources/react

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

### Storybook

```bash
# Start Storybook (from resources/react/)
pnpm storybook

# Build Storybook
pnpm build-storybook
```

### Build Output

Compiled assets from the React dashboard are output to:
```
public/react/
├── css/        # Compiled stylesheets from resources/react/
├── js/         # Bundled JavaScript from resources/react/
└── assets/     # Other compiled assets (images, fonts, etc.)
```

**Build Process:**
- **Source**: `resources/react/src/` (React TypeScript source code)
- **Output**: `public/react/` (Compiled production assets)
- **Tool**: Vite (builds and bundles the application)

**Note**: The `resources/frontend/` directory contains separate code for public-facing (site visitor) functionality, not build output.

## Design System

The frontend uses **Tailwind CSS** with **shadcn/ui** components as the foundation:

### Tailwind CSS
- **Utility-First** - Build designs using utility classes
- **Customizable** - Configured via `tailwind.config.js`
- **Responsive** - Mobile-first responsive design
- **Dark Mode** - Built-in dark mode support with CSS variables
- **JIT Compiler** - Just-in-time compilation for optimal performance

### shadcn/ui Components
- **Accessible** - Built on Radix UI primitives (WCAG 2.1 AA)
- **Customizable** - Copy components into your project and modify
- **Themeable** - CSS variables for colors and styling
- **Type-Safe** - Full TypeScript support
- **Composable** - Build complex UIs from simple primitives

### Design Tokens
- **Colors** - CSS variables in `globals.css` (e.g., `--primary`, `--secondary`)
- **Spacing** - Tailwind's spacing scale (0.25rem increments)
- **Typography** - Tailwind's font scale (`text-sm`, `text-base`, etc.)
- **Shadows** - Custom shadow utilities (`shadow-xs`, `shadow-sm`, etc.)
- **Borders** - Consistent border radius and widths

## Accessibility

All components are built with accessibility in mind:
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- ARIA attributes where appropriate
- Focus management

---

*Last Updated: 2025-12-14*
