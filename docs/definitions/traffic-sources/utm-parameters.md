---
title: "UTM Parameters"
type: "definition"
category: "traffic-sources"
status: "Need Review"
aliases: ["UTM Tags", "Campaign Parameters", "URL Parameters", "Tracking Parameters"]
---

# UTM Parameters

URL query parameters for tracking traffic sources and campaigns.

## Definition

Tags added to URLs that identify source, medium, and campaign. Captured automatically by analytics tools.

## Five Parameters

**Required:**
```
utm_source: Traffic source (google, facebook, newsletter)
utm_medium: Channel type (cpc, email, social, referral)
utm_campaign: Campaign name (spring-sale, product-launch)
```

**Optional:**
```
utm_content: Differentiates similar content (header-cta, footer-link)
utm_term: Paid search keywords (wordpress+analytics)
```

## Structure

```
Base format:
https://yoursite.com/page?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=CAMPAIGN

Complete example:
https://yoursite.com/product?utm_source=facebook&utm_medium=paid&utm_campaign=summer-sale&utm_content=video-ad
```

## UTM Medium Determines Category

```
utm_medium=cpc or ppc → Paid Traffic
utm_medium=email → Email
utm_medium=social → Social Media
utm_medium=referral → Referral Traffic
```

## Examples by Channel

**Email:**
```
?utm_source=newsletter&utm_medium=email&utm_campaign=weekly-digest
```

**Facebook Ad:**
```
?utm_source=facebook&utm_medium=paid&utm_campaign=black-friday&utm_content=carousel-ad
```

**Google Ad:**
```
?utm_source=google&utm_medium=cpc&utm_campaign=brand-keywords&utm_term=your-brand
```

**Organic Social:**
```
?utm_source=twitter&utm_medium=social&utm_campaign=content-promotion
```

## Best Practices

**Naming:**
- Always lowercase
- Use hyphens (not spaces): `black-friday` not `black friday`
- Be consistent across campaigns
- Document conventions

**Priority:**
UTM parameters override referrer detection. Essential for email, paid ads, campaigns.

## Common Misconceptions

**"UTM parameters affect SEO"**
- No. Search engines ignore UTM for ranking.

**"I don't need UTM if referrer works"**
- Wrong. Email and many sources don't send referrer. UTM is essential.

**"UTM works retroactively"**
- No. Must add before sharing links.

---

*Last Updated: 2025-11-24*
