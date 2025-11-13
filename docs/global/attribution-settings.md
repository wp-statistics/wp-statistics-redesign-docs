# Attribution Settings

This document explains the Attribution Model setting in WP Statistics and how it affects the display of session-level data when visitors have multiple sessions.

## Table of Contents

1. [Overview](#overview)
2. [Attribution Models](#attribution-models)
3. [Affected Columns](#affected-columns)
4. [Use Cases](#use-cases)
5. [Examples](#examples)
6. [Settings Configuration](#settings-configuration)

---

## Overview

### What is Attribution?

When a visitor has multiple sessions within the selected date range, WP Statistics must decide which session's data to display in certain columns (Referrer, Entry Page, Exit Page).

**Attribution Model** determines which session is used for these columns.

### Why It Matters

Different attribution models serve different analysis goals:
- **First Touch**: Understand where visitors originally came from
- **Last Touch**: Understand visitors' most recent behavior

---

## Attribution Models

### First Touch Attribution

**Definition:** Show data from the visitor's **first session** within the selected date range.

**When to Use:**
- Acquisition analysis ("Where did this visitor come from?")
- Campaign effectiveness tracking
- Understanding initial visitor intent
- Landing page optimization

**Behavior:**
- Referrer: Shows traffic source from first session
- Entry Page: Shows landing page from first session
- Exit Page: Shows exit page from first session

---

### Last Touch Attribution (Default)

**Definition:** Show data from the visitor's **most recent session** within the selected date range.

**When to Use:**
- Engagement analysis ("What's the visitor doing now?")
- Re-engagement campaign tracking
- Recent behavior analysis
- Current visitor intent

**Behavior:**
- Referrer: Shows traffic source from most recent session
- Entry Page: Shows landing page from most recent session
- Exit Page: Shows exit page from most recent session

**Default:** Last Touch is the default attribution model as it provides the most relevant recent visitor behavior data.

---

## Affected Columns

### Columns Affected by Attribution Model

The following columns display session-specific data and are affected by the attribution model setting:

1. **[Referrer](../columns/referrer.md)**
   - First Touch: Shows referrer from first session in date range
   - Last Touch: Shows referrer from most recent session in date range

2. **[Entry Page](../columns/entry-page.md)**
   - First Touch: Shows entry page from first session in date range
   - Last Touch: Shows entry page from most recent session in date range

3. **[Exit Page](../columns/exit-page.md)**
   - First Touch: Shows exit page from first session in date range
   - Last Touch: Shows exit page from most recent session in date range

### Columns NOT Affected by Attribution Model

The following columns show aggregate data across ALL sessions and are NOT affected by attribution model:

- [Total Views](../columns/total-views.md) - Sum across all sessions
- [Total Sessions](../columns/total-sessions.md) - Count of all sessions
- [Session Duration](../columns/session-duration.md) - Average across all sessions
- [Views Per Session](../columns/views-per-session.md) - Calculated from totals
- [Bounce Rate](../columns/bounce-rate.md) - Calculated from all sessions
- [Visitor Status](../columns/visitor-status.md) - Based on all-time history
- [Visitor Last Visit](../columns/visitor-last-visit.md) - Most recent view timestamp
- [Visitor Info](../columns/visitor-info.md) - Visitor attributes

---

## Use Cases

### Use Case 1: Campaign ROI Analysis (First Touch)

**Scenario:** You ran a Google Ads campaign in October and want to see which visitors it brought in and how they behaved.

**Setting:** First Touch Attribution

**Why:** You want to see the original source (Google Ads) for all visitors acquired during October, even if they returned later via other sources.

**Result:**
- Referrer column shows "Google Ads" for campaign visitors
- Entry Page shows the landing page from the ad campaign
- You can measure campaign effectiveness accurately

---

### Use Case 2: Content Engagement Analysis (Last Touch)

**Scenario:** You want to understand what content visitors are currently interested in and how they're finding it.

**Setting:** Last Touch Attribution

**Why:** You want to see visitors' most recent behavior, not their historical acquisition source.

**Result:**
- Referrer column shows how visitors found you most recently
- Entry Page shows what content they're currently exploring
- You understand current visitor intent and interests

---

### Use Case 3: Returning Visitor Re-engagement (Last Touch)

**Scenario:** You want to analyze returning visitors and see what brings them back.

**Setting:** Last Touch Attribution

**Why:** You want to know what prompted their most recent return, not their original acquisition source.

**Result:**
- Referrer column shows what brought them back (email, direct, social, etc.)
- Entry Page shows where they re-entered your site
- You can optimize re-engagement strategies

---

## Examples

### Example Scenario

**Visitor:** Jane Doe

**Session History in November:**

**Session 1:** Nov 2, 10:00 AM
- Referrer: Google Ads
- Entry Page: Product Features
- Exit Page: Pricing
- Views: 3

**Session 2:** Nov 5, 2:00 PM
- Referrer: Email Newsletter
- Entry Page: Blog Post A
- Exit Page: Blog Post B
- Views: 2

**Session 3:** Nov 8, 9:00 AM
- Referrer: Direct Traffic
- Entry Page: Dashboard
- Exit Page: Dashboard
- Views: 1 (bounce)

**Viewing Data for:** November 1-30

---

### First Touch Attribution Display

| Column | Value |
|--------|-------|
| Referrer | Google Ads |
| Entry Page | Product Features |
| Exit Page | Pricing |
| Total Sessions | 3 |
| Total Views | 6 |
| Session Duration | Avg of all 3 sessions |
| Views Per Session | 2.0 |
| Bounce Rate | 33% (1 of 3 sessions) |

**Interpretation:** Shows acquisition data - how Jane originally discovered the site via Google Ads campaign.

---

### Last Touch Attribution Display

| Column | Value |
|--------|-------|
| Referrer | Direct Traffic |
| Entry Page | Dashboard |
| Exit Page | Dashboard |
| Total Sessions | 3 |
| Total Views | 6 |
| Session Duration | Avg of all 3 sessions |
| Views Per Session | 2.0 |
| Bounce Rate | 33% (1 of 3 sessions) |

**Interpretation:** Shows recent behavior - Jane's most recent visit was a direct login to the dashboard.

---

## Settings Configuration

### Where to Configure

The Attribution Model setting is configured in WP Statistics plugin settings (implementation detail - see plugin documentation for exact location).

### Available Options

1. **First Touch** - Use first session in date range
2. **Last Touch** - Use most recent session in date range (Default)

### Scope

- Setting applies globally to all visitor tables and reports
- Affects: Latest Visitors, Top Visitors, Single Visitor Report
- Takes effect immediately upon changing
- Does not affect historical data, only display logic

---

## Related Documentation

- [Data Model](data-model.md) - Understand sessions, visitors, and views
- [Referrer Column](../columns/referrer.md)
- [Entry Page Column](../columns/entry-page.md)
- [Exit Page Column](../columns/exit-page.md)
- [Latest Visitors Widget](../widgets/latest-visitors.md)
- [Top Visitors Table Widget](../widgets/top-visitors-table.md)
- [Single Visitor Report](../reports/visitor-insights/single-visitor-report.md)

---

*Last Updated: 2025-11-08*
