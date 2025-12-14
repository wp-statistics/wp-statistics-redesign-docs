---
title: "Top Pages"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Not Started"
default_sort: "views"
row_limit: 10
used_in_reports:
  - "visitors-overview"
---

# Top Pages Widget

Displays a ranked list of the most visited pages on your website.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | (Optional) |
| **Default Sort** | views |
| **Row Limit** | 10 |
| **Column Management** | ✅ Yes |
| **Pagination** | ✅ Yes |

## Used In Reports

- [Visitors Overview](../reports/visitor-insights/visitors-overview.md)

## Columns Displayed

| Column | Description | Sortable |
|--------|-------------|----------|
| # | Rank | No |
| Page Title | Title of the page/post | Yes |
| URL | Page URL (truncated) | No |
| Views | Number of page views | Yes |
| Unique Visitors | Unique visitors to page | Yes |

## Features

### Ranking
- Shows rank number (#1, #2, etc.)
- Re-ranks when sorting by different column
- Visual indicator for top 3 positions

### Page Information
- **Title**: Clickable link to page
- **URL**: Shows path, full URL on hover
- **Type Badge**: Page/Post/Custom type indicator

### Interactive Elements
- **Click Page Title**: Opens page in new tab
- **Hover Row**: Shows quick stats tooltip
- **Click "View All"**: Expands to show more pages

### Metrics
- **Views**: Total page views in date range
- **Unique Visitors**: Unique visitors who viewed page
- **Trend Indicator**: Up/down arrow vs previous period

## Data Processing

### Title Extraction
- Uses page title from WordPress
- Falls back to URL path if title unavailable
- Truncates long titles with ellipsis
- Shows full title on hover

### URL Display
- Removes domain for cleaner display
- Shows relative path only
- Full URL available on hover/click

## Empty State

When no page view data available:
- "No page views recorded for the selected period"

## Sorting Options

- **By Views** (default): Most viewed first
- **By Unique Visitors**: Most unique visitors first
- **By Title**: Alphabetical order
- **By Trend**: Biggest increase first

---

*Last Updated: 2025-11-06*
