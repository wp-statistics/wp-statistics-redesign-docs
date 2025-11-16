---
title: "General Settings"
type: "settings"
add_on: "Free"
status: "Not Started"
settings_count: 7
---

# General Settings

Core tracking configuration including online visitor monitoring, user activity tracking, attribution models, and tracker method settings.

## Page Configuration

- **Add-on**: Free
- **Status**: Not Started
- **Figma Design**: [Add link when available]
- **Settings Count**: 7

## Tracking Options

### Monitor Online Visitors

**Display Label**: Monitor Online Visitors

**Setting Key**: `wps_useronline`

**Type**: Checkbox

**Default Value**: `true`

**Description**: Tracks and displays visitors currently online, including their activity duration. Disabling this option stops the online monitoring feature, but visitor tracking remains active.

---

### Track Logged-In User Activity

**Display Label**: Track Logged-In User Activity

**Setting Key**: `wps_visitors_log`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Tracks the activities of logged-in users, including page views, and records them with their WordPress User IDs for detailed insights into user behavior. If disabled, logged-in users are tracked anonymously, similar to other visitors.

**Privacy Impact**: This setting affects user privacy. Compliance with GDPR and other privacy regulations is essential. Inform users about data collection and usage through your privacy policy.

---

### Store Entire User Agent String

**Display Label**: Store Entire User Agent String

**Setting Key**: `wps_store_ua`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Records full details of visitors for diagnostic purposes. When 'Hash IP Addresses' is operational, this feature is bypassed, and data collection is disabled to ensure privacy.

**Privacy Impact**: This setting affects user privacy and requires compliance with privacy standards.

---

### Attribution Model

**Display Label**: Attribution Model

**Setting Key**: `wps_attribution_model`

**Type**: Dropdown

**Default Value**: `first-touch`

**Options**:
- first-touch: Credits the first interaction for conversions
- last-touch: Credits the most recent interaction for conversions

**Description**: Select how conversions are attributed: First-Touch credits the first interaction, and Last-Touch credits the most recent.

---

## Tracker Configuration

### Tracking Method

**Display Label**: Tracking Method

**Setting Key**: `wps_use_cache_plugin`

**Type**: Dropdown

**Default Value**: `1` (Client Side Tracking)

**Options**:
- 1: Client Side Tracking (Recommended) - Uses the visitor's browser for better accuracy and caching compatibility
- 0: Server Side Tracking (Deprecated) - Less accurate and will be deprecated

**Description**: Client Side Tracking uses the visitor's browser for better accuracy and caching compatibility. Server Side Tracking is less accurate and will be deprecated. Client Side Tracking is strongly recommended.

**Status Badge**: Deprecated

---

### Bypass Ad Blockers

**Display Label**: Bypass Ad Blockers

**Setting Key**: `wps_bypass_ad_blockers`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Dynamically load the tracking script with a unique name and address to bypass ad blockers.

**Dependencies**: Only visible when Tracking Method is set to Client Side Tracking (value = 1)

---

### Tracker Debugger

**Display Label**: Tracker Debugger

**Setting Key**: N/A (button/link, not a stored setting)

**Type**: Button/Link

**Default Value**: N/A

**Description**: Use the Tracker Debugger to inspect and troubleshoot your tracking script, ensuring accurate data collection. Opens the Tracker Debugger page.

**Dependencies**: Only visible when Tracking Method is set to Client Side Tracking (value = 1)

---

*Last Updated: 2025-11-16*
