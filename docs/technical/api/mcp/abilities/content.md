---
title: "Content Abilities"
type: "technical"
category: "api"
status: "In Progress"
sidebar_position: 4
---

# Content Abilities

Abilities for querying page and content performance metrics.

---

## wp-statistics/get-top-pages

Get the most viewed pages on your site.

### Use Cases

- "What are my top pages?"
- "Which blog posts performed best?"
- "Show me most viewed content"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date_from` | string | No | 30 days ago | Start date |
| `date_to` | string | No | Today | End date |
| `post_type` | string | No | All | Filter by: `post`, `page`, `product`, etc. |
| `per_page` | integer | No | 10 | Results per page |
| `order_by` | string | No | views | Sort by: `views`, `visitors`, `bounce_rate` |
| `compare` | boolean | No | false | Include previous period comparison |

### Output Schema

```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "page_uri": "/getting-started/",
        "page_title": "Getting Started Guide",
        "page_type": "page",
        "views": 5420,
        "visitors": 3200,
        "bounce_rate": 32.5,
        "avg_time_on_page": 245,
        "previous": {
          "views": 4800,
          "visitors": 2900
        },
        "change": {
          "views": 12.9,
          "visitors": 10.3
        }
      }
    ],
    "totals": {
      "views": 35000,
      "visitors": 12500,
      "pages": 1250
    }
  }
}
```

### Example Request

Get top blog posts:

```json
{
  "date_from": "2024-12-01",
  "date_to": "2024-12-29",
  "post_type": "post",
  "per_page": 10,
  "compare": true
}
```

### AI Response Example

> "Your top 5 blog posts this month:
> 1. 'Getting Started Guide' - 5,420 views (+12.9%)
> 2. 'Advanced Configuration' - 3,890 views (+5.2%)
> 3. 'Troubleshooting Tips' - 2,150 views (-3.1%)
> 4. 'Best Practices' - 1,890 views (+18.4%)
> 5. 'API Documentation' - 1,650 views (+7.8%)"

---

## wp-statistics/get-page-stats

Get detailed statistics for a specific page.

### Use Cases

- "How is my pricing page performing?"
- "Stats for /blog/my-post/"
- "Analyze this page"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `page` | string | Yes | - | Page URI (e.g., "/pricing/") |
| `date_from` | string | No | 30 days ago | Start date |
| `date_to` | string | No | Today | End date |
| `compare` | boolean | No | false | Include previous period comparison |

### Output Schema

```json
{
  "success": true,
  "data": {
    "page": {
      "uri": "/pricing/",
      "title": "Pricing Plans",
      "type": "page",
      "wp_id": 42
    },
    "metrics": {
      "views": 2850,
      "visitors": 2100,
      "bounce_rate": 45.2,
      "avg_time_on_page": 180,
      "exit_rate": 38.5
    },
    "traffic_sources": [
      { "source": "google.com", "visitors": 850, "percentage": 40.5 },
      { "source": "direct", "visitors": 620, "percentage": 29.5 }
    ],
    "devices": {
      "desktop": { "visitors": 1400, "percentage": 66.7 },
      "mobile": { "visitors": 580, "percentage": 27.6 },
      "tablet": { "visitors": 120, "percentage": 5.7 }
    }
  }
}
```

---

## wp-statistics/get-entry-pages

Get pages where visitors first land on your site.

### Use Cases

- "Where do visitors enter my site?"
- "Top landing pages"
- "Which pages attract new visitors?"

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
        "page_uri": "/",
        "page_title": "Home",
        "entries": 4500,
        "bounce_rate": 35.2,
        "avg_session_pages": 3.2
      },
      {
        "page_uri": "/blog/popular-post/",
        "page_title": "Popular Post",
        "entries": 1200,
        "bounce_rate": 52.1,
        "avg_session_pages": 2.1
      }
    ]
  }
}
```

---

## wp-statistics/get-exit-pages

Get pages where visitors leave your site.

### Use Cases

- "Where do visitors leave?"
- "Which pages have high exit rates?"
- "Find exit points"

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
        "page_uri": "/thank-you/",
        "page_title": "Thank You",
        "exits": 2800,
        "exit_rate": 92.5
      },
      {
        "page_uri": "/contact/",
        "page_title": "Contact Us",
        "exits": 1500,
        "exit_rate": 65.3
      }
    ]
  }
}
```

---

## wp-statistics/get-404-pages

**Requires: Data Plus**

Get pages that returned 404 errors.

### Use Cases

- "Are there any broken links?"
- "Show me 404 errors"
- "Find missing pages"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date_from` | string | No | 30 days ago | Start date |
| `date_to` | string | No | Today | End date |
| `per_page` | integer | No | 10 | Results per page |
| `order_by` | string | No | hits | Sort by: `hits`, `date` |

### Output Schema

```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "page_uri": "/old-product/",
        "hits": 47,
        "last_hit": "2024-12-29 14:32:10",
        "referrers": [
          { "domain": "google.com", "count": 25 },
          { "domain": "facebook.com", "count": 12 }
        ]
      }
    ],
    "totals": {
      "total_404s": 156,
      "unique_urls": 23
    }
  }
}
```

### AI Response Example

> "I found 23 unique URLs returning 404 errors this month:
>
> Top issues:
> 1. /old-product/ - 47 hits (mostly from Google)
> 2. /deleted-page/ - 32 hits
> 3. /typo-url/ - 18 hits
>
> Consider setting up redirects for these pages."

---

## Related Abilities

- [Summary Abilities](./summary.md) - Overview metrics
- [Traffic Abilities](./traffic.md) - Traffic sources
- [Visitor Abilities](./visitors.md) - Visitor details

---

*Last Updated: 2025-12-29*
