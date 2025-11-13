---
title: "Visitor List"
type: "widget"
component: "data-table"
add_on: "Free"
status: "Not Started"
default_sort: "last_visit"
row_limit: 50
used_in_reports:
  - "visitors"
---

# Visitor List Widget

Comprehensive data table showing detailed information about individual visitors.

## Widget Configuration

- **Component**: [Data Table](../components/data-table.md)
- **Add-on**: Free (included in base plugin)
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Component Configuration

| Property | Value |
|----------|-------|
| **Title** | (Optional) |
| **Default Sort** | last_visit |
| **Row Limit** | 50 |
| **Column Management** | ✅ Yes |
| **Pagination** | ✅ Yes |

## Used In Reports

This widget appears in the following report pages:

- [Visitors](../reports/visitors.md) - Row 3, full width

## Columns Displayed

### Default Columns

| Column | Description | Sortable |
|--------|-------------|----------|
| Visitor | IP address or identifier | Yes |
| Location | Country/City | Yes |
| Last Visit | Date and time | Yes |
| Page Views | Number of pages viewed | Yes |
| Visit Duration | Time spent on site | Yes |
| Browser | Browser name and version | Yes |
| Operating System | OS name and version | Yes |
| Device | Device type (Desktop/Mobile/Tablet) | Yes |

### Optional Columns (Admin Configurable)
- Referrer URL
- Landing Page
- Exit Page
- Screen Resolution
- Language
- First Visit Date

## Features

### Row Actions
- **Click Row**: Navigate to [Single Visitor Report](../reports/single-visitor-report.md)
- **Hover**: Highlight row and show quick actions

### Quick Actions Menu
- View Details (opens Single Visitor Report)
- Export Visitor Data
- Block Visitor (if enabled)
- Add Note (if enabled)

### Pagination
- 50 visitors per page (default)
- Options: 10, 25, 50, 100, 200
- Shows total visitor count
- Jump to page functionality

### Sorting
- Click column header to sort
- Ascending/descending toggle
- Multi-column sort (shift+click)
- Default: Last Visit (descending)

### Search Integration
Works with page-level search interaction to filter visitors by:
- IP address
- Country name
- Browser name
- Operating system

## Data Processing

### Visitor Identification
- Unique visitors identified by IP + User Agent
- Anonymous visitor: Shows IP address
- Known visitor: Shows name/email if available

### Visit Aggregation
- Groups multiple page views into visits
- Visit ends after 30 minutes of inactivity
- Shows most recent visit data

## Empty State

When no visitors match criteria:
- "No visitors found for the selected period"

---

*Last Updated: 2025-11-06*
