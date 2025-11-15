---
title: "Bounce Rate Column"
type: "column"
status: "Done"
used_in_widgets:
  - "top-pages-full"
  - "referrers-table"
  - "source-categories-table"
---

# Bounce Rate Column

Shows the bounce rate as a percentage - the rate of sessions with only one page view and no further interaction.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Top Pages Full](../widgets/top-pages-full.md)
- [Referrers Table](../widgets/referrers-table.md)
- [Source Categories Table](../widgets/source-categories-table.md)

## Display

**Label:** Bounce Rate

**Format:** Percentage with one decimal place (e.g., 45.2%)

**Alignment:** Right-aligned

## Calculation

**For Pages:**
Bounce rate = (Sessions starting on this page with only 1 view / Total sessions starting on this page) × 100

**For Referrers:**
Bounce rate = (Sessions from this referrer with only 1 view / Total sessions from this referrer) × 100

**For Source Categories:**
Bounce rate = (Sessions from this source category with only 1 view / Total sessions from this source category) × 100

## Sortable Behavior

This column is **sortable**.

- Default sort order: Descending (highest to lowest)
- Higher bounce rate indicates visitors leave without further interaction
- Lower bounce rate indicates better engagement

## Related Documentation

- [Top Pages Full Widget](../widgets/top-pages-full.md)
- [Content Session Duration Column](content-session-duration.md)
- [Bounce Rate Column](bounce-rate.md) (visitor-level bounce rate)

---

*Last Updated: 2025-11-15*
