---
title: "Bounce Rate"
type: "definition"
category: "core-metrics"
status: "Need Review"
aliases: ["Single Page Session Rate"]
---

# Bounce Rate

Percentage of sessions with only one page view.

## Definition

**Formula:**
```
Bounce Rate = (Single-Page Sessions ÷ Total Sessions) × 100
```

**Single-page session:** Visitor views exactly one page then leaves (entry page = exit page).

## Example

**Page-Level Bounce Rate:**
```
Homepage: 100 sessions started here
40 sessions viewed only Homepage (bounced)
60 sessions viewed additional pages

Bounce Rate = (40 ÷ 100) × 100 = 40%
```

**Calculating Over Time:**
```
Monday: 100 sessions, 30 bounces = 30%
Tuesday: 150 sessions, 60 bounces = 40%
Combined: (30+60) ÷ (100+150) = 36%
```

## Bounce vs Exit Rate

**Key Difference:**
- **Bounce Rate:** Entry page only (% of sessions that started AND ended on this page)
- **Exit Rate:** Any page (% of page views that were the last page in a session)

```
All bounces are exits, but not all exits are bounces
```

## Typical Ranges

- Blog posts: 60-80% (normal - visitor got their answer)
- Homepage: 30-50%
- Product pages: 30-50%
- Thank you pages: 70-90% (expected)

## Common Misconceptions

**"High bounce rate is always bad"**
- Context matters. Blog posts should have high bounce rates if visitors found their answer.

**"Refreshing counts as bounce"**
- No. Refresh = 2 page views = not a bounce.

---

*Last Updated: 2025-11-24*
