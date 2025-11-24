---
title: "Paid Traffic"
type: "definition"
category: "traffic-sources"
status: "Need Review"
aliases: ["Paid Advertising", "PPC", "CPC", "Paid Campaigns"]
---

# Paid Traffic

Traffic from paid advertising campaigns (Google Ads, Facebook Ads, etc.).

## Definition

Visitors from paid ads. **Identified by UTM parameters** (utm_medium=cpc/ppc/paid).

**CRITICAL:** Without UTM tags, paid traffic is miscategorized.

## Detection

```
Required UTM structure:
?utm_source=google&utm_medium=cpc&utm_campaign=spring-sale

Key utm_medium values:
- cpc (cost-per-click)
- ppc (pay-per-click)
- paid
- cpm (cost-per-thousand-impressions)
```

## Platform Examples

**Search:** Google Ads, Bing Ads
**Social:** Facebook Ads, LinkedIn Ads, Twitter Ads
**Display:** Google Display Network, programmatic

## ROI Formula

```
ROI = (Revenue from Paid - Ad Spend) / Ad Spend × 100

Example:
Ad Spend: $1,000
Revenue: $3,500
ROI = ($3,500 - $1,000) / $1,000 × 100 = 250%
```

## Key Metrics

```
CPC = Cost Per Click
CTR = Click-Through Rate
CPA = Cost Per Acquisition
ROAS = Return On Ad Spend
```

## Common Misconceptions

**"Paid traffic will show automatically"**
- No. MUST use UTM parameters or it's miscategorized.

**"Running ads improves SEO"**
- No. Paid and organic are separate.

---

*Last Updated: 2025-11-24*
