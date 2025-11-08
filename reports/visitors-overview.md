---
title: "Visitors Overview"
type: "report"
group: "Visitors"
show_in_menu: true
add_on: "Free"
status: "In Progress"
figma: ""
interactions:
  - "Date Picker"
  - "Filters"
widgets:
  - row: 1
    columns: ["overview-metrics"]
  - row: 2
    columns: ["traffic-trends"]
---

# Visitors Overview

Comprehensive snapshot of your website's traffic and visitor behavior.

## Page Configuration

- **Menu Visibility**: Shown in main menu
- **Add-on**: Free (included in base plugin)
- **Status**: In Progress
- **Figma Design**: [Add link when available]

## Available Interactions

- **Date Picker**
- **Filters**

## Widget Layout

### Row 1 (Full Width) - Overview Metrics

Uses the [Metrics](../components/metrics.md) component to display 8 key performance indicators in a 4-column, 2-row grid layout.

#### Component Configuration

- **Component**: [Metrics](../components/metrics.md)
- **Show Previous Period**: Enabled (for numeric metrics only)
- **Show Source Icons**: Disabled (all metrics from WP Statistics)

#### Metrics Display

**First Row (4 metrics with previous period comparison):**

| Metric | Value Format | Previous Period |
|--------|--------------|-----------------|
| **Visitors** | Number | ✅ Yes |
| **Views** | Number | ✅ Yes |
| **Session Duration** | Time (HH:MM:SS) | ✅ Yes |
| **Views Per Session** | Decimal (e.g., 2.5) | ✅ Yes |

**Second Row (4 metrics):**

| Metric | Value Format | Previous Period |
|--------|--------------|-----------------|
| **Top Country** | Country name | ❌ No |
| **Top Referrer** | Domain (e.g., google.com) | ❌ No |
| **Top Search Term** | Search term text | ❌ No |
| **Logged-in Share** | Percentage | ✅ Yes |

### Row 2 (Full Width) - Traffic Trends

- [Traffic Trends](../widgets/traffic-trends.md) - Line chart displaying visitor and view trends over time

---

*Last Updated: 2025-11-08*
