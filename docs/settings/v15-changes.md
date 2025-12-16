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
| [Screen Resolution Tracker](#screen-resolution-tracker) | Data Plus | Enables collection of visitor screen resolution data |

### Modified Settings

| Setting | Page | Change |
|---------|------|--------|
| *None yet* | | |

### Removed Settings

| Setting | Previous Page | Reason |
|---------|---------------|--------|
| [Country Code for Private IPs](#country-code-for-private-ips) | Advanced | Private IPs now return null for location (same as unknown) |
| [Update Missing Geolocation Data](#update-missing-geolocation-data) | Advanced | Feature removed - not compatible with hashed IPs |

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

### Screen Resolution Tracker

**Display Label**: Screen Resolution Tracker

**Setting Key**: `wps_addon_settings[data_plus][screen_resolution_tracker]`

**Type**: Checkbox

**Default Value**: `0` (disabled)

**Description**: Collect visitor screen resolution data for responsive design insights.

**Location**: Data Plus Settings > Device Tracking

**Related Documentation**: [Screen Resolutions Report](../reports/devices/screen-resolutions.md)

---

## Removed Settings Details

### Country Code for Private IPs

**Previous Display Label**: Country Code for Private IPs

**Previous Setting Key**: `wps_private_country_code`

**Previous Type**: Text Input (3 characters)

**Previous Default Value**: `000`

**Previous Location**: Advanced Options > Geolocation Settings

**Reason for Removal**: Simplified location detection. Private IP addresses (localhost, internal networks) now return `null` for all location fields, treating them the same as any other unidentifiable location. This eliminates the need for a separate country code configuration.

**Migration**: Existing data with `000` country codes remains unchanged. New private IP visits will have null location values.

**Related Documentation**: [Location Detection](../technical/architecture/location-detection.md)

---

### Update Missing Geolocation Data

**Previous Display Label**: Update Missing Geolocation Data

**Previous Setting Key**: `wps_auto_pop`

**Previous Type**: Checkbox

**Previous Default Value**: `false`

**Previous Location**: Advanced Options > Geolocation Settings

**Reason for Removal**: This feature is no longer compatible with the privacy-first approach in v15. Since visitor IPs are hashed by default, the original IP address is not stored and cannot be used to retroactively look up location data. Location must be captured at the time of the visit.

**Related Documentation**: [Location Detection](../technical/architecture/location-detection.md)

---

*Last Updated: 2025-12-16*
