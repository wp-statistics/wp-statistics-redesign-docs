---
title: "Pie Chart Component"
type: "component"
status: "Not Started"
figma: ""
used_in_widgets:
  - "visitor-sources"
  - "search-engines-breakdown"
---

# Pie Chart Component

A circular chart component for displaying proportional data and category distributions.

## Component Configuration

- **Type**: Component (Base UI element)
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Used In Widgets

This component is used by the following widgets:

- [Visitor Sources](../widgets/visitor-sources.md)
- [Search Engines Breakdown](../widgets/search-engines-breakdown.md)

## Overview

The Pie Chart component visualizes data as proportional slices of a circle, making it ideal for showing percentage breakdowns and category distributions. It supports both pie and donut chart variants with interactive features.

## Features

### Core Features
- Pie and donut chart variants
- Interactive segments with hover effects
- Clickable legend
- Percentage and value display
- Smooth animations
- Responsive sizing
- Center label (for donut variant)

### Interactive Features
- **Hover Segment**: Highlight and show tooltip
- **Click Segment**: Trigger filter or drill-down
- **Click Legend**: Toggle segment visibility
- **Touch**: Mobile-friendly interactions

## Chart Variants

### Pie Chart (Default)
- Full circle divided into segments
- Best for 3-6 categories
- Traditional and familiar

**When to Use:**
- Few categories (3-6)
- Simple proportional data
- When familiarity matters

### Donut Chart
- Hollow center for displaying total or key metric
- Modern appearance
- Better for comparing segment sizes

**When to Use:**
- Need center label/metric
- Modern design aesthetic
- More than 4 categories

## Legend

### Position Options
- Right (default)
- Bottom
- Left
- Top

### Interactive Legend
- Click to toggle segment visibility
- Hover highlights corresponding segment
- Show/hide all option

## States

### Default
- All segments visible
- Legend interactive
- Smooth animations on load

### Hover
- Highlighted segment
- Tooltip showing details
- Cursor indicates interactivity

### Selected
- Segment emphasized
- Other segments dimmed (if filter applied)

### Loading
- Skeleton placeholder
- Maintains chart space

### Empty
- "No data available" message
- Suggestion to adjust filters

## Tooltip

Displays on hover:
- Segment name
- Count/value
- Percentage

## Accessibility

- Full keyboard navigation support
- Proper ARIA labels for segments
- Screen reader announcements
- Alternative table view available

## Best Practices

### Data
- Limit to 5-7 categories maximum
- Combine small categories into "Other"
- Sort by value (largest first)

### When NOT to Use
- More than 8 categories (use bar chart instead)
- Comparing trends over time (use line chart)
- Small differences between values (use bar chart)
- Negative values (not supported)

## Related Documentation

- [Visitor Sources Widget](../widgets/visitor-sources.md)
- [Global Rules](../global/global-rules.md)

---

*Last Updated: 2025-11-06*
