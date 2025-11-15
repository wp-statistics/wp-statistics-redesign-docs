---
title: "Source Name Column"
type: "column"
status: "Done"
used_in_widgets:
  - "referrers-table"
---

# Source Name Column

Shows the predefined friendly name for known referring sources.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Referrers Table](../widgets/referrers-table.md)

## Display

**Label:** Friendly source name

**Format:**
- Predefined name for recognized sources
- Example: "google.com" → "Google"
- Example: "facebook.com" → "Facebook"
- Plain text display, non-interactive

**Fallback:**
- If source is not recognized, displays "-"
- Maintains consistent display format

## Interactive Elements

No interactive elements - display only.

## Display Examples

### Example 1: Known Source

**Visual:** `Google`

**Description:**
- Domain: google.com
- Source Name: "Google" (predefined)
- Non-interactive text

---

### Example 2: Known Social Media

**Visual:** `Facebook`

**Description:**
- Domain: facebook.com
- Source Name: "Facebook" (predefined)
- Non-interactive text

---

### Example 3: Unknown Source

**Visual:** `-`

**Description:**
- Domain: example.com (unknown source)
- Source Name: "-" (fallback for unrecognized sources)
- Non-interactive text

---

*Last Updated: 2025-11-15*
