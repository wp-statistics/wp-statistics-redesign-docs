# Menu Structure

This document defines the navigation menu structure for WP Statistics, including which reports appear in the main menu and their organization.

## Main Navigation Menu

### Overview

The WP Statistics menu is organized into logical groups, with the Visitor Insights group being one of the primary sections.

---

## Visitor Insights Menu Group

| Sort | Menu Item | Add-on | Status | Notes |
|------|-----------|--------|--------|-------|
| 1 | [Visitors Overview](../reports/visitor-insights/visitors-overview.md) | Free | Done | High-level summary (entry point) |
| 2 | [Visitors](../reports/visitor-insights/visitors.md) | Free | Done | Detailed visitor list |
| 3 | [Views](../reports/visitor-insights/views.md) | Free | Done | Content performance |
| 4 | [Online Visitors](../reports/visitor-insights/online-visitors.md) | Free | Done | Real-time data |
| 5 | [Top Visitors](../reports/visitor-insights/top-visitors.md) | Free | Done | Power users |
| 6 | [Logged-in Users](../reports/visitor-insights/logged-in-users.md) | Free | Done | Registered users (only shown when "Track Logged-in Users" setting is enabled) |
| 7 | [Search Terms](../reports/visitor-insights/search-terms.md) | Data Plus | Done | SEO insights |

### Hidden Pages

Some pages are not shown in the menu because they are accessed via drill-down navigation:

- **[Single Visitor Report](../reports/visitor-insights/single-visitor-report.md)**: Accessed by clicking on individual visitor rows in the Visitors, Top Visitors, or Online Visitors reports

---

## Page Insights Menu Group

| Sort | Menu Item | Add-on | Status | Notes |
|------|-----------|--------|--------|-------|
| 1 | [Overview](../reports/page-insights/page-insights-overview.md) | Free | Done | High-level summary (entry point) |
| 2 | [Top Pages](../reports/page-insights/top-pages.md) | Free | Done | Most viewed content |
| 3 | [Entry Pages](../reports/page-insights/entry-pages.md) | Data Plus | Done | First pages visited |
| 4 | [Exit Pages](../reports/page-insights/exit-pages.md) | Data Plus | Done | Last pages before leaving |
| 5 | [Category Pages](../reports/page-insights/category-pages.md) | Free | Done | Category performance |
| 6 | [Author Pages](../reports/page-insights/author-pages.md) | Free | Done | Author performance |
| 7 | [404 Pages](../reports/page-insights/404-pages.md) | Free | Done | Broken links and errors |

---

## Referrals Menu Group

| Sort | Menu Item | Add-on | Status | Notes |
|------|-----------|--------|--------|-------|
| 1 | [Overview](../reports/referrals/referrals-overview.md) | Free | Not Started | High-level summary (entry point) |
| 2 | [Referred Visitors](../reports/referrals/referred-visitors.md) | Free | Not Started | Visitors from referral sources |
| 3 | [Referrers](../reports/referrals/referrers.md) | Free | Not Started | Top referring websites |
| 4 | [Search Engines](../reports/referrals/search-engines.md) | Free | Not Started | Search engine traffic |
| 5 | [Social Media](../reports/referrals/social-media.md) | Free | Not Started | Social platform traffic |
| 6 | [Source Categories](../reports/referrals/source-categories.md) | Free | Not Started | Traffic by source category |
| 7 | [Campaigns](../reports/referrals/campaigns.md) | Marketing | Not Started | Marketing campaign performance |
| 8 | [UTM Performance](../reports/referrals/utm-performance.md) | Marketing | Not Started | UTM parameter tracking |

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

- Geographic Reports
- Device & Browser Reports
- Custom Reports

---

## Related Documentation

- [Global Rules](global-rules.md)
- [Interactions Guide](interactions.md)
- [All Visitor Insights Reports](../reports/)

---

*Last Updated: 2025-11-15*
