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
| 6 | [Logged-in Users](../reports/visitor-insights/logged-in-users.md) | Free | Done | Registered users (only shown when "Track Logged-In User Activity" setting is enabled) |
| 7 | [Search Terms](../reports/visitor-insights/search-terms.md) | Data Plus | Done | Internal site search insights |

### Hidden Pages

Some pages are not shown in the menu because they are accessed via drill-down navigation:

- **[Single Visitor Report](../reports/visitor-insights/single-visitor-report.md)**: (Not Started) Accessed by clicking on individual visitor rows in the Visitors, Top Visitors, or Online Visitors reports

---

## Geographic Menu Group

| Sort | Menu Item | Add-on | Status | Notes |
|------|-----------|--------|--------|-------|
| 1 | [Overview](../reports/geographic/overview.md) | Free | Not Started | High-level summary (entry point) |
| 2 | [Countries](../reports/geographic/countries.md) | Free | Done | Country-level visitor data |
| 3 | [Cities](../reports/geographic/cities.md) | Free | Done | City-level visitor data |
| 4 | [European Countries](../reports/geographic/european-countries.md) | Free | Done | EU country breakdown |
| 5 | [US States](../reports/geographic/us-states.md) | Free | Done | US state-level data |
| 6 | [Regions of \{Country\}](../reports/geographic/regions-of-country.md) | Free | Done | Region-level data (only shown if country detected from WP timezone) |

### Hidden Pages

Some pages are not shown in the menu because they are accessed via drill-down navigation:

- **[Single Country Report](../reports/geographic/single-country.md)**: (Done, Data Plus) Accessed by clicking on a country in the Countries report

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

## Content Analytics Menu Group

| Sort | Menu Item | Add-on | Status | Notes |
|------|-----------|--------|--------|-------|
| 1 | [Content](../reports/content-analytics/content.md) | Free | Done | Content performance by post type (Data Plus for custom post types) |
| 2 | [Authors](../reports/content-analytics/authors.md) | Free | Done | Author content performance |
| 3 | [Categories](../reports/content-analytics/categories.md) | Free | Done | Taxonomy content performance (Data Plus for custom taxonomies) |

### Hidden Pages

Some pages are not shown in the menu because they are accessed via drill-down navigation:

- **[Individual Content](../reports/content-analytics/individual-content.md)**: (Not Started) Accessed by clicking on a content item in the Content report
- **[Individual Author](../reports/content-analytics/individual-author.md)**: (Not Started, Data Plus) Accessed by clicking on an author in the Authors report
- **[Individual Category](../reports/content-analytics/individual-category.md)**: (Not Started) Accessed by clicking on a category/taxonomy in the Categories report
- **[Top Categories](../reports/content-analytics/top-categories.md)**: (Done) Accessed from "See all" link in Top Terms widget on Categories report

### Content Analytics vs Page Insights

Content Analytics focuses on **content performance** (how posts/articles perform), while Page Insights focuses on **URL/page performance** (how specific URLs are visited):

| Content Analytics | Page Insights | Difference |
|-------------------|---------------|------------|
| Authors | Author Pages | Content by author vs author archive URL visits |
| Categories | Category Pages | Content in categories vs category archive URL visits |

---

## Referrals Menu Group

| Sort | Menu Item | Add-on | Status | Notes |
|------|-----------|--------|--------|-------|
| 1 | [Referrals Overview](../reports/referrals/referrals-overview.md) | Free | Done | High-level summary (entry point) |
| 2 | [Referred Visitors](../reports/referrals/referred-visitors.md) | Free | Done | Visitors from referral sources |
| 3 | [Referrers](../reports/referrals/referrers.md) | Free | Done | Top referring websites |
| 4 | [Search Engines](../reports/referrals/search-engines.md) | Free | Done | Search engine traffic |
| 5 | [Social Media](../reports/referrals/social-media.md) | Free | Done | Social platform traffic |
| 6 | [Source Categories](../reports/referrals/source-categories.md) | Free | Done | Traffic by source category |
| 7 | [Campaigns](../reports/referrals/campaigns.md) | Marketing | Done | Marketing campaign performance |

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

- Device & Browser Reports

---

## Related Documentation

- [Global Rules](global-rules.md)
- [Interactions Guide](interactions.md)
- [All Visitor Insights Reports](../reports/)

---

*Last Updated: 2025-12-14*
