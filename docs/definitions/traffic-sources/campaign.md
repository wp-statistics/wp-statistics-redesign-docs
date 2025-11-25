---
title: "Campaign"
type: "definition"
category: "traffic-sources"
status: "Need Review"
aliases: ["Marketing Campaign", "UTM Campaign"]
---

# Campaign

A tracked marketing effort identified by UTM parameters.

## Definition

A campaign is a marketing initiative tracked through UTM parameters added to URLs. Campaigns allow attribution of traffic, sessions, and conversions to specific marketing efforts.

## UTM Parameters

Campaigns are identified by URL parameters:
- **utm_campaign:** Campaign name (required)
- **utm_source:** Traffic source (e.g., google, newsletter)
- **utm_medium:** Marketing medium (e.g., cpc, email)
- **utm_term:** Paid search keywords (optional)
- **utm_content:** Ad variation (optional)

## Example URL

```
https://example.com/landing-page/
  ?utm_source=facebook
  &utm_medium=cpc
  &utm_campaign=summer-sale-2024
```

## Campaign Metrics

Each campaign can track:
- Sessions attributed
- Visitors acquired
- Conversion rate
- Bounce rate
- Average session duration

## Use Cases

- Email marketing tracking
- Paid advertising attribution
- Social media campaign measurement
- Partner/affiliate link tracking

---

*Last Updated: 2025-11-25*
