---
title: "Entry Page"
type: "definition"
category: "content-metrics"
status: "Need Review"
aliases: ["Landing Page", "Entrance Page"]
---

# Entry Page

First page viewed in a session.

## Definition

Determined by attribution model:
- **Last Touch (default):** Actual first page of current session
- **First Touch:** First page ever viewed by visitor (constant)

## Example

```
Last Touch:
- Session 1: Enter via Blog Post → Entry = Blog Post
- Session 2: Enter via Homepage → Entry = Homepage
- Session 3: Enter via Product → Entry = Product

First Touch:
- All sessions → Entry = Blog Post (first page ever)
```

## Key Metrics

```
Entrances = Number of sessions starting on this page
Unique Entrances = COUNT(DISTINCT visitor-page combinations)

Example:
- Visitor A, Session 1: Homepage → 1 unique entrance
- Visitor A, Session 2: Homepage → 0 additional (same visitor-page)
- Visitor B, Session 1: Homepage → 1 unique entrance

Homepage: 2 unique entrances, 2 total entrances
```

## Common Misconceptions

**"Entry page is always the homepage"**
- No. Any page can be entry. Most traffic enters via content pages (search).

**"Entry and landing page are different"**
- No. They're synonyms.

---

*Last Updated: 2025-11-24*
