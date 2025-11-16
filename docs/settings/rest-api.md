---
title: "REST API Settings"
type: "settings"
add_on: "REST API"
status: "Not Started"
settings_count: 2
---

# REST API Settings

WordPress REST API integration settings for enabling WP Statistics API endpoints.

## Page Configuration

- **Add-on**: REST API
- **Status**: Not Started
- **Figma Design**: [Add link when available]
- **Settings Count**: 2

## WordPress REST API Integration

### API Service Status

**Display Label**: API Service Status

**Setting Key**: `wps_addon_settings[rest_api][status]`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Enable or disable WP Statistics API endpoints. For more information, visit the API documentation.

---

### Authentication Token

**Display Label**: Authentication Token

**Setting Key**: `wps_addon_settings[rest_api][token_auth]`

**Type**: Text Input

**Default Value**: Empty

**Description**: Enter your unique token here to secure and authorize API requests.

---

*Last Updated: 2025-11-16*
