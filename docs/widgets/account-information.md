---
title: "Account Information"
type: "widget"
component: "information"
add_on: "Free"
status: "Done"
used_in_reports:
  - "single-visitor-report"
---

# Account Information Widget

Displays WordPress account details for logged-in visitors.

## Widget Configuration

- **Component**: [Information](../components/information.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Visibility

**Conditional Display**: This widget only appears when the visitor is a logged-in WordPress user. For anonymous visitors (identified by IP or hash), this widget is hidden.

## Used In Reports

- [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md)

## Fields

| Field | Description | Format |
|-------|-------------|--------|
| User | Display name with user ID, linked to WP user profile | Link (e.g., "John Doe (#123)") |
| Email Address | User's registered email | Email |
| Last Login | Date of last login | Date |
| Registered | Account registration date | Date |
| Role | WordPress user role | Text (e.g., "Administrator", "Editor", "Subscriber") |

## Empty State

This widget is not shown when no account data is available (anonymous visitors).

## Related Documentation

- [Information Component](../components/information.md)
- [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md)
- [Visitor Info Column](../columns/visitor-info.md)

---

*Last Updated: 2025-12-10*
