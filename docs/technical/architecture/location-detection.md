---
title: "Location Detection"
type: "technical"
category: "architecture"
status: "Done"
sidebar_position: 2
---

# Location Detection

WP Statistics uses geolocation to determine visitor locations based on IP addresses. The system supports multiple geolocation providers with different accuracy levels and storage requirements.

## Overview

Location detection transforms visitor IP addresses into geographic information (country, city, region, continent). The system:

- Supports three geolocation providers (MaxMind, DB-IP, Cloudflare)
- Stores location data in the visitor record
- Offers both free and premium accuracy tiers
- Provides automatic database updates

## Geolocation Providers

### MaxMind GeoLite2 (Default)

**Method:** Database lookup using GeoLite2-City MMDB binary format.

**Database File:** `GeoLite2-City.mmdb` (~100MB)

**Data Sources:**
- **Free:** Downloaded from jsDelivr CDN (`cdn.jsdelivr.net/npm/geolite2-city`)
- **Premium:** Downloaded from MaxMind with license key (more frequent updates, higher accuracy)

**Accuracy:**
- Country: ~99.8%
- City: ~90%

### DB-IP

**Method:** Database lookup using MMDB binary format.

**Database File:** `dbip-city-lite.mmdb`

**Data Sources:**
- **Free:** Downloaded from jsDelivr CDN (`cdn.jsdelivr.net/npm/dbip-city-lite`)
- **Premium:** Downloaded from DB-IP API with license key (~1.1GB)

**Accuracy:**
- May provide better region and city accuracy in specific countries compared to MaxMind

**Note:** Premium database is significantly larger (~1.1GB vs ~100MB for MaxMind).

### Cloudflare

**Method:** HTTP header-based detection (no local database required).

**Requirements:**
- Site must be proxied through Cloudflare
- "IP Geolocation" must be enabled in Cloudflare dashboard (Network settings)

**Headers Used:**
| Header | Data | Stored |
|--------|------|--------|
| `HTTP_CF_IPCOUNTRY` | Country code | Yes |
| `HTTP_CF_IPCONTINENT` | Continent code | Yes |
| `HTTP_CF_REGION` | Region name | Yes |
| `HTTP_CF_IPCITY` | City name | Yes |
| `HTTP_CF_IPLATITUDE` | Latitude | No |
| `HTTP_CF_IPLONGITUDE` | Longitude | No |
| `HTTP_CF_POSTAL_CODE` | Postal code | No |

**Advantages:**
- No database storage required
- No download/update process
- Low server overhead
- Real-time accuracy from Cloudflare's network

**Availability:** Only available when Cloudflare headers are present. Falls back to MaxMind if headers not detected.

## Data Fields Captured

All providers return a standardized location array:

| Field | Type | Description |
|-------|------|-------------|
| `country` | string | Country name (derived from code) |
| `country_code` | string | ISO 2-letter country code |
| `continent` | string | Continent name |
| `region` | string | State/province name |
| `city` | string | City name |

## Location Detection Flow

```
[Page Hit Recorded]
       ↓
[Get Visitor IP Address]
       ↓
[Validate IP Format] ──(invalid)──→ [Return Default Location (nulls)]
       ↓ (valid)
[Check Private IP Range] ──(private)──→ [Return null location]
       ↓ (public)
[Get Configured Provider]
       ↓
┌──────┴──────┐
│  Provider?  │
└──────┬──────┘
       ├── MaxMind ──→ [Query GeoLite2-City.mmdb]
       ├── DB-IP ────→ [Query dbip-city-lite.mmdb]
       └── Cloudflare → [Read HTTP Headers]
              ↓
[Parse Location Data]
       ↓
[Return Standardized Array]
       ↓
[Store in wp_statistics_visitor]
  - location (country_code)
  - city
  - region
  - continent
```

## Database Storage

Location data is stored in the `wp_statistics_visitor` table:

| Column | Type | Description |
|--------|------|-------------|
| `location` | VARCHAR(10) | ISO country code (e.g., "US", "DE") |
| `city` | VARCHAR(100) | City name |
| `region` | VARCHAR(100) | State/province/region name |
| `continent` | VARCHAR(50) | Continent name |

The `location` column is indexed for query performance.

## Fallback Behavior

The system handles edge cases gracefully:

| Scenario | Behavior |
|----------|----------|
| Invalid IP format | Returns null for all location fields |
| Private IP address | Returns null for all location fields |
| Database file missing | Attempts automatic download; returns nulls if fails |
| Lookup exception | Returns null for all location fields |
| Cloudflare headers missing | Falls back to MaxMind provider |

## Database Updates

When scheduled updates are enabled:
- **Hook:** `wp_statistics_geoip_hook`
- **Schedule:** Monthly
- Downloads latest geolocation database from configured source

## Caching

### Request-Level Cache
- Location lookups are cached within a single page request
- Prevents duplicate database queries for the same IP
- Cache is not persistent between requests

### Database File Loading
- MMDB file loaded once per request
- Binary format optimized for O(1) lookups

## Performance Considerations

| Provider | Storage | Download Time | Lookup Speed |
|----------|---------|---------------|--------------|
| MaxMind Free | ~100MB | ~120s timeout | O(1) |
| MaxMind Premium | ~100MB | ~120s timeout | O(1) |
| DB-IP Free | ~50MB | ~300s timeout | O(1) |
| DB-IP Premium | ~1.1GB | ~300s timeout | O(1) |
| Cloudflare | 0 | N/A | Instant |

## Provider Comparison

| Feature | MaxMind | DB-IP | Cloudflare |
|---------|---------|-------|------------|
| Storage Required | ~100MB | ~50MB-1.1GB | None |
| Free Tier | Yes | Yes | Yes (with Cloudflare) |
| Premium Available | Yes | Yes | N/A |
| Update Frequency | Monthly | Monthly | Real-time |
| City-Level | Yes | Yes | Yes |
| Offline Support | Yes | Yes | No |
| Cloudflare Required | No | No | Yes |

## Related Documentation

- [Database Overview](../database/overview.md) - Database schema including visitor table
- [Visitor Hash Mechanism](visitor-hash-mechanism.md) - Privacy-focused visitor identification

---

*Last Updated: 2025-11-27*
