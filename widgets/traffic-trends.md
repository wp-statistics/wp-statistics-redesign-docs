---
title: "Traffic Trends"
type: "widget"
component: "line-chart"
add_on: "Free"
status: "Not Started"
figma: ""
default_sort: "date"
row_limit: null
used_in_reports:
  - "visitors-overview"
  - "visitors"
---

# Traffic Trends Widget

Visual representation of traffic trends over the selected time period using a line chart.

## Widget Configuration

- **Component**: [Line Chart](../components/line-chart.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Display Settings

- **Default Sort**: By date (chronological)
- **Row Limit**: N/A (displays all data points in date range)

## Used In Reports

This widget appears in the following report pages:

- [Visitors Overview](../reports/visitors-overview.md) - Row 2, left column
- [Visitors](../reports/visitors.md) - Row 2, full width

## Data Displayed

### Primary Metrics
- **Visitors**: Number of unique visitors per time period
- **Page Views**: Total page views per time period

### Time Granularity
Based on selected date range:
- **1-7 days**: Hourly data points
- **8-31 days**: Daily data points
- **32-90 days**: Daily data points
- **91+ days**: Weekly or monthly data points

## Features

### Chart Interactions
- **Hover**: Show tooltip with exact values
- **Legend**: Toggle metric visibility
- **Zoom**: Zoom into specific time ranges (optional)
- **Download**: Export chart as image

### Data Series
- Multiple lines for different metrics
- Smooth curve rendering
- Responsive to container width

### Empty State
When no data is available:
- Show message: "No traffic data for selected period"
- Suggest adjusting date range or filters

---

*Last Updated: 2025-11-06*
