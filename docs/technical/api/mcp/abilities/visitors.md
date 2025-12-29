---
title: "Visitor Abilities"
type: "technical"
category: "api"
status: "In Progress"
sidebar_position: 2
---

# Visitor Abilities

Abilities for querying visitor data, including counts, online visitors, and individual profiles.

---

## wp-statistics/get-visitors

Get visitor counts with optional grouping by time period.

### Use Cases

- "How many visitors did I get this week?"
- "Show me daily visitor counts for this month"
- "What's my visitor trend?"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date_from` | string | No | 30 days ago | Start date (YYYY-MM-DD) |
| `date_to` | string | No | Today | End date (YYYY-MM-DD) |
| `group_by` | string | No | none | Group by: `date`, `week`, `month`, `hour` |
| `compare` | boolean | No | false | Include previous period comparison |

### Output Schema

**Without group_by (totals only):**

```json
{
  "success": true,
  "data": {
    "totals": {
      "visitors": 12500
    }
  }
}
```

**With group_by: "date":**

```json
{
  "success": true,
  "data": {
    "rows": [
      { "date": "2024-12-01", "visitors": 420 },
      { "date": "2024-12-02", "visitors": 385 },
      { "date": "2024-12-03", "visitors": 512 }
    ],
    "totals": {
      "visitors": 12500
    }
  }
}
```

### Example Request

```json
{
  "date_from": "2024-12-01",
  "date_to": "2024-12-07",
  "group_by": "date"
}
```

---

## wp-statistics/get-views

Get page view counts with optional grouping.

### Use Cases

- "How many page views this month?"
- "Show me views by day"
- "What's my views trend?"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date_from` | string | No | 30 days ago | Start date |
| `date_to` | string | No | Today | End date |
| `group_by` | string | No | none | Group by: `date`, `week`, `month`, `hour` |
| `compare` | boolean | No | false | Include comparison |

### Output Schema

```json
{
  "success": true,
  "data": {
    "totals": {
      "views": 35000
    }
  }
}
```

---

## wp-statistics/get-online-visitors

**Requires: Data Plus**

Get list of currently online visitors in real-time.

### Use Cases

- "Who's on my site right now?"
- "How many people are currently browsing?"
- "Show me live visitors"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `per_page` | integer | No | 50 | Results per page (max: 100) |

### Output Schema

```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "visitor_id": 12345,
        "last_activity": "2024-12-29 14:32:10",
        "current_page": "/pricing/",
        "page_title": "Pricing Plans",
        "country_name": "United States",
        "country_code": "US",
        "city_name": "New York",
        "device_type": "desktop",
        "browser_name": "Chrome",
        "os_name": "Windows",
        "referrer_domain": "google.com",
        "session_pages": 3,
        "session_duration": 245
      }
    ],
    "totals": {
      "online_count": 47
    }
  }
}
```

### AI Response Example

> "You currently have 47 visitors on your site. The most active is viewing your Pricing page from New York, having visited 3 pages in the last 4 minutes. Most online visitors are from the US (28) and UK (8)."

---

## wp-statistics/get-top-visitors

**Requires: Data Plus**

Get most active visitors by session count or page views.

### Use Cases

- "Who are my most engaged visitors?"
- "Show me power users"
- "Which visitors come back most often?"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date_from` | string | No | 30 days ago | Start date |
| `date_to` | string | No | Today | End date |
| `order_by` | string | No | sessions | Sort by: `sessions`, `views`, `duration` |
| `per_page` | integer | No | 10 | Results per page |

### Output Schema

```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "visitor_id": 12345,
        "first_visit": "2024-10-15",
        "last_visit": "2024-12-29",
        "total_sessions": 47,
        "total_views": 312,
        "country_name": "United States",
        "device_type": "desktop",
        "user_id": 5,
        "user_login": "johndoe"
      }
    ]
  }
}
```

---

## wp-statistics/get-visitor-profile

**Requires: Data Plus**

Get detailed information about a specific visitor.

### Use Cases

- "Tell me about visitor #12345"
- "What pages did this visitor view?"
- "Show me this visitor's history"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `visitor_id` | integer | Yes | - | The visitor ID |

### Output Schema

```json
{
  "success": true,
  "data": {
    "visitor": {
      "visitor_id": 12345,
      "first_visit": "2024-10-15 09:23:45",
      "last_visit": "2024-12-29 14:32:10",
      "total_sessions": 47,
      "total_views": 312,
      "country_name": "United States",
      "city_name": "New York",
      "region_name": "New York",
      "device_type": "desktop",
      "os_name": "Windows",
      "browser_name": "Chrome",
      "browser_version": "120.0",
      "user_id": 5,
      "user_login": "johndoe"
    },
    "recent_pages": [
      { "page": "/pricing/", "title": "Pricing Plans", "viewed_at": "2024-12-29 14:32:10" },
      { "page": "/features/", "title": "Features", "viewed_at": "2024-12-29 14:28:45" }
    ],
    "top_pages": [
      { "page": "/blog/", "title": "Blog", "views": 45 },
      { "page": "/docs/", "title": "Documentation", "views": 38 }
    ]
  }
}
```

---

## wp-statistics/get-logged-in-users

**Requires: Data Plus**

Get analytics for WordPress logged-in users.

### Use Cases

- "Which registered users are most active?"
- "Show me activity from logged-in users"
- "How do members use my site?"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date_from` | string | No | 30 days ago | Start date |
| `date_to` | string | No | Today | End date |
| `order_by` | string | No | views | Sort by: `views`, `sessions`, `last_visit` |
| `per_page` | integer | No | 10 | Results per page |

### Output Schema

```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "user_id": 5,
        "user_login": "johndoe",
        "display_name": "John Doe",
        "email": "john@example.com",
        "role": "subscriber",
        "sessions": 47,
        "views": 312,
        "last_visit": "2024-12-29 14:32:10"
      }
    ],
    "totals": {
      "logged_in_users": 156,
      "total_sessions": 892,
      "total_views": 4520
    }
  }
}
```

---

## Related Abilities

- [Summary Abilities](./summary.md) - Overview metrics
- [Geographic Abilities](./geographic.md) - Visitor locations
- [Device Abilities](./devices.md) - Visitor technology

---

*Last Updated: 2025-12-29*
