---
title: "Privacy & Data Protection Settings"
type: "settings"
add_on: "Free"
status: "Not Started"
settings_count: 7
---

# Privacy & Data Protection Settings

Controls data protection, IP anonymization, hashing, privacy compliance auditing, and consent management integration.

## Page Configuration

- **Add-on**: Free
- **Status**: Not Started
- **Figma Design**: [Add link when available]
- **Settings Count**: 7

## Data Protection

### Anonymize IP Addresses

**Display Label**: Anonymize IP Addresses

**Setting Key**: `wps_anonymize_ips`

**Type**: Checkbox

**Default Value**: `true`

**Description**: Masks the last segment of a user's IP address for privacy, complying with GDPR and preventing the full IP from being stored.

**Privacy Impact**: This setting affects user privacy and requires compliance with privacy standards.

---

### Hash IP Addresses

**Display Label**: Hash IP Addresses

**Setting Key**: `wps_hash_ips`

**Type**: Checkbox

**Default Value**: `true`

**Description**: Transforms IP addresses into a unique, non-reversible string using a secure algorithm, enhancing privacy protection and complying with data privacy regulations.

**Privacy Impact**: This setting affects user privacy and requires compliance with privacy standards.

---

### Privacy Audit

**Display Label**: Privacy Audit

**Setting Key**: `wps_privacy_audit`

**Type**: Checkbox

**Default Value**: `true`

**Description**: Checking WP Statistics settings for privacy compliance. When enabled, displays privacy impact warnings throughout the plugin settings.

---

## Privacy Compliance

### Consent Plugin Integration

**Display Label**: Consent Plugin Integration

**Setting Key**: `wps_consent_integration`

**Type**: Dropdown

**Default Value**: `` (None)

**Options**:
- (empty): No consent management integration
- wp_consent_api: Integrate with WP Consent API compatible plugins
- borlabs_cookie: Direct integration with Borlabs Cookie
- complianz: Integration with Complianz

**Description**: Enable integration with supported consent management plugins to ensure WP Statistics respects user privacy preferences. When enabled, WP Statistics will only track data based on the consent settings provided by your active consent management plugin.

---

### Consent Category

**Display Label**: Consent Category

**Setting Key**: `wps_consent_level_integration`

**Type**: Dropdown

**Default Value**: `functional`

**Options**:
- functional: Basic website functionality tracking
- statistics-anonymous: Anonymous statistical tracking
- statistics: Full statistical tracking with PII
- marketing: Marketing and analytics tracking

**Description**: When using WP Consent API, select the consent category that WP Statistics should track. Only visitors who have consented to the selected category will be tracked.

**Dependencies**: Only visible when Consent Plugin Integration is set to "wp_consent_api"

---

### Anonymous Tracking

**Display Label**: Anonymous Tracking

**Setting Key**: `wps_anonymous_tracking`

**Type**: Checkbox

**Default Value**: `false`

**Description**: When enabled, all users will be tracked anonymously by default, without recording any Personally Identifiable Information (PII), regardless of consent. This anonymous tracking data is classified as "Functional" to align with privacy regulations. PII data will only be collected when explicit consent is provided by the website visitor.

**Dependencies**: Only visible when a Consent Plugin Integration is selected

**Status Badge**: Beta

---

## User Preferences

### Do Not Track (DNT)

**Display Label**: Do Not Track (DNT)

**Setting Key**: `wps_do_not_track`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Respects the visitor's browser setting to not track their web activity. Privacy laws like GDPR do not mandate this feature, but activating it demonstrates a commitment to privacy. Be aware that with DNT respected, information from visitors preferring not to be tracked will not be collected.

---

*Last Updated: 2025-11-16*
