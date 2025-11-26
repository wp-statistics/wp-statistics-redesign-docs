---
title: "Visitor"
type: "definition"
category: "core-metrics"
status: "Need Review"
aliases: ["Unique Visitor"]
---

# Visitor

A unique individual identified by [visitor hash](../../technical/architecture/visitor-hash-mechanism.md) or user ID.

## Definition

One unique identifier = one visitor, regardless of how many sessions or views they generate.

- **Anonymous visitors:** Identified by visitor hash (SHA-256 of IP + User Agent + daily salt)
- **Logged-in users:** WordPress user ID (tracked across IPs)

**Key Points:**
- With default rotation (24h): same IP on different days = different visitor (privacy-focused)
- With extended rotation (48h/disabled): same IP on different days = same visitor
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

## Related Documentation

- [Visitor Hash Mechanism](../../technical/architecture/visitor-hash-mechanism.md) - Technical details on privacy-focused visitor identification

---

*Last Updated: 2025-11-26*
