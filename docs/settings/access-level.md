---
title: "Roles & Permissions Settings"
type: "settings"
add_on: "Free"
status: "Not Started"
settings_count: 2
---

# Roles & Permissions Settings

Controls which user roles and capabilities can view statistics and manage plugin settings.

## Page Configuration

- **Add-on**: Free
- **Status**: Not Started
- **Figma Design**: [Add link when available]
- **Settings Count**: 2

## Roles & Permissions

### Minimum Role to View Statistics

**Display Label**: Minimum Role to View Statistics

**Setting Key**: `wps_read_capability`

**Type**: Dropdown

**Default Value**: `manage_options`

**Options**: All WordPress capabilities (dynamically generated from installed roles)
- manage_network: Super Admin capability in network setup
- manage_options: Administrator capability
- edit_others_posts: Editor capability
- publish_posts: Author capability
- edit_posts: Contributor capability
- read: Subscriber capability
- ...and other WordPress capabilities

**Description**: Select the least privileged user role allowed to view WP Statistics. Note that higher roles will also have this permission.

---

### Minimum Role to Manage Settings

**Display Label**: Minimum Role to Manage Settings

**Setting Key**: `wps_manage_capability`

**Type**: Dropdown

**Default Value**: `manage_options`

**Options**: All WordPress capabilities (dynamically generated from installed roles)
- manage_network: Super Admin capability in network setup
- manage_options: Administrator capability
- edit_others_posts: Editor capability
- publish_posts: Author capability
- edit_posts: Contributor capability
- read: Subscriber capability
- ...and other WordPress capabilities

**Description**: Select the least privileged user role allowed to change WP Statistics settings. This should typically be reserved for trusted roles.

---

*Last Updated: 2025-11-16*
