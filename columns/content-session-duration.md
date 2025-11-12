---
title: "Content Session Duration Column"
type: "column"
status: "Done"
used_in_widgets:
  - "top-pages-full"
---

# Page Session Duration Column

Shows the average session duration for sessions that include this page.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Top Pages Full](../widgets/top-pages-full.md)

## Display

**Label:** Session Duration

**Format:** Time format
- Sessions under 1 hour: MM:SS (e.g., "04:23")
- Sessions over 1 hour: HH:MM:SS (e.g., "1:15:42")

**Alignment:** Right-aligned

## Calculation

Average session duration for sessions that included this page, calculated from session start to session end.

## Sortable Behavior

This column is **sortable**.

- Default sort order: Descending (longest to shortest)
- Longer duration typically indicates higher engagement
- Very short durations may indicate content issues

## Related Documentation

- [Top Pages Full Widget](../widgets/top-pages-full.md)
- [Content Bounce Rate Column](content-bounce-rate.md)
- [Session Duration Column](session-duration.md) (visitor-level session duration)

---

*Last Updated: 2025-11-12*
