# Menu Structure

This document defines the navigation menu structure for WP Statistics, including which reports appear in the main menu and their organization.

## Main Navigation Menu

### Overview

The WP Statistics menu is organized into logical groups, with the Visitor Insights group being one of the primary sections.

---

## Visitor Insights Menu Group

| Menu Item | Add-on | Status | Notes |
|-----------|--------|--------|-------|
| [Visitors Overview](../reports/visitors-overview.md) | Free | Done | |
| [Visitors](../reports/visitors.md) | Free | Done | |
| [Views](../reports/views.md) | Free | Done | |
| [Online Visitors](../reports/online-visitors.md) | Free | Done | |
| [Top Visitors](../reports/top-visitors.md) | Free | Done | |
| [Logged-in Users](../reports/logged-in-users.md) | Free | Done | Only shown when "Track Logged-in Users" setting is enabled |
| [Search Terms](../reports/search-terms.md) | Data Plus | Done | |

### Hidden Pages

Some pages are not shown in the menu because they are accessed via drill-down navigation:

- **[Single Visitor Report](../reports/single-visitor-report.md)**: Accessed by clicking on individual visitor rows in the Visitors, Top Visitors, or Online Visitors reports

---

## Page Insights Menu Group

| Menu Item | Add-on | Status | Notes |
|-----------|--------|--------|-------|
| Overview | Free | Not Started | |
| Top Pages | Free | Not Started | |
| Entry Pages | Data Plus | Not Started | |
| Exit Pages | Data Plus | Not Started | |
| Category Pages | Free | Not Started | |
| Author Pages | Free | Not Started | |
| 404 Pages | Free | Not Started | |

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

## Menu Item Ordering

The order of menu items is intentional and follows user workflow:

1. **Visitors Overview** - High-level summary (entry point)
2. **Visitors** - Detailed visitor list
3. **Views** - Content performance
4. **Online Visitors** - Real-time data
5. **Top Visitors** - Power users
6. **Logged-in Users** - Registered users
7. **Search Terms** - SEO insights

### Ordering Principles
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
