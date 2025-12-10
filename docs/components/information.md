---
title: "Information Component"
type: "component"
status: "Done"
used_in_widgets:
  - "account-information"
  - "visitor-information"
---

# Information Component

A component for displaying structured key-value information in a clean, readable format.

## Component Configuration

- **Type**: Component (Base UI element)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This component is used by the following widgets:

- [Account Information](../widgets/account-information.md)
- [Visitor Information](../widgets/visitor-information.md)

## Overview

The Information component displays labeled data fields in a key-value format. It's designed for presenting profile information, metadata, or any structured data that doesn't require tabular presentation.

## Configuration Options

Widgets using this component can configure the following options:

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| **Title** | String | Widget title/heading displayed at the top | (Optional) |
| **Fields** | Array | List of field definitions to display | (Required) |

## Field Definition

Each field in the Fields array contains:

| Property | Type | Description |
|----------|------|-------------|
| **label** | String | The field label (e.g., "Username", "Email") |
| **value** | String | The field value to display |
| **format** | String | Optional format type: "text", "email", "date", "link" |

## Display Format

Fields are displayed as horizontal key-value pairs:

```
Label:     Value
Label:     Value
Label:     Value
```

## Empty State

When no data is available:
- "No information available"

## Related Documentation

- [Account Information Widget](../widgets/account-information.md)
- [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md)

---

*Last Updated: 2025-12-10*
