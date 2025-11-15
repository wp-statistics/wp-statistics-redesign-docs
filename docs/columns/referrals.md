---
title: "Referrals Column"
type: "column"
status: "Done"
used_in_widgets:
  - "referrers-table"
---

# Referrals Column

Shows the number of referrals from a specific domain.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Referrers Table](../widgets/referrers-table.md)

## Display

**Label:** Number of referrals

**Format:**
- Positive integer
- Thousand separator (e.g., 1,234)
- Right-aligned in table cell
- Displayed as clickable link

## Interactive Elements

### Click Action

Opens the [Referred Visitors](../reports/referrals/referred-visitors.md) report with filter applied:
- Filters to show only visitors from the clicked domain
- Navigates in same tab
- Pre-applies referrer filter to the specific domain

### Hover State

Standard link hover styling to indicate clickability.

## Display Examples

### Example 1: Low Count

**Visual:** `42`

**Description:**
- Count: 42 referrals
- No thousand separator needed
- Click: Opens Referred Visitors filtered to this domain

---

### Example 2: High Count

**Visual:** `1,234`

**Description:**
- Count: 1,234 referrals
- Thousand separator displayed
- Click: Opens Referred Visitors filtered to this domain

---

### Example 3: Very High Count

**Visual:** `123,456`

**Description:**
- Count: 123,456 referrals
- Multiple thousand separators
- Click: Opens Referred Visitors filtered to this domain

---

*Last Updated: 2025-11-15*
