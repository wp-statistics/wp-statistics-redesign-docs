---
title: "Email Traffic"
type: "definition"
category: "traffic-sources"
status: "Need Review"
aliases: ["Email Marketing", "Newsletter Traffic", "Email Campaign"]
---

# Email Traffic

Traffic from email links (marketing, newsletters, transactional).

## Definition

Visitors who clicked links in email. **Requires UTM parameters** for tracking (email links rarely send referrer).

## Critical Rule

```
Without UTM: Email → appears as Direct Traffic
With UTM: Email → appears as Email Traffic

Required structure:
?utm_source=newsletter&utm_medium=email&utm_campaign=weekly-digest
```

## Email Types

- Marketing emails (promotions, announcements)
- Newsletters (content digests)
- Transactional (order confirmations, shipping)
- Personal (forwarded links)

## Tracking Structure

```
utm_source = campaign/newsletter name
utm_medium = email (always)
utm_campaign = campaign identifier
utm_content = link position (optional)

Example:
Header: ?utm_source=nov-newsletter&utm_medium=email&utm_campaign=product-launch&utm_content=header
Body: ?utm_source=nov-newsletter&utm_medium=email&utm_campaign=product-launch&utm_content=body
Footer: ?utm_source=nov-newsletter&utm_medium=email&utm_campaign=product-launch&utm_content=footer
```

## Typical Performance

```
Click-Through Rate: 2-3% (email open → website click)
Conversion Rate: 2-5%+ (often highest of all channels)
Traffic Share: E-commerce 10-20%, Content 5-15%
```

## Common Misconceptions

**"I can track email without UTM"**
- No. Most email clicks appear as Direct without UTM parameters.

**"Gmail referrer means email traffic"**
- Incomplete. Many email clicks won't show Gmail. Always use UTM.

---

*Last Updated: 2025-11-24*
