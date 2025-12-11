---
title: "Visitors Table"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "last_view"
row_limit: 50
used_in_reports:
  - "visitors"
  - "top-visitors"
  - "referred-visitors"
  - "single-visitor-report"
---

# Visitors Table Widget

Displays visitor data in a comprehensive data table with configurable sorting, filtering, and column visibility.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | false |
| **Default Sort** | last_view |
| **Row Limit** | 50 |
| **Column Management** | ✅ Yes |
| **Pagination** | ✅ Yes |

## Used In Reports

- [Visitors](../reports/visitor-insights/visitors.md) - Row 1, full width
- [Top Visitors](../reports/visitor-insights/top-visitors.md) - Row 1, full width (with custom configuration)
- [Referred Visitors](../reports/referrals/referred-visitors.md) - Row 1, full width
- [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md) - Row 3, title: "Visits" (filtered to same visitor)

**Note**: The [Top Visitors](../reports/visitor-insights/top-visitors.md) report uses this widget with modified defaults including predefined filters, custom sorting, and different column visibility.

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|--------------------|
| [Visitor Last Visit](../columns/visitor-last-visit.md) | No (default) | Shown |
| [Visitor Info](../columns/visitor-info.md) | No | Shown |
| [Referrer](../columns/referrer.md) | No | Shown |
| [Entry Page](../columns/entry-page.md) | No | Shown |
| [Exit Page](../columns/exit-page.md) | No | Shown |
| [Total Views](../columns/total-views.md) | No | Shown |
| [Total Sessions](../columns/total-sessions.md) | No | Shown |
| [Session Duration](../columns/session-duration.md) | No | Shown |
| [Views Per Session](../columns/views-per-session.md) | No | Hidden |
| [Bounce Rate](../columns/bounce-rate.md) | No | Hidden |
| [Visitor Status](../columns/visitor-status.md) | No | Hidden |

## Empty State

When no visitors match criteria:
- "No visitors found for the selected period"

## Related Documentation

- [Visitors Report](../reports/visitor-insights/visitors.md)
- [Top Visitors Report](../reports/visitor-insights/top-visitors.md)
- [Data Table Component](../components/data-table.md)
- [Data Model](../global/data-model.md)
- [Attribution Settings](../global/attribution-settings.md)

---

*Last Updated: 2025-11-24*
