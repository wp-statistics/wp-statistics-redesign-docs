---
title: "Time on Page"
type: "definition"
category: "content-metrics"
status: "Need Review"
aliases: ["Average Time on Page", "Page Duration"]
---

# Time on Page

Average time visitors spend viewing a specific page.

## Definition

**Formula:**
```
Time on Page = Next Page Timestamp - Current Page Timestamp
```

Time on page measures how long a visitor stays on a particular page before navigating to another page on the site.

## How It's Calculated

For each page view, the time is measured until:
- The visitor navigates to another page (time captured)
- The visitor leaves the site (time NOT captured)

**Average Time on Page:**
```
Average = Sum of all measured times ÷ Number of page views with measured times
```

## Example

```
Page: /product-features/

View 1: Visitor stayed 2:30, then went to /pricing/
View 2: Visitor stayed 1:45, then went to /contact/
View 3: Visitor left site (not counted)

Average Time = (2:30 + 1:45) ÷ 2 = 2:07
```

## Limitations

- Exit page time is never captured
- Single-page visits (bounces) show 0 time
- Actual reading time may be underreported

---

*Last Updated: 2025-11-25*
