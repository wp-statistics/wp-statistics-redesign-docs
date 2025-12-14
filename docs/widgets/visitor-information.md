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

Displays detailed information about the selected visit. All fields show data specific to this visit, not aggregated across multiple visits by the same visitor.

## Widget Configuration

- **Component**: [Information](../components/information.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Reports

- [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md)

## Fields

All fields display data from the current/selected visit:

| Field | Description | Format |
|-------|-------------|--------|
| Visitor Hash | This visit's hash identifier | Text |
| Referrer | This visit's referrer domain without prefix (e.g., "google.com"), opens in new tab | External Link |
| Source Category | This visit's traffic source category (e.g., Search Engine, Social, Direct) | Text |
| Browser | This visit's browser name and version | Text |
| Operating System | This visit's OS name (without version) | Text |
| Country | This visit's country with flag icon | Text with Flag |
| Region | This visit's region/state | Text |
| City | This visit's city | Text |
| First View | This visit's first page view date/time | Date |
| Entry Page | This visit's entry page, linked to Single Page Report | Link |
| Exit Page | This visit's exit page, linked to Single Page Report | Link |
| Total Views | This visit's page view count | Number |

## Empty State

"No visitor information available"

## Related Documentation

- [Information Component](../components/information.md)
- [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md)
- [Visitor Info Column](../columns/visitor-info.md)

---

*Last Updated: 2025-12-10*
