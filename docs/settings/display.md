---
title: "Display Options Settings"
type: "settings"
add_on: "Free"
status: "Not Started"
settings_count: 10
---

# Display Options Settings

Admin interface and frontend display configuration for WP Statistics.

## Page Configuration

- **Add-on**: Free
- **Status**: Not Started
- **Figma Design**: [Add link when available]
- **Settings Count**: 10

## Admin Interface

### View Stats in Editor

**Display Label**: View Stats in Editor

**Setting Key**: `wps_disable_editor`

**Type**: Checkbox

**Default Value**: `true` (enabled, value stored as not-disabled)

**Description**: Show a summary of content view statistics in the post editor.

---

### Views Column in Content List

**Display Label**: Views Column in Content List

**Setting Key**: `wps_disable_column`

**Type**: Checkbox

**Default Value**: `true` (enabled, value stored as not-disabled)

**Description**: Display the "Views" column in the content list menus, showing the page view counts for content across all post types.

---

### Views Column in User List

**Display Label**: Views Column in User List

**Setting Key**: `wps_enable_user_column`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Display the "Views" column in the admin user list, showing the view count related to each logged-in WordPress user. Requires "Track Logged-In User Activity" to be enabled.

**Dependencies**: Requires "Track Logged-In User Activity" setting to be enabled

---

### Show Stats in Admin Menu Bar

**Display Label**: Show Stats in Admin Menu Bar

**Setting Key**: `wps_menu_bar`

**Type**: Checkbox

**Default Value**: `false`

**Description**: View your site's statistics directly from the WordPress admin menu bar.

---

### Previous Period in Charts

**Display Label**: Previous Period in Charts

**Setting Key**: `wps_charts_previous_period`

**Type**: Checkbox

**Default Value**: `true`

**Description**: Show data from the previous period in charts for comparison.

---

### WP Statistics Widgets in the WordPress dashboard

**Display Label**: WP Statistics Widgets in the WordPress dashboard

**Setting Key**: `wps_disable_dashboard`

**Type**: Checkbox

**Default Value**: `true` (enabled, value stored as not-disabled)

**Description**: View WP Statistics widgets in the WordPress dashboard.

---

### WP Statistics Notifications

**Display Label**: WP Statistics Notifications

**Setting Key**: `wps_display_notifications`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Display important notifications inside the plugin, such as new version releases, feature updates, news, and special offers.

---

### Disable Inactive Essential Feature Notices

**Display Label**: Disable Inactive Essential Feature Notices

**Setting Key**: `wps_hide_notices`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Stops displaying messages for essential features that are currently switched off.

---

## Frontend Display

### Views in Single Contents

**Display Label**: Views in Single Contents

**Setting Key**: `wps_show_hits`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Shows the view count on the content's page for visitor insight.

---

### Display Position

**Display Label**: Display position

**Setting Key**: `wps_display_hits_position`

**Type**: Dropdown

**Default Value**: `0` (Please select)

**Options**:
- 0: Please select
- before_content: Before Content
- after_content: After Content

**Description**: Choose the position to show views.

**Dependencies**: Only visible when "Views in Single Contents" is enabled

---

*Last Updated: 2025-11-16*
