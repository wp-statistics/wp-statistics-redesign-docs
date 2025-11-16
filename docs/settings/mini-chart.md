---
title: "Mini Chart Settings"
type: "settings"
add_on: "Mini Chart"
status: "Not Started"
settings_count: 5
---

# Mini Chart Settings

Configuration for mini charts displayed on posts and pages, including chart preferences and appearance.

## Page Configuration

- **Add-on**: Mini Chart
- **Status**: Not Started
- **Figma Design**: [Add link when available]
- **Settings Count**: 5

## Settings

### Chart Display

**Display Label**: Enable Mini Chart for [Post Type]

**Setting Key**: `wps_addon_settings[mini_chart][active_mini_chart_{post_type}]` (e.g., `active_mini_chart_post`, `active_mini_chart_page`)

**Type**: Multiple Checkboxes (one per post type)

**Default Value**: `false`

**Description**: Select which post types to show mini charts for. Dynamically generated for all public post types including Posts, Pages, and custom post types.

---

### Chart Metric

**Display Label**: Chart Metric

**Setting Key**: `wps_addon_settings[mini_chart][metric]`

**Type**: Dropdown

**Default Value**: `views`

**Options**:
- visitors: Visitors
- views: Views

**Description**: Choose the metric to display on the chart.

---

### Chart Date Range

**Display Label**: Chart Date Range

**Setting Key**: `wps_addon_settings[mini_chart][date_range]`

**Type**: Dropdown

**Default Value**: `14`

**Options**:
- 7: 7 days
- 14: 14 days
- 30: 30 days
- 90: 90 days
- 180: 180 days

**Description**: Select the date range for displaying the chart data.

---

### Count Display

**Display Label**: Count Display

**Setting Key**: `wps_addon_settings[mini_chart][count_display]`

**Type**: Dropdown

**Default Value**: `total`

**Options**:
- disabled: Do Not Show Count
- date_range: Show Count for Selected Date Range
- total: Show Total Count

**Description**: Choose how to display the count under the chart.

---

### Primary Color

**Display Label**: Primary Color

**Setting Key**: `wps_addon_settings[mini_chart][chart_color]`

**Type**: Color Picker

**Default Value**: `#7362BF`

**Description**: Select a color for your chart's main elements to match your website's theme.

---

*Last Updated: 2025-11-16*
