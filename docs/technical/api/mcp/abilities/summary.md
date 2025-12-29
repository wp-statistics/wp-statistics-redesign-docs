---
title: "Summary Abilities"
type: "technical"
category: "api"
status: "In Progress"
sidebar_position: 1
---

# Summary Abilities

Core abilities for getting analytics summaries and overviews.

---

## wp-statistics/get-summary

Get a comprehensive summary of site analytics including visitors, views, sessions, and bounce rate.

### Use Cases

- "How's my site doing?"
- "Give me a traffic overview for this month"
- "What are my key metrics?"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date_from` | string | No | 30 days ago | Start date (YYYY-MM-DD) |
| `date_to` | string | No | Today | End date (YYYY-MM-DD) |
| `compare` | boolean | No | false | Include comparison with previous period |

### Output Schema

```json
{
  "success": true,
  "data": {
    "totals": {
      "visitors": 12500,
      "views": 35000,
      "sessions": 15200,
      "bounce_rate": 42.3,
      "avg_session_duration": 185,
      "pages_per_session": 2.3
    },
    "previous": {
      "visitors": 11200,
      "views": 32000,
      "sessions": 13800,
      "bounce_rate": 44.1,
      "avg_session_duration": 172,
      "pages_per_session": 2.1
    },
    "change": {
      "visitors": 11.6,
      "views": 9.4,
      "sessions": 10.1,
      "bounce_rate": -4.1,
      "avg_session_duration": 7.6,
      "pages_per_session": 9.5
    }
  },
  "meta": {
    "date_from": "2024-12-01 00:00:00",
    "date_to": "2024-12-29 23:59:59",
    "compare_from": "2024-11-01 00:00:00",
    "compare_to": "2024-11-29 23:59:59"
  }
}
```

### Metrics Explained

| Metric | Description | Format |
|--------|-------------|--------|
| `visitors` | Unique visitors in the period | Integer |
| `views` | Total page views | Integer |
| `sessions` | Total sessions (visits) | Integer |
| `bounce_rate` | Percentage of single-page sessions | Percentage (0-100) |
| `avg_session_duration` | Average session length | Seconds |
| `pages_per_session` | Average pages viewed per session | Decimal |

### Example Request

```json
{
  "date_from": "2024-12-01",
  "date_to": "2024-12-29",
  "compare": true
}
```

### AI Response Example

> "Your site had 12,500 visitors this month, up 11.6% from last month. Page views reached 35,000 (+9.4%). Your bounce rate improved from 44.1% to 42.3%, and visitors are now viewing an average of 2.3 pages per session."

---

## wp-statistics/compare-periods

Compare analytics between two custom time periods.

### Use Cases

- "Compare this month to last month"
- "How did Q4 compare to Q3?"
- "Compare December 2024 to December 2023"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `period1_from` | string | Yes | - | First period start date |
| `period1_to` | string | Yes | - | First period end date |
| `period2_from` | string | Yes | - | Second period start date |
| `period2_to` | string | Yes | - | Second period end date |
| `metrics` | array | No | All | Specific metrics to compare |

### Output Schema

```json
{
  "success": true,
  "data": {
    "period1": {
      "date_from": "2024-12-01",
      "date_to": "2024-12-31",
      "visitors": 15000,
      "views": 42000,
      "sessions": 18500
    },
    "period2": {
      "date_from": "2024-11-01",
      "date_to": "2024-11-30",
      "visitors": 13200,
      "views": 38000,
      "sessions": 16100
    },
    "change": {
      "visitors": { "absolute": 1800, "percentage": 13.6 },
      "views": { "absolute": 4000, "percentage": 10.5 },
      "sessions": { "absolute": 2400, "percentage": 14.9 }
    }
  }
}
```

### Example Request

Year-over-year comparison:

```json
{
  "period1_from": "2024-12-01",
  "period1_to": "2024-12-31",
  "period2_from": "2023-12-01",
  "period2_to": "2023-12-31"
}
```

---

## Related Abilities

- [Visitor Abilities](./visitors.md) - Detailed visitor analytics
- [Content Abilities](./content.md) - Page and content performance
- [Geographic Abilities](./geographic.md) - Traffic by location

---

*Last Updated: 2025-12-29*
