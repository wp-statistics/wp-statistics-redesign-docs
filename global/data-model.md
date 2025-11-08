# Data Model

This document defines the core data concepts used throughout WP Statistics: visitors, sessions, and views. Understanding these definitions is essential for interpreting metrics and reports.

## Table of Contents

1. [Overview](#overview)
2. [Visitors](#visitors)
3. [Sessions](#sessions)
4. [Views](#views)
5. [Relationships](#relationships)
6. [Date Range Scoping](#date-range-scoping)
7. [Attribution Model Impact](#attribution-model-impact)

---

## Overview

WP Statistics tracks three primary data entities:

- **Visitors**: Unique individuals visiting the site
- **Sessions**: Groups of page views within a continuous period of activity
- **Views**: Individual page view events

These entities form a hierarchy: **Visitor → Sessions → Views**

---

## Visitors

### Definition

A visitor is a unique individual identified by one of the following methods:

- **Logged-in Users**: Identified by WordPress user ID (most accurate)
- **Anonymous Visitors**: Identified by IP address hash or browser fingerprint

### Visitor Persistence

- Visitor identity persists across multiple sessions
- Same visitor can return multiple times over days, weeks, or months
- Visitor classification (New vs Returning) is based on all-time history

### Visitor Attributes

Visitors have persistent attributes that may change between sessions:
- Location (Country, Region, City)
- Browser and Operating System
- Device type (Desktop, Mobile, Tablet)

---

## Sessions

### Definition

A **session** is a group of page views by a single visitor that occur within a continuous period of activity.

### Session Timeout Rule

**Sessions end after 30 minutes of inactivity.**

If a visitor views a page, then returns 31 minutes later, this creates a new session.

### Session Examples

**Example 1: Single Session**
```
10:00 AM - Visitor views Homepage
10:05 AM - Visitor views About Page
10:10 AM - Visitor views Contact Page
10:15 AM - Session ends (30 minutes of inactivity)
```
Result: 1 session, 3 views

**Example 2: Multiple Sessions**
```
10:00 AM - Visitor views Homepage
10:05 AM - Visitor views Blog
[35 minutes pass]
10:40 AM - Visitor returns, views Pricing Page
10:42 AM - Visitor views Signup Page
```
Result: 2 sessions (Session 1: 2 views, Session 2: 2 views)

### Session Attributes

Each session has:
- **Start Time**: Timestamp of first view in session
- **End Time**: Timestamp of last view in session
- **Duration**: Time elapsed from start to end
- **Entry Page**: First page viewed in the session
- **Exit Page**: Last page viewed in the session
- **Referrer**: Traffic source that brought visitor to the session
- **View Count**: Number of pages viewed during the session

### Session Classification

Sessions can be classified as:
- **Bounce**: Session with only 1 page view (Entry Page = Exit Page)
- **Engaged**: Session with 2+ page views
- **New Visitor Session**: Session by a visitor having their first-ever session
- **Returning Visitor Session**: Session by a visitor with prior session history

---

## Views

### Definition

A **view** (or page view) is a single instance of a page being loaded or viewed by a visitor.

### View Attributes

Each view has:
- **Timestamp**: Date and time of the page view
- **Page**: The page/post that was viewed
- **Visitor**: Who viewed the page
- **Session**: Which session the view belongs to
- **Referrer**: Traffic source (if entry view in session)

### View Counting

- Each page load counts as 1 view
- Refreshing the same page counts as an additional view
- Multiple views of the same page within a session are counted separately

---

## Relationships

### Hierarchy

```
Visitor (1)
  └─ Session (many)
      └─ View (many)
```

**Example:**
```
Visitor: John Doe
  ├─ Session 1 (Nov 1, 10:00 AM)
  │   ├─ View 1: Homepage
  │   ├─ View 2: About Page
  │   └─ View 3: Contact Page
  ├─ Session 2 (Nov 3, 2:00 PM)
  │   ├─ View 1: Blog Post A
  │   └─ View 2: Blog Post B
  └─ Session 3 (Nov 8, 9:00 AM)
      └─ View 1: Pricing Page
```

### Aggregate Metrics

**Visitor-Level Aggregates:**
- Total Sessions: 3
- Total Views: 6
- Average Session Duration: Mean of 3 session durations
- Views Per Session: 6 ÷ 3 = 2.0
- Bounce Rate: 1 ÷ 3 = 33% (Session 3 was a bounce)

---

## Date Range Scoping

### How Date Ranges Affect Metrics

Most metrics in WP Statistics are **date-range scoped**, meaning they only include data within the selected date range.

### Date Range Behavior

**When viewing data for "Nov 1-7":**
- **Total Views**: Count of views that occurred Nov 1-7
- **Total Sessions**: Count of sessions that started Nov 1-7
- **Total Visitors**: Count of unique visitors who had at least one session Nov 1-7

### Session Boundary Handling

**If a session spans the date range boundary:**

**Example:** Session starts Oct 31 at 11:50 PM, ends Nov 1 at 12:10 AM
- If viewing "November": This session counts (session start date determines inclusion)
- Views before midnight (Oct 31) are NOT counted
- Views after midnight (Nov 1) ARE counted

**Rule:** Sessions are included if their start time falls within the selected date range.

### All-Time vs Period Metrics

Some metrics ignore date ranges and show all-time data:

**All-Time Metrics:**
- New vs Returning classification (based on first-ever session)
- First Session Date (never changes)

**Period Metrics:**
- Total Views (within selected date range)
- Total Sessions (within selected date range)
- Session Duration (average of sessions in date range)
- Views Per Session (calculated from period data)
- Bounce Rate (sessions in date range)

---

## Attribution Model Impact

WP Statistics supports two attribution models that affect how session-level data is displayed when a visitor has multiple sessions. See [Attribution Settings](attribution-settings.md) for complete details.

### Quick Reference

**First Touch Attribution:**
- Shows data from the visitor's first session in the date range
- Use for acquisition analysis

**Last Touch Attribution:**
- Shows data from the visitor's most recent session in the date range
- Use for engagement analysis (default)

### Affected Metrics

Attribution model affects:
- Referrer (which session's referrer to show)
- Entry Page (which session's entry page to show)
- Exit Page (which session's exit page to show)

Attribution model does NOT affect aggregate metrics:
- Total Views (sum across all sessions)
- Total Sessions (count all sessions)
- Session Duration (average across all sessions)
- Views Per Session (calculated from totals)
- Bounce Rate (calculated from all sessions)

---

## Related Documentation

- [Attribution Settings](attribution-settings.md)
- [Total Sessions Column](../columns/total-sessions.md)
- [Session Duration Column](../columns/session-duration.md)
- [Views Per Session Column](../columns/views-per-session.md)
- [Bounce Rate Column](../columns/bounce-rate.md)
- [New vs Returning Column](../columns/new-vs-returning.md)
- [Entry Page Column](../columns/entry-page.md)
- [Exit Page Column](../columns/exit-page.md)
- [Global Rules](global-rules.md)

---

*Last Updated: 2025-11-08*
