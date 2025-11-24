---
title: "Operating System"
type: "definition"
category: "technical-attributes"
status: "Need Review"
aliases: ["OS", "Platform"]
---

# Operating System

OS running on visitor's device (detected from User Agent).

## Definition

System software: Windows, macOS, iOS, Android, Linux, etc.

## Common OS

**Desktop:**
- Windows (11, 10, 8, 7)
- macOS (Sonoma, Ventura, Monterey)
- Linux (Ubuntu, Fedora, Debian)
- Chrome OS

**Mobile:**
- iOS (iPhone)
- iPadOS (iPad)
- Android (various versions)

## Detection Example

```
User Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)...

Parsed:
- OS: iOS
- Version: 17.0
- Device: iPhone
```

## Typical Distribution

```
Desktop: Windows 70-75%, macOS 15-20%, Linux 2-4%
Mobile: Android 70-75% global (50%+ in US), iOS 25-30%
```

## OS as Device Indicator

```
Windows/macOS/Linux → Desktop/Laptop
iOS/Android → Mobile/Tablet
```

## Demographics

- **iOS users:** Often higher income
- **macOS users:** Often creative professionals
- **Linux users:** Technical audience
- **Windows:** Broad demographic

## Common Misconceptions

**"Everyone uses Windows"**
- Windows dominates desktop, but mobile (iOS/Android) often exceeds desktop.

**"iOS and Android users behave the same"**
- Different demographics, behaviors, monetization. Analyze separately.

**"macOS users are small minority"**
- 15-20% desktop. Can be 40-60% for creative/design sites.

---

*Last Updated: 2025-11-24*
