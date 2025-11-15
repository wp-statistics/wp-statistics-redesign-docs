---
title: "Referrers Table"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "referrals"
row_limit: 20
used_in_reports:
  - "referrers"
  - "search-engines"
---

# Referrers Table Widget

Displays the top referring domains in a paginated table sorted by referral count.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | false |
| **Default Sort** | referrals (descending) |
| **Row Limit** | 20 |
| **Column Management** | ✅ Yes |
| **Pagination** | ✅ Yes |

## Used In Reports

- [Referrers](../reports/referrals/referrers.md) - Row 1, full width
- [Search Engines](../reports/referrals/search-engines.md) - Row 2, full width (filtered to show only search engine referrers)

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|--------------------|
| [Domain](../columns/domain.md) | No | Shown |
| [Source Name](../columns/source-name.md) | No | Shown |
| [Referrals](../columns/referrals.md) | Yes (default) | Shown |
| [Content Views](../columns/content-views.md) | Yes | Shown |
| [Bounce Rate](../columns/content-bounce-rate.md) | Yes | Shown |

### Notes

- Default sorted by referral count (highest to lowest)
- Users can sort by any column
- 20 items per page with pagination controls
- Column management available for show/hide and reordering
- Domain column links to external website
- Referrals column links to filtered Referred Visitors report

## Empty State

When no referrers found for the selected period:
- "No referrers found for the selected period"

---

*Last Updated: 2025-11-15*
