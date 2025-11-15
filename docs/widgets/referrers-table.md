---
title: "Referrers Table"
type: "widget"
component: "table"
add_on: "Free"
status: "Done"
default_sort: "referrals"
row_limit: 20
used_in_reports:
  - "referrers"
---

# Referrers Table Widget

Displays the top referring domains in a paginated table sorted by referral count.

## Widget Configuration

- **Component**: [Table](../components/table.md)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | false |
| **Default Sort** | referrals (descending) |
| **Row Limit** | 20 |
| **Pagination** | ✅ Yes |

## Used In Reports

- [Referrers](../reports/referrals/referrers.md) - Row 1, full width

## Table Structure

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|--------------------|
| [Domain](../columns/domain.md) | No | Shown |
| [Source Name](../columns/source-name.md) | No | Shown |
| [Referrals](../columns/referrals.md) | No (default) | Shown |

### Notes

- Pre-sorted by referral count (highest to lowest)
- 20 items per page with pagination controls
- Domain column links to external website
- Referrals column links to filtered Referred Visitors report

## Empty State

When no referrers found for the selected period:
- "No referrers found for the selected period"

---

*Last Updated: 2025-11-15*
