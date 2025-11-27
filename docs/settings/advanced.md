---
title: "Advanced Options Settings"
type: "settings"
add_on: "Free"
status: "Not Started"
settings_count: 13
---

# Advanced Options Settings

Technical configuration including IP detection methods, geolocation providers, content analytics, and anonymous usage data sharing.

## Page Configuration

- **Add-on**: Free
- **Status**: Not Started
- **Figma Design**: [Add link when available]
- **Settings Count**: 13

## Your IP Information

### Ipify.org IP

**Display Label**: Ipify.org IP

**Setting Key**: N/A (Display only)

**Type**: Information Display

**Default Value**: IP from ipify.org service

**Description**: Displays the IP address detected by the ipify.org service for comparison and verification purposes.

**Dependencies**: Only shown when ipify.org service is available

---

### WP Statistics Detected IP

**Display Label**: WP Statistics

**Setting Key**: N/A (Display only)

**Type**: Information Display

**Default Value**: IP detected by WP Statistics

**Description**: Displays the IP address detected by WP Statistics using the configured detection method. Use this to verify your IP detection settings are working correctly.

---

## Main IP Detection Method

### IP Detection Method

**Display Label**: Detection Method

**Setting Key**: `ip_method`

**Type**: Dropdown

**Default Value**: `sequential`

**Options**:
- sequential: Sequential IP Detection (Recommended)
- CUSTOM_HEADER: Specify a Custom Header for IP Detection

**Description**: Select the preferred method for determining the visitor's IP address. Sequential detection checks variables in this order: HTTP_X_FORWARDED_FOR, HTTP_X_FORWARDED, HTTP_FORWARDED_FOR, HTTP_FORWARDED, REMOTE_ADDR, HTTP_CLIENT_IP, HTTP_X_CLUSTER_CLIENT_IP, HTTP_X_REAL_IP, HTTP_INCAP_CLIENT_IP.

---

### Custom Header for IP Detection

**Display Label**: Custom Header

**Setting Key**: `user_custom_header_ip_method`

**Type**: Text Input

**Default Value**: Empty

**Description**: If your server uses a custom key in $_SERVER for IP detection (e.g., HTTP_CF_CONNECTING_IP for CloudFlare), specify it here.

**Dependencies**: Only visible when IP Detection Method is set to "CUSTOM_HEADER"

---

## Geolocation Settings

### Location Detection Method

**Display Label**: Location Detection Method

**Setting Key**: `wps_geoip_location_detection_method`

**Type**: Dropdown

**Default Value**: `maxmind`

**Options**:
- cf: Cloudflare IP Geolocation
- maxmind: MaxMind GeoIP
- dbip: DB-IP

**Description**: Select the method to detect location data for visitors. MaxMind and DB-IP provide database-based geolocation, while Cloudflare Geolocation relies on IP headers from Cloudflare. For optimal performance, we recommend using Cloudflare Geolocation if your site is on Cloudflare.

---

### Geolocation Database Update Source

**Display Label**: Geolocation Database Update Source

**Setting Key**: `wps_geoip_license_type`

**Type**: Dropdown

**Default Value**: `js-deliver`

**Options**:
- js-deliver: Use the JsDelivr
- user-license: Use the MaxMind/DB-IP server with your own license key

**Description**: Select the source for updating the Geolocation database. If using a premium database, updates will be downloaded automatically using the provided license key.

**Dependencies**: Only visible when Location Detection Method is "maxmind" or "dbip"

---

### GeoIP License Key

**Display Label**: GeoIP License Key

**Setting Key**: `wps_geoip_license_key`

**Type**: Text Input

**Default Value**: Empty

**Description**: Enter your MaxMind license key to enable the premium MaxMind GeoIP database, which provides more precise location data. The plugin uses the free database by default.

**Dependencies**: Only visible when Location Detection Method is "maxmind" AND Database Update Source is "user-license"

---

### DB-IP License Key

**Display Label**: DB-IP License Key

**Setting Key**: `wps_geoip_dbip_license_key_option`

**Type**: Text Input

**Default Value**: Empty

**Description**: Enter your DB-IP license key to enable the premium DB-IP database, replacing the free version with a more detailed dataset. The premium DB-IP database is 1.1GB in size. Make sure your server has enough storage space before enabling it.

**Dependencies**: Only visible when Location Detection Method is "dbip" AND Database Update Source is "user-license"

---

### Manual Update of Geolocation Database

**Display Label**: Manual Update of Geolocation Database

**Setting Key**: N/A (Action button: `update-geoip-database`)

**Type**: Button/Action

**Default Value**: N/A

**Description**: Manually trigger an immediate update of the geolocation database to get the latest geographical data without waiting for the scheduled update.

**Dependencies**: Only visible when Location Detection Method is "maxmind" or "dbip"

---

### Schedule Monthly Update of Geolocation Database

**Display Label**: Schedule Monthly Update of Geolocation Database

**Setting Key**: `wps_schedule_geoip`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Automates monthly Geolocation database updates for the latest geographical data.

**Dependencies**: Only visible when Location Detection Method is "maxmind" or "dbip"

---

### ~~Update Missing Geolocation Data~~ (Removed in v15)

**Status**: Removed in v15 - Not compatible with hashed IPs

**Previous Setting Key**: `wps_auto_pop`

See [v15 Settings Changes](v15-changes.md#update-missing-geolocation-data) for details.

---

### ~~Country Code for Private IPs~~ (Removed in v15)

**Status**: Removed in v15 - Private IPs now return null for location

**Previous Setting Key**: `wps_private_country_code`

See [v15 Settings Changes](v15-changes.md#country-code-for-private-ips) for details.

---

## Content Analytics

### Word Count Analytics

**Display Label**: Word Count Analytics

**Setting Key**: `wps_word_count_analytics`

**Type**: Checkbox

**Default Value**: `true`

**Description**: Provides word count data for content and author analytics reports. Turning off this option will remove all word count-related reports.

---

## Purge Old Data Daily

### Automatically Aggregate Old Data

**Display Label**: Automatically Aggregate Old Data

**Setting Key**: `wps_auto_aggregate_old_data`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Automatically aggregates historical data older than a specified threshold to optimize database performance while preserving statistical summaries.

---

## Anonymous Usage Data

### Share Anonymous Data

**Display Label**: Share Anonymous Data

**Setting Key**: `wps_share_anonymous_data`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Sends non-personal, anonymized data to help us improve WP Statistics. No personal or identifying information is collected or shared.

---

## Restore Default Settings

### Reset Options

**Display Label**: Reset to Default Settings

**Setting Key**: N/A (Action button)

**Type**: Button/Action

**Default Value**: N/A

**Description**: Restores all WP Statistics settings to their default values. This action cannot be undone.

---

## Danger Zone

### Delete All Data on Plugin Deletion

**Display Label**: Delete All Data on Uninstall

**Setting Key**: `wps_delete_on_uninstall`

**Type**: Checkbox

**Default Value**: `false`

**Description**: When enabled, all WP Statistics data (including visitor logs, statistics, and all plugin settings) will be permanently removed from your database when you uninstall the plugin. This action is irreversible.

---

*Last Updated: 2025-11-27*
