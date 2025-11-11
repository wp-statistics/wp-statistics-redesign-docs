---
title: "Top Visitors"
type: "widget"
component: "table"
add_on: "Free"
status: "Done"
figma: ""
default_sort: "total_views"
row_limit: 10
used_in_reports:
  - "visitors-overview"
---

# Top Visitors Widget

Displays the top 10 most active visitors in a simplified table format showing key engagement and journey metrics.

## Widget Configuration

- **Component**: [Table](../components/table.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Display Settings

| Property | Value |
|----------|-------|
| **Title** | "Top Visitors" |
| **Default Sort** | total_views (descending) |
| **Row Limit** | 10 |
| **Pagination** | ❌ No |
| **Link to Full Report** | ✅ Yes (links to Top Visitors report) |

## Used In Reports

This widget is used in the following reports:

- [Visitors Overview](../reports/visitors-overview.md) - Row 5

## Table Structure

The table displays 5 columns, all shown by default:

| Column | Sortable | Status | Documentation |
|--------|----------|--------|---------------|
| **Visitor Informations** | ❌ No | Done | [View Docs](../columns/visitor-informations.md) |
| **Total Views** | ❌ No | Done | [View Docs](../columns/total-views.md) |
| **Referrer** | ❌ No | Done | [View Docs](../columns/referrer.md) |
| **Entry Page** | ❌ No | Done | [View Docs](../columns/entry-page.md) |
| **Exit Page** | ❌ No | Done | [View Docs](../columns/exit-page.md) |

## List Behavior

The widget displays visitors ranked by total views in descending order:
- Data is pre-sorted by total views (highest to lowest)
- Shows visitor identification (flag, OS, browser, user badge or IP/hash)
- Displays engagement level (total views)
- Shows traffic source (referrer)
- Reveals visitor journey (entry and exit pages)
- No interactive sorting controls

Users can:
- View top 10 most active visitors at a glance
- Click any row to open the Single Visitor Report for detailed analysis
- Click "View Full Report" link to see all top visitors with complete metrics

## Empty State

When no visitor data is available for the selected period:
- "No data available for the selected period"

## Related Documentation

- [Table Component](../components/table.md)
- [Top Visitors Table](../widgets/top-visitors-table.md) - Full detailed version with 10 columns
- [Visitors Overview Report](../reports/visitors-overview.md)

---

*Last Updated: 2025-11-11*
