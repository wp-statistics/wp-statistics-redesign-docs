---
title: "Social Media Traffic"
type: "definition"
category: "traffic-sources"
status: "Need Review"
aliases: ["Social Traffic", "Social Media", "Social Networks"]
---

# Social Media Traffic

Traffic from social media platforms (Facebook, Twitter, LinkedIn, etc.).

## Definition

Visitors from social platforms. Can be organic (user shares) or paid (should use UTM tags).

## Detection

```
Referrer domains:
- facebook.com, fb.com, m.facebook.com
- twitter.com, t.co
- linkedin.com, lnkd.in
- instagram.com, l.instagram.com
- pinterest.com, pin.it
- reddit.com
- tiktok.com
```

## Organic vs Paid Social

```
Organic:
- Natural shares
- Your posts
- User mentions
- Referrer: social platform, no paid UTM

Paid (Ads):
- Facebook Ads, LinkedIn Ads
- Should have: utm_medium=paid
- Without UTM: appears as organic social
```

## Platform Behaviors

**Facebook:** Broad demographics, mobile-heavy, mixed engagement
**Twitter:** Real-time, tech audience, short attention
**LinkedIn:** B2B, professional, desktop-heavy
**Pinterest:** Visual, high female demo, good conversion
**Reddit:** Community-driven, can drive huge spikes

## Dark Social

**Definition:** Social sharing that can't be tracked (WhatsApp, Messenger, iMessage)
**Impact:** Appears as Direct Traffic
**Solution:** Use shortened trackable URLs

## Common Misconceptions

**"Post on social = traffic will come"**
- No. Organic reach declining. Need engaging content or paid promotion.

**"Social ads will show separately"**
- Only with UTM parameters.

---

*Last Updated: 2025-11-24*
