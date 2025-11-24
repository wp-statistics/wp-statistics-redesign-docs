---
title: "Session Duration"
type: "definition"
category: "core-metrics"
status: "Need Review"
aliases: ["Visit Duration", "Time on Site"]
---

# Session Duration

Time between first and last page view in a session.

## Definition

**Formula:**
```
Session Duration = Last View Timestamp - First View Timestamp
```

**Critical Limitation:** Time spent on the last page is NOT included (no subsequent page view to measure against).

**Single-page sessions:** Duration = 0 (no second page to measure)

## Example

**Multi-Page Session:**
```
2:00:00 PM - Homepage
2:05:30 PM - About Page
2:12:00 PM - Contact Page (last view)
[Visitor leaves]

Duration = 12:00 - 00:00 = 12 minutes
(Time spent on Contact Page NOT counted)
```

**Average Calculation:**
```
Session 1: 10 min
Session 2: 5 min
Session 3: 0 min (bounce)
Session 4: 15 min

Average = (10 + 5 + 0 + 15) ÷ 4 = 7.5 minutes
```

## Why It Underestimates

- Last page time never captured
- Bounces (50% of traffic) = 0 duration
- Long reading sessions may timeout (appears as 0 duration bounce)

## Common Misconceptions

**"Duration includes time on last page"**
- No. Only time between page views is measured.

**"0 duration means visitor left immediately"**
- Not necessarily. Could have read one page for 20 minutes then left.

---

*Last Updated: 2025-11-24*
