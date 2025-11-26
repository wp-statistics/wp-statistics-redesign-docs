---
title: "Visitor"
type: "definition"
category: "core-metrics"
status: "Need Review"
aliases: ["Unique Visitor"]
---

# Visitor

A unique individual identified by IP address, IP hash, or user ID.

## Definition

One unique identifier = one visitor, regardless of how many sessions or views they generate. The identifier depends on privacy settings:

- **Plain IP mode:** IP address is the identifier
- **Hash mode:** [Visitor hash](../../technical/architecture/visitor-hash-mechanism.md) (SHA-256 of anonymized IP + User Agent + daily salt) is the identifier
- **Logged-in users:** WordPress user ID (tracked across IPs)

**Key Points:**
- With hashing enabled and default rotation (24h): same IP on different days = different visitor (privacy-focused)
- With hashing disabled or extended rotation: same IP on different days = same visitor
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
