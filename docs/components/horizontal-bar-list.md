---
title: "Horizontal Bar List"
type: "component"
status: "Done"
used_in_widgets:
  - "top-referrers"
  - "top-countries"
  - "top-operating-systems"
  - "top-device-categories"
---

# Horizontal Bar List Component

Displays ranked data in a vertical list format with horizontal bars representing relative values, ideal for showing top items by count or metric.

## Component Configuration

- **Type**: Component
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This component is used by the following widgets:

- [Top Referrers](../widgets/top-referrers.md)
- [Top Countries](../widgets/top-countries.md)
- [Top Operating Systems](../widgets/top-operating-systems.md)
- [Top Device Categories](../widgets/top-device-categories.md)

## Overview

The Horizontal Bar List component presents ranked data in an easy-to-scan vertical format. Each item displays a label, count value, optional previous period comparison, and a horizontal bar representing the value proportionally. The list is always sorted by count in descending order, with the top item receiving visual highlighting for emphasis. The component supports aggregating remaining items into an "Other" category and can link to full report pages for deeper analysis.

## Configuration Options

Widgets using this component can configure the following options:

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| **Max Visible Items** | Number | Maximum number of items to display before aggregation | 5 |
| **Show Previous Period** | Boolean | Enable/disable previous period comparison display | true |
| **Show Icons** | Boolean | Display optional icons next to labels (e.g., flags, browser icons) | false |
| **Enable Other Item** | Boolean | Group remaining items beyond max visible as "Other" | false |
| **Link to Full Report** | Object/Boolean | Link configuration \{text, url\} or true for default pattern | null |

## List Item Properties

Each individual list item contains the following properties (configured at widget level):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| **Label** | String | Yes | Display name of the item (e.g., "France", "Chrome") |
| **Count** | Number | Yes | Numeric value determining item rank and bar size |
| **Previous Period** | Object | No | Contains percentage change and direction for comparison |
| **Icon** | String | No | Optional category-specific icon identifier (e.g., country flag, browser logo) |
| **Horizontal Bar** | Visual | Yes | Proportional bar representing the count value |

## Sort Order

Items are always sorted by count in descending order (highest to lowest). This sorting is automatic and not configurable by users.

## Top Item Highlighting

The first item in the list receives visual highlighting to emphasize the top-ranked entry. Visual styling details are defined in Figma.

## Previous Period Comparison

When enabled, each item (except "Other") displays:

- **Percentage Change**: Numeric percentage difference from previous period
- **Direction Indicator**: Visual arrow showing increase/decrease trend
- **Color Coding**: Visual differentiation between positive and negative changes
- **Hover Tooltip**: Reveals date range comparison, count values, and percentage

### Hover Interaction

When hovering over an item with previous period data:
- Tooltip displays the date range comparison (e.g., "Oct 29, 2025 vs Sep 29, 2025")
- Shows current period count value
- Shows previous period count value
- Displays percentage change with direction

## "Other" Item Aggregation

When "Enable Other Item" is active and the total number of items exceeds the max visible items:

- The last visible position shows an "Other" item
- "Other" displays the combined total of all remaining entries
- "Other" includes a horizontal bar proportional to its aggregated count
- "Other" does NOT display previous period comparison
- "Other" is NOT clickable or expandable

Example: If max visible items is 5 and there are 12 total items, positions 1-4 show individual items and position 5 shows "Other" aggregating items 5-12.

## Icons

When enabled, optional icons appear next to each item label:

- **Position**: Left of the label
- **Purpose**: Category-specific visual identification (country flags, browser logos, etc.)
- **Configuration**: Icon identifiers specified at widget level

## Link to Full Report

When configured, a link appears below the list:

- **Position**: Bottom of the component
- **Behavior**:
  - If set to `true`: Uses default link pattern (e.g., "View Entry Pages")
  - If set to object: Uses custom text and URL from configuration
- **Purpose**: Navigate to full report page to view all data beyond top items

## Horizontal Bars

- Bars are proportional to the count value relative to other items in the list
- The item with the highest count has the longest bar
- All other bars scale proportionally

## Empty State

When no data is available for the selected period:
- "No data available for the selected period"

## Related Documentation

- [Components Overview](../intro.md)

---

*Last Updated: 2025-11-08*
