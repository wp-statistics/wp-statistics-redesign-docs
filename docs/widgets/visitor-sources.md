---
title: "Visitor Sources"
type: "widget"
component: "pie-chart"
add_on: "Free"
status: "Not Started"
default_sort: null
row_limit: null
used_in_reports:
  - "visitors-overview"
---

# Visitor Sources Widget

Visual breakdown of traffic sources showing where visitors are coming from.

## Widget Configuration

- **Component**: [Pie Chart](../components/pie-chart.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Display Settings

- **Default Sort**: N/A (pie chart doesn't require sorting)
- **Row Limit**: N/A (shows all sources with data)

## Used In Reports

This widget appears in the following report pages:

- [Visitors Overview](../reports/visitors-overview.md) - Row 2, right column

## Data Categories

### Source Types

| Source | Description |
|--------|-------------|
| Direct | Direct traffic (typed URL, bookmarks) |
| Search Engines | Google, Bing, Yahoo, etc. |
| Social Media | Facebook, Twitter, LinkedIn, etc. |
| Referrals | Other websites linking to yours |
| Email | Email campaigns |
| Paid Ads | Paid advertising campaigns |
| Other | Uncategorized sources |

## Features

### Chart Interactions
- **Hover Segment**: Show tooltip with exact count and percentage
- **Click Segment**: Filter page to show only that source (optional)
- **Legend**: Click to toggle segment visibility

### Data Display
- Percentage labels on larger segments
- Absolute numbers in tooltips
- Legend with color coding
- Total visitor count displayed

### Detailed View Toggle
- Switch between pie chart and list view
- List shows all sources with counts and percentages
- Sortable by count or alphabetically

## Empty State

When no source data available:
- "No traffic source data for the selected period"

## Chart Variants

### Pie Chart (Default)
- Full circle
- Best for 3-7 categories

### Donut Chart
- Hollow center
- Show total count in center
- Modern appearance

## Source Detection

### Direct Traffic
- No referrer information
- Bookmark access
- Typed URL
- Mobile apps

### Search Engines
- Google (organic)
- Bing
- Yahoo
- DuckDuckGo
- Yandex
- Baidu

### Social Media
- Facebook
- Twitter/X
- LinkedIn
- Instagram
- Pinterest
- Reddit
- TikTok

### Email
- Gmail
- Outlook
- Yahoo Mail
- Campaign tracking parameters

---

*Last Updated: 2025-11-06*
