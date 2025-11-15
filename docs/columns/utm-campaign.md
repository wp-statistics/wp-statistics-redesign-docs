---
title: "UTM Campaign Column"
type: "column"
status: "Done"
used_in_widgets:
  - "campaigns-table"
---

# UTM Campaign Column

Shows the UTM campaign parameter value from campaign URLs.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Campaigns Table](../widgets/campaigns-table.md)

## Display

**Label:** Campaign

**Format:**
- Text string
- Left-aligned in table cell
- Displays the value of the `utm_campaign` parameter
- Shows "-" when campaign parameter is empty or not present

**Typical Values:**
- summer-sale
- product-launch
- newsletter-2024
- black-friday
- install-addon
- "-" (when empty)

## Sortable Behavior

This column is **not sortable**.

## Related Documentation

- [Campaigns Table](../widgets/campaigns-table.md)
- [UTM Source Column](utm-source.md)
- [UTM Medium Column](utm-medium.md)

---

*Last Updated: 2025-11-15*
