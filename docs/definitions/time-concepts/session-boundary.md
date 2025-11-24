---
title: "Session Boundary"
type: "definition"
category: "time-concepts"
status: "Need Review"
aliases: ["Session End", "Session Start"]
---

# Session Boundary

Points when sessions start or end.

## Session Starts

- First page view (new visitor)
- After 30-min timeout
- After midnight
- Return after leaving

## Session Ends

1. **30-Minute Timeout** (most common)
   ```
   Last view: 2:00 PM
   Session ends: 2:30 PM (if no activity)
   ```

2. **Midnight Boundary**
   ```
   11:50 PM Day 1: Session active
   11:59:59 PM: Session ends
   12:00 AM Day 2: New session (if still active)
   ```

## Example

```
11:50 PM Day 1 - Visit (Session 1 starts)
11:55 PM Day 1 - View pages
11:59:59 PM - Session 1 ends (midnight)
12:00:00 AM Day 2 - Session 2 starts
12:05 AM Day 2 - Still active

Result: 2 sessions (same visitor, split by midnight)
```

## Impact on Date Ranges

```
Session starts: Jan 10, 11:50 PM
Midnight: Session ends
New session: Jan 11, 12:05 AM

Jan 10 report: 1 session
Jan 11 report: 1 session
Total: 2 sessions from one continuous visit
```

## Common Misconceptions

**"Session ends when browser closes"**
- No. Ends 30 min after last activity or at midnight.

**"Sessions can span multiple days"**
- No. Midnight boundary ensures one calendar day per session.

---

*Last Updated: 2025-11-24*
