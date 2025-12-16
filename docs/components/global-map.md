---
title: "Global Map"
type: "component"
status: "Done"
used_in_widgets:
  - "global-visitor-distribution"
---

# Global Map Component

Visualizes country-level distribution for a selected metric, helping users identify geographical patterns and regional engagement through an interactive world map.

## Component Configuration

- **Type**: Component
- **Status**: Done
- **React Component**: [`global-map.tsx`](../technical/frontend/custom/global-map.md)
- **Figma Design**: [Add link when available]

## Used In Widgets

This component is used by the following widgets:

- [Global Visitor Distribution](../widgets/global-visitor-distribution.md)

## Overview

Global maps visualize country-level distribution for a selected metric. The map uses a color-coded system to represent metric values across countries, making it easy to identify geographical patterns and compare regional engagement at a glance.

## Configuration Options

Widgets using this component can configure the following options:

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| **Metric Source** | String | Primary metric to visualize (e.g., Visitors, Views) | (Required) |
| **Zoom Controls** | Boolean | Enable/disable zoom-in and zoom-out buttons | true |
| **Legend** | Boolean | Show/hide gradient legend bar | true |

## Shared Behavior

| Feature | Description |
|---------|-------------|
| **Metric Source** | Uses the primary metric of the current report context |
| **Color Scale** | Countries are shaded based on their metric value (lighter = lower, darker = higher) |
| **Hover Interaction** | Shows Country Name, Flag, and current metric value |
| **Zoom Controls** | Includes zoom-in (+) and zoom-out (−) buttons |
| **Legend** | Gradient bar showing the range of values (from 0 to the highest recorded metric) |

## Visual Elements

### Color Scale

Countries are colored using a gradient scale:
- **Lighter shades**: Lower metric values
- **Darker shades**: Higher metric values
- **Gray**: Countries with no data during the selected period

The color intensity directly correlates with the metric value, making patterns immediately visible.

### Hover Interaction

When hovering over a country:
- **Country Name**: Full country name
- **Country Flag**: Flag icon
- **Metric Value**: Current value for the selected metric

### Zoom Controls

Interactive zoom buttons allow users to:
- **Zoom In (+)**: Magnify specific regions
- **Zoom Out (−)**: View the full global map

### Legend

Horizontal gradient bar displayed at the bottom of the widget:
- **Left end**: 0 (minimum value)
- **Right end**: Highest recorded metric value
- Shows the full range of values represented in the color scale

## Global Behavior

### No Data Highlighting

Countries with no data during the selected period appear in **gray**, distinguishing them from countries with zero or low values.

### Metric-Agnostic

The map adapts to any primary metric used in the report (e.g., Visitors, Views, Page Count, Goal Completions) without requiring changes to the widget itself. The metric context is inherited from the widget configuration.

## Visual Style Guide

| Element | Appearance |
|---------|------------|
| **Active Country** | Shaded blue (darker = higher value) |
| **No Data Country** | Light gray |
| **Hover Box** | Shows Country Flag + Name + Metric Value |
| **Legend Bar** | Horizontal gradient from 0 to max value at bottom of widget |

## Technical Notes

- This component currently supports **country-level** data only
- All country names follow the **ISO 3166-1** naming convention
- Map data is updated based on the selected date range in the report

## Empty State

When no country data is available for the selected period:
- All countries appear in gray
- Legend shows "No data available for the selected period"

## Related Documentation

- [Components Overview](../intro.md)
- [Frontend Implementation](../technical/frontend/custom/global-map.md) - Technical implementation details for developers

---

*Last Updated: 2025-12-16*
