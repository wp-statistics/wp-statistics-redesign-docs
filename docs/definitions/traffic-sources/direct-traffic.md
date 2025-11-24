---
title: "Direct Traffic"
type: "definition"
category: "traffic-sources"
status: "Need Review"
aliases: ["Direct", "No Referrer", "None"]
---

# Direct Traffic

Traffic with no referrer information (referrer = none).

## Causes

**Intentional:**
- Typed URL in address bar
- Bookmarks
- Browser favorites/reading list

**Missing Referrer:**
- Email links (often)
- PDF/Office document links
- Mobile app links
- HTTPS to HTTP transitions
- Privacy browsers blocking referrer
- Security software stripping referrer

## Why It Matters

**Brand Indicator:**
- High direct = strong brand awareness (people type your URL)
- Or: attribution issues (missing UTM tags)

**Attribution Problem:**
- Cannot identify original source
- "Dark social" (untracked social sharing)
- Email without UTM parameters

## Reducing Direct (Better Attribution)

```
Use UTM parameters:
Email: ?utm_source=newsletter&utm_medium=email
Print: ?utm_source=magazine&utm_medium=print
QR codes: Short URL with tracking

Without UTM:
Email link → appears as Direct Traffic

With UTM:
Email link → appears as Email Traffic
```

## Typical Percentage

```
New sites: 50-70% (mostly you testing)
Established sites: 20-30%
High brand sites: 30-50%
```

## Common Misconceptions

**"Direct = typed URL"**
- Sometimes, but often includes email, documents, blocked referrers, etc.

**"High direct = good"**
- Can be good (loyalty) or bad (poor tracking).

---

*Last Updated: 2025-11-24*
