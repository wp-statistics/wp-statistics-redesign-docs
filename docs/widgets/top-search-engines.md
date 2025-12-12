---
title: "Top Search Engines"
type: "widget"
component: "horizontal-bar-list"
add_on: "Free"
status: "Done"
used_in_reports:
  - "referrals-overview"
  - "content"
  - "categories"
  - "individual-content"
  - "individual-category"
  - "individual-author"
---

# Top Search Engines Widget

Displays the top 5 search engines by referral count in a horizontal bar list format with previous period comparison.

## Widget Configuration

- **Component**: [Horizontal Bar List](../components/horizontal-bar-list.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Max Visible Items** | 5 |
| **Show Previous Period** | ✅ Yes |
| **Show Icons** | ❌ No |
| **Enable Other Item** | ❌ No |
| **Link to Full Report** | ✅ Yes (links to Search Engines report) |

## Used In Reports

This widget is used in the following reports:

- [Referrals Overview](../reports/referrals/referrals-overview.md) - Row 5, middle column
- [Content](../reports/content-analytics/content.md) - Row 4 (no "See all" link)
- [Categories](../reports/content-analytics/categories.md) - Row 6 (no "See all" link)
- [Individual Content](../reports/content-analytics/individual-content.md) - Row 4 (no "See all" link)
- [Individual Category](../reports/content-analytics/individual-category.md) - Row 5 (no "See all" link)
- [Individual Author](../reports/content-analytics/individual-author.md) - Row 4

## Empty State

When no search engine data is available for the selected period:
- "No data available for the selected period"

## Related Documentation

- [Horizontal Bar List Component](../components/horizontal-bar-list.md)
- [Search Engines Report](../reports/referrals/search-engines.md)
- [Referrals Overview Report](../reports/referrals/referrals-overview.md)

---

*Last Updated: 2025-12-08*
