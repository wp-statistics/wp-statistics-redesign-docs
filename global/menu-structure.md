# Menu Structure

This document defines the navigation menu structure for WP Statistics, including which reports appear in the main menu and their organization.

## Main Navigation Menu

### Overview

The WP Statistics menu is organized into logical groups, with the Visitor Insights group being one of the primary sections.

---

## Visitor Insights Menu Group

| Sort | Menu Item | Add-on | Status | Notes |
|------|-----------|--------|--------|-------|
| 1 | [Visitors Overview](../reports/visitors-overview.md) | Free | Done | High-level summary (entry point) |
| 2 | [Visitors](../reports/visitors.md) | Free | Done | Detailed visitor list |
| 3 | [Views](../reports/views.md) | Free | Done | Content performance |
| 4 | [Online Visitors](../reports/online-visitors.md) | Free | Done | Real-time data |
| 5 | [Top Visitors](../reports/top-visitors.md) | Free | Done | Power users |
| 6 | [Logged-in Users](../reports/logged-in-users.md) | Free | Done | Registered users (only shown when "Track Logged-in Users" setting is enabled) |
| 7 | [Search Terms](../reports/search-terms.md) | Data Plus | Done | SEO insights |

### Hidden Pages

Some pages are not shown in the menu because they are accessed via drill-down navigation:

- **[Single Visitor Report](../reports/single-visitor-report.md)**: Accessed by clicking on individual visitor rows in the Visitors, Top Visitors, or Online Visitors reports

---

## Page Insights Menu Group

| Sort | Menu Item | Add-on | Status | Notes |
|------|-----------|--------|--------|-------|
| 1 | Overview | Free | Not Started | High-level summary (entry point) |
| 2 | [Top Pages](../reports/top-pages.md) | Free | Done | Most viewed content |
| 3 | [Entry Pages](../reports/entry-pages.md) | Data Plus | Done | First pages visited |
| 4 | [Exit Pages](../reports/exit-pages.md) | Data Plus | Done | Last pages before leaving |
| 5 | Category Pages | Free | Not Started | Category performance |
| 6 | Author Pages | Free | Not Started | Author performance |
| 7 | 404 Pages | Free | Not Started | Broken links and errors |

---

## Menu Configuration

Each report page has a `show_in_menu` configuration in its YAML frontmatter:

```yaml
---
title: "Report Name"
show_in_menu: true  # or false
add_on: "Free"      # or "Data Plus", etc.
---
```

### Configuration Rules

1. **show_in_menu: true**
   - Page appears in navigation menu
   - Follows menu group organization
   - Subject to access control based on add-on

2. **show_in_menu: false**
   - Page does not appear in menu
   - Accessed via direct links or drill-down
   - Still subject to access control

---

## Access Control

### Free Features
- No restrictions
- Available to all users
- No upgrade prompts

### Premium Features (Data Plus, etc.)
- Menu item visible to all users
- Premium badge/indicator shown
- Clicking shows:
  - If active: Access granted
  - If inactive: Upgrade modal with:
    - Feature benefits
    - Pricing information
    - Upgrade button
    - Dismiss option

---

## Menu Item Ordering Principles

The order of menu items within each group follows these principles:

- Most general to most specific
- Most commonly used first
- Premium features integrated logically
- Real-time data grouped together

---

## Future Menu Groups

As more report groups are documented, they will be added to this structure:

- Referrer Reports
- Geographic Reports
- Device & Browser Reports
- Custom Reports

---

## Related Documentation

- [Global Rules](global-rules.md)
- [Interactions Guide](interactions.md)
- [All Visitor Insights Reports](../reports/)

---

*Last Updated: 2025-11-11*
