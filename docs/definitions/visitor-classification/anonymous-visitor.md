---
title: "Anonymous Visitor"
type: "definition"
category: "visitor-classification"
status: "Need Review"
aliases: ["Guest Visitor", "Non-Authenticated Visitor"]
---

# Anonymous Visitor

Visitor not logged into WordPress, tracked by [visitor hash](../../technical/architecture/visitor-hash-mechanism.md).

## Definition

Visitor without WordPress authentication. Identified by visitor hash (generated from IP + User Agent + daily salt). Represents majority of traffic for most sites.

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
- ID: [Visitor hash](../../technical/architecture/visitor-hash-mechanism.md)
- Cross-device: Not possible
- Profile data: None
- Privacy: Hash always generated (IP optionally stored)

**Logged-in:**
- ID: User ID + IP
- Cross-device: Yes
- Profile data: Name, email, role
- Privacy: More identifiable

## Related Documentation

- [Visitor Hash Mechanism](../../technical/architecture/visitor-hash-mechanism.md) - Privacy-focused visitor identification

---

*Last Updated: 2025-11-26*
