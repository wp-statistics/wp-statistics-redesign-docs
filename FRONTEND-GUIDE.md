# Frontend Documentation Guide

This guide provides templates and guidelines for creating frontend component documentation for WP Statistics v15 React application.

## Overview

Frontend documentation covers React components, UI patterns, hooks, utilities, and development guidelines - focused on helping developers understand and use the component library effectively.

## Documentation Types

### Frontend Documentation Categories

1. **UI Components** - Base reusable components (Button, Input, Card, etc.)
2. **Custom Components** - Domain-specific composite components (DataTable, FilterButton, etc.)
3. **Hooks** - Custom React hooks for shared logic
4. **Utilities** - Helper functions and utilities
5. **Patterns** - Development patterns and best practices

## YAML Frontmatter

All frontend documentation files use YAML frontmatter for structured metadata:

### Required Fields

```yaml
---
title: "Component Name"
type: "frontend-component" | "frontend-hook" | "frontend-utility" | "frontend-pattern"
category: "ui" | "custom" | "hooks" | "lib" | "patterns"
status: "Not Started" | "In Progress" | "Done"
---
```

### Optional Fields for Components

```yaml
---
component_path: "src/components/ui/button.tsx"  # Path to component file
storybook: true | false                         # Whether component has Storybook stories
dependencies: []                                 # External package dependencies
related_components: []                          # Related component IDs
---
```

## Templates

### UI Component Template

```markdown
---
title: "Component Name"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "src/components/ui/component-name.tsx"
storybook: true
---

# Component Name

Brief description of the component and its purpose.

## Component Information

- **Type**: UI Component (Base)
- **Status**: Done
- **Location**: \`src/components/ui/component-name.tsx\`
- **Storybook**: Available at \`UI/ComponentName\`
- **Dependencies**:
  - List external dependencies

## Overview

Detailed description of component purpose and capabilities.

## Import

\`\`\`typescript
import { ComponentName } from '@/components/ui/component-name'
\`\`\`

## Basic Usage

### Simple Example

\`\`\`tsx
<ComponentName>Content</ComponentName>
\`\`\`

## Variants

Document all component variants with examples.

### Variant Name

\`\`\`tsx
<ComponentName variant="name">Example</ComponentName>
\`\`\`

**Use case**: When to use this variant

## Props

Document all component props.

## Component API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`propName\` | \`string\` | - | Description |

### Return Type

\`\`\`typescript
JSX.Element
\`\`\`

## Accessibility Features

Document accessibility considerations.

## Usage Examples

### Common Patterns

Document common usage patterns with code examples.

## Implementation in WP Statistics

Show real-world usage from the codebase.

## Storybook Stories

List available Storybook stories.

## TypeScript Support

Document TypeScript types and utilities.

## Related Components

- List related components

## Best Practices

### Do's ✅
- List best practices

### Don'ts ❌
- List things to avoid

---

*Last Updated: YYYY-MM-DD*
```

### Custom Component Template

```markdown
---
title: "Component Name"
type: "frontend-component"
category: "custom"
status: "Done"
component_path: "src/components/custom/component-name.tsx"
storybook: false
---

# Component Name

Brief description of the domain-specific component.

## Component Information

- **Type**: Custom Component (Domain-specific)
- **Status**: Done
- **Location**: \`src/components/custom/component-name.tsx\`
- **Used In**: List pages/features using this component

## Overview

Detailed description of component purpose.

## Import

\`\`\`typescript
import { ComponentName } from '@/components/custom/component-name'
\`\`\`

## Props Interface

\`\`\`typescript
interface ComponentNameProps {
  // Define props
}
\`\`\`

## Usage

\`\`\`tsx
<ComponentName prop="value" />
\`\`\`

## Features

Document key features and capabilities.

## State Management

Document internal state and side effects.

## Dependencies

List component dependencies (UI components used).

## API Integration

If component fetches data, document API usage.

## TypeScript Support

Document types exported by the component.

## Related Components

- List related components

---

*Last Updated: YYYY-MM-DD*
```

### Hook Template

```markdown
---
title: "Hook Name"
type: "frontend-hook"
category: "hooks"
status: "Done"
component_path: "src/hooks/use-hook-name.ts"
---

# useHookName

Brief description of the hook's purpose.

## Hook Information

- **Type**: Custom Hook
- **Status**: Done
- **Location**: \`src/hooks/use-hook-name.ts\`

## Overview

Detailed description of what the hook does.

## Import

\`\`\`typescript
import { useHookName } from '@/hooks/use-hook-name'
\`\`\`

## Signature

\`\`\`typescript
function useHookName(params: Params): ReturnType
\`\`\`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| \`param\` | \`string\` | Yes | Description |

## Return Value

| Property | Type | Description |
|----------|------|-------------|
| \`value\` | \`string\` | Description |

## Usage

\`\`\`tsx
function MyComponent() {
  const { value } = useHookName(params)

  return <div>{value}</div>
}
\`\`\`

## Implementation Details

Document internal behavior.

## Dependencies

List hooks/utilities used internally.

## Related Hooks

- List related hooks

---

*Last Updated: YYYY-MM-DD*
```

### Utility Template

```markdown
---
title: "Utility Name"
type: "frontend-utility"
category: "lib"
status: "Done"
component_path: "src/lib/utility-name.ts"
---

# utilityName

Brief description of the utility function.

## Utility Information

- **Type**: Utility Function
- **Status**: Done
- **Location**: \`src/lib/utility-name.ts\`

## Overview

Detailed description of what the utility does.

## Import

\`\`\`typescript
import { utilityName } from '@/lib/utility-name'
\`\`\`

## Signature

\`\`\`typescript
function utilityName(params: Params): ReturnType
\`\`\`

## Parameters

Document parameters.

## Return Value

Document return value.

## Usage

\`\`\`typescript
const result = utilityName(params)
\`\`\`

## Examples

Provide practical examples.

## Related Utilities

- List related utilities

---

*Last Updated: YYYY-MM-DD*
```

## Writing Guidelines

### Style and Tone

1. **Technical and Practical** - Focus on how developers will use the component
2. **Code-Heavy** - Include plenty of code examples
3. **Type-Safe** - Document TypeScript types and interfaces
4. **Accessible** - Always document accessibility features
5. **Visual** - Link to Storybook when available

### What to Include

- Component purpose and use cases
- All props and variants
- Code examples for common patterns
- TypeScript type information
- Accessibility considerations
- Storybook story references
- Real-world usage from codebase
- Best practices and gotchas

### What NOT to Include

- UI/UX specifications (belongs in product docs)
- Implementation details of dependencies
- Deprecated or experimental features (unless clearly marked)
- Duplicate information from Storybook

## File Naming Convention

Use **kebab-case** for all frontend documentation files:
- ✅ `button.md`
- ✅ `data-table.md`
- ✅ `use-filter-state.md`
- ❌ `Button.md`
- ❌ `data_table.md`

## Cross-References

### Linking to Components

When documenting related components:

```markdown
This component uses the [Button](button.md) component internally.
```

### Linking to Product Documentation

When components implement product features:

```markdown
This component implements the [Top Visitors Widget](../widgets/top-visitors.md) from the product specifications.
```

### Linking to Technical Documentation

When components use APIs:

```markdown
This component fetches data from the [Analytics Query API](../technical/api-endpoints/analytics-query-api.md).
```

## Code Example Guidelines

### Include Imports

Always show imports in examples:

```tsx
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

<Button>
  <ChevronRight />
  Next
</Button>
```

### Show TypeScript Types

Include type annotations:

```tsx
interface MyComponentProps {
  title: string
  onAction: () => void
}

function MyComponent({ title, onAction }: MyComponentProps) {
  return <Button onClick={onAction}>{title}</Button>
}
```

### Highlight Common Patterns

Document patterns used throughout the app:

```tsx
// Loading state pattern
<Button disabled={isLoading}>
  {isLoading && <Loader2 className="animate-spin" />}
  {isLoading ? 'Saving...' : 'Save'}
</Button>
```

## Component API Documentation

### Props Table Format

Use consistent table structure:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'outline'` | `'default'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `disabled` | `boolean` | `false` | Disabled state |

### TypeScript Signatures

Document exported types:

```typescript
// Export from component
export type ButtonProps = React.ComponentProps<typeof Button>
export type ButtonVariant = VariantProps<typeof buttonVariants>
```

## Storybook Integration

When component has Storybook stories:

```markdown
## Storybook Stories

The component includes comprehensive Storybook stories:

- **Default** - Basic usage
- **Variants** - All visual variants
- **Sizes** - All size options
- **Interactive** - Interactive examples

View in Storybook: \`UI/ComponentName\`
```

## Accessibility Documentation

Always include accessibility section:

```markdown
## Accessibility Features

### Keyboard Navigation
- Document keyboard shortcuts

### Screen Readers
- Document ARIA labels and roles

### Focus Management
- Document focus behavior

### States
- Document accessible state indicators
```

## Status Management

Update the `status` field in YAML frontmatter as documentation progresses:

- **Not Started** - Documentation not yet created
- **In Progress** - Actively being written
- **Done** - Complete and accurate

## Integration with Docusaurus

### Sidebar Organization

Components are automatically organized in sidebar by category:

```
Frontend/
├── Introduction
└── UI Components/
    ├── Button
    ├── Input
    └── Card
```

### Code Syntax Highlighting

Use language identifiers for proper highlighting:

- `tsx` - React TypeScript components
- `typescript` - TypeScript code
- `css` - CSS styles
- `bash` - Terminal commands

## Maintenance

### When to Update

- Component API changes
- New variants or features added
- Breaking changes
- New usage patterns discovered
- Accessibility improvements

### Update Process

1. Update the component documentation file
2. Update `status` if needed
3. Update code examples
4. Update "Last Updated" date
5. Verify Storybook links still work
6. Test code examples

## Quality Checklist

Before marking documentation as "Done":

- [ ] YAML frontmatter is complete
- [ ] Component path is correct
- [ ] All props documented with types
- [ ] Code examples are tested
- [ ] Accessibility section included
- [ ] TypeScript types documented
- [ ] Storybook link verified (if applicable)
- [ ] Real-world usage examples included
- [ ] Best practices documented
- [ ] "Last Updated" date is current

## Examples

See existing frontend documentation:
- [Button Component](docs/frontend/ui/button.md)
- [Frontend Introduction](docs/frontend/intro.md)

---

*Last Updated: 2025-12-14*
