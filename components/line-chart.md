---
title: "Line Chart Component"
type: "component"
status: "Done"
figma: ""
used_in_widgets:
  - "traffic-trends"
  - "logged-in-traffic-trends"
---

# Line Chart Component

A versatile line chart component for displaying time-series data and trends across your analytics.

## Component Configuration

- **Type**: Component (Base UI element)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This component is used by the following widgets:

- [Traffic Trends](../widgets/traffic-trends.md)
- [Logged-in Traffic Trends](../widgets/logged-in-traffic-trends.md)

## Overview

The Line Chart component provides a flexible charting solution for visualizing metrics over time. It supports multiple data series, period comparisons, interactive toggles, and responsive timeframe selection.

## Shared Behavior

| Feature | Description |
|---------|-------------|
| **X-Axis** | Always represents time (Daily, Weekly, Monthly) |
| **Y-Axis** | Represents metric values; auto-scaled and displays max 8 tick marks/labels for readability |
| **Solid Line** | Displays current period data |
| **Dashed Line** | Used in two cases: Previous period data, and the final (incomplete) day/week/month of the current range |
| **Previous Period Toggle** | Clicking on "-- Previous period" in the top-right toggles comparison data visibility |
| **Metric Toggle** | Clicking on any metric label in the legend shows/hides that metric on the chart |
| **Hover Interaction** | Reveals exact values for each visible metric on that date/period |
| **Timeframe Selector** | Dropdown to switch between Daily, Weekly, or Monthly views |
| **Legend** | Displays color-coded metric labels with totals for current and previous periods |
| **Max Data Points** | Chart displays up to 8 points for readability |

## Configuration Options

Widgets using this component can configure the following options:

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| **Title** | String | Chart title displayed at the top | (Required) |
| **Primary Metric** | String | Main metric to display | (Required) |
| **Secondary Metric** | String | Additional metric to display | null |
| **Tertiary Metric** | String | Third metric to display | null |
| **Quaternary Metric** | String | Fourth metric to display | null |
| **Quinary Metric** | String | Fifth metric to display | null |
| **Previous Period** | Boolean | Enable/disable previous period comparison toggle | true |
| **Metric Toggle** | Boolean | Allow users to toggle individual metrics on/off | true |
| **Timeframe Selector** | Boolean | Enable timeframe switching dropdown (Daily/Weekly/Monthly) | true |
| **Legend Display** | Boolean | Show/hide the legend with metric totals | true |

## Global Behavior

### Previous Period Comparison

Can be globally disabled from **WP Statistics Settings → Display**.

When disabled, dashed comparison lines will not appear in any line chart.

**Default**: Enabled

### Incomplete Final Period

The most recent day/week/month is treated as incomplete and shown as a **dashed extension** of the solid line to indicate the partial nature of the data.

## Visual Style Guide

| Element | Appearance |
|---------|------------|
| **Current Metric** | Solid Line (Color-coded) |
| **Previous Metric** | Dashed Line (Color-coded) |
| **Incomplete Period** | Dashed extension of current metric |
| **Max Data Points** | Chart displays up to 8 points for readability |

## Color Codes

Line charts use five preset colors to show different metrics. These colors are used in order:

| Color Name | Order | Color Code |
|------------|-------|------------|
| **Primary** | 1st | #3B82F6 |
| **Secondary** | 2nd | #10B981 |
| **Tertiary** | 3rd | #F59E0B |
| **Quaternary** | 4th | #EF4444 |
| **Quinary** | 5th | #8B5CF6 |

**Notes:**

- Colors always follow this order, based on how many metrics are shown
- These colors are used for both solid and dashed lines, depending on the data type (current, previous, incomplete)

## Empty State

When no data is available for the selected period:

- "No data available"

## Related Documentation

- [Global Rules](../global/global-rules.md)

---

*Last Updated: 2025-11-06*
