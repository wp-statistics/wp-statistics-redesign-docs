---
title: "Device Detection"
type: "technical"
category: "architecture"
status: "Done"
sidebar_position: 3
---

# Device Detection

WP Statistics uses the [Matomo Device Detector](https://github.com/matomo-org/device-detector) library to parse User Agent strings and identify devices, browsers, operating systems, and bots.

## Overview

Device detection analyzes the HTTP User Agent header to extract:

- Device type (desktop, smartphone, tablet, etc.)
- Operating system name
- Browser name and major version
- Bot/crawler identification

## Data Fields Captured

| Field | Description | Example |
|-------|-------------|---------|
| `agent` | Browser name | Chrome, Safari, Firefox |
| `version` | Browser major version | 91, 120, 15 |
| `platform` | Operating system | Windows, iOS, Android |
| `device` | Device type | desktop, smartphone, tablet |
| `model` | Device brand and model | Apple iPhone, Samsung Galaxy |

## Device Types

Common device types: `desktop`, `smartphone`, `tablet`, `console`, `tv`, `wearable`, etc.

## Browser & OS Detection

- **Browsers:** Chrome, Firefox, Safari, Edge, Opera, and many others
- **Operating Systems:** Windows, macOS, Linux, iOS, Android, and many others
- **Version Handling:** Full version strings are normalized to major version only (e.g., "91.0.4472.124" → "91")

## Bot Detection

The library identifies automated agents like Googlebot, Bingbot, and other crawlers.

**Bot Handling:**
When a bot is detected:
1. Visit is excluded from tracking
2. No visitor record is created
3. Exclusion is logged (if exclusion recording enabled)

## Detection Flow

```
[HTTP Request Received]
       ↓
[Extract User Agent Header]
       ↓
[DeviceDetector.parse()]
       ↓
[Check if Bot] ──(yes)──→ [Exclude from Tracking]
       ↓ (no)
[Extract Device Data]
  - Browser name & version
  - Operating system
  - Device type & model
       ↓
[Store in wp_statistics_visitor]
```

## Database Storage

Device data is stored in the `wp_statistics_visitor` table:

| Column | Type | Description |
|--------|------|-------------|
| `agent` | VARCHAR(180) | Browser name |
| `version` | VARCHAR(180) | Browser major version |
| `platform` | VARCHAR(180) | Operating system |
| `device` | VARCHAR(180) | Device type |
| `model` | VARCHAR(180) | Device brand and model |
| `UAString` | VARCHAR(190) | Full User Agent string (optional) |

**Indexes:** `agent`, `platform`, `version`, `device`, `model` columns are indexed.

**Note:** The full User Agent string (`UAString`) is only stored when "Store User Agent" setting is enabled and anonymous tracking is disabled.

## Unknown User Agents

When the User Agent cannot be parsed:

| Field | Value |
|-------|-------|
| Browser | `UNK` (Unknown) |
| Version | `UNK` |
| Platform | `UNK` |
| Device | Empty string |

Visitors with both unknown browser and platform are excluded from tracking.

## Caching

- Device detection is parsed once per page request
- Results are cached in memory for the request lifecycle
- No persistent caching between requests

## Related Documentation

- [Database Overview](../database/overview.md) - Database schema including visitor table
- [Visitor Hash Mechanism](visitor-hash-mechanism.md) - Privacy-focused visitor identification

---

*Last Updated: 2025-11-27*
