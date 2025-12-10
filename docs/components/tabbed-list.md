---
title: "Tabbed List"
type: "component"
status: "Not Started"
used_in_widgets:
  - "top-content"
---

# Tabbed List Component

Displays content items in a tabbed interface with thumbnails, supporting multiple sorting options and "See all" links to full reports.

## Component Configuration

- **Type**: Component
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Used In Widgets

This component is used by the following widgets:

- [Top Content](../widgets/top-content.md)

## Overview

The Tabbed List component presents content items organized in tabs, with each tab showing a different sort order or filter. Each item displays a thumbnail image on the left, primary text (e.g., title), and secondary text (e.g., view count). Tabs can optionally include a "See all" link that navigates to a full report with appropriate filters applied.

## Configuration Options

Widgets using this component can configure the following options:

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| **Tabs** | Array | List of tab configurations (see Tab Configuration below) | (Required) |
| **Items per Tab** | Number | Maximum number of items to display per tab | 5 |
| **Show Thumbnail** | Boolean | Display content thumbnail on left side of each item | true |
| **Thumbnail Placeholder** | Boolean | Show placeholder image when no featured image exists | true |

## Tab Configuration

Each tab in the Tabs array contains the following properties:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| **Label** | String | Yes | Tab name displayed in the tab bar (e.g., "Most Popular") |
| **Sort By** | String | Yes | Field to sort items by (e.g., "views", "comments", "date") |
| **Sort Order** | String | No | Sort direction: "desc" (default) or "asc" |
| **Secondary Text Format** | String | Yes | Format string for secondary line (e.g., "\{views\} views") |
| **Link to Report** | Object | No | "See all" link configuration (see below) |

### Link to Report Configuration

| Property | Type | Description |
|----------|------|-------------|
| **Text** | String | Link text (e.g., "See all posts") |
| **URL** | String | Target report URL |
| **Filters** | Object | Filters to apply (e.g., sort, date range) |
| **Respect Date Range** | Boolean | Pass current date picker selection to the linked report |

## List Item Structure

Each item in the list displays:

| Element | Position | Description |
|---------|----------|-------------|
| **Thumbnail** | Left | Content featured image or placeholder |
| **Primary Text** | Right of thumbnail, first line | Main text (e.g., post title) |
| **Secondary Text** | Right of thumbnail, second line | Formatted subtext (e.g., "1,234 views") |

## Thumbnail Behavior

- **Source**: Post/page featured image
- **Fallback**: Generic placeholder image when no featured image exists
- **Size**: Square thumbnail, size defined in Figma
- **Click**: Clicking thumbnail navigates to the content item

## Tab Behavior

- **Default Tab**: First tab is selected by default
- **Tab Switch**: Clicking a tab loads its sorted content
- **Active State**: Selected tab has visual indicator (defined in Figma)
- **Data Loading**: Each tab fetches its own sorted data set

## "See All" Link

When configured for a tab:

- **Position**: Below the list items within that tab
- **Behavior**: Navigates to full report with filters applied
- **Date Range**: When "Respect Date Range" is enabled, passes current date picker selection
- **Visibility**: Only appears for tabs with Link to Report configured

## Empty State

When no data is available for a tab:
- "No content available for the selected period"

## Related Documentation

- [Top Content Widget](../widgets/top-content.md)
- [Global Rules](../global/global-rules.md)

---

*Last Updated: 2025-12-10*
