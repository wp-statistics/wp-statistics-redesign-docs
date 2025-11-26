---
title: "Hit"
type: "definition"
category: "core-metrics"
status: "Need Review"
aliases: ["Tracking Request", "Tracking Event"]
---

# Hit

A single tracking request sent to the server when a page loads.

## Definition

A hit is the raw tracking event recorded when the tracking script executes on a page. It represents one data transmission from a visitor's browser to the analytics system.

**One page load = One hit**

## What a Hit Records

Each hit captures:
- Timestamp
- Page URL
- Resource ID
- Resource Type
- Resource URI
- Resource URI ID
- Visitor identifier (IP hash)
- Referrer
- User agent (browser, OS, device)
- Screen resolution
- Timezone
- Language
- Language Full Name

## Hit vs View

- **Hit:** The raw tracking request
- **View:** The processed, validated page view metric

Hits become views after processing and validation (e.g., filtering bots, excluding logged-in users based on settings).

## Example

```
Visitor loads homepage → Hit recorded
Hit processed → View counted (if valid)
```

---

*Last Updated: 2025-11-25*
