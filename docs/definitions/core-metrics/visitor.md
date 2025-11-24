---
title: "Visitor"
type: "definition"
category: "core-metrics"
status: "Need Review"
aliases: ["Unique Visitor"]
---

# Visitor

A unique individual identified by IP address (or IP hash).

## Definition

One unique IP address = one visitor, regardless of how many sessions or views they generate. Logged-in users are tracked by WordPress user ID in addition to IP.

**Key Points:**
- Same IP on different days = same visitor
- Different IPs (home/office/mobile) = different visitors
- Logged-in users: tracked by user ID across IPs
- Visitor counts are date-range scoped

## Formulas

```
Total Visitors (in date range) = COUNT(DISTINCT ip_address WHERE date IN range)
```

## Example

**Scenario:**
- Jan 10: Person visits from home (IP: 192.168.1.1)
- Jan 12: Same person visits from home (same IP)
- Jan 15: Same person visits from office (IP: 10.0.0.5)

**Result:** 2 visitors (2 different IPs)

## Relationships

- 1 visitor → many sessions
- 1 visitor → many views
- Sessions ÷ Visitors = avg sessions per visitor
- Views ÷ Visitors = avg views per visitor

## Common Misconceptions

**"Sessions should equal visitors"**
- No. One visitor typically has multiple sessions over time.

**"Changing date range should show same visitor counts"**
- No. Visitor counts are scoped to the selected date range.

---

*Last Updated: 2025-11-24*
