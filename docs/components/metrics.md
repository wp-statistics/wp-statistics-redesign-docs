---
title: "Metrics"
type: "component"
status: "Done"
used_in_widgets: []
---

# Metrics Component

Displays key performance indicators in a responsive grid layout with each metric shown in an individual box.

## Component Configuration

- **Type**: Component
- **Status**: Done
- **React Component**: [`metrics.tsx`](../technical/frontend/custom/metrics.md)
- **Figma Design**: [Add link when available]

## Used In Widgets

This component is not yet used in any widgets.

## Overview

The Metrics component presents statistical data in a clean, scannable grid format. Each metric is displayed in its own box containing the metric name, current value, optional previous period comparison, and optional external source attribution. The layout automatically optimizes the number of columns per row (maximum 4) based on the total number of metrics to ensure balanced visual presentation.

## Configuration Options

Widgets using this component can configure the following options:

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| **Metrics** | Array | List of metric items to display | (Required) |
| **Show Previous Period** | Boolean | Enable/disable previous period comparison display | true |
| **Show Source Icons** | Boolean | Display external source icons for non-WP Statistics metrics | true |

## Metric Box Properties

Each individual metric box contains the following properties (configured at widget level):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| **Metric Name** | String | Yes | Display name of the metric (e.g., "Visitors", "Views") |
| **Tooltip** | String | No | Additional context shown on hover (displays comparison number when previous period is enabled) |
| **Value** | Mixed | Yes | Current metric value (supports numbers, percentages, currency, time durations) |
| **Previous Period** | Object | No | Contains percentage change and direction for comparison |
| **Source Icon** | String | No | Icon identifier for external data sources (e.g., WooCommerce, Google Analytics) |

## Layout Behavior

The component uses a dynamic grid layout that optimizes the presentation based on the total number of metrics:

- **Minimum**: 1 metric
- **Maximum**: 12 metrics
- **Row Constraints**: Each row can contain 1-4 metrics

### Optimization Logic

The layout algorithm prioritizes:
1. **Minimize number of rows** - Reduce vertical space usage
2. **Maximize metric box width** - Provide larger boxes within the row constraint

### Distribution Examples

- 1 metric → 1 column (1 row)
- 2 metrics → 2 columns (1 row)
- 3 metrics → 3 columns (1 row)
- 4 metrics → 4 columns (1 row)
- 5 metrics → 3 + 2 columns (2 rows)
- 6 metrics → 3 columns (2 rows)
- 7 metrics → 4 + 3 columns (2 rows)
- 8 metrics → 4 columns (2 rows)
- 9 metrics → 3 columns (3 rows)
- 10 metrics → 4 + 3 + 3 columns (3 rows)
- 11 metrics → 4 + 4 + 3 columns (3 rows)
- 12 metrics → 4 columns (3 rows)

## Previous Period Comparison

When enabled, each metric displays:

- **Percentage Change**: Numeric percentage difference from previous period
- **Direction Indicator**: Visual arrow showing increase/decrease trend
- **Color Coding**: Visual differentiation between positive and negative changes
- **Tooltip**: Hover reveals the actual comparison number

## Source Icons

For metrics sourced from external systems:

- **Position**: Top-right corner of metric box
- **Purpose**: Visual attribution to indicate data origin (e.g., WooCommerce, Google Analytics)
- **Display**: Only shown when metric has an external source

## Empty State

When no metrics are configured, the component is not displayed.

## Related Documentation

- [Components Overview](../intro.md)
- [Frontend Implementation](../technical/frontend/custom/metrics.md) - Technical implementation details for developers

---

*Last Updated: 2025-12-16*
