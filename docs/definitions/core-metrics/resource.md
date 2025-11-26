---
title: "Resource"
type: "definition"
category: "core-metrics"
status: "Need Review"
aliases: ["Content", "Page Resource", "Tracked Content"]
---

# Resource

Any trackable content item on the website.

## Definition

A resource is any piece of content that can be viewed and tracked by WP Statistics. This includes pages, posts, custom post types, and other WordPress content.

**Resource Types:**
- Pages
- Posts
- Custom Post Types (Products, Events, etc.)
- Archives
- Category/Tag pages
- Author pages
- 404 pages
- Search pages
- Any other visitable page on the frontend

## Identification

Each resource is identified by:
- **Page ID:** WordPress internal identifier
- **Page Type:** Same as resource type (e.g., "page", "post", "archive", "404", "search")

## Metrics Per Resource

Resources can have associated metrics:
- Views
- Visitors
- Bounce Rate
- Exit Rate
- Time on Page

## Example

```
Resource: "Getting Started Guide"
Post ID: 1234
Type: Page
URL: /getting-started/
Views: 500
```

## Related Documentation

- [Page Column](../../columns/page.md)

---

*Last Updated: 2025-11-25*
