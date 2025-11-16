---
title: "Advanced Options Settings"
type: "settings"
add_on: "Free"
status: "Not Started"
settings_count: 11
---

# Advanced Options Settings

Technical configuration including IP detection methods, geolocation providers, content analytics, and anonymous usage data sharing.

## Page Configuration

- **Add-on**: Free
- **Status**: Not Started
- **Figma Design**: [Add link when available]
- **Settings Count**: 11

## Settings

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

### Schedule Monthly Update of Geolocation Database

**Display Label**: Schedule Monthly Update of Geolocation Database

**Setting Key**: `wps_schedule_geoip`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Automates monthly Geolocation database updates for the latest geographical data.

**Dependencies**: Only visible when Location Detection Method is "maxmind" or "dbip"

---

### Update Missing Geolocation Data

**Display Label**: Update Missing Geolocation Data

**Setting Key**: `wps_auto_pop`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Fills in any gaps in the Geolocation database following a new download.

**Dependencies**: Only visible when Location Detection Method is "maxmind" or "dbip"

---

### Country Code for Private IPs

**Display Label**: Country Code for Private IPs

**Setting Key**: `wps_private_country_code`

**Type**: Text Input (3 characters)

**Default Value**: `000` or provider-specific default

**Description**: Assigns a default country code for private IP addresses that cannot be geographically located.

---

### Word Count Analytics

**Display Label**: Word Count Analytics

**Setting Key**: `wps_word_count_analytics`

**Type**: Checkbox

**Default Value**: `true`

**Description**: Provides word count data for content and author analytics reports. Turning off this option will remove all word count-related reports.

---

### Share Anonymous Data

**Display Label**: Share Anonymous Data

**Setting Key**: `wps_share_anonymous_data`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Sends non-personal, anonymized data to help us improve WP Statistics. No personal or identifying information is collected or shared.

---

*Last Updated: 2025-11-16*
