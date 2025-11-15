---
title: "Source Categories Table"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Done"
default_sort: "referrals"
row_limit: 20
used_in_reports:
  - "source-categories"
---

# Source Categories Table Widget

Displays traffic by source category in a paginated table sorted by referral count.

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

- [Source Categories](../reports/referrals/source-categories.md) - Row 2, full width

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|--------------------|
| [Source Category](../columns/source-category.md) | No | Shown |
| [Referrals](../columns/referrals.md) | Yes (default) | Shown |
| [Bounce Rate](../columns/content-bounce-rate.md) | Yes | Shown |

### Notes

- Default sorted by referral count (highest to lowest)
- Users can sort by Referrals and Bounce Rate columns
- 20 items per page with pagination controls
- Column management available for show/hide and reordering
- Referrals column links to filtered Referred Visitors report

## Empty State

When no source categories found for the selected period:
- "No data available for the selected period"

---

*Last Updated: 2025-11-15*
