---
title: "Visitor Informations Column"
type: "column"
status: "Not Started"
figma: ""
used_in_widgets:
  - "latest-visitors"
---

# Visitor Informations Column

Displays comprehensive information about a visitor including location, device, browser, and operating system in a single, consolidated column.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Latest Visitors](../widgets/latest-visitors.md)

## Data Displayed

This column combines multiple pieces of visitor information in a structured layout:

### Primary Information (Line 1)
- **Visitor Identifier**:
  - Logged-in user: Display username or name
  - Anonymous visitor: Display IP address
  - Hashed visitor: Display hash ID (if privacy mode enabled)

### Location (Line 2)
- **Country**: Country name with flag icon
- **City**: City name (if available)
- **Format**: "🇺🇸 United States, San Francisco"

### Technical Details (Line 3)
- **Browser**: Browser name and version
  - Examples: "Chrome 120", "Firefox 118", "Safari 17"
- **Operating System**: OS name and version
  - Examples: "Windows 11", "macOS 14", "Android 13"
- **Format**: "Chrome 120 • Windows 11"

### Device Type (Icon or Badge)
- Desktop icon 💻
- Mobile icon 📱
- Tablet icon 📱 (different variant)

## Display Layout Example

```
John Doe
🇺🇸 United States, San Francisco
Chrome 120 • Windows 11 • 💻 Desktop
```

Or for anonymous visitor:

```
192.168.1.1
🇩🇪 Germany, Berlin
Firefox 118 • Linux • 💻 Desktop
```

## Behavior

### Sortable
**No** - This column is not sortable (it's a composite of multiple data points)

### Interactive Elements
- **Click visitor name/IP**: Navigate to [Single Visitor Report](../reports/single-visitor-report.md)
- **Hover**: Highlight for emphasis
- **Tooltips**: May show additional details on hover

### Data Fallbacks
- No city available: Show only country
- No location data: Show "Unknown Location"
- No user agent data: Show "Unknown Browser/OS"

## Privacy Considerations

### Anonymous Mode
- When privacy features enabled, show hashed ID instead of IP
- Location may be generalized (country only)
- No personally identifiable information

### GDPR Compliance
- Respects data retention settings
- IP anonymization support
- User consent for detailed tracking

## Related Documentation

- [Latest Visitors Widget](../widgets/latest-visitors.md)
- [Single Visitor Report](../reports/single-visitor-report.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-06*
