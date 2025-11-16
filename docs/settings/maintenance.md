---
title: "Maintenance & Data Management Settings"
type: "settings"
add_on: "Free"
status: "Not Started"
settings_count: 3
---

# Maintenance & Data Management Settings

Controls data retention, aggregation, plugin reset options, and data deletion policies.

## Page Configuration

- **Add-on**: Free
- **Status**: Not Started
- **Figma Design**: [Add link when available]
- **Settings Count**: 3

## Settings

### Automatically Aggregate Old Data

**Display Label**: Automatically Aggregate Old Data

**Setting Key**: `wps_schedule_dbmaint_days`

**Type**: Dropdown with Custom Option

**Default Value**: `180` (days)

**Options**:
- 30: Keep details for 30 days
- 60: Keep details for 60 days
- 90: Keep details for 90 days
- 180: Keep details for 180 days
- 365: Keep details for 1 year
- 730: Keep details for 2 years
- 0: Keep data forever
- custom: Custom... (30-3650 days range via `wps_schedule_dbmaint_days_custom` input)

**Description**: Reduce database size and speed up reports. Each night at 00:00 (your WordPress timezone), data older than the period below is aggregated: we keep total Visitors and Views for the whole site and for each page, and delete the detailed rows. This cannot be undone. All-time reports still show Visitors/Views.

---

### Reset Options

**Display Label**: Reset Options

**Setting Key**: `wps_reset_plugin`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Revert all user-specific and global configurations to the WP Statistics default settings, preserving your existing data.

---

### Delete All Data on Plugin Deletion

**Display Label**: Delete All Data on Plugin Deletion

**Setting Key**: `wps_delete_data_on_uninstall`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Enable this option to automatically delete all WP Statistics data from your database when the plugin is deleted. This action is permanent and cannot be undone. Make sure to back up your data before enabling this option.

---

*Last Updated: 2025-11-16*
