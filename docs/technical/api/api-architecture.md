---
title: "API Overview"
type: "technical"
category: "api"
status: "Done"
sidebar_position: 1
---

# API Overview

WP Statistics v15 provides APIs for fetching analytics data. The primary endpoint uses **Admin-Ajax** (recommended - avoids adblockers).

---

## Available APIs

### [Analytics Query API](./analytics-query-api.md)

Flexible metrics + dimensions based query API for fetching any analytics data.

- Metrics: `visitors`, `views`, `sessions`, `bounce_rate`, etc.
- Dimensions: `date`, `country`, `browser`, `page`, etc.
- Supports batch queries, filters, pagination, and comparison periods

### Public REST API

*Coming soon* - External REST API for third-party integrations (refactored from existing Add-on REST API).

---

## Architecture

### [Backend Architecture](../architecture/analytics-query-backend.md)

How the backend processes queries and generates SQL.

- MetricRegistry - Available metrics and SQL expressions
- DimensionRegistry - Dimensions, JOINs, and grouping
- FilterBuilder - Filter to WHERE clause conversion
- QueryBuilder - SQL query assembly

### [Frontend Integration](../architecture/analytics-query-frontend.md)

React patterns for consuming the API.

- TypeScript interfaces
- `useAnalytics` hook
- Batch queries for dashboard loads
- Component examples

---

*Last Updated: 2024-12-03*
