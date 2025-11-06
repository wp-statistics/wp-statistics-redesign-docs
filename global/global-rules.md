# Global Design Rules

This document outlines the global design principles, patterns, and rules that apply across the entire WP Statistics interface redesign.

## Table of Contents

1. [Design Principles](#design-principles)
2. [Layout Guidelines](#layout-guidelines)
3. [Widget Grid System](#widget-grid-system)
4. [Component Hierarchy](#component-hierarchy)
5. [Widget Configuration Standards](#widget-configuration-standards)
6. [Best Practices](#best-practices)

---

## Design Principles

### Consistency
- Maintain consistent patterns across all report pages
- Use the same components for similar functionality
- Follow established interaction patterns

### Clarity
- Present data in clear, easy-to-understand visualizations
- Use appropriate chart types for different data types
- Provide contextual help where needed

### Performance
- Optimize for fast loading times
- Implement lazy loading for heavy widgets
- Cache data appropriately

### Accessibility
- Follow WCAG 2.1 AA standards
- Ensure keyboard navigation support
- Provide appropriate ARIA labels

---

## Layout Guidelines

### Page Structure

Every report page follows this structure:

```
┌─────────────────────────────────────┐
│         Page Header                  │
│  (Title + Interactions)              │
├─────────────────────────────────────┤
│         Widget Row 1                 │
│  (1-4 widgets)                       │
├─────────────────────────────────────┤
│         Widget Row 2                 │
│  (1-4 widgets)                       │
├─────────────────────────────────────┤
│         Widget Row N                 │
│  (1-4 widgets)                       │
└─────────────────────────────────────┘
```

### Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

---

## Widget Grid System

### Column Layout Rules

Widgets are arranged in rows with 1-4 columns:

- **1 Column**: Full width (100%)
- **2 Columns**: Each widget takes 50% width
- **3 Columns**: Each widget takes 33.33% width
- **4 Columns**: Each widget takes 25% width

### Responsive Behavior

- **Desktop (1200px+)**: Show widgets as configured
- **Tablet (768px-1199px)**:
  - 4-column rows become 2-column
  - 3-column rows become 2-column
  - 2-column rows remain 2-column
- **Mobile (<768px)**: All widgets stack vertically (single column)

---

## Component Hierarchy

### Level 1: Pages
- Complete report views
- Composed of multiple widgets
- Include page-level interactions

### Level 2: Widgets
- Reusable, self-contained units
- Can appear on multiple pages
- Based on Level 3 components
- Include widget-specific configuration

### Level 3: Components
- Base UI building blocks
- Used by widgets
- Highly reusable
- Examples: Charts, Tables, Cards

---

## Widget Configuration Standards

### Required Fields
- `title`: Widget display name
- `type`: Always "widget"
- `component`: Base component name
- `add_on`: "Free" or add-on name (e.g., "Data Plus")
- `status`: "Not Started" | "In Progress" | "Done"

### Optional Fields
- `figma`: Link to Figma design
- `default_sort`: Default sorting column
- `row_limit`: Default number of rows to display
- `used_in_reports`: List of report pages using this widget

---

## Best Practices

### Data Loading
- Show loading states for all async data
- Implement skeleton screens for better UX
- Handle empty states gracefully
- Provide meaningful error messages

### User Feedback
- Show success/error notifications
- Provide confirmation for destructive actions
- Use tooltips for additional context
- Implement inline validation

### Performance
- Lazy load widgets below the fold
- Implement virtual scrolling for large tables
- Optimize images and assets
- Minimize API calls with proper caching

---

## Related Documentation

- [Menu Structure](menu-structure.md)
- [Interactions Guide](interactions.md)
- [Component Documentation](../components/)
- [Widget Documentation](../widgets/)

---

*Last Updated: 2025-11-06*
