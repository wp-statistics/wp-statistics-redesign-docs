---
title: "Browser Version"
type: "column"
status: "Done"
used_in_widgets:
  - "browsers-table"
---

# Browser Version Column

Shows the browser version number. Used in expanded child rows of the Browsers Table.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Browsers Table](../widgets/browsers-table.md) (child rows only)

## Display

**Label:** Version

**Format:** Text (version string)

**Alignment:** Left

**Examples:** 120.0, 119.5, 121.0.6167.85, 17.2

## Context

This column appears only in expanded child rows of the Browsers Table, showing the version breakdown for each browser.

## Sortable Behavior

- **Sortable:** Yes
- **Default Sort Order:** Descending (newest versions first)
- **Sort Type:** Version (semantic versioning comparison)

## Related Documentation

- [Browsers Table Widget](../widgets/browsers-table.md)
- [Browsers Report](../reports/devices/browsers.md)
- [Browser Column](browser.md)
- [Device Detection](../technical/architecture/device-detection.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-12-16*
