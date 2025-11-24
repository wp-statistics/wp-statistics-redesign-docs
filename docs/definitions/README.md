# Definitions Glossary

This glossary provides clear, comprehensive definitions of core concepts, metrics, and terms used throughout WP Statistics v15. These definitions are for internal understanding and reference.

## How to Use This Glossary

Each definition includes:
- Clear explanation of the term
- Key characteristics
- Examples and use cases
- Common misconceptions
- Related concepts

**Note:** These definitions are standalone reference materials. They are not cross-linked with other documentation files.

---

## Core Metrics

Fundamental measurement units used throughout the system.

### [Visitor](core-metrics/visitor.md)
A unique individual who visits the website, identified by IP address or hash.

### [Session](core-metrics/session.md)
A continuous period of activity by a visitor on the website, ending after 30 minutes of inactivity.

### [View](core-metrics/view.md)
A single instance of a page being loaded in a visitor's browser (also called Page View).

### [Session Duration](core-metrics/session-duration.md)
The time elapsed between the first and last page view in a session.

### [Bounce Rate](core-metrics/bounce-rate.md)
The percentage of sessions where the visitor viewed only one page before leaving.

### [Views Per Session](core-metrics/views-per-session.md)
The average number of pages viewed during a single session (also called Pages Per Session).

---

## Visitor Classification

How visitors are identified, classified, and attributed.

### [New Visitor](visitor-classification/new-visitor.md)
A visitor who is accessing the website for the first time in all recorded history.

### [Returning Visitor](visitor-classification/returning-visitor.md)
A visitor who has previously accessed the website at any point in recorded history.

### [First Touch Attribution](visitor-classification/first-touch-attribution.md)
An attribution model that credits the first page a visitor ever viewed as their entry page for all sessions.

### [Last Touch Attribution](visitor-classification/last-touch-attribution.md)
An attribution model that credits the actual entry page of each individual session (default model).

### [Logged-in User](visitor-classification/logged-in-user.md)
A visitor who is authenticated with a WordPress user account while browsing the website.

### [Anonymous Visitor](visitor-classification/anonymous-visitor.md)
A visitor who browses the website without logging into a WordPress user account.

---

## Traffic Sources

Categories and types of traffic sources with detection rules.

### [Referrer](traffic-sources/referrer.md)
The website or source that sent a visitor to your website by way of a clicked link.

### [Source Category](traffic-sources/source-category.md)
A grouped classification of traffic sources into organized channels like Organic Search, Social Media, Direct, and Referral Traffic.

### [Direct Traffic](traffic-sources/direct-traffic.md)
Traffic from visitors who arrived without a referrer, typically by typing the URL directly, using a bookmark, or clicking an untracked link.

### [Organic Search](traffic-sources/organic-search.md)
Unpaid traffic from search engines where visitors found the website through natural (non-advertising) search results.

### [Paid Traffic](traffic-sources/paid-traffic.md)
Traffic from paid advertising campaigns where you pay for clicks or impressions.

### [Social Media Traffic](traffic-sources/social-media.md)
Traffic from social media platforms where visitors clicked links shared on social networks.

### [Email Traffic](traffic-sources/email-traffic.md)
Traffic from visitors who clicked links in email messages, typically from marketing campaigns or newsletters.

### [UTM Parameters](traffic-sources/utm-parameters.md)
URL parameters added to links to track the source, medium, and campaign name of website traffic.

---

## Technical Attributes

Browser, device, and system-related concepts.

### [Browser](technical-attributes/browser.md)
The web browser software a visitor uses to access the website.

### [Operating System](technical-attributes/operating-system.md)
The operating system software running on the device a visitor uses to access the website.

### [Device Type](technical-attributes/device-type.md)
The category of device a visitor uses: Desktop, Mobile, or Tablet.

### [User Agent](technical-attributes/user-agent.md)
A text string sent by a browser identifying itself, the operating system, and device information to web servers.

---

## Content Metrics

Page-level measurements and classifications.

### [Entry Page](content-metrics/entry-page.md)
The first page a visitor views when starting a session on the website (also called Landing Page).

### [Exit Page](content-metrics/exit-page.md)
The last page a visitor views before leaving the website or ending their session.

---

## Visitor Behavior

Actions and interactions visitors perform on the website.

### [Search Term](visitor-behavior/search-term.md)
Words or phrases visitors type into the WordPress site search to find content on your website.

---

## Time Concepts

Session timing, date ranges, and temporal measurements.

### [Session Timeout](time-concepts/session-timeout.md)
The 30-minute period of inactivity after which a session automatically ends and a new session begins.

### [Date Range Scoping](time-concepts/date-range-scoping.md)
The practice of limiting analytics data to a specific time period to analyze activity within that date range.

### [Session Boundary](time-concepts/session-boundary.md)
The points at which a visitor's session starts or ends, determined by activity and time-based rules.

---

## Quick Reference

### Most Frequently Used Terms

**Basic Metrics:**
- Visitor → Session → View
- Session Duration
- Bounce Rate

**Visitor Types:**
- New vs Returning
- Logged-in vs Anonymous

**Traffic Sources:**
- Organic Search
- Direct Traffic
- Social Media
- Paid Traffic

**Attribution:**
- First Touch (historical acquisition)
- Last Touch (current behavior)

### Key Relationships

**Hierarchy:**
```
1 Visitor
  → Multiple Sessions
    → Multiple Views per Session
      → Session Duration calculated from Views
```

**Session Lifecycle:**
```
Session Starts
  → Views accumulate
  → 30 minutes inactivity OR Midnight
    → Session Ends
```

**Traffic Classification:**
```
Referrer
  → Grouped into Source Category
    → Organic Search, Social Media, Direct, etc.
```

---

## Status: Need Review

All definitions in this glossary are marked as "Need Review" and should be validated by product and technical teams.

---

*Last Updated: 2025-11-24*
