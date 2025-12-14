---
title: "Regions of Country"
type: "report"
group: "Geographic"
show_in_menu: true
add_on: "Free"
status: "Done"
interactions:
  - "Date Picker"
widgets:
  - row: 1
    columns: ["regions-table"]
---

# Regions of \{Country\}

Shows all regions/states/provinces of the detected country with visitor metrics, engagement data, and traffic distribution in a data table format.

## Report Configuration

- **Type**: Report Page
- **Menu Group**: Geographic
- **Show in Menu**: Conditional (only if country can be detected from WordPress timezone)
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Dynamic Title

The report title displays "Regions of \{Country\}" where `{Country}` is replaced with the detected country name.

**Examples:**
- "Regions of Germany"
- "Regions of France"
- "Regions of Canada"

## Visibility Condition

This report is **only shown in the menu** when the country can be detected from the WordPress timezone setting.

| Condition | Menu Visibility |
|-----------|-----------------|
| Country detected from WP timezone | Shown |
| Country cannot be detected | Hidden |

## Predefined Filter

This report applies a predefined filter based on the detected country:

| Filter | Value |
|--------|-------|
| `country_code` | {detected_country_code} |

This filter is applied automatically based on the WordPress timezone setting and cannot be changed by the user.

## Available Interactions

- **Date Picker**: Select time period for data

## Widget Layout

### Row 1 (Full Width)

- [Regions Table](../../widgets/regions-table.md)

## Related Documentation

- [US States Report](us-states.md) - Similar report specifically for US
- [Countries Report](countries.md)
- [Cities Report](cities.md)
- [Regions Table Widget](../../widgets/regions-table.md)

---

*Last Updated: 2025-12-14*
