---
title: "Campaigns"
type: "report"
group: "Referrals"
show_in_menu: true
add_on: "Marketing"
status: "Done"
interactions:
  - "Date Picker"
  - "Filters"
widgets:
  - row: 1
    columns: ["campaigns-traffic-trends"]
  - row: 2
    columns: ["campaigns-table"]
---

# Campaigns

Shows UTM campaign performance with traffic trends and detailed breakdown by entry page, source, medium, and campaign.

## Page Configuration

- **Menu Visibility**: Shown in main menu (visible even when Marketing add-on is inactive)
- **Add-on**: Marketing
- **Status**: Done
- **Figma Design**: [Add link when available]

## Available Interactions

- **Date Picker**: Select date range for analysis
- **Filters**: Advanced filtering options
  - UTM Source: Filter by specific traffic source
  - UTM Medium: Filter by marketing medium
  - UTM Campaign: Filter by campaign name
  - Entry Page: Filter by landing page
  - Referrer: Filter by referring domain

## Widget Layout

### Row 1 (Full Width)

[Campaigns Traffic Trends](../../widgets/campaigns-traffic-trends.md) - Line chart showing visitor and view trends from campaign URLs over time.

### Row 2 (Full Width)

[Campaigns Table](../../widgets/campaigns-table.md) - Data table showing detailed campaign performance metrics with UTM parameter breakdown.

---

*Last Updated: 2025-11-15*
