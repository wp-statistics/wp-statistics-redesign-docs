---
title: "Online Visitor"
type: "definition"
category: "visitor-classification"
status: "Need Review"
aliases: ["User Online", "Active Visitor", "Real-time Visitor"]
---

# Online Visitor

A visitor currently active on the website.

## Definition

An online visitor is someone who has loaded a page within the last 5 minutes and is considered currently browsing the site.

## How It's Determined

A visitor is considered online when:
1. They have a recent page view (within the timeout window)
2. Their session has not expired
3. They haven't explicitly left (closed browser)

## Use Cases

- Real-time traffic monitoring
- Identifying peak activity times
- Customer support awareness
- Live visitor count displays

## Example

```
Currently Online: 23 visitors

Breakdown:
- 15 on Homepage
- 5 on Product pages
- 3 on Blog posts
```

## Limitations

- Cannot detect if browser tab is still open but inactive
- Relies on page views; single-page apps may undercount
- Timeout window affects accuracy

---

*Last Updated: 2025-11-25*
