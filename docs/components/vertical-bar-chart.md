---
title: "Vertical Bar Chart"
type: "component"
status: "Done"
used_in_widgets:
  - "traffic-by-hour"
---

# Vertical Bar Chart Component

Displays one or two metrics across defined categories such as hours, days, pages, or countries, helping users visually compare values over time or between items at a glance.

## Component Configuration

- **Type**: Component
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This component is used by the following widgets:

- [Traffic by Hour](../widgets/traffic-by-hour.md)

## Overview

Bar Charts display one or two metrics across defined categories. They help users visually compare values over time or between items through vertical bars representing metric values. The component supports comparison with previous periods and dual-metric visualization.

## Configuration Options

Widgets using this component can configure the following options:

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| **Primary Metric** | String | Required metric used to define bar height (e.g., Visitors, Views) | (Required) |
| **Secondary Metric** | String | Optional metric displayed alongside primary for comparison | null |
| **Time Format** | Boolean | Respects WordPress time format (12h or 24h) for time-based charts | true |
| **Previous Period Comparison** | Boolean | Enable/disable previous period overlay | false |
| **X-Axis Categories** | Array | Category labels (e.g., Hours, Days, Pages) | (Required) |

## Shared Behavior

| Feature | Description |
|---------|-------------|
| **Primary Metric** | Required metric used to define the bar height (e.g., Visitors, Views) |
| **Secondary Metric** | Optional metric displayed alongside the primary for comparison |
| **Time Format** | Respects WordPress time format (12h or 24h) for time-based charts |
| **Tooltip on Hover** | Shows up to two metrics per category (Primary and Secondary, if available) |
| **Bar Styling** | Solid color for current period; hatched style if previous period comparison is enabled |
| **Y-Axis** | Adjusts dynamically based on the highest metric value shown |
| **X-Axis** | Displays category labels (e.g., Hours, Days, Pages) evenly spaced |

## Visual Elements

### Bar Styling

| Element | Appearance |
|---------|------------|
| **Primary Metric** | Solid-colored bar |
| **Secondary Metric** | Differently colored bar |
| **Previous Period** | Hatched overlay using the same base colors |

### Axes

- **X-Axis (Horizontal)**: Displays category labels evenly spaced
- **Y-Axis (Vertical)**: Shows metric values with dynamic scale based on highest value

### Tooltip

Hover interaction displays a box showing:
- Category name
- Metric names and values (maximum 2 metrics)
- Previous period values if comparison is enabled

## Global Behavior

### Comparison Support

When "Compare to Previous Period" is enabled:
- Previous period data appears as hatched bars next to current values
- Uses the same base colors as current period
- Tooltip includes both current and previous period values

### Dual Metric Display

If a secondary metric is present:
- Shown with a distinct color
- Appears in the tooltip and legend
- Displayed alongside primary metric for each category

### No Data Handling

Categories with no data:
- Display a zero-height bar (invisible if zero)
- Or are not rendered at all, depending on widget configuration

## Time Format Support

For time-based charts (hours):
- Respects WordPress time format setting
- **12-hour format**: 12 AM, 1 AM, 2 AM... 11 PM
- **24-hour format**: 0, 1, 2... 23

## Visual Style Guide

| Element | Appearance |
|---------|------------|
| Primary Metric | Solid-colored bar |
| Secondary Metric | Differently colored bar |
| Previous Period | Hatched overlay using the same base colors |
| Tooltip | Box showing metric names and values (max 2) |
| Axes | Horizontal X-axis (categories), Vertical Y-axis (values) |

## Empty State

When no data is available for the selected period:
- "No data available for the selected period"

## Related Documentation

- [Line Chart Component](../components/line-chart.md) - For trend visualization over time
- [Components Overview](../README.md#components)

---

*Last Updated: 2025-11-11*
