---
title: "User Agent"
type: "definition"
category: "technical-attributes"
status: "Need Review"
aliases: ["User Agent String", "UA"]
---

# User Agent

Text string sent by browser identifying itself, OS, and device to web servers.

## Definition

HTTP header sent automatically with every request. Contains browser name/version, OS, device info.

## Structure

```
Mozilla/5.0 (Platform; OS) Browser/Version Engine/Version

Example:
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
```

## What It Reveals

**Browser:** Chrome 120.0.0.0
**OS:** Windows 10 (NT 10.0)
**Architecture:** 64-bit
**Engine:** Blink (WebKit/Chrome combo)

## Examples

**Chrome on Windows:**
```
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
```

**Safari on iPhone:**
```
Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1
```

**Firefox on Linux:**
```
Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0
```

## WP Statistics Usage

**Parsing:**
- Extracts browser name/version
- Identifies OS
- Determines device type (Desktop/Mobile/Tablet)

**Not Stored:**
- Full UA string typically not displayed
- Only parsed data stored

## Limitations

- Can be spoofed (user can modify)
- Privacy tools may alter it
- "Frozen" UAs (browsers freezing strings for privacy)
- Moving to User-Agent Client Hints (new standard)

## Common Misconceptions

**"User Agent identifies individual users"**
- No. Many users share same UA. Identifies software config, not individuals.

**"User Agent is always accurate"**
- Can be spoofed. Generally accurate for analytics but not for security.

**"All Chrome users have same User Agent"**
- No. UA includes OS, device, version, creating many variations.

---

*Last Updated: 2025-11-24*
