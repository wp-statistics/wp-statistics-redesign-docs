---
title: "Date Range Scoping"
type: "definition"
category: "time-concepts"
status: "Need Review"
aliases: ["Date Filtering", "Time Period Filter"]
---

# Date Range Scoping

Limiting data to a specific time period.

## Definition

Only sessions/views within selected start and end dates are included in reports.

## How It Works

```
Date Range: Jan 1-31, 2024
- Sessions on Jan 15 = Included
- Sessions on Dec 31, 2023 = Excluded
- Sessions on Feb 1, 2024 = Excluded
```

## Key Interactions

**Visitor Classification (All-Time):**
```
Visitor first visit: Dec 2023
Return visit: Jan 2024
Date Range: Jan 2024
Shows: 1 Returning Visitor (classification from all-time history)
```

**Attribution Models:**
- **Last Touch:** Entry page from session in range (aligns perfectly)
- **First Touch:** Entry page may be outside range (from first-ever visit)

## Formula Impact

```
Metrics calculated within range:
- Views = COUNT(views in range)
- Sessions = COUNT(sessions in range)
- Visitors = COUNT(DISTINCT visitors in range)

Can't add across ranges:
Jan visitors + Feb visitors ≠ Q1 visitors (overlap possible)
```

---

*Last Updated: 2025-11-24*
