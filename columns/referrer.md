---
title: "Referrer Column"
type: "column"
status: "Done"
figma: ""
used_in_widgets:
  - "latest-visitors"
---

# Referrer Column

Displays the traffic source that referred the visitor to your website, shown as a domain link (when available) with a category label.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Latest Visitors](../widgets/latest-visitors.md)

## Display Elements

This column displays up to 2 lines of information:

### Line 1: Referrer Domain (Conditional)

**Visibility:** Only render when `domain` is not null

**Display:** Full domain without protocol
- Example: "example.com", "google.com"

**Format:**
- No protocol (no "https://" or "http://")
- Cut off longer than 25 characters with ellipsis (…), but always keep the domain suffix
- Example: "verylongdomainname123456.com" → "verylongdomainnam….com"

**Interactive:**
- **Clickable:** Opens `https://{domain}` in new tab

---

### Line 2: Source Category Label (Always Shown)

**Visibility:** Always render (cannot be empty)

**Display Style:**
- Upper-case pill style

**Source Categories (Enum):**
- **DIRECT TRAFFIC**
- **REFERRAL**
- **ORGANIC SEARCH**
- **ORGANIC SOCIAL**
- **PAID**
- **EMAIL**
- **OTHER**

## Display Logic

### Standard Case (Domain + Category)
When `domain` is not null, display both lines:
1. Domain link (clickable, truncated if needed)
2. Category pill

### Direct Traffic Case (Category Only)
When `domain` is null (direct traffic):
- Skip Line 1 entirely
- Only show **DIRECT TRAFFIC** category pill

### Truncation Rule
- Domain names longer than 25 characters: Cut off with ellipsis (…), but always keep the domain suffix
- Truncation happens at character 25 total (including suffix)
- Example: "verylongdomainnam….com" (shows beginning and keeps .com)
- Full domain shown on hover (browser default tooltip)

### Fallback Rule
⚠️ **Important:** Never show "(none)" or "unknown"
- If parser cannot classify source: Use **OTHER** category
- Always display a valid category from the enum list

## Display Layout Examples

### Example 1: Referral with Domain

**Visual:**
```
example.com
REFERRAL
```

**Description:**
- Line 1: Domain "example.com" (clickable)
- Line 2: "REFERRAL" category pill

---

### Example 2: Direct Traffic (No Domain)

**Visual:**
```
DIRECT TRAFFIC
```

**Description:**
- Line 1: Skipped (no domain)
- Line 2: "DIRECT TRAFFIC" category pill only

---

### Example 3: Organic Search with Long Domain

**Visual:**
```
verylongdomainnam….com
ORGANIC SEARCH
```

**Description:**
- Line 1: Domain truncated at 25 chars with ellipsis, keeps .com suffix
- Line 2: "ORGANIC SEARCH" category pill
- Hover on domain shows full URL

---

### Example 4: Paid Traffic

**Visual:**
```
adnetwork.com
PAID
```

**Description:**
- Line 1: Domain "adnetwork.com" (clickable)
- Line 2: "PAID" category pill (UTM medium = cpc detected)

---

### Example 5: Email Campaign

**Visual:**
```
newsletter.company.com
EMAIL
```

**Description:**
- Line 1: Domain from email tracking
- Line 2: "EMAIL" category pill

---

### Example 6: Unclassified Source

**Visual:**
```
unknown-source.io
OTHER
```

**Description:**
- Line 1: Domain "unknown-source.io"
- Line 2: "OTHER" category pill (fallback)

## Interactive Elements

### Domain Link (Line 1)
- **Click:** Opens `https://{domain}` in new tab
- **Hover:** Browser shows full URL (if truncated) or link preview
- **Not shown:** When domain is null (direct traffic)

### Category Pill (Line 2)
- **Not clickable** - Display only
- **Always visible** - Cannot be hidden

## Related Documentation

- [Latest Visitors Widget](../widgets/latest-visitors.md)
- [Visitor Sources Widget](../widgets/visitor-sources.md)
- [Search Terms Report](../reports/search-terms.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-06*
