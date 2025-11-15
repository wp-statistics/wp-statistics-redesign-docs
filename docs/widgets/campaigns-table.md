---
title: "Campaigns Table"
type: "widget"
component: "data-table"
add_on: "Marketing"
status: "Done"
default_sort: "content-visitors"
row_limit: 20
used_in_reports:
  - "campaigns"
---

# Campaigns Table Widget

Displays campaign performance data in a paginated table with UTM parameter breakdown.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Marketing
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | false |
| **Default Sort** | Visitors (descending) |
| **Row Limit** | 20 |
| **Column Management** | ✅ Yes |
| **Pagination** | ✅ Yes |

## Used In Reports

- [Campaigns](../reports/referrals/campaigns.md) - Row 2, full width

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|--------------------|
| [Entry Page](../columns/entry-page.md) | No | Shown |
| [UTM Source](../columns/utm-source.md) | No | Shown |
| [UTM Medium](../columns/utm-medium.md) | No | Shown |
| [UTM Campaign](../columns/utm-campaign.md) | No | Shown |
| [Visitors](../columns/content-visitors.md) | Yes (default) | Shown |
| [Views](../columns/content-views.md) | Yes | Shown |
| [Session Duration](../columns/session-duration.md) | Yes | Shown |
| [Bounce Rate](../columns/content-bounce-rate.md) | Yes | Shown |

### Notes

- Default sorted by visitor count (highest to lowest)
- Users can sort by metric columns (Visitors, Views, Session Duration, Bounce Rate)
- UTM columns (Source, Medium, Campaign) are not sortable
- Entry Page column is not sortable
- 20 items per page with pagination controls
- Column management available for show/hide and reordering

**Important Behavior:**
- All columns represent an AND relationship - each row shows a unique combination of Entry Page + Source + Medium + Campaign
- Campaign value can be empty (displayed as "-")
- Entry Page links to **Single Campaign Report** (not Single Content Report) - this is a Marketing add-on report not shown in the menu

## Empty State

When no campaign data found for the selected period:
- "No campaign data available for the selected period"

---

*Last Updated: 2025-11-15*
