---
title: "Lookup Tables"
type: "definition"
category: "technical-attributes"
status: "Need Review"
aliases: ["Reference Tables", "Mapping Tables"]
---

# Lookup Tables

Reference data tables that map stored IDs to human-readable names.

## Definition

Lookup tables are database tables that store mappings between internal identifiers (IDs) and their corresponding display values. They optimize storage and improve query performance.

**Purpose:** Convert numeric IDs stored in tracking data to readable names (e.g., browser ID → "Chrome").

## Examples

**Browser Lookup:**
```
ID: 1 → "Chrome"
ID: 2 → "Firefox"
ID: 3 → "Safari"
```

**Country Lookup:**
```
ID: 1 → "United States"
ID: 2 → "United Kingdom"
ID: 3 → "Germany"
```

## Common Lookup Tables

- Browsers
- Operating Systems
- Countries/Regions
- Screen Resolutions
- Search Engines
- Source Categories

## Why They're Used

- **Storage efficiency:** Store small integers instead of repeated strings
- **Query performance:** Faster joins and filtering on numeric IDs
- **Consistency:** Single source of truth for naming

---

*Last Updated: 2025-11-25*
