---
title: "Geographic Abilities"
type: "technical"
category: "api"
status: "In Progress"
sidebar_position: 3
---

# Geographic Abilities

Abilities for querying visitor geographic distribution by country, city, and region.

---

## wp-statistics/get-countries

Get visitor distribution by country.

### Use Cases

- "Which countries are sending me traffic?"
- "Top 10 countries by visitors"
- "Where are my visitors from?"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date_from` | string | No | 30 days ago | Start date |
| `date_to` | string | No | Today | End date |
| `per_page` | integer | No | 10 | Results per page (max: 100) |
| `compare` | boolean | No | false | Include previous period comparison |

### Output Schema

```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "country_name": "United States",
        "country_code": "US",
        "continent": "North America",
        "visitors": 5200,
        "views": 14500,
        "percentage": 45.2,
        "previous": { "visitors": 4800 },
        "change": { "visitors": 8.3 }
      },
      {
        "country_name": "United Kingdom",
        "country_code": "GB",
        "continent": "Europe",
        "visitors": 1400,
        "views": 3800,
        "percentage": 12.2
      }
    ],
    "totals": {
      "visitors": 11500,
      "views": 32000,
      "countries": 87
    }
  }
}
```

### AI Response Example

> "Your top 5 traffic sources by country:
> 1. United States - 5,200 visitors (45%)
> 2. United Kingdom - 1,400 visitors (12%)
> 3. Germany - 920 visitors (8%)
> 4. Canada - 680 visitors (6%)
> 5. Australia - 540 visitors (5%)
>
> Traffic from the US is up 8.3% compared to last month."

---

## wp-statistics/get-cities

Get visitor distribution by city.

### Use Cases

- "Which cities are my visitors from?"
- "Top cities in the United States"
- "Show me visitor cities"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date_from` | string | No | 30 days ago | Start date |
| `date_to` | string | No | Today | End date |
| `country` | string | No | All | Filter by country code (e.g., "US") |
| `per_page` | integer | No | 10 | Results per page |

### Output Schema

```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "city_name": "New York",
        "region_name": "New York",
        "country_name": "United States",
        "country_code": "US",
        "visitors": 820,
        "views": 2300
      },
      {
        "city_name": "Los Angeles",
        "region_name": "California",
        "country_name": "United States",
        "country_code": "US",
        "visitors": 650,
        "views": 1800
      }
    ],
    "totals": {
      "visitors": 11500,
      "cities": 342
    }
  }
}
```

### Example Request

Filter by country:

```json
{
  "date_from": "2024-12-01",
  "date_to": "2024-12-29",
  "country": "US",
  "per_page": 10
}
```

---

## wp-statistics/get-regions

Get visitor distribution by region/state.

### Use Cases

- "Which US states send me traffic?"
- "Regional breakdown for Germany"
- "Show me visitors by region"

### Input Schema

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date_from` | string | No | 30 days ago | Start date |
| `date_to` | string | No | Today | End date |
| `country` | string | Yes | - | Country code (e.g., "US", "DE") |
| `per_page` | integer | No | 10 | Results per page |

### Output Schema

```json
{
  "success": true,
  "data": {
    "rows": [
      {
        "region_name": "California",
        "region_code": "CA",
        "country_name": "United States",
        "country_code": "US",
        "visitors": 1250,
        "views": 3500,
        "percentage": 24.0
      },
      {
        "region_name": "Texas",
        "region_code": "TX",
        "country_name": "United States",
        "country_code": "US",
        "visitors": 890,
        "views": 2400,
        "percentage": 17.1
      }
    ],
    "totals": {
      "visitors": 5200,
      "regions": 48
    }
  }
}
```

### Example Request

```json
{
  "country": "US",
  "per_page": 10
}
```

---

## Common Filters

All geographic abilities support these additional filters:

| Filter | Type | Description |
|--------|------|-------------|
| `continent` | string | Filter by continent code: `NA`, `EU`, `AS`, `SA`, `AF`, `OC` |
| `exclude_countries` | array | Exclude specific countries |

### Example: European Traffic Only

```json
{
  "date_from": "2024-12-01",
  "date_to": "2024-12-29",
  "continent": "EU",
  "per_page": 20
}
```

---

## Related Abilities

- [Summary Abilities](./summary.md) - Overview metrics
- [Visitor Abilities](./visitors.md) - Individual visitor data
- [Content Abilities](./content.md) - Page performance by location

---

*Last Updated: 2025-12-29*
