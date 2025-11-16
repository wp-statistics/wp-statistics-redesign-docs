---
title: "Filtering & Exceptions Settings"
type: "settings"
add_on: "Free"
status: "Not Started"
settings_count: 17
---

# Filtering & Exceptions Settings

Configure exclusions for user roles, IP addresses, robots, countries, and URLs to refine tracked data.

## Page Configuration

- **Add-on**: Free
- **Status**: Not Started
- **Figma Design**: [Add link when available]
- **Settings Count**: 17

## Filtering & Exceptions

### User Role Exclusions

**Display Label**: Varies by role (e.g., "Administrator", "Editor", "Anonymous Users")

**Setting Key**: `wps_exclude_{role_name}` (e.g., `wps_exclude_administrator`, `wps_exclude_editor`)

**Type**: Multiple Checkboxes (one per role)

**Default Value**: `true` for Administrator role, `false` for others

**Description**: Exclude data collection for specific WordPress user roles. Available options include all WordPress roles (Administrator, Editor, Author, Contributor, Subscriber, Anonymous Users, etc.). Each role has an individual checkbox to exclude tracking.

---

## IP Exclusions

### Excluded IP Address List

**Display Label**: Excluded IP Address List

**Setting Key**: `wps_exclude_ip`

**Type**: Textarea

**Default Value**: Empty

**Description**: Specify the IP addresses you want to exclude. Enter one IP address or range per line. For IPv4 addresses, both `192.168.0.0/24` and `192.168.0.0/255.255.255.0` formats are acceptable. To specify an IP address, use a subnet value of 32 or `255.255.255.255`. For IPv6 addresses, use the `fc00::/7` format.

---

## Robot Exclusions

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

## Geolocation Exclusions

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

## URL Exclusions

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

### Excluded 404 Pages

**Display Label**: Excluded 404 Pages

**Setting Key**: `wps_exclude_404s`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Exclude 404 error page visits from being tracked in statistics.

---

### Excluded URLs

**Display Label**: Excluded URLs

**Setting Key**: `wps_excluded_urls`

**Type**: Textarea

**Default Value**: Empty

**Description**: Specify URLs to exclude from tracking. Enter one URL per line. Wildcards are supported.

---

## URL Query Parameters

### Allowed Query Parameters

**Display Label**: Allowed Query Parameters

**Setting Key**: `wps_query_params_allow_list`

**Type**: Textarea

**Default Value**: Empty

**Description**: Specify which URL query parameters should be tracked. Enter one parameter per line. Only the parameters listed here will be included in tracking data.

---

## Matomo Referrer Spam Blacklist

### Referrer Spam Blacklist

**Display Label**: Referrer Spam Blacklist

**Setting Key**: `wps_referrerspam`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Use Matomo's referrer spam blacklist to automatically filter spam referrers from statistics.

**Status Badge**: Deprecated

---

### Refresh Blacklist Data

**Display Label**: Refresh Blacklist Data

**Setting Key**: N/A (button action: `update-referrer-spam`)

**Type**: Button

**Default Value**: N/A

**Description**: Manually update the Matomo referrer spam blacklist to the latest version.

**Dependencies**: Only visible when "Referrer Spam Blacklist" is enabled

---

### Automate Blacklist Updates

**Display Label**: Automate Blacklist Updates

**Setting Key**: `wps_schedule_referrerspam`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Automatically update the referrer spam blacklist on a monthly schedule to keep spam filtering current.

**Dependencies**: Only visible when "Referrer Spam Blacklist" is enabled

---

## Host Exclusions

### Excluded Hosts

**Display Label**: Excluded Hosts

**Setting Key**: `wps_excluded_hosts`

**Type**: Textarea

**Default Value**: Empty

**Description**: Specify host names to exclude from referrer tracking. Enter one host per line. Wildcards are supported.

---

## General Exclusions

### Log Record Exclusions

**Display Label**: Log Record Exclusions

**Setting Key**: `wps_record_exclusions`

**Type**: Checkbox

**Default Value**: `false`

**Description**: Maintain a log of all excluded visits for insight into exclusions.

---

*Last Updated: 2025-11-16*
