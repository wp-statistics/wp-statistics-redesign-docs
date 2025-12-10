---
title: "Top Countries"
type: "widget"
component: "horizontal-bar-list"
add_on: "Free"
status: "Done"
used_in_reports:
  - "visitors-overview"
  - "referrals-overview"
  - "content"
  - "categories"
---

# Top Countries Widget

Displays the top 5 countries by visitor count in a horizontal bar list format with country flags and previous period comparison.

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
| **Show Icons** | ✅ Yes (country flags) |
| **Enable Other Item** | ❌ No |
| **Link to Full Report** | ✅ Yes (links to Countries report) |

## Used In Reports

This widget is used in the following reports:

- [Visitors Overview](../reports/visitor-insights/visitors-overview.md) - Row 4
- [Referrals Overview](../reports/referrals/referrals-overview.md) - Row 4
- [Content](../reports/content-analytics/content.md) - Row 4 (no "See all" link)
- [Categories](../reports/content-analytics/categories.md) - Row 6 (no "See all" link)

## Empty State

When no country data is available for the selected period:
- "No data available for the selected period"

## Related Documentation

- [Horizontal Bar List Component](../components/horizontal-bar-list.md)
- [Visitors Overview Report](../reports/visitor-insights/visitors-overview.md)

---

*Last Updated: 2025-12-08*
