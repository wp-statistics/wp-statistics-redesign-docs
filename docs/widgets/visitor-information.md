---
title: "Visitor Information"
type: "widget"
component: "information"
add_on: "Free"
status: "Done"
used_in_reports:
  - "single-visitor-report"
---

# Visitor Information Widget

Displays detailed information about a single visitor including their technical profile and session data.

## Widget Configuration

- **Component**: [Information](../components/information.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Reports

- [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md) - Row 2

## Fields

| Field | Description | Format |
|-------|-------------|--------|
| Visitor Hash | The visitor's unique hash identifier | Text |
| Referrer | Domain without prefix (e.g., "google.com"), opens in new tab | External Link |
| Source Category | Traffic source category (e.g., Search Engine, Social, Direct) | Text |
| Browser | Browser name and version | Text |
| Operating System | OS name (without version) | Text |
| Country | Country name with flag icon | Text with Flag |
| Region | Visitor's region/state | Text |
| City | Visitor's city | Text |
| First View | Date/time of first page view | Date |
| Entry Page | Page title linked to Single Page Report | Link |
| Exit Page | Page title linked to Single Page Report | Link |
| Total Views | Total page views count | Number |

## Empty State

"No visitor information available"

## Related Documentation

- [Information Component](../components/information.md)
- [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md)
- [Visitor Info Column](../columns/visitor-info.md)

---

*Last Updated: 2025-12-10*
