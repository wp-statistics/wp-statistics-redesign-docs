---
title: "Logged-in User"
type: "definition"
category: "visitor-classification"
status: "Need Review"
aliases: ["Authenticated User", "WordPress User"]
---

# Logged-in User

Authenticated WordPress user, tracked by user ID + IP.

## Definition

Visitor authenticated with WordPress credentials. Tracked by WordPress user ID in addition to IP address, allowing cross-device identification.

## Tracking Difference

**Logged-in:**
- Primary ID: WordPress user ID
- Secondary: IP address
- Same user on different IPs = same user record
- User data available (name, email, role)

**Anonymous:**
- Only ID: IP address
- Different IPs = different visitors
- No user data

## Example

```
Cross-Device Tracking:
- Monday: User 42 from home (IP: 192.168.1.1)
- Tuesday: User 42 from office (IP: 10.0.0.5)
Result: 1 logged-in user, 2 sessions, correctly associated

Anonymous to Logged-in Transition:
- Browse anonymously: Tracked as IP 192.168.1.1
- Log in: Now tracked as User ID 42
- May appear as 2 separate visitors in reports
```

---

*Last Updated: 2025-11-24*
