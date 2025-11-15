---
title: "Domain Column"
type: "column"
status: "Done"
used_in_widgets:
  - "referrers-table"
---

# Domain Column

Shows the referring domain name.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Referrers Table](../widgets/referrers-table.md)

## Display

**Label:** Domain name (e.g., "google.com", "facebook.com")

**Format:**
- Plain text display of the domain
- No protocol (https://) shown
- Subdomain included if present (e.g., "www.google.com")

## Interactive Elements

### Click Action

Opens the full domain URL in a new tab:
- Prepends `https://` to the domain
- Opens in new browser tab
- Example: Clicking "google.com" opens `https://google.com`

### Hover State

Standard link hover styling to indicate clickability.

## Display Examples

### Example 1: Standard Domain

**Visual:** `google.com`

**Description:**
- Label: Domain name "google.com"
- Click: Opens https://google.com in new tab

---

### Example 2: Domain with Subdomain

**Visual:** `blog.example.com`

**Description:**
- Label: Full domain with subdomain
- Click: Opens https://blog.example.com in new tab

---

*Last Updated: 2025-11-15*
