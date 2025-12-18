---
title: "Table Component"
type: "frontend-component"
category: "ui"
status: "Done"
component_path: "resources/react/src/components/ui/table.tsx"
storybook: true
---

# Table Component

A set of primitive table components from shadcn/ui for building accessible, styled data tables.

## Component Information

- **Type**: UI Component (shadcn/ui)
- **Location**: `resources/react/src/components/ui/table.tsx`
- **Storybook**: [View in Storybook](https://ui.wp-statistics.com/?path=/story/ui-table--default)
- **shadcn/ui**: [Official Documentation](https://ui.shadcn.com/docs/components/table)
- **Dependencies**: None (native HTML elements with styling)

## Overview

The Table component provides styled primitives for building HTML tables. These are low-level building blocks that can be composed to create custom table layouts, or used with TanStack Table for full-featured data grids.

## Import

```typescript
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@/components/ui/table'
```

## Basic Usage

```tsx
<Table>
  <TableCaption>A list of recent visitors</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Country</TableHead>
      <TableHead className="text-right">Views</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>United States</TableCell>
      <TableCell className="text-right">254</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jane Smith</TableCell>
      <TableCell>Canada</TableCell>
      <TableCell className="text-right">189</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## With Footer

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Page</TableHead>
      <TableHead className="text-right">Views</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {pages.map((page) => (
      <TableRow key={page.id}>
        <TableCell>{page.title}</TableCell>
        <TableCell className="text-right">{page.views}</TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell>Total</TableCell>
      <TableCell className="text-right">{totalViews}</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

## With Selection State

```tsx
<TableRow data-state={isSelected ? 'selected' : undefined}>
  <TableCell>Content</TableCell>
</TableRow>
```

## Components

| Component | HTML Element | Description |
|-----------|--------------|-------------|
| `Table` | `<table>` | Root table container |
| `TableHeader` | `<thead>` | Header section |
| `TableBody` | `<tbody>` | Body section |
| `TableFooter` | `<tfoot>` | Footer section |
| `TableRow` | `<tr>` | Table row |
| `TableHead` | `<th>` | Header cell |
| `TableCell` | `<td>` | Data cell |
| `TableCaption` | `<caption>` | Table caption |

## Styling

### Table
- Full width
- Small text (text-sm)
- Caption at bottom

### TableRow
- Bottom border
- Hover background (muted/50)
- Selected state background

### TableHead
- Height: 40px (h-10)
- Normal font weight
- Foreground text color

### TableCell
- Padding: 8px (p-2)
- Small text
- Card foreground color

### TableFooter
- Top border
- Muted background
- Medium font weight

## Responsive Tables

Wrap in a scrollable container for horizontal overflow:

```tsx
<div className="overflow-x-auto">
  <Table>
    {/* Many columns */}
  </Table>
</div>
```

## Related Components

- [DataTable](../custom/data-table.md) - Full-featured data table built on these primitives
- [Card](card.md) - Often wraps tables

---

*Last Updated: 2025-12-16*
