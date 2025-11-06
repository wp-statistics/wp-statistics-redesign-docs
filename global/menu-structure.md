# Menu Structure

This document defines the navigation menu structure for WP Statistics, including which reports appear in the main menu and their organization.

## Main Navigation Menu

### Overview

The WP Statistics menu is organized into logical groups, with the Visitors group being one of the primary sections.

```
WP Statistics
├── Dashboard
├── Visitors ▼
│   ├── Overview
│   ├── Visitors
│   ├── Views
│   ├── Online Visitors
│   ├── Top Visitors (Premium)
│   ├── Logged-in Users
│   └── Search Terms
├── Content
├── Referrers
├── Geographic
├── Devices & Browsers
└── Settings
```

---

## Visitors Menu Group

### Menu Items

| Menu Item | Link | Add-on | Show in Menu |
|-----------|------|--------|--------------|
| Overview | [visitors-overview](../reports/visitors-overview.md) | Free | ✓ Yes |
| Visitors | [visitors](../reports/visitors.md) | Free | ✓ Yes |
| Views | [views](../reports/views.md) | Free | ✓ Yes |
| Online Visitors | [online-visitors](../reports/online-visitors.md) | Free | ✓ Yes |
| Top Visitors | [top-visitors](../reports/top-visitors.md) | Data Plus | ✓ Yes |
| Logged-in Users | [logged-in-users](../reports/logged-in-users.md) | Free | ✓ Yes |
| Search Terms | [search-terms](../reports/search-terms.md) | Free | ✓ Yes |
| Single Visitor Report | [single-visitor-report](../reports/single-visitor-report.md) | Free | ✗ No |

### Hidden Pages

Some pages are not shown in the menu because they are accessed via drill-down navigation:

- **Single Visitor Report**: Accessed by clicking on individual visitor rows in the Visitors, Top Visitors, or Online Visitors reports

---

## Menu Behavior

### Desktop
- Full menu visible in sidebar
- Group items expandable/collapsible
- Current page highlighted
- Breadcrumb navigation at top

### Mobile/Tablet
- Hamburger menu
- Off-canvas drawer
- Tap to expand groups
- Close after navigation

---

## Premium Indicators

Premium features (from add-ons like Data Plus) are indicated in the menu:

- **Icon**: Crown or star icon next to menu item
- **Badge**: "Premium" or add-on name badge
- **Tooltip**: Hover shows "Requires Data Plus" message
- **Click Behavior**:
  - If unlocked: Navigate to page
  - If locked: Show upgrade modal

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

1. **Overview** - High-level summary (entry point)
2. **Visitors** - Detailed visitor list
3. **Views** - Content performance
4. **Online Visitors** - Real-time data
5. **Top Visitors** - Power users (premium)
6. **Logged-in Users** - Registered users
7. **Search Terms** - SEO insights

### Ordering Principles
- Most general to most specific
- Most commonly used first
- Premium features integrated logically
- Real-time data grouped together

---

## Breadcrumb Navigation

Pages include breadcrumb navigation for context:

```
WP Statistics > Visitors > Single Visitor Report
```

### Breadcrumb Rules
- Always starts with "WP Statistics"
- Shows group name (e.g., "Visitors")
- Shows current page name
- Each segment is clickable (except current page)
- Hidden on mobile to save space

---

## Menu Icons

Each menu group has an associated icon:

- **Visitors**: 👥 (users icon)
- **Content**: 📄 (document icon)
- **Referrers**: 🔗 (link icon)
- **Geographic**: 🌍 (globe icon)
- **Devices & Browsers**: 💻 (device icon)
- **Settings**: ⚙️ (gear icon)

---

## Future Menu Groups

As more report groups are documented, they will be added to this structure:

- Content Reports
- Referrer Reports
- Geographic Reports
- Device & Browser Reports
- Custom Reports

---

## Related Documentation

- [Global Rules](global-rules.md)
- [Interactions Guide](interactions.md)
- [All Visitors Reports](../reports/)

---

*Last Updated: 2025-11-06*
