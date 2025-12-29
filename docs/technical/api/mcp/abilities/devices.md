---
title: "Device Abilities"
type: "technical"
category: "api"
status: "In Progress"
sidebar_position: 6
---

# Device Abilities

Abilities for querying visitor device, browser, and operating system data.

---

## wp-statistics/get-devices

Get visitor distribution by device type.

### Use Cases

- "What devices do my visitors use?"
- "Desktop vs mobile breakdown"
- "Device type analytics"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date_from` | string | No | 30 days ago | Start date |
| `date_to` | string | No | Today | End date |
| `compare` | boolean | No | false | Include comparison |

### Output Schema

```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "device_type": "desktop",
        "visitors": 7500,
        "views": 21000,
        "sessions": 8200,
        "bounce_rate": 38.5,
        "percentage": 65.2,
        "previous": { "visitors": 7200 },
        "change": { "visitors": 4.2 }
      },
      {
        "device_type": "mobile",
        "visitors": 3200,
        "views": 7500,
        "sessions": 3800,
        "bounce_rate": 52.3,
        "percentage": 27.8
      },
      {
        "device_type": "tablet",
        "visitors": 800,
        "views": 2100,
        "sessions": 950,
        "bounce_rate": 45.1,
        "percentage": 7.0
      }
    ],
    "totals": {
      "visitors": 11500
    }
  }
}
```

### AI Response Example

> "Your visitor device breakdown:
> - **Desktop**: 65% (7,500 visitors) - bounce rate 38.5%
> - **Mobile**: 28% (3,200 visitors) - bounce rate 52.3%
> - **Tablet**: 7% (800 visitors) - bounce rate 45.1%
>
> Mobile visitors have a significantly higher bounce rate. Consider optimizing your mobile experience."

---

## wp-statistics/get-browsers

Get visitor distribution by browser.

### Use Cases

- "What browsers do visitors use?"
- "Chrome vs Safari usage"
- "Browser breakdown"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date_from` | string | No | 30 days ago | Start date |
| `date_to` | string | No | Today | End date |
| `include_versions` | boolean | No | false | Include browser versions |
| `per_page` | integer | No | 10 | Results per page |

### Output Schema

**Without versions:**

```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "browser_name": "Chrome",
        "visitors": 6800,
        "percentage": 59.1,
        "bounce_rate": 40.2
      },
      {
        "browser_name": "Safari",
        "visitors": 2300,
        "percentage": 20.0,
        "bounce_rate": 42.5
      },
      {
        "browser_name": "Firefox",
        "visitors": 1200,
        "percentage": 10.4,
        "bounce_rate": 38.9
      }
    ]
  }
}
```

**With versions:**

```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "browser_name": "Chrome",
        "browser_version": "120.0",
        "visitors": 4200,
        "percentage": 36.5
      },
      {
        "browser_name": "Chrome",
        "browser_version": "119.0",
        "visitors": 2100,
        "percentage": 18.3
      }
    ]
  }
}
```

---

## wp-statistics/get-operating-systems

Get visitor distribution by operating system.

### Use Cases

- "What OS do visitors use?"
- "Windows vs Mac vs Linux"
- "Operating system breakdown"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date_from` | string | No | 30 days ago | Start date |
| `date_to` | string | No | Today | End date |
| `per_page` | integer | No | 10 | Results per page |

### Output Schema

```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "os_name": "Windows",
        "visitors": 5200,
        "percentage": 45.2,
        "bounce_rate": 39.8
      },
      {
        "os_name": "macOS",
        "visitors": 2800,
        "percentage": 24.3,
        "bounce_rate": 36.2
      },
      {
        "os_name": "iOS",
        "visitors": 1800,
        "percentage": 15.7,
        "bounce_rate": 48.5
      },
      {
        "os_name": "Android",
        "visitors": 1400,
        "percentage": 12.2,
        "bounce_rate": 55.3
      }
    ]
  }
}
```

---

## wp-statistics/get-screen-resolutions

Get visitor distribution by screen resolution.

### Use Cases

- "What screen sizes do visitors have?"
- "Most common resolutions"
- "Screen resolution analytics"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date_from` | string | No | 30 days ago | Start date |
| `date_to` | string | No | Today | End date |
| `per_page` | integer | No | 10 | Results per page |

### Output Schema

```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "resolution": "1920x1080",
        "width": 1920,
        "height": 1080,
        "visitors": 3200,
        "percentage": 27.8
      },
      {
        "resolution": "1366x768",
        "width": 1366,
        "height": 768,
        "visitors": 1850,
        "percentage": 16.1
      },
      {
        "resolution": "390x844",
        "width": 390,
        "height": 844,
        "visitors": 1200,
        "percentage": 10.4
      }
    ]
  }
}
```

---

## Device Insights

### Common Analysis Patterns

**Mobile Performance Check:**

```json
{
  "date_from": "2024-12-01",
  "date_to": "2024-12-29"
}
```

AI can compare bounce rates across devices to identify mobile experience issues.

**Browser Compatibility:**

Identify if specific browsers have unusual bounce rates or engagement patterns.

**Resolution-Based UX:**

Find if certain screen sizes have performance issues, suggesting responsive design problems.

---

## Related Abilities

- [Summary Abilities](./summary.md) - Overview metrics
- [Visitor Abilities](./visitors.md) - Individual visitor data
- [Geographic Abilities](./geographic.md) - Traffic by location

---

*Last Updated: 2025-12-29*
