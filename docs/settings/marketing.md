---
title: "Marketing Settings"
type: "settings"
add_on: "Marketing"
status: "Not Started"
settings_count: 6
---

# Marketing Settings

Google Search Console integration and campaign tracking configuration.

## Page Configuration

- **Add-on**: Marketing
- **Status**: Not Started
- **Figma Design**: [Add link when available]
- **Settings Count**: 6

## Google Search Console

### Show Google Search Tab

**Display Label**: Show Google Search tab

**Setting Key**: `wps_addon_settings[marketing][gsc_report]`

**Type**: Checkbox

**Default Value**: `1` (enabled)

**Description**: Display the Google Search Console report tab when no Google property is connected.

---

### Connection Method

**Display Label**: Connection Method

**Setting Key**: `wps_addon_settings[marketing][gsc_connection_method]`

**Type**: Dropdown

**Default Value**: `middleware`

**Options**:
- middleware: WP Statistics Credentials
- direct: Direct (Your Credentials)

**Description**: Select how to connect to Google Search Console: WP Statistics Credentials (no setup) or Direct (your Google OAuth app).

**Dependencies**: Locked when already authenticated (requires disconnect first)

---

### Google Client ID

**Display Label**: Google Client ID

**Setting Key**: `wps_addon_settings[marketing][gsc_client_id]`

**Type**: Text Input

**Default Value**: Empty

**Description**: Client ID from your Google Cloud OAuth 2.0 Web application.

**Dependencies**: Only visible when Connection Method is set to "direct"

---

### Google Client Secret

**Display Label**: Google Client Secret

**Setting Key**: `wps_addon_settings[marketing][gsc_client_secret]`

**Type**: Password Input

**Default Value**: Empty

**Description**: Client Secret from the same OAuth app; private on your site.

**Dependencies**: Only visible when Connection Method is set to "direct"

---

### Site

**Display Label**: Site

**Setting Key**: `wps_addon_settings[marketing][site]`

**Type**: Dropdown (dynamically loaded from Google)

**Default Value**: Empty

**Description**: Select which Google Search Console property to connect to your WordPress site.

**Dependencies**: Only visible when authenticated with Google Search Console

---

## Campaign Builder

### Campaign Builder

**Display Label**: Campaign Builder

**Setting Key**: `wps_addon_settings[marketing][campaign_builder]`

**Type**: Checkbox

**Default Value**: `1` (enabled)

**Description**: Generate and validate UTM-tagged links.

---

*Last Updated: 2025-11-16*
