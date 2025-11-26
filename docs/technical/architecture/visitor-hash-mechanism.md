---
title: "Visitor Hash Mechanism"
type: "technical"
category: "architecture"
status: "In Progress"
sidebar_position: 1
---

# Visitor Hash Mechanism

WP Statistics uses a privacy-focused hashing system to identify unique visitors without storing personally identifiable information (PII). This mechanism enables visitor counting while complying with GDPR and other privacy regulations.

## Overview

The hash mechanism transforms visitor data (IP address + User Agent) into a non-reversible identifier using a daily rotating salt. This allows WP Statistics to:

- Count unique visitors without storing actual IP addresses
- Prevent cross-day tracking of individual users
- Comply with privacy regulations (GDPR, CCPA)
- Work without cookies

## How It Works

### Hash Generation Flow

```
[Visitor Request]
       ↓
[Get IP Address]
       ↓
[Anonymize IP] (optional, if enabled)
  192.168.1.15 → 192.168.1.0
       ↓
[Get Daily Salt] (rotates based on configured interval)
       ↓
[Combine: Salt + IP + User Agent]
       ↓
[SHA-256 Hash]
       ↓
[Truncate to 40 characters]
       ↓
[Add Prefix: #hash#]
       ↓
[Store: #hash#e7b398f96b14993b571215e36b41850c65f39b1a]
```

### Components

#### 1. IP Anonymization (Optional)
When enabled, masks the last segment of the IP address before hashing:
- IPv4: `192.168.1.15` → `192.168.1.0`
- IPv6: `2001:db8:85a3:1234::1` → `2001:db8:85a3:1234::`

#### 2. Daily Salt
A randomly generated value stored in WordPress options (`wp_statistics_daily_salt`). The salt rotates based on the configured interval (default: 24 hours).

**Salt Structure:**
```json
{
  "date": "2025-01-15",
  "salt": "a3f8b2c1d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1"
}
```

#### 3. User Agent
The visitor's browser User Agent string, adding additional entropy to the hash.

#### 4. SHA-256 Hashing
The combined string (salt + anonymized IP + user agent) is hashed using SHA-256:
```
hash = SHA-256(daily_salt + anonymized_ip + user_agent)
```

#### 5. Truncation and Prefix
The 64-character hash is truncated to 40 characters and prefixed with `#hash#` for identification:
```
#hash# + first 40 characters of hash = 46 characters total
```

## Hash Rotation Interval (v15)

In v15, administrators can configure how frequently the daily salt rotates using the [Hash Rotation Interval](../settings/privacy.md#hash-rotation-interval) setting.

## Storage

### Hash Always Generated

Starting in v15, the visitor hash is always generated and stored, regardless of whether "Hash IP Addresses" is enabled:

| Setting | IP Storage | Hash Storage |
|---------|------------|--------------|
| Hash IPs: OFF, Anonymize: OFF | Plain IP (e.g., `192.168.1.15`) | Also stored |
| Hash IPs: OFF, Anonymize: ON | Anonymized IP (e.g., `192.168.1.0`) | Also stored |
| Hash IPs: ON | Hash only (e.g., `#hash#e7b398...`) | Primary identifier |

This enables:
- Retroactive privacy compliance (can remove plain IPs later)
- Consistent visitor identification across privacy setting changes
- Future-proofing for privacy regulations

## Related Settings

See [Privacy & Data Protection Settings](../settings/privacy.md) for configuration options:
- Anonymize IP Addresses
- Hash IP Addresses
- Hash Rotation Interval

---

*Last Updated: 2025-11-26*
