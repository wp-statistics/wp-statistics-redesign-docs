---
title: "Advanced Widgets Settings"
type: "settings"
add_on: "Widgets"
status: "Not Started"
settings_count: 2
---

# Advanced Widgets Settings

Widget cache and styling configuration for Gutenberg blocks and theme widgets.

## Page Configuration

- **Add-on**: Widgets
- **Status**: Not Started
- **Figma Design**: [Add link when available]
- **Settings Count**: 2

## Settings

### Refresh Every

**Display Label**: Refresh Every

**Setting Key**: `wps_addon_settings[widgets][cache_life]`

**Type**: Dropdown

**Default Value**: Empty (addon-specific default)

**Options**:
- 1: 1 hour(s)
- 2: 2 hour(s)
- 3: 3 hour(s)
- ...24: 24 hour(s)

**Description**: Set the time interval for refreshing the statistics displayed in widgets. After the chosen period, fresh data will be fetched and displayed.

---

### Use Default Widget Styling

**Display Label**: Use Default Widget Styling

**Setting Key**: `wps_addon_settings[widgets][disable_styles]`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Uncheck to allow theme or custom styles to determine widget appearance.

---

*Last Updated: 2025-11-16*
