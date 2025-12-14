---
title: "Technical Documentation"
sidebar_position: 1
---

# Technical Documentation

This section contains technical documentation for WP Statistics v15, including frontend components, database schema, API specifications, system architecture, and testing guidelines.

## Documentation Sections

### Frontend
- [Frontend Overview](frontend/intro.md) - React component library, hooks, and UI patterns
- [UI Components](frontend/ui/button.md) - shadcn/ui base components (Button, Input, Card, etc.)
- [Custom Components](frontend/custom/metrics.md) - WP Statistics components (Metrics, DataTable, etc.)

### Database
- [Database Overview](database/overview.md) - Complete database schema and table structure

### API
- [API Overview](api/api-architecture.md) - Introduction to WP Statistics API architecture (REST vs AJAX)
- [Admin AJAX API](api/admin-ajax-api.md) - Dashboard AJAX endpoints for the v15 React interface
  - [Get Filter Options](api-endpoints/get-filter-options.md) - Filter options for dropdowns
  - [Analytics Query API](api-endpoints/analytics-query-api.md) - Flexible metrics + dimensions based query API
- [Localize Data](localize-data/overview.md) - Initial configuration data passed to the React dashboard
- REST API - *Coming soon*

### Architecture

**Query System:**
- [Backend Architecture](architecture/analytics-query-backend.md) - Query building, MetricRegistry, DimensionRegistry, and SQL generation
- [Frontend Integration](architecture/analytics-query-frontend.md) - React hooks, TypeScript interfaces, and component patterns

**Core Systems:**
- [Visitor Hash Mechanism](architecture/visitor-hash-mechanism.md) - Privacy-focused visitor identification using hashed IPs
- [Location Detection](architecture/location-detection.md) - Geolocation providers and IP-to-location resolution
- [Device Detection](architecture/device-detection.md) - User Agent parsing for device, browser, and OS identification
- [Engagement Tracking](architecture/engagement-tracking.md) - Client-side user engagement measurement and session duration tracking

**Data Flow:**
- [React Dashboard Lifecycle](architecture/react-dashboard-lifecycle.md) - Complete data flow from page load to widget rendering

### Testing
- [Unit Testing](testing/unit-testing.md) - Guide for writing and running PHPUnit tests with WordPress test library

## About This Documentation

This technical documentation provides:
- Frontend component library and React patterns
- Database schema and table structures
- API endpoints and specifications
- System architecture and design patterns
- Testing guidelines and best practices
- Developer-focused implementation details

---

*Last Updated: 2025-12-14*
