---
title: "Single Visitor Report"
type: "report"
group: "Visitors"
show_in_menu: false
add_on: "Free"
status: "Done"
interactions:
  - "Back Navigation"
  - "Export"
widgets:
  - row: 1
    columns: ["account-information"]
  - row: 2
    columns: ["visitor-information", "views-timeline"]
  - row: 3
    columns: ["visitors-table"]
---

# Single Visitor Report

Detailed drill-down view for analyzing individual visitor behavior and activity.

## Page Configuration

- **Menu Visibility**: Hidden from main menu (accessed via drill-down)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Dynamic Page Title

The page title changes based on the visitor identifier type:

| Visitor Type | Title Format | Example |
|--------------|--------------|---------|
| Logged-in user | `Visitor: \{Display Name\} (#\{user_id\})` | `Visitor: John Doe (#123)` |
| IP address | `Visitor: \{ip_address\}` | `Visitor: 192.168.1.1` |
| Hash | `Visitor: #\{hash\}` | `Visitor: #abc123` |

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

### Row 2 (Two Columns)
- [Visitor Information](../../widgets/visitor-information.md)
- [Views Timeline](../../widgets/views-timeline.md)

### Row 3 (Full Width)
- [Visitors Table](../../widgets/visitors-table.md) - Title: "Visits" - Shows other visits by the same visitor

---

*Last Updated: 2025-12-10*
