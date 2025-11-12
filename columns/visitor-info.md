---
title: "Visitor Info Column"
type: "column"
status: "Done"
figma: ""
used_in_widgets:
  - "latest-visitors"
  - "latest-views-table"
  - "online-visitors-table"
  - "top-visitors-table"
  - "top-visitors"
---

# Visitor Info Column

Displays comprehensive visitor information through a series of icons and badges showing location, browser, operating system, user identity, and IP/hash.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Latest Visitors](../widgets/latest-visitors.md)
- [Latest Views Table](../widgets/latest-views-table.md)
- [Online Visitors Table](../widgets/online-visitors-table.md)
- [Top Visitors Table](../widgets/top-visitors-table.md)
- [Top Visitors](../widgets/top-visitors.md)

## Display Elements

This column displays up to 5 elements, with some shown conditionally based on settings:

### 1. Flag Icon

**Visibility:** Always show

**Display:** Country flag icon

**Hover Text:** "{Country}, {Region}, {City}"
- Example: "United States, California, San Francisco"

**Click Action:** Navigate to Single Country Report

**Unknown State:** Show unknown icon with "Unknown Location" text

---

### 2. OS Icon

**Visibility:** Always show

**Display:** Operating system icon

**Hover Text:** Full OS name
- Example: "Windows 11"

**Click Action:** Navigate to Single OS Report

**Unknown State:** Show unknown icon with "Unknown OS" text

---

### 3. Browser Icon

**Visibility:** Always show

**Display:** Browser icon

**Hover Text:** "{Browser name} v{major}"
- Example: "Google Chrome v107"

**Click Action:** Navigate to Single Browser Report

**Unknown State:** Show unknown icon with "Unknown Browser" text

---

### 4. Logged-in User Badge

**Visibility:** Conditional - Only render when:
- `track_logged_in_enabled = true` **AND**
- `user_id` is not null

**Display Label (visible):** "{username} #{user_id}"
- Example: "navid #123"

**Hover Text:** "{email} ({role})"
- Example: "navid@x.com (administrator)"

**Click Action:** Navigate to [Single Visitor Report](../reports/single-visitor-report.md)

---

### 5. IP or Hash

**Visibility:** Conditional - Only show when logged-in user badge is NOT displayed

**Display Logic:**
- If `hash_enabled = true` → Show first 6 characters of hash
  - Example: "abc123"
- Else → Show full `ip_address`
  - Example: "192.168.1.1"

⚠️ **Important:**
- Never show both hash and raw IP at the same time
- Never show IP/hash when logged-in user badge is displayed

**Click Action:** Navigate to [Single Visitor Report](../reports/single-visitor-report.md)

## Display Logic & Conditions

The visibility and format of elements is controlled by these settings:

| Setting | Affects | Behavior |
|---------|---------|----------|
| `track_logged_in_enabled` | User Badge (Element 4) | When `true` AND `user_id` is not null, show logged-in user badge and hide IP/Hash |
| `hash_enabled` | IP/Hash (Element 5) | When `true`, show first 6 chars of hash. When `false`, show full IP address |
| `user_id` | User Badge (Element 4) & IP/Hash (Element 5) | When not null, show badge and hide IP/Hash. When null, hide badge and show IP/Hash |

### Display Priority Rule
- **Logged-in users:** Show user badge only (no IP/hash)
- **Anonymous visitors:** Show IP or hash only (no user badge)

## Display Layout Examples

### Example 1: Logged-in User (4 Elements Visible)

**Visual:** 🇺🇸 🪟 🌐 `[navid #123]`

**Description:**
- Flag: United States
- OS: Windows
- Browser: Chrome
- User Badge: navid #123
- No IP/Hash (hidden for logged-in users)

---

### Example 2: Anonymous Visitor with Hash

**Visual:** 🇩🇪 🖥️ 🦊 `abc123`

**Description:**
- Flag: Germany
- OS: macOS
- Browser: Firefox
- No User Badge (anonymous visitor)
- Hash: abc123 (first 6 chars)

---

### Example 3: Unknown Data

**Visual:** ❓ ❓ ❓ `192.168.1.1`

**Description:**
- Unknown Location
- Unknown OS
- Unknown Browser
- No User Badge
- IP: 192.168.1.1

## Interactive Elements

Each element in this column has specific interactive behavior:

### Flag Icon
- **Hover:** Display "{Country}, {Region}, {City}" in tooltip
- **Click:** Navigate to Single Country Report for this country

### OS Icon
- **Hover:** Display full OS name (e.g., "Windows 11") in tooltip
- **Click:** Navigate to Single OS Report for this operating system

### Browser Icon
- **Hover:** Display "{Browser name} v{major}" (e.g., "Google Chrome v107") in tooltip
- **Click:** Navigate to Single Browser Report for this browser

### Logged-in User Badge
- **Hover:** Display "{email} ({role})" (e.g., "navid@x.com (administrator)") in tooltip
- **Click:** Navigate to [Single Visitor Report](../reports/single-visitor-report.md) for this user

### IP or Hash
- **Click:** Navigate to [Single Visitor Report](../reports/single-visitor-report.md) for this visitor

## Unknown States

When data is unavailable or cannot be determined:

### Unknown Location
- **Display:** Unknown icon (❓ or similar)
- **Hover Text:** "Unknown Location"
- **Click:** Still links to Single Country Report (may show "Unknown" country page)

### Unknown OS
- **Display:** Unknown icon (❓ or similar)
- **Hover Text:** "Unknown OS"
- **Click:** Still links to Single OS Report (may show "Unknown" OS page)

### Unknown Browser
- **Display:** Unknown icon (❓ or similar)
- **Hover Text:** "Unknown Browser"
- **Click:** Still links to Single Browser Report (may show "Unknown" browser page)

## Related Documentation

- [Latest Visitors Widget](../widgets/latest-visitors.md)
- [Single Visitor Report](../reports/single-visitor-report.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-06*
