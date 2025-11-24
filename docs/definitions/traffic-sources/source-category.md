---
title: "Source Category"
type: "definition"
category: "traffic-sources"
status: "Need Review"
aliases: ["Traffic Channel", "Traffic Source Category", "Channel"]
---

# Source Category

Grouped classification of referrers into channels (Organic Search, Social Media, Direct, etc.).

## Standard Categories

1. **Organic Search:** Google, Bing, Yahoo (unpaid)
2. **Direct Traffic:** No referrer (typed, bookmarked)
3. **Social Media:** Facebook, Twitter, LinkedIn, etc.
4. **Referral Traffic:** Other websites linking to you
5. **Paid Traffic:** Ads (detected via utm_medium=cpc/ppc/paid)
6. **Email:** Email campaigns (utm_medium=email or webmail)

## Detection Rules Priority

```
1. Check UTM parameters first:
   utm_medium=cpc → Paid Traffic
   utm_medium=email → Email
   utm_medium=social → Social Media

2. Check referrer domain:
   google.com, bing.com → Organic Search
   facebook.com, twitter.com → Social Media
   gmail.com, outlook.com → Email
   other domains → Referral Traffic

3. No referrer:
   (none) → Direct Traffic
```

## Example

```
URL: yoursite.com/page?utm_medium=cpc&utm_source=google
Referrer: google.com
Category: Paid Traffic (UTM takes precedence)

URL: yoursite.com/page
Referrer: facebook.com
Category: Social Media
```

## Typical Distribution

```
Content Sites: Organic 40-60%, Direct 20-30%, Social 10-20%
E-commerce: Paid 30-40%, Organic 25-35%, Direct 20-25%
New Sites: Direct 40-60%, Referral 20-40%, Organic 10-20%
```

## Common Misconceptions

**"Paid ads will show separately from organic"**
- Only if you use UTM parameters. Without them, Google Ads appears as Organic Search.

**"High Direct = strong brand"**
- Maybe. Or missing UTM tags in email campaigns.

---

*Last Updated: 2025-11-24*
