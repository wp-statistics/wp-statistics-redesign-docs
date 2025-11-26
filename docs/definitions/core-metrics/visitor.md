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

- **Anonymous visitors:** Identified by [visitor hash](../../technical/architecture/visitor-hash-mechanism.md)
- **Logged-in users:** WordPress user ID (tracked across IPs)

**Key Points:**
- With default rotation (24h): same IP on different days = different visitor (privacy-focused)
- With extended rotation (48h/disabled): same IP on different days = same visitor
- Different IPs (home/office/mobile) = different visitors
- Logged-in users: tracked by user ID across IPs
- Visitor counts are date-range scoped

## Related Documentation

- [Visitor Hash Mechanism](../../technical/architecture/visitor-hash-mechanism.md) - Technical details on privacy-focused visitor identification

---

*Last Updated: 2025-11-26*
