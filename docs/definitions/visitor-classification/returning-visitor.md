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

Complement of "New Visitor". Any visitor whose IP exists in database from a previous visit.

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

*Last Updated: 2025-11-24*
