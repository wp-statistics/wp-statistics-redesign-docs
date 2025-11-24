---
title: "Session Timeout"
type: "definition"
category: "time-concepts"
status: "Need Review"
aliases: ["Inactivity Timeout", "Session Expiration"]
---

# Session Timeout

30-minute inactivity period that ends a session.

## Definition

Session ends after 30 minutes of no page views. Next activity starts new session.

**Rule:** Measured from last recorded activity.

## How It Works

```
2:00 PM - Page view (session active)
2:05 PM - Page view (timeout resets)
2:35 PM - Session ends (30 min since last view at 2:05 PM)
2:40 PM - Page view (NEW session starts)
```

## Example

```
Multiple Sessions in One Day:
- 9:00 AM: Visit Page A (Session 1)
- 9:15 AM: Leave
- 9:45 AM: Session 1 ends (timeout)
- 2:00 PM: Return (Session 2)
- 2:10 PM: Leave
- 2:40 PM: Session 2 ends (timeout)

Result: 1 visitor, 2 sessions
```

---

*Last Updated: 2025-11-24*
