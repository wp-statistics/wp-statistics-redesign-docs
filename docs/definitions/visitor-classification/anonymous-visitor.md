---
title: "Anonymous Visitor"
type: "definition"
category: "visitor-classification"
status: "Need Review"
aliases: ["Guest Visitor", "Non-Authenticated Visitor"]
---

# Anonymous Visitor

Visitor not logged into WordPress, tracked by IP only.

## Definition

Visitor without WordPress authentication. Identified solely by IP address (or IP hash). Represents majority of traffic for most sites.

## Tracking Limitations

```
Same person, different IPs = different visitors
Different people, same IP = same visitor
```

**Examples:**
- Home (192.168.1.1) + Office (10.0.0.5) = 2 anonymous visitors
- Family members on shared WiFi = 1 anonymous visitor

## Comparison

**Anonymous:**
- ID: IP address only
- Cross-device: Not possible
- Profile data: None
- Privacy: IP can be hashed

**Logged-in:**
- ID: User ID + IP
- Cross-device: Yes
- Profile data: Name, email, role
- Privacy: More identifiable

## Typical Distribution

Most sites: 80-95% anonymous visitors
Member sites: 20-50% anonymous (more logged-in)

## Common Misconceptions

**"Anonymous means not tracked"**
- No. Fully tracked, just without user account data.

**"Cookies identify anonymous visitors"**
- No. WP Statistics uses IP, not cookies.

---

*Last Updated: 2025-11-24*
