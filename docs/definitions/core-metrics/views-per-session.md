---
title: "Views Per Session"
type: "definition"
category: "core-metrics"
status: "Need Review"
aliases: ["Pages Per Session", "Pages Per Visit", "Depth"]
---

# Views Per Session

Average number of pages viewed per session.

## Definition

**Formula:**
```
Views Per Session = Total Views ÷ Total Sessions
```

Always ≥ 1 (every session has at least one view).

## Example

**Calculation:**
```
Total Views: 5,000
Total Sessions: 1,000
Views Per Session = 5,000 ÷ 1,000 = 5.0
```

**Session Breakdown:**
```
Session 1: 8 pages
Session 2: 6 pages
Session 3: 7 pages
Session 4: 5 pages

Views Per Session = (8+6+7+5) ÷ 4 = 6.5
```

**Impact of Bounces:**
```
100 sessions total:
- 40 bounced (1 view each) = 40 views
- 60 multi-page (avg 4 views) = 240 views
Total: 280 views

Views Per Session = 280 ÷ 100 = 2.8
```

## Typical Ranges

- 1.0-2.0: High bounce rate or simple site
- 2.0-4.0: Normal for most sites
- 4.0+: High engagement or complex user journeys

## Relationship to Bounce Rate

```
If bounce rate = 50%, then:
At least 50% of sessions have Views Per Session = 1
Remaining 50% must have > 1 to raise average
```

## Common Misconceptions

**"Higher is always better"**
- Not necessarily. If users can't find what they need, they may click around excessively.

**"Can be less than 1"**
- Impossible. Every session must have at least 1 view.

---

*Last Updated: 2025-11-24*
