---
title: "v15 Settings Changes"
type: "settings"
status: "In Progress"
---

# v15 Settings Changes

This document tracks all settings changes in WP Statistics v15 compared to previous versions.

## Summary

### New Settings

| Setting | Page | Description |
|---------|------|-------------|
| [Hash Rotation Interval](#hash-rotation-interval) | Privacy | Controls how often the daily salt rotates for visitor hash generation |

### Modified Settings

| Setting | Page | Change |
|---------|------|--------|
| *None yet* | | |

### Removed Settings

| Setting | Previous Page | Reason |
|---------|---------------|--------|
| *None yet* | | |

---

## New Settings Details

### Hash Rotation Interval

**Display Label**: Hash Rotation Interval

**Setting Key**: `wps_hash_rotation_interval`

**Type**: Dropdown

**Default Value**: `daily`

**Options**:
- `daily`: 24 hours (Default) - Maximum privacy protection
- `48h`: 48 hours - Balance between privacy and returning visitor tracking
- `disabled`: Disabled - Hash never rotates (maximum tracking accuracy)

**Description**: Controls how frequently the daily salt rotates for visitor hash generation. Shorter intervals provide better privacy protection but prevent returning visitor identification across the interval. When disabled, the same visitor always produces the same hash, enabling full returning visitor tracking while still anonymizing the actual IP address.

**Dependencies**: Only visible when Hash IP Addresses is enabled

**Location**: Privacy Settings > Data Protection

**Related Documentation**: [Visitor Hash Mechanism](../technical/architecture/visitor-hash-mechanism.md)

---

*Last Updated: 2025-11-26*
