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
- **shadcn/ui (Radix UI edition)** - We install only the required components from shadcn/ui as needed
- **Radix UI** - Accessible, unstyled component primitives (shadcn/ui's foundation)
- **Lucide React** - Icon library
- **Recharts** - Chart and data visualization

> **Note**: shadcn/ui offers two editions: one built on **Radix UI** (our choice) and one on **Base UI**. We use the Radix UI edition for its mature accessibility features and wider community adoption. Components are installed on-demand using the CLI (`npx shadcn@latest add <component>`) rather than installing the entire library.

### State Management & Data
- **TanStack Query** - Async state management and data fetching
- **WordPress i18n** - Internationalization support

### Development Tools
- **Vite** - Fast build tool and dev server
- **Storybook** - Component development and documentation
- **class-variance-authority** - Type-safe variant styles
- **tailwind-merge & clsx** - Conditional class name utilities

## Libraries & Versions

Key dependencies used in the React dashboard with their versions and repositories:

### Core

| Library | Version | Repository |
|---------|---------|------------|
| React | ^19.2.0 | [facebook/react](https://github.com/facebook/react) |
| TypeScript | ~5.8.3 | [microsoft/TypeScript](https://github.com/microsoft/TypeScript) |
| Tailwind CSS | ^4.1.14 | [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) |

### Routing & State

| Library | Version | Repository |
|---------|---------|------------|
| TanStack Router | ^1.133.28 | [TanStack/router](https://github.com/TanStack/router) |
| TanStack Query | ^5.90.5 | [TanStack/query](https://github.com/TanStack/query) |
| TanStack Table | ^8.21.3 | [TanStack/table](https://github.com/TanStack/table) |

### UI Components

| Library | Version | Repository |
|---------|---------|------------|
| shadcn/ui (CLI) | ^3.4.2 | [shadcn-ui/ui](https://github.com/shadcn-ui/ui) |
| Radix UI Avatar | ^1.1.10 | [radix-ui/primitives](https://github.com/radix-ui/primitives) |
| Radix UI Checkbox | ^1.3.3 | [radix-ui/primitives](https://github.com/radix-ui/primitives) |
| Radix UI Dialog | ^1.1.15 | [radix-ui/primitives](https://github.com/radix-ui/primitives) |
| Radix UI Dropdown Menu | ^2.1.16 | [radix-ui/primitives](https://github.com/radix-ui/primitives) |
| Radix UI Popover | ^1.1.15 | [radix-ui/primitives](https://github.com/radix-ui/primitives) |
| Radix UI Select | ^2.2.6 | [radix-ui/primitives](https://github.com/radix-ui/primitives) |
| Radix UI Tooltip | ^1.2.8 | [radix-ui/primitives](https://github.com/radix-ui/primitives) |
| Lucide React | ^0.544.0 | [lucide-icons/lucide](https://github.com/lucide-icons/lucide) |

### Charts & Visualization

| Library | Version | Repository |
|---------|---------|------------|
| Recharts | 2.15.4 | [recharts/recharts](https://github.com/recharts/recharts) |
| Chart.js | ^4.4.3 | [chartjs/Chart.js](https://github.com/chartjs/Chart.js) |
| react-chartjs-2 | ^5.2.0 | [reactchartjs/react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2) |
| react-simple-maps | ^3.0.0 | [zcreativelabs/react-simple-maps](https://github.com/zcreativelabs/react-simple-maps) |

### Utilities

| Library | Version | Repository |
|---------|---------|------------|
| class-variance-authority | ^0.7.1 | [joe-bell/cva](https://github.com/joe-bell/cva) |
| clsx | ^2.1.1 | [lukeed/clsx](https://github.com/lukeed/clsx) |
| tailwind-merge | ^3.3.1 | [dcastil/tailwind-merge](https://github.com/dcastil/tailwind-merge) |
| date-fns | ^3.6.0 | [date-fns/date-fns](https://github.com/date-fns/date-fns) |
| axios | ^1.12.2 | [axios/axios](https://github.com/axios/axios) |

### Drag & Drop

| Library | Version | Repository |
|---------|---------|------------|
| @dnd-kit/core | ^6.3.1 | [clauderic/dnd-kit](https://github.com/clauderic/dnd-kit) |
| @dnd-kit/sortable | ^10.0.0 | [clauderic/dnd-kit](https://github.com/clauderic/dnd-kit) |

### Development

| Library | Version | Repository |
|---------|---------|------------|
| Vite (rolldown-vite) | 7.1.12 | [rolldown/rolldown](https://github.com/rolldown/rolldown) |
| Storybook | ^10.0.3 | [storybookjs/storybook](https://github.com/storybookjs/storybook) |
| ESLint | ^9.36.0 | [eslint/eslint](https://github.com/eslint/eslint) |
| Prettier | ^3.6.2 | [prettier/prettier](https://github.com/prettier/prettier) |

### WordPress

| Library | Version | Repository |
|---------|---------|------------|
| @wordpress/i18n | ^6.7.0 | [WordPress/gutenberg](https://github.com/WordPress/gutenberg) |

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
- Only required components are installed from shadcn/ui using the CLI (`npx shadcn@latest add <component>`)
- Uses the **Radix UI edition** of shadcn/ui (not Base UI)
- Components are copied into the project for full ownership and customization
- Built on Radix UI primitives (Dialog, Popover, Select, etc.)
- Styled with Tailwind CSS utility classes
- Customizable and themeable via CSS variables
- Fully accessible (WCAG 2.1 AA compliant)
- Type-safe with TypeScript
- Documented with [Storybook](https://ui.wp-statistics.com)

**Custom Components** (`components/custom/`)
- Domain-specific WP Statistics components
- Composed from UI components
- Include business logic and state management
- Data fetching and API integration
- Analytics-specific functionality

## Documentation Sections

### UI Components
Base component library documentation (shadcn/ui):
- [Avatar](ui/avatar.md) - User profile image with fallback support
- [Badge](ui/badge.md) - Status labels and metadata indicators
- [Breadcrumb](ui/breadcrumb.md) - Navigation trail for page hierarchy
- [Button](ui/button.md) - Primary interactive element with variants and sizes
- [Card](ui/card.md) - Container for grouping related content
- [Chart](ui/chart.md) - Recharts wrapper with theming and configuration
- [Checkbox](ui/checkbox.md) - Accessible checkbox input
- [Collapsible](ui/collapsible.md) - Expandable/collapsible content sections
- [Dropdown Menu](ui/dropdown-menu.md) - Action menus with items, checkboxes, and submenus
- [Input](ui/input.md) - Text input with validation support
- [Logo](ui/logo.md) - WP Statistics brand logo
- [Popover](ui/popover.md) - Floating content panel
- [Select](ui/select.md) - Form select dropdown
- [Separator](ui/separator.md) - Visual divider for content
- [Sheet](ui/sheet.md) - Slide-out panel from screen edges
- [Sidebar](ui/sidebar.md) - Navigation sidebar with collapsible states
- [Skeleton](ui/skeleton.md) - Loading placeholder animation
- [Table](ui/table.md) - Base table primitives
- [Tooltip](ui/tooltip.md) - Contextual information on hover

### Custom Components
WP Statistics domain-specific components:
- [DataTable](custom/data-table.md) - Feature-rich data table with sorting, pagination, column management
- [FilterBar](custom/filter-bar.md) - Active filters display with removable chips
- [FilterChip](custom/filter-chip.md) - Single removable filter tag
- [GlobalMap](custom/global-map.md) - Interactive world map with country data visualization
- [HorizontalBar](custom/horizontal-bar.md) - Single bar item with percentage fill and trend
- [HorizontalBarList](custom/horizontal-bar-list.md) - Card-based list of horizontal bars
- [LineChart](custom/line-chart.md) - Time-series chart with multiple metrics and comparison
- [Metrics](custom/metrics.md) - Grid-based KPI display with trend indicators

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
- **Radix UI Edition** - We use shadcn/ui built on Radix UI (not Base UI)
- **On-Demand Installation** - Only required components are installed via `npx shadcn@latest add <component>`
- **Accessible** - Built on Radix UI primitives (WCAG 2.1 AA)
- **Customizable** - Components are copied into your project for full ownership
- **Themeable** - CSS variables for colors and styling
- **Type-Safe** - Full TypeScript support
- **Composable** - Build complex UIs from simple primitives
- **Storybook** - Interactive documentation at [ui.wp-statistics.com](https://ui.wp-statistics.com)

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

*Last Updated: 2025-12-16*
