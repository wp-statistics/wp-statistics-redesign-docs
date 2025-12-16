# Interactions Guide

This document describes all global interactions available across WP Statistics report pages, including their behavior, implementation patterns, and usage guidelines.

## Table of Contents

1. [Date Picker](#date-picker)
2. [Filters](#filters) *(Legacy - see [Advanced Filters](advanced-filters.md))*
3. [Search](#search)
4. [Sort Options](#sort-options)
5. [Auto Refresh](#auto-refresh)
6. [Export](#export)
7. [User Role Filter](#user-role-filter)
8. [Back Navigation](#back-navigation)
9. [Pagination](#pagination)

---

## Date Picker

### Locations Used
- Visitors Overview
- Visitors
- Views
- Top Visitors
- Logged-in Users
- Search Terms

### Preset Options
- Today
- Yesterday
- Last 7 Days
- Last 30 Days
- Last 90 Days
- This Month
- Last Month
- This Year
- Last Year
- Custom Range

---

## Filters

> **Note**: This section documents the legacy filtering system. See [Advanced Filters](advanced-filters.md) for the new system.

### Filter Types

**Geographic:** Country, City, Region

**Technical:** Device Type, Browser, Operating System, Screen Resolution

**Content:** Content Type, Category, Tag, Author

**Behavior:** New vs Returning Visitors, Session Duration, Pages per Session, Bounce Rate Range

---

## Search

### Locations Used
- Visitors
- Search Terms
- Any page with data tables

### Search Types
- **Keyword Search**: Search across multiple columns
- **Field-Specific Search**: Search within specific column

---

## Sort Options

### Locations Used
- Top Visitors
- Any page with sortable data tables

### Common Sort Fields
- Visits
- Page Views
- Time on Site
- Date
- Alphabetical

---

## Auto Refresh

### Locations Used
- Online Visitors

### Refresh Intervals
- 30 seconds
- 1 minute
- 5 minutes
- Manual only (disabled)

---

## Export

### Locations Used
- Most report pages
- Single Visitor Report

### Export Formats
- CSV
- Excel (XLSX)
- PDF
- JSON

### Export Options
- Current view only
- All data (within date range)
- Selected rows only
- Include/exclude specific columns

---

## User Role Filter

### Locations Used
- Logged-in Users

### Available Roles
- Administrator
- Editor
- Author
- Contributor
- Subscriber
- Custom Roles (if any)

---

## Back Navigation

### Locations Used
- Single Visitor Report
- Any drill-down detail page

---

## Pagination

### Locations Used
- Any page with large data tables

### Pagination Types
- **Standard Pagination**: Previous/Next buttons, page numbers, jump to page
- **Infinite Scroll**: Auto-loads on scroll, or "Load More" button

### Items Per Page Options
- 10, 25, 50, 100

---

## Related Documentation

- [Advanced Filters](advanced-filters.md)
- [Global Rules](global-rules.md)
- [Menu Structure](menu-structure.md)

---

*Last Updated: 2025-12-16*
