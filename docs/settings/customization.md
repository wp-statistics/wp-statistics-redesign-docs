---
title: "Customization Settings"
type: "settings"
add_on: "Customization"
status: "Not Started"
settings_count: 5
---

# Customization Settings

Menu management, white labeling, import/export, and overview widget customization.

## Page Configuration

- **Add-on**: Customization
- **Status**: Not Started
- **Figma Design**: [Add link when available]
- **Settings Count**: 5

## Settings

### Disable Menus

**Display Label**: Disable Menus

**Setting Key**: `wps_addon_settings[customization][disable_menus]`

**Type**: Multi-select

**Default Value**: Empty array

**Options**: Dynamically generated list of available menus:
- visitor_insights: Visitor Insight
- pages_insight: Page Insight
- referrals: Referrals
- content_analytics: Content Analytics
- author_analytics: Author Analytics
- category_analytics: Category Analytics
- geographic: Geographic
- devices: Devices
- link_tracker: Link Tracker (only if Data Plus is active)
- download_tracker: Download Tracker (only if Data Plus is active)
- plugins: Add-ons
- privacy_audit: Privacy Audit (only if enabled)
- optimize: Optimization
- exclusions: Exclusions (only if enabled)

**Description**: Select the menus you want to hide from the WordPress sidebar. To deselect a menu, hold Ctrl and click on it.

---

### White Label

**Display Label**: White label

**Setting Key**: `wps_addon_settings[customization][wps_white_label]`

**Type**: Checkbox

**Default Value**: `false`

**Description**: White label WP Statistics report pages. Remove branding and promotional elements.

---

### Change the Header Logo

**Display Label**: Change the Header Logo

**Setting Key**: `wps_addon_settings[customization][wps_modify_banner]`

**Type**: File Upload / Text Input

**Default Value**: Default WP Statistics logo URL

**Description**: Customize the header logo to match your branding by uploading your own logo.

---

### Enable Overview Widget

**Display Label**: Enable Overview Widget

**Setting Key**: `wps_addon_settings[customization][show_wps_about_widget_overview]`

**Type**: Dropdown

**Default Value**: Empty (not set)

**Options**:
- yes: Yes
- no: No

**Description**: Activate a custom widget on the Overview page.

---

### Widget Title

**Display Label**: Widget Title

**Setting Key**: `wps_addon_settings[customization][wps_about_widget_title]`

**Type**: Text Input

**Default Value**: Empty

**Description**: Enter a title for your custom widget.

**Dependencies**: Only visible when "Enable Overview Widget" is set to "yes"

---

### Widget Content

**Display Label**: Widget Content

**Setting Key**: `wps_addon_settings[customization][wps_about_widget_content]`

**Type**: Rich Text Editor

**Default Value**: Empty

**Description**: Craft the content for your widget; text, images, and HTML are supported.

**Dependencies**: Only visible when "Enable Overview Widget" is set to "yes"

---

*Last Updated: 2025-11-16*
