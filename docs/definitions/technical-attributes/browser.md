---
title: "Browser"
type: "definition"
category: "technical-attributes"
status: "Need Review"
aliases: ["Web Browser", "User Agent Browser"]
---

# Browser

Web browser software used to access the website (detected from User Agent).

## Definition

Extracted from User Agent string. Includes name and version.

## Common Browsers

**Desktop:**
- Chrome, Firefox, Safari, Edge, Opera, Brave

**Mobile:**
- Chrome Mobile (Android)
- Safari Mobile (iOS)
- Samsung Internet
- UC Browser (Asia)

## Detection Example

```
User Agent string:
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36

Parsed:
- Browser: Chrome
- Version: 120.0.0.0
- OS: Windows 10
- Architecture: 64-bit
```

## Typical Distribution

```
Desktop: Chrome 60-70%, Safari 10-15%, Edge 10-15%, Firefox 5-10%
Mobile: Chrome Mobile 60-65%, Safari Mobile 25-30%, Samsung 5-8%
```

## Why It Matters

- **Compatibility testing:** Prioritize testing on popular browsers
- **Feature support:** Newer versions support more features
- **Security:** Old versions have vulnerabilities

## Testing Priority

```
1. Top 3 browsers (cover 80%+ traffic)
2. Latest versions of major browsers
3. Previous major version
4. Mobile browsers (iOS Safari, Chrome Mobile)
```

## Common Misconceptions

**"Everyone uses Chrome"**
- Dominant but not universal. Safari significant (especially US/iOS).

**"I only need to test Chrome"**
- No. Safari has unique behaviors. Always test Safari (especially iOS).

**"Browser version doesn't matter"**
- Matters for features, security, compatibility.

---

*Last Updated: 2025-11-24*
