---
title: "Referrer"
type: "definition"
category: "traffic-sources"
status: "Need Review"
aliases: ["Referring Site", "Traffic Source", "Referer"]
---

# Referrer

The website that sent a visitor via a clicked link (from HTTP referer header).

## Definition

URL of the page containing the link that was clicked. Can be:
- Search engine (google.com)
- Social media (facebook.com)
- Other website (blog.com)
- Empty (direct traffic)

## How It Works

```
User on: google.com/search?q=wordpress
Clicks link to: yoursite.com/blog
HTTP Referer header: https://google.com/search?q=wordpress
WP Statistics records: google.com
```

## Referrer Types

**Search Engines:** google.com, bing.com, yahoo.com
**Social Media:** facebook.com, twitter.com (t.co), linkedin.com
**Other Sites:** External blogs, news, directories
**Direct (none):** Typed URL, bookmarks, email (often)

## Referrer vs Source Category

```
Referrer (specific): facebook.com, google.com, example.com
Source Category (grouped): Social Media, Organic Search, Referral

Multiple referrers → One category:
facebook.com, twitter.com, linkedin.com → Social Media
```

## Limitations

**Missing Referrers:**
- HTTPS to HTTP may strip referrer
- Email clients often block referrer
- Privacy browsers block referrer
- Direct URL typing has no referrer

**Solution:** Use UTM parameters for reliable tracking

## Common Misconceptions

**"All traffic should have a referrer"**
- No. Direct traffic (20-40%) has no referrer.

**"Referrer shows search terms"**
- No longer. Google encrypts queries. Only shows google.com.

---

*Last Updated: 2025-11-24*
