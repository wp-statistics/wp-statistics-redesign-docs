---
title: "Session"
type: "definition"
category: "core-metrics"
status: "Need Review"
aliases: ["Visit"]
---

# Session

A continuous period of activity ending after 30 minutes of inactivity or at midnight.

## Definition

A session starts when a visitor arrives and ends when:
1. 30 minutes pass with no page views, OR
2. Midnight occurs (new day = new session)

**Key Points:**
- One visitor can have multiple sessions
- Each session has exactly one entry page and one exit page
- Attribution model affects which page is considered entry

## Session End Rules

**30-Minute Timeout:**
```
Last page view: 2:05 PM
Session ends: 2:35 PM (if no activity)
Next page view: 3:00 PM → new session starts
```

**Midnight Boundary:**
```
11:50 PM Day 1: Session starts
11:59:59 PM: Session ends
12:00 AM Day 2: New session starts (if visitor still active)
```

## Example

**Multiple Sessions in One Day:**
- 9:00 AM: Visit Page A (Session 1 starts)
- 9:15 AM: Leave site
- 9:45 AM: Session 1 ends (timeout)
- 2:00 PM: Return (Session 2 starts)
- 2:10 PM: Leave site
- 2:40 PM: Session 2 ends (timeout)

**Result:** 1 visitor, 2 sessions

## Formulas

```
Sessions ≥ Visitors (always)
Views ÷ Sessions = Views per session
Session Duration = Last view timestamp - First view timestamp
```

## Common Misconceptions

**"Session ends when visitor closes browser"**
- No. Ends 30 minutes after last activity or at midnight.

**"Reading for 25 minutes without clicking counts in duration"**
- No. Duration only measures time between page views, not time on last page.

---

*Last Updated: 2025-11-24*
