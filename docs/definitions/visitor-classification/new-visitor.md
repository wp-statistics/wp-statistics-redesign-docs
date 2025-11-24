---
title: "New Visitor"
type: "definition"
category: "visitor-classification"
status: "Need Review"
aliases: ["First-Time Visitor"]
---

# New Visitor

First-time visitor to the website (all-time classification, permanent).

## Definition

Classification based on all-time history, not date range. Once an IP is recorded, it's never "new" again, even after years.

**Key Rule:** All-time classification, date-range scoped counting.

## How It Works

```
First visit ever → Classified as "New" (permanent)
Second visit onward → Classified as "Returning" (permanent)
```

**Date Range Behavior:**
- Filter to "January": Shows visitors who visited in January
- Their status (New/Returning) based on all-time history
- "New" in January report = first visit ever happened in January

## Example

```
Dec 15, 2023: Visitor A first visits → New Visitor (permanently recorded)
Jan 10, 2024: Visitor A returns

Date Range "January 2024":
- Shows: 1 Returning Visitor (Visitor A)
- Why "Returning"? First visit was in December (before January)

Date Range "December 2023":
- Shows: 1 New Visitor (Visitor A)
- Their first-ever visit
```

## Common Misconceptions

**"New visitors in January = visitors new to the selected month"**
- No. New = first visit ever, not first visit in the period.

**"Can a visitor become 'new' again after long absence?"**
- No. Classification is permanent, never resets.

---

*Last Updated: 2025-11-24*
