---
title: "Latest Visitors"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
figma: ""
default_sort: "last_view"
row_limit: 50
used_in_reports:
  - "visitors"
---

# Latest Visitors Widget

Displays the most recent visitors to your website in a comprehensive data table.

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

- [Visitors](../reports/visitors.md) - Row 1, full width

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|--------------------|
| [Last View](../columns/last-view.md) | No (default) | Shown |
| [Visitor Informations](../columns/visitor-informations.md) | No | Shown |
| [Referrer](../columns/referrer.md) | No | Shown |
| [Entry Page](../columns/entry-page.md) | No | Shown |
| [Exit Page](../columns/exit-page.md) | No | Shown |
| [Total Views](../columns/total-views.md) | No | Shown |
| [Total Sessions](../columns/total-sessions.md) | No | Shown |
| [Session Duration](../columns/session-duration.md) | No | Shown |
| [Views Per Session](../columns/views-per-session.md) | No | Hidden |
| [Bounce Rate](../columns/bounce-rate.md) | No | Hidden |
| [New vs Returning](../columns/new-vs-returning.md) | No | Hidden |

## Empty State

When no visitors match criteria:
- "No visitors found for the selected period"

## Related Documentation

- [Visitors Report](../reports/visitors.md)
- [Data Table Component](../components/data-table.md)
- [Data Model](../global/data-model.md)
- [Attribution Settings](../global/attribution-settings.md)

---

*Last Updated: 2025-11-08*
