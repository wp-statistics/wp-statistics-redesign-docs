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

In v15, administrators can configure how frequently the daily salt rotates.

### Available Options

| Interval | Description | Use Case |
|----------|-------------|----------|
| 24 hours | Default. Salt rotates daily at midnight. | Maximum privacy protection |
| 48 hours | Salt rotates every 2 days | Balance between privacy and returning visitor tracking |
| Disabled | Hash generated but never rotates | Maximum visitor tracking accuracy (less privacy) |

### Behavior by Configuration

**24 hours (Default):**
- Same visitor on different days = different hash = counted as new visitor
- No cross-day visitor correlation possible
- "Returning visitors" metric not available across days

**48 hours:**
- Same visitor within 48-hour window = same hash = same visitor
- Limited cross-day correlation within the window
- Partial "returning visitors" tracking

**Disabled:**
- Same visitor always produces same hash (until salt is manually rotated)
- Full returning visitor tracking capability
- IP address still anonymized/hashed (not stored in plain text)

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

### Database Column

Stored in the `wp_statistics_visitor` table:

| Column | Type | Example |
|--------|------|---------|
| `ip` | VARCHAR(60) | `#hash#e7b398f96b14993b571215e36b41850c65f39b1a` |

### Hash Identification

Hashed IPs are identified by the `#hash#` prefix:
```php
public static $hash_ip_prefix = '#hash#';

public static function IsHashIP($ip) {
    return (substr($ip, 0, strlen(self::$hash_ip_prefix)) == self::$hash_ip_prefix);
}
```

## Privacy Settings

### Related Settings

| Setting | Location | Effect |
|---------|----------|--------|
| Anonymize IP Addresses | Privacy Settings | Masks last IP segment before hashing |
| Hash IP Addresses | Privacy Settings | Stores hash instead of IP in database |
| Hash Rotation Interval | Privacy Settings | Controls how often the daily salt changes |

### Privacy Audit Integration

When Privacy Audit is enabled, the hash settings are evaluated for compliance:
- Hashing enabled = higher privacy score
- Shorter rotation intervals = better privacy protection
- Anonymization + hashing = maximum protection

## Technical Details

### Security Properties

- **Non-reversible:** SHA-256 is a one-way function; original IP cannot be recovered
- **Collision-resistant:** Extremely unlikely for two different inputs to produce the same hash
- **Deterministic:** Same input always produces same output (within same salt period)

### Performance

- Hash generation: < 1ms per request
- Salt lookup: Cached in WordPress options (single DB query per page load)
- No additional database queries for hash validation

### Limitations

- **No cross-device tracking:** Different devices = different User Agents = different hashes
- **No cross-network tracking:** Different IPs (home/office/mobile) = different hashes
- **VPN users:** All users on same VPN exit node may share the same anonymized IP

## Migration

### Upgrading Existing Data

Existing plain IP addresses can be converted to hashes:

```php
IP::Update_HashIP_Visitor()
```

This function:
1. Finds all non-hashed IPs in the visitor table
2. Generates hashes using the current daily salt
3. Updates records with hashed values

**Note:** Once converted, original IPs cannot be recovered.

## Notes

- The hash mechanism is independent of cookie consent; it works without any cookies
- For maximum privacy, enable both IP anonymization and IP hashing
- The hash prefix `#hash#` allows the system to distinguish between hashed and plain IPs
- User Agent is included in the hash to differentiate between multiple users behind the same IP (e.g., office networks)

---

*Last Updated: 2025-11-26*
