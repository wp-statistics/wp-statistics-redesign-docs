# Interactions Guide

This document describes all global interactions available across WP Statistics report pages, including their behavior, implementation patterns, and usage guidelines.

## Table of Contents

1. [Date Picker](#date-picker)
2. [Filters](#filters)
3. [Search](#search)
4. [Sort Options](#sort-options)
5. [Auto Refresh](#auto-refresh)
6. [Export](#export)
7. [User Role Filter](#user-role-filter)
8. [Back Navigation](#back-navigation)
9. [Pagination](#pagination)

---

## Date Picker

### Description
Allows users to select custom date ranges for data analysis.

### Locations Used
- Visitors Overview
- Visitors
- Views
- Top Visitors
- Logged-in Users
- Search Terms

### Behavior

**Preset Options:**
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

**Custom Range:**
- Calendar popup for start and end dates
- Date validation (start must be before end)
- Maximum range limits (if applicable)

### UI Location
- Top-right corner of page header
- Always visible and accessible
- Compact dropdown format

### Implementation Notes
```yaml
interactions:
  - "Date Picker"
```

### States
- **Default**: Shows currently selected range
- **Open**: Calendar popup visible
- **Loading**: Shows loading state while data refreshes
- **Error**: Shows error message if date range invalid

---

## Filters

### Description
Advanced filtering options to narrow down data by various criteria.

### Common Filter Types

#### Geographic Filters
- Country
- City
- Region

#### Technical Filters
- Device Type (Desktop, Mobile, Tablet)
- Browser
- Operating System
- Screen Resolution

#### Content Filters
- Content Type (Page, Post, Custom Post Type)
- Category
- Tag
- Author

#### Behavior Filters
- New vs Returning Visitors
- Session Duration
- Pages per Session
- Bounce Rate Range

### UI Pattern

**Filter Button:**
- Icon + "Filters" text
- Badge showing active filter count
- Opens filter panel/modal

**Filter Panel:**
- Sidebar or modal overlay
- Organized by filter category
- Checkboxes for multiple selection
- Apply/Reset buttons
- Show results count

### Implementation Notes
```yaml
interactions:
  - "Filters"
```

### Behavior
- Filters combine with AND logic within a category
- Multiple categories combine with AND logic
- URL parameters updated for bookmarking
- "Clear All" resets to default state

---

## Search

### Description
Text-based search to find specific items in data tables or lists.

### Locations Used
- Visitors
- Search Terms
- Any page with data tables

### Search Types

**Keyword Search:**
- Search across multiple columns
- Real-time search (debounced)
- Case-insensitive

**Field-Specific Search:**
- Search within specific column
- Advanced search operators (if needed)

### UI Location
- Above data table/list
- Search icon + input field
- "X" button to clear search

### Implementation Notes
```yaml
interactions:
  - "Search"
```

### Behavior
- Minimum 2-3 characters to trigger search
- 300ms debounce delay
- Shows "No results" state if empty
- Highlights matching terms in results

---

## Sort Options

### Description
Allows users to sort data tables and lists by different columns.

### Locations Used
- Top Visitors
- Any page with sortable data tables

### Sort Methods

**Column Headers:**
- Click to sort ascending
- Click again to sort descending
- Arrow indicator shows current sort

**Sort Dropdown:**
- Dropdown with sort options
- Shows current sort selection
- Useful for mobile layouts

### Implementation Notes
```yaml
interactions:
  - "Sort Options"
```

### Common Sort Fields
- Visits (ascending/descending)
- Page Views (ascending/descending)
- Time on Site (ascending/descending)
- Date (newest/oldest)
- Alphabetical (A-Z/Z-A)

---

## Auto Refresh

### Description
Automatically refreshes data at regular intervals for real-time reporting.

### Locations Used
- Online Visitors

### Behavior

**Refresh Intervals:**
- 30 seconds
- 1 minute
- 5 minutes
- Manual only (disabled)

**UI Controls:**
- Toggle to enable/disable
- Dropdown to select interval
- "Last updated" timestamp
- Manual refresh button

### Implementation Notes
```yaml
interactions:
  - "Auto Refresh"
```

### Visual Feedback
- Subtle animation during refresh
- Does not disrupt user if viewing data
- Pause auto-refresh if user is interacting with data

---

## Export

### Description
Allows users to export report data in various formats.

### Locations Used
- Most report pages
- Single Visitor Report

### Export Formats

**Standard Formats:**
- CSV - For spreadsheet applications
- Excel (XLSX) - For Microsoft Excel
- PDF - For sharing/printing
- JSON - For developers/API integration

**Export Options:**
- Current view only
- All data (within date range)
- Selected rows only
- Include/exclude specific columns

### UI Location
- Top-right area, near Date Picker
- "Export" button with dropdown menu
- Icon indicates export action

### Implementation Notes
```yaml
interactions:
  - "Export"
```

### Behavior
- Respects current filters and date range
- Shows progress indicator for large exports
- Downloads file or shows preview
- Filename includes report name and date

---

## User Role Filter

### Description
Specialized filter for WordPress user roles.

### Locations Used
- Logged-in Users

### Available Roles
- Administrator
- Editor
- Author
- Contributor
- Subscriber
- Custom Roles (if any)

### UI Pattern
- Dropdown or checkbox list
- Multi-select enabled
- Shows user count per role
- "All Roles" option

### Implementation Notes
```yaml
interactions:
  - "User Role Filter"
```

---

## Back Navigation

### Description
Navigation control to return to previous page/view.

### Locations Used
- Single Visitor Report
- Any drill-down detail page

### UI Pattern
- Back arrow icon + text
- Top-left of page header
- Keyboard shortcut: Backspace or ESC

### Implementation Notes
```yaml
interactions:
  - "Back Navigation"
```

### Behavior
- Returns to previous page state
- Preserves filters/date range if applicable
- Browser back button also works

---

## Pagination

### Description
Navigate through large datasets split across multiple pages.

### Locations Used
- Any page with large data tables

### Pagination Types

**Standard Pagination:**
- Previous/Next buttons
- Page numbers
- Jump to specific page
- Shows total pages

**Infinite Scroll:**
- Automatically loads more as user scrolls
- "Load More" button option
- Shows loading indicator

**Items Per Page:**
- Dropdown to select: 10, 25, 50, 100
- Remembers user preference
- Shows total item count

### Implementation Notes
```yaml
# Pagination is typically automatic for tables
# No explicit interaction declaration needed
```

---

## Interaction Combinations

Some pages use multiple interactions together:

### Example: Visitors Report
```yaml
interactions:
  - "Date Picker"
  - "Filters"
  - "Search"
```

### Example: Online Visitors Report
```yaml
interactions:
  - "Auto Refresh"
  - "Filters"
```

---

## Responsive Behavior

### Desktop
- All interactions visible in header/toolbar
- Side-by-side layout for multiple controls
- Hover states and tooltips

### Tablet
- Condensed controls
- Some interactions in dropdown menus
- Touch-friendly hit areas

### Mobile
- Stacked layout
- Most interactions in overflow menu
- Simplified filter panel
- Bottom sheet UI pattern

---

## Accessibility

### Keyboard Navigation
- All interactions accessible via keyboard
- Tab order follows visual order
- Enter/Space to activate
- ESC to close modals/dropdowns

### Screen Readers
- Proper ARIA labels
- Announce state changes
- Describe button purposes
- Provide feedback for actions

---

## Related Documentation

- [Global Rules](global-rules.md)
- [Menu Structure](menu-structure.md)
- [Report Pages](../reports/)

---

*Last Updated: 2025-11-06*
