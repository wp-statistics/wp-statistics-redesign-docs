---
title: "Advanced Filters"
type: "global"
status: "In Progress"
---

# Advanced Filters

The Advanced Filters system allows users to apply multiple filters simultaneously to refine report data. Users can add filters via the "+ Add Filter" button and combine multiple conditions to analyze specific data segments.

## Overview

Advanced Filters provide granular control over report data by allowing users to:
- Add multiple filters to a single report
- Combine filters using AND logic (all conditions must be met)
- Filter by various dimensions (geographic, technical, content, behavior, marketing)
- Remove individual filters or clear all filters at once

## How It Works

### Adding Filters

1. Click the "+ Add Filter" button
2. Select a filter type from the dropdown menu
3. Configure the filter parameters:
   - Select an operator (is, is not, contains, etc.)
   - Choose or enter values
4. Click "Apply" or "Add" to activate the filter

### Managing Multiple Filters

- Add multiple filters by repeating the process
- All filters combine with AND logic (all conditions must be met simultaneously)
- Each active filter displays as a chip/tag showing the filter name and value
- Remove individual filters by clicking the "X" icon on the filter chip
- Clear all filters at once using "Clear All" button

### Filter States

- **No filters applied**: Shows "+ Add Filter" button
- **Filters active**: Shows filter chips with "X" to remove, plus "+ Add Filter" button
- **Loading**: Shows loading state while data refreshes after filter changes

## Filter Types Reference

This section documents all available filter types with their operators and input methods.

### Geographic Filters

| Filter Name | Description | Operators | Input Type |
|-------------|-------------|-----------|------------|
| Country | Filter by visitor country | is, is not | Dropdown (searchable) |
| City | Filter by visitor city | is, is not | Dropdown (searchable) |
| Region | Filter by geographic region | is, is not | Dropdown (searchable) |

### Technical Filters

| Filter Name | Description | Operators | Input Type |
|-------------|-------------|-----------|------------|
| Browser | Filter by visitor browser | is, is not | Dropdown (Chrome, Firefox, Safari, Edge, Opera, etc.) |
| Operating System (OS) | Filter by visitor operating system | is, is not | Dropdown (Windows, macOS, Linux, iOS, Android, etc.) |
| Device Type | Filter by device category | is, is not | Dropdown (Desktop, Mobile, Tablet) |
| Screen Resolution | Filter by screen resolution | is, is not | Dropdown (common resolutions) |
| Timezone | Filter by visitor timezone | is, is not | Dropdown |
| Language | Filter by visitor language | is, is not | Dropdown |

### Content Filters

| Filter Name | Description | Operators | Input Type |
|-------------|-------------|-----------|------------|
| Post Type | Filter by WordPress post type | is, is not | Dropdown (Page, Post, Custom Post Types) |
| Category | Filter by WordPress category | is, is not | Dropdown (searchable) |
| Tag | Filter by WordPress tag | is, is not | Dropdown (searchable) |
| Author | Filter by content author | is, is not | Dropdown (author list) |

### Visitor & Behavior Filters

| Filter Name | Description | Operators | Input Type |
|-------------|-------------|-----------|------------|
| User ID | Filter by user ID presence | is, is not, is null | Number input |
| Logged-in User | Filter by specific logged-in WordPress user | is, is not | Dropdown (searchable) |
| IP Address/Hash | Filter by visitor IP address or hash | is, is not, contains | Text input |
| Source Category | Filter by traffic source category | is, is not | Dropdown (Direct, Search Engine, Social Media, Referral, Campaign, Internal) |
| Referrer | Filter by referring domain or URL | is, is not, contains | Dropdown or text input (searchable) |
| Visitor Type | Filter by visitor type | is | Dropdown (New, Returning, All) |
| Session Duration | Filter by session length | greater than, less than, between | Number input (seconds or time picker) |
| Views per Session | Filter by pages viewed per session | equals, greater than, less than | Number input |
| Total Views | Filter by total page views | greater than, less than, between | Number input |
| Total Sessions | Filter by total sessions | greater than, less than, between | Number input |
| First Seen | Filter by first visit date | between, before, after | Date picker |
| Bounce | Filter by bounce status | is | Dropdown (Yes, No) |

### Marketing Filters

| Filter Name | Description | Operators | Input Type |
|-------------|-------------|-----------|------------|
| UTM Source | Filter by UTM source parameter | is, is not, contains | Dropdown or text input (searchable) |
| UTM Medium | Filter by UTM medium parameter | is, is not, contains | Dropdown or text input (searchable) |
| UTM Campaign | Filter by UTM campaign parameter | is, is not, contains | Dropdown or text input (searchable) |
| Entry Page | Filter by landing page URL | is, is not, contains, starts with | Dropdown or text input (searchable) |

## Filter Groups

Filter Groups define which filters are bundled together for specific use cases and reports.

### Visitor Analysis Filters

**Includes**: Total Views, Total Sessions, First Seen, Bounce, Views per Session, Session Duration, User ID, Visitor Type, Country, Referrer, City, Device Type, OS, Browser, Timezone, Language, Screen Resolution, IP Address/Hash

**Used In Reports**:
- [Visitors Overview](../reports/visitor-insights/visitors-overview.md)
- [Visitors](../reports/visitor-insights/visitors.md)
- [Top Visitors](../reports/visitor-insights/top-visitors.md)

---

### Marketing Filters

**Includes**: UTM Source, UTM Medium, UTM Campaign, Entry Page, Referrer

**Used In Reports**:
- [Campaigns](../reports/referrals/campaigns.md)

---

### Referral Filters

**Includes**: Referrer

**Used In Reports**:
- [Referred Visitors](../reports/referrals/referred-visitors.md)

---

### Content Filters

**Includes**: Post Type, Category, Tag, Author

**Used In Reports**:
- [Top Pages](../reports/page-insights/top-pages.md)
- [Entry Pages](../reports/page-insights/entry-pages.md)
- [Exit Pages](../reports/page-insights/exit-pages.md)

## Implementation Notes

Reports that support Advanced Filters should include this in their YAML frontmatter:

```yaml
interactions:
  - "Advanced Filters"
```

In the "Available Interactions" section, list the specific filters available for that report:

```markdown
## Available Interactions

- **Advanced Filters**: Browser, Country, OS, Referrer, Source Category, User, IP Address/Hash
```

## Filter Behavior

### Combining Multiple Filters

- All filters use AND logic
- Example: Country = "United States" AND Browser = "Chrome" AND Device = "Mobile"
- All conditions must be true for a record to appear in results

### URL Parameters

- Active filters are reflected in URL parameters
- Allows bookmarking filtered views
- Enables sharing specific filtered reports

### Data Refresh

- Data refreshes automatically when filters are applied
- Loading indicator shows during data fetch
- Previous data remains visible until new data loads

### Empty States

- Shows "No results found" when filters produce zero matches
- Suggests removing some filters to broaden results
- "Clear All" button prominently displayed

## Related Documentation

- [Interactions Guide](interactions.md)
- [Global Rules](global-rules.md)
- [Report Pages](../reports/)

---

*Last Updated: 2025-11-23*
