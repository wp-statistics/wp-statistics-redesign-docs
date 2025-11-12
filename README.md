# WP Statistics - Redesign Documentation

Welcome to the WP Statistics interface redesign documentation. This comprehensive guide covers all report pages, widgets, components, and global design rules.

## Table of Contents

- [Global Documentation](#global-documentation)
- [Report Groups](#report-groups)
  - [Visitors Reports](#visitors-reports)
- [Widgets](#widgets)
- [Components](#components)
- [Columns](#columns)

---

## Global Documentation

Essential documentation covering global rules, patterns, and configurations:

- [Global Rules](global/global-rules.md) - Design principles, patterns, and global UI rules
- [Menu Structure](global/menu-structure.md) - Main navigation menu structure and organization
- [Interactions](global/interactions.md) - Common interactions like Date Picker, Filters, etc.
- [Data Model](global/data-model.md) - Definitions of visitors, sessions, views, and their relationships
- [Attribution Settings](global/attribution-settings.md) - First Touch vs Last Touch attribution model

---

## Report Groups

### Visitors Reports

A comprehensive set of reports for analyzing visitor behavior and traffic patterns.

| Report Page | Menu Visibility | Add-on | Status | Documentation |
|------------|----------------|--------|--------|---------------|
| Overview | Yes | Free | Done | [View Docs](reports/visitors-overview.md) |
| Visitors | Yes | Free | Done | [View Docs](reports/visitors.md) |
| Views | Yes | Free | Done | [View Docs](reports/views.md) |
| Online Visitors | Yes | Free | Done | [View Docs](reports/online-visitors.md) |
| Top Visitors | Yes | Free | Done | [View Docs](reports/top-visitors.md) |
| Logged-in Users | Yes | Free | Done | [View Docs](reports/logged-in-users.md) |
| Search Terms | Yes | Data Plus | Done | [View Docs](reports/search-terms.md) |
| Single Visitor Report | No | Free | Not Started | [View Docs](reports/single-visitor-report.md) |

### Page Insights Reports

Reports focused on page-level content performance and analysis.

| Report Page | Menu Visibility | Add-on | Status | Documentation |
|------------|----------------|--------|--------|---------------|
| Top Pages | Yes | Free | Done | [View Docs](reports/top-pages.md) |

---

## Widgets

Reusable widgets used across multiple report pages. Each widget is based on a component and can be configured independently.

### Available Widgets

| Widget | Component | Add-on | Status | Documentation |
|--------|-----------|--------|--------|---------------|
| Global Visitor Distribution | Global Map | Free | Done | [View Docs](widgets/global-visitor-distribution.md) |
| Latest Views Table | Data Table | Free | Done | [View Docs](widgets/latest-views-table.md) |
| Latest Visitors | Data Table | Free | Done | [View Docs](widgets/latest-visitors.md) |
| Logged-in Traffic Trends | Line Chart | Free | Done | [View Docs](widgets/logged-in-traffic-trends.md) |
| Logged-in Users Views Table | Data Table | Free | Done | [View Docs](widgets/logged-in-users-views-table.md) |
| Online Visitors Table | Data Table | Free | Done | [View Docs](widgets/online-visitors-table.md) |
| Search Terms Table | Table | Data Plus | Done | [View Docs](widgets/search-terms-table.md) |
| Top Countries | Horizontal Bar List | Free | Done | [View Docs](widgets/top-countries.md) |
| Top Device Categories | Horizontal Bar List | Free | Done | [View Docs](widgets/top-device-categories.md) |
| Top Entry Pages | Table | Data Plus | Done | [View Docs](widgets/top-entry-pages.md) |
| Top Operating Systems | Horizontal Bar List | Free | Done | [View Docs](widgets/top-operating-systems.md) |
| Top Pages Full | Data Table | Free | Done | [View Docs](widgets/top-pages-full.md) |
| Top Referrers | Horizontal Bar List | Free | Done | [View Docs](widgets/top-referrers.md) |
| Top Visitors | Table | Free | Done | [View Docs](widgets/top-visitors.md) |
| Top Visitors Table | Data Table | Free | Done | [View Docs](widgets/top-visitors-table.md) |
| Traffic by Hour | Vertical Bar Chart | Data Plus | Done | [View Docs](widgets/traffic-by-hour.md) |
| Traffic Trends | Line Chart | Free | Done | [View Docs](widgets/traffic-trends.md) |

- Browse all widgets in the [widgets directory](widgets/)

---

## Components

Base UI components that power the widgets throughout the application.

| Component | Status | Description | Documentation |
|-----------|--------|-------------|---------------|
| Data Table | Done | Tabular data display with sorting, pagination, and column management | [View Docs](components/data-table.md) |
| Global Map | Done | Interactive world map visualizing country-level metric distribution | [View Docs](components/global-map.md) |
| Horizontal Bar List | Done | Ranked list with proportional bars for top items comparison | [View Docs](components/horizontal-bar-list.md) |
| Line Chart | Done | Time-series data visualization with trend lines and comparison | [View Docs](components/line-chart.md) |
| Metrics | Done | Grid layout displaying key performance indicators with period comparison | [View Docs](components/metrics.md) |
| Table | Done | Simplified table for pre-sorted data without interactive features | [View Docs](components/table.md) |
| Vertical Bar Chart | Done | Bar chart displaying metrics across categories with dual-metric support | [View Docs](components/vertical-bar-chart.md) |

- Browse all components in the [components directory](components/)

---

## Columns

Reusable table column definitions used across data table widgets. Each column has standardized display rules and behavior.

### Available Columns

| Column | Sortable | Description | Documentation |
|--------|----------|-------------|---------------|
| Visitor Last Visit | Yes | Date/time of visitor's last visit | [View Docs](columns/visitor-last-visit.md) |
| Visitor Info | No | Comprehensive visitor details (location, device, browser, OS) | [View Docs](columns/visitor-info.md) |
| Visitor Status | No | Visitor lifecycle classification badge (New vs Returning) | [View Docs](columns/visitor-status.md) |
| Referrer | Yes | Source that referred the visitor | [View Docs](columns/referrer.md) |
| Entry Page | Yes | First page visited in session | [View Docs](columns/entry-page.md) |
| Exit Page | Yes | Last page before leaving | [View Docs](columns/exit-page.md) |
| Total Views | Yes | Total page views by visitor in date range | [View Docs](columns/total-views.md) |
| Total Sessions | Yes | Count of distinct sessions in date range | [View Docs](columns/total-sessions.md) |
| Session Duration | Yes | Average session duration (HH:MM:SS) | [View Docs](columns/session-duration.md) |
| Views Per Session | Yes | Average page views per session | [View Docs](columns/views-per-session.md) |
| Bounce Rate | Yes | Percentage of single-page sessions | [View Docs](columns/bounce-rate.md) |
| Unique Entrances | No | Count of sessions that started on a specific page | [View Docs](columns/unique-entrances.md) |
| View Page | No | Action button to view page content on website | [View Docs](columns/view-page.md) |
| Page | Yes | Page title with link to Single Content Report | [View Docs](columns/page.md) |
| Content Visitors | Yes | Number of unique visitors for each page | [View Docs](columns/content-visitors.md) |
| Content Views | Yes | Total number of views for each page | [View Docs](columns/content-views.md) |
| Content Bounce Rate | Yes | Bounce rate specific to each page | [View Docs](columns/content-bounce-rate.md) |
| Content Session Duration | Yes | Average session duration for sessions including this page | [View Docs](columns/content-session-duration.md) |
| Content Published Date | Yes | Publication date of the page | [View Docs](columns/content-published-date.md) |
| Search Term | No | Keyword or phrase entered in website search | [View Docs](columns/search-term.md) |
| Searches | No | Count of times a term was searched on site | [View Docs](columns/searches.md) |

- Browse all columns in the [columns directory](columns/)

---

## Documentation Structure

Each documentation type follows a specific structure:

### Report Pages
- Page configuration (menu visibility, add-on, status, Figma link)
- Interactions available (Date Picker, Filters, etc.)
- Widget layout (rows and columns)
- Links to all widgets and components used

### Widgets
- Widget configuration (add-on, status, Figma link)
- Associated component
- Default sort and row limit settings
- List of reports using this widget

### Components
- Component configuration (status, Figma link)
- Features and behavior
- List of widgets using this component

### Columns
- Column configuration (status, Figma link)
- Data displayed and format
- Sortable behavior
- List of widgets using this column

---

## Quick Start

1. Start with the [Global Rules](global/global-rules.md) to understand design principles
2. Review the [Menu Structure](global/menu-structure.md) for navigation organization
3. Explore individual report pages to see detailed widget layouts
4. Check widget and component documentation for specifications

## Contributing to Documentation

**Before creating or updating documentation**, please read the [Documentation Writing Guide](DOCUMENTATION-GUIDE.md).

The guide includes:
- Documentation templates for all types
- YAML frontmatter rules
- Content guidelines and best practices
- Cross-referencing rules
- Checklist before publishing

---

## Status Legend

- **Not Started**: Documentation or feature not yet begun
- **In Progress**: Currently being worked on
- **Done**: Completed and ready for implementation

---

*Last Updated: 2025-11-08*
