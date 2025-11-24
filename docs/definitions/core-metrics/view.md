---
title: "View"
type: "definition"
category: "core-metrics"
status: "Need Review"
aliases: ["Page View", "Hit"]
---

# View

A single page load. Every page load = 1 view, including refreshes.

## Definition

Basic unit of measurement. Counted every time a page loads, regardless of:
- Same visitor viewing multiple times
- Page refreshes
- Same page viewed in different sessions

## Formulas

```
Total Views = COUNT(all page loads)
Views Per Session = Total Views ÷ Total Sessions
Views Per Visitor = Total Views ÷ Total Visitors
```

## Example

**Scenario:**
- Visitor A arrives on Homepage (1 view)
- Clicks to Blog Post (2 views total)
- Refreshes Blog Post (3 views total)
- Clicks to Contact (4 views total)

**Result:** 1 visitor, 1 session, 4 views

## Relationships

```
Views ≥ Sessions ≥ Visitors (always)
Example: 10,000 views, 2,500 sessions, 1,000 visitors
```

## Common Misconceptions

**"Views should equal visitors"**
- No. One visitor typically generates many views.

**"Page refresh doesn't count"**
- Wrong. Every page load counts as a view.

---

*Last Updated: 2025-11-24*
