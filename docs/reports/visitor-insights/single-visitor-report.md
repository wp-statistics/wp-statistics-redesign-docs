---
title: "Single Visitor Report"
type: "report"
group: "Visitors"
show_in_menu: false
add_on: "Free"
status: "In Progress"
interactions:
  - "Back Navigation"
  - "Export"
widgets:
  - row: 1
    columns: ["account-information"]
---

# Single Visitor Report

Detailed drill-down view for analyzing individual visitor behavior and activity.

## Page Configuration

- **Menu Visibility**: Hidden from main menu (accessed via drill-down)
- **Add-on**: Free (included in base plugin)
- **Status**: In Progress
- **Figma Design**: [Add link when available]

## Access Methods

This report is accessed by clicking on visitor identifiers in the [Visitor Info](../../columns/visitor-info.md) column. The report can load visitor data based on three identifier types:

| Identifier | When Used | Example |
|------------|-----------|---------|
| **Username** | Visitor is a logged-in WordPress user | `navid #123` |
| **IP Address** | Anonymous visitor, hash disabled | `192.168.1.1` |
| **Hash** | Anonymous visitor, hash enabled | `abc123` |

## Available Interactions

- **Back Navigation**
- **Export**

## Widget Layout

### Row 1 (Full Width) - Conditional
- [Account Information](../../widgets/account-information.md) - Only shown for logged-in users

*Additional widgets to be documented.*

---

*Last Updated: 2025-12-10*
