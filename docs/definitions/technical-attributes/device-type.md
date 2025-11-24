---
title: "Device Type"
type: "definition"
category: "technical-attributes"
status: "Need Review"
aliases: ["Device Category", "Device"]
---

# Device Type

Hardware category: Desktop, Mobile, or Tablet (detected from User Agent).

## Definition

Classified from User Agent string analysis:
- **Desktop:** Computers, laptops (Windows, macOS, Linux)
- **Mobile:** Smartphones (iPhone, Android phones)
- **Tablet:** iPads, Android tablets

## Detection

```
Desktop indicators: Windows NT, Mac OS X, Linux (no "Mobile")
Mobile indicators: "Mobile" keyword, "iPhone", "Android" + phone signals
Tablet indicators: "iPad", "Android" without "Mobile"
```

## Typical Distribution

```
General sites: Mobile 50-70%, Desktop 25-40%, Tablet 5-10%
B2B sites: Desktop 50-70%, Mobile 25-40%, Tablet 5-10%
E-commerce: Mobile 60-75%, Desktop 20-35%, Tablet 5-10%
```

## Behavioral Differences

**Desktop:**
- Longer sessions
- More pages/session
- Higher conversion (e-commerce)
- Mouse/keyboard input

**Mobile:**
- Shorter sessions
- Fewer pages/session
- Lower conversion (but improving)
- Touch input, on-the-go

**Tablet:**
- Between mobile/desktop
- Casual browsing
- Evening usage peaks

---

*Last Updated: 2025-11-24*
