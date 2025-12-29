---
title: "Traffic Abilities"
type: "technical"
category: "api"
status: "In Progress"
sidebar_position: 5
---

# Traffic Abilities

Abilities for querying traffic sources, referrers, and search data.

---

## wp-statistics/get-referrers

Get traffic sources and referrer breakdown.

### Use Cases

- "Where is my traffic coming from?"
- "Top referrers this month"
- "Show me traffic sources"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date_from` | string | No | 30 days ago | Start date |
| `date_to` | string | No | Today | End date |
| `channel` | string | No | All | Filter by: `search`, `social`, `referral`, `direct`, `email`, `paid` |
| `per_page` | integer | No | 10 | Results per page |
| `compare` | boolean | No | false | Include comparison |

### Output Schema

```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "referrer_domain": "google.com",
        "referrer_channel": "search",
        "referrer_name": "Google",
        "visitors": 4500,
        "sessions": 5200,
        "bounce_rate": 42.3,
        "percentage": 39.1
      },
      {
        "referrer_domain": "(direct)",
        "referrer_channel": "direct",
        "referrer_name": "Direct",
        "visitors": 3200,
        "sessions": 3800,
        "bounce_rate": 35.5,
        "percentage": 27.8
      }
    ],
    "totals": {
      "visitors": 11500,
      "sessions": 13200
    }
  }
}
```

### AI Response Example

> "Your traffic sources breakdown:
> - **Search (45%)**: 5,200 visitors - Google (4,500), Bing (420), DuckDuckGo (280)
> - **Direct (28%)**: 3,200 visitors
> - **Social (15%)**: 1,725 visitors - Facebook (850), Twitter (520), LinkedIn (355)
> - **Referral (12%)**: 1,380 visitors"

---

## wp-statistics/get-search-engines

Get traffic breakdown by search engine.

### Use Cases

- "Which search engines send me traffic?"
- "Google vs Bing traffic"
- "Search engine breakdown"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date_from` | string | No | 30 days ago | Start date |
| `date_to` | string | No | Today | End date |
| `per_page` | integer | No | 10 | Results per page |
| `compare` | boolean | No | false | Include comparison |

### Output Schema

```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "search_engine": "Google",
        "domain": "google.com",
        "visitors": 4500,
        "percentage": 86.5,
        "bounce_rate": 42.3
      },
      {
        "search_engine": "Bing",
        "domain": "bing.com",
        "visitors": 420,
        "percentage": 8.1,
        "bounce_rate": 48.2
      }
    ],
    "totals": {
      "search_visitors": 5200
    }
  }
}
```

---

## wp-statistics/get-search-terms

Get search terms/keywords that brought visitors.

### Use Cases

- "What are people searching for?"
- "Top search keywords"
- "How do people find my site?"

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
        "search_term": "wordpress analytics",
        "searches": 320,
        "visitors": 280
      },
      {
        "search_term": "site statistics plugin",
        "searches": 185,
        "visitors": 160
      }
    ],
    "totals": {
      "total_searches": 2450,
      "unique_terms": 892
    }
  }
}
```

### Note

Search term data availability depends on:
- Internal site search tracking (always available)
- External search engines (limited due to privacy - most show "not provided")

---

## wp-statistics/get-campaigns

**Requires: Data Plus**

Get UTM campaign tracking data.

### Use Cases

- "How are my campaigns performing?"
- "UTM tracking results"
- "Marketing campaign analytics"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date_from` | string | No | 30 days ago | Start date |
| `date_to` | string | No | Today | End date |
| `campaign` | string | No | All | Filter by specific campaign name |
| `per_page` | integer | No | 10 | Results per page |

### Output Schema

```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "campaign_name": "black-friday-2024",
        "campaign_source": "facebook",
        "campaign_medium": "cpc",
        "visitors": 1250,
        "sessions": 1480,
        "bounce_rate": 38.5,
        "conversions": 85
      }
    ],
    "totals": {
      "campaign_visitors": 4500
    }
  }
}
```

### UTM Parameters Tracked

| Parameter | Field | Description |
|-----------|-------|-------------|
| `utm_campaign` | campaign_name | Campaign name |
| `utm_source` | campaign_source | Traffic source (e.g., facebook, newsletter) |
| `utm_medium` | campaign_medium | Medium (e.g., cpc, email, social) |
| `utm_term` | campaign_term | Paid keywords |
| `utm_content` | campaign_content | Content variation |

---

## Traffic Channel Definitions

| Channel | Definition |
|---------|------------|
| `search` | Traffic from search engines (Google, Bing, etc.) |
| `social` | Traffic from social media (Facebook, Twitter, LinkedIn, etc.) |
| `referral` | Traffic from other websites |
| `direct` | Direct visits (no referrer) |
| `email` | Traffic from email campaigns (utm_medium=email) |
| `paid` | Paid advertising traffic (utm_medium=cpc, ppc, etc.) |

---

## Related Abilities

- [Summary Abilities](./summary.md) - Overview metrics
- [Content Abilities](./content.md) - Page performance
- [Geographic Abilities](./geographic.md) - Traffic by location

---

*Last Updated: 2025-12-29*
