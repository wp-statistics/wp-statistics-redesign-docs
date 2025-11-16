---
title: "Filtering & Exceptions Settings"
type: "settings"
add_on: "Free"
status: "Not Started"
settings_count: 9
---

# Filtering & Exceptions Settings

Configure exclusions for user roles, IP addresses, robots, countries, and URLs to refine tracked data.

## Page Configuration

- **Add-on**: Free
- **Status**: Not Started
- **Figma Design**: [Add link when available]
- **Settings Count**: 9

## Settings

### User Role Exclusions

**Display Label**: Varies by role (e.g., "Administrator", "Editor", "Anonymous Users")

**Setting Key**: `wps_exclude_{role_name}` (e.g., `wps_exclude_administrator`, `wps_exclude_editor`)

**Type**: Multiple Checkboxes (one per role)

**Default Value**: `true` for Administrator role, `false` for others

**Description**: Exclude data collection for specific WordPress user roles. Available options include all WordPress roles (Administrator, Editor, Author, Contributor, Subscriber, Anonymous Users, etc.). Each role has an individual checkbox to exclude tracking.

---

### Excluded IP Address List

**Display Label**: Excluded IP Address List

**Setting Key**: `wps_exclude_ip`

**Type**: Textarea

**Default Value**: Empty

**Description**: Specify the IP addresses you want to exclude. Enter one IP address or range per line. For IPv4 addresses, both `192.168.0.0/24` and `192.168.0.0/255.255.255.0` formats are acceptable. To specify an IP address, use a subnet value of 32 or `255.255.255.255`. For IPv6 addresses, use the `fc00::/7` format.

---

### Custom Bot Exclusions

**Display Label**: Custom Bot Exclusions

**Setting Key**: `wps_robotlist`

**Type**: Textarea

**Default Value**: Predefined list of common bots

**Description**: WP Statistics already filters common crawlers. Add any extra user-agent snippets you'd like treated as bots—one per line (leave blank if none).

---

### Robot View Threshold

**Display Label**: Robot View Threshold

**Setting Key**: `wps_robot_threshold`

**Type**: Number Input

**Default Value**: `20`

**Description**: Set a threshold for daily robot visits. Robots exceeding this number daily will be identified as bots.

---

### Exclude Countries

**Display Label**: Exclude Countries

**Setting Key**: `wps_excluded_countries`

**Type**: Textarea

**Default Value**: Empty

**Description**: Enter the country codes of the countries you want to exclude from tracking. Visitors from these countries will not be logged. Add one country code per line.

---

### Include Countries

**Display Label**: Include Countries

**Setting Key**: `wps_included_countries`

**Type**: Textarea

**Default Value**: Empty

**Description**: Enter the country codes of the countries you want to include in tracking. Only visitors from these specified countries will be tracked. Add one country code per line.

---

### Excluded Login Page

**Display Label**: Excluded Login Page

**Setting Key**: `wps_exclude_loginpage`

**Type**: Checkbox

**Default Value**: `true`

**Description**: Login and Register page visits will not be included in site visit counts.

---

### Excluded RSS Feeds

**Display Label**: Excluded RSS Feeds

**Setting Key**: `wps_exclude_feeds`

**Type**: Checkbox

**Default Value**: `true`

**Description**: RSS feeds visits will not be included in site visit counts.

---

### Excluded URLs

**Display Label**: Excluded URLs

**Setting Key**: `wps_excluded_urls`

**Type**: Textarea

**Default Value**: Empty

**Description**: Specify URLs to exclude from tracking. Enter one URL per line. Wildcards are supported.

---

*Last Updated: 2025-11-16*
