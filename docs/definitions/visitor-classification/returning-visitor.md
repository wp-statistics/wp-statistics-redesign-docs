---
title: "Returning Visitor"
type: "definition"
category: "visitor-classification"
status: "Need Review"
aliases: ["Repeat Visitor"]
---

# Returning Visitor

Visitor who has visited before (all-time classification, permanent).

## Definition

Complement of "New Visitor". Any visitor whose identifier (IP or hash) exists in database from a previous visit.

**Note:** With [Hash Rotation Interval](../../settings/privacy.md#hash-rotation-interval) enabled (default: 24h), returning visitor detection is limited to the rotation window. Cross-day returning visitor tracking requires extended rotation (48h) or disabled rotation.

```
New + Returning = All Visitors
```

## Classification Rule

```
Visit 1: New
Visit 2+: Returning (forever)
```

**Time gap irrelevant:** 2 years between visits = still "Returning"

## Example

```
Visit History:
- Jan 2023: First visit → New
- Dec 2024: Second visit → Returning

Date Range "December 2024":
- Shows: 1 Returning Visitor
- Even though 2 years passed

Multiple visits in one month:
- March 1: Visitor first visits → New
- March 15: Same visitor returns → Returning
- March 28: Same visitor returns → Returning
- March report: 1 visitor (new at start, returning for subsequent visits)
```

---

## Related Documentation

- [Visitor Hash Mechanism](../../technical/architecture/visitor-hash-mechanism.md) - How visitor identification works
- [Hash Rotation Interval](../../settings/privacy.md#hash-rotation-interval) - Configure returning visitor detection window

---

*Last Updated: 2025-11-26*
