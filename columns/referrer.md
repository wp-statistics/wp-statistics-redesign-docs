---
title: "Referrer Column"
type: "column"
status: "Not Started"
figma: ""
used_in_widgets:
  - "latest-visitors"
---

# Referrer Column

Displays the source that referred the visitor to your website.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Latest Visitors](../widgets/latest-visitors.md)

## Data Displayed

### Referrer Types

#### Direct Traffic
- **Display**: "Direct" or "Direct Traffic"
- **Icon**: 🔗 or direct access icon
- **Description**: Visitor typed URL, used bookmark, or no referrer info

#### Search Engines
- **Display**: Search engine name (e.g., "Google", "Bing")
- **Icon**: Search engine logo/icon
- **Optional**: Show search terms if available

#### Social Media
- **Display**: Social platform name (e.g., "Facebook", "Twitter")
- **Icon**: Social platform logo
- **Examples**: Facebook, Twitter, LinkedIn, Instagram, Reddit

#### External Websites (Referrals)
- **Display**: Domain name (e.g., "example.com")
- **Icon**: 🔗 or external link icon
- **Format**: Shows clean domain without "www" or protocol
- **Full URL**: Available on hover or in tooltip

#### Email Campaigns
- **Display**: "Email" or email client name
- **Icon**: ✉️ or email icon
- **Optional**: Campaign name if available

#### Paid Advertising
- **Display**: Ad platform name (e.g., "Google Ads")
- **Icon**: Platform logo or ad icon
- **Optional**: Campaign details if tracked

## Display Format

### Standard Display
```
Google
example.com
Facebook
Direct
```

### With Icons
```
🔍 Google
🔗 example.com
📘 Facebook
➡️ Direct
```

### Truncation
- Long URLs truncated with ellipsis
- Full URL shown on hover
- Maximum display length: ~40 characters

## Behavior

### Sortable
**No** - This column is not sortable

### Interactive Elements
- **Click referrer**: Filter page to show only visitors from that source
- **Hover**: Show full URL in tooltip (for external referrals)
- **Icon**: Visual indicator of referrer type

### Source Detection Rules
- No referrer header: "Direct"
- Known search engine: Show search engine name
- Known social platform: Show platform name
- Other domains: Show domain name
- Email clients: "Email"

## Empty State

When referrer data not available:
- Display: "Unknown" or "-"
- May indicate privacy settings or tracking limitations

## Related Documentation

- [Latest Visitors Widget](../widgets/latest-visitors.md)
- [Visitor Sources Widget](../widgets/visitor-sources.md)
- [Search Terms Report](../reports/search-terms.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-06*
