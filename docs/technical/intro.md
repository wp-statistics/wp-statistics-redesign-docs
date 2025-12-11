---
title: "Technical Documentation"
sidebar_position: 1
---

# Technical Documentation

This section contains technical documentation for WP Statistics v15, including database schema, API specifications, system architecture, and data flow documentation.

## Documentation Sections

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

## About This Documentation

This technical documentation provides:
- Database schema and table structures
- API endpoints and specifications
- System architecture and design patterns
- Developer-focused implementation details

---

*Last Updated: 2025-12-10*
