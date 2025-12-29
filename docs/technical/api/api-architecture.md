---
title: "API Overview"
type: "technical"
category: "api"
status: "Done"
sidebar_position: 1
---

# API Overview

WP Statistics v15 provides two types of APIs for fetching analytics data: **Admin AJAX** and **REST API**.

---

## API Types

### [Admin AJAX](./admin-ajax-api.md) (Recommended)

Admin AJAX endpoints use WordPress's built-in `admin-ajax.php` handler. This is the **recommended approach** for the WP Statistics dashboard because:

- **Avoids adblockers** - Adblockers commonly block REST API endpoints but rarely block admin-ajax requests
- **Built-in WordPress authentication** - Uses WordPress nonce verification
- **Same-origin requests** - Requests stay within the WordPress admin context

All Admin AJAX actions are prefixed with `wp_statistics_` and use the `X-WP-Nonce` header for authentication.

**Available AJAX Endpoints:**

- [Get Filter Options](../api-endpoints/get-filter-options.md) - Filter options for dropdowns
- [Analytics Query API](../api-endpoints/analytics-query-api.md) - Flexible metrics + dimensions based query API
- [User Preferences](../api-endpoints/user-preferences.md) - Save/reset user dashboard preferences

### REST API

*Coming soon* - External REST API for third-party integrations. Will be refactored during the v15 add-ons update.

### [MCP Integration](./mcp/overview.md)

WP Statistics integrates with the **Model Context Protocol (MCP)**, enabling AI assistants like Claude and ChatGPT to query analytics data on behalf of authenticated users.

- Leverages WordPress's official [MCP Adapter](https://github.com/WordPress/mcp-adapter)
- Read-only access respecting WordPress user capabilities
- Natural language analytics queries

**MCP Documentation:**

- [MCP Overview](./mcp/overview.md) - Introduction to MCP integration
- [Getting Started](./mcp/getting-started.md) - Setup guide
- [Abilities Reference](./mcp/abilities/summary.md) - Available abilities
- [Examples](./mcp/examples.md) - Usage examples

### [Localize Data](../localize-data/overview.md)

The dashboard receives initial configuration and data via WordPress localize script. This provides essential data like nonce, AJAX URL, filter definitions, menu structure, and header configuration without requiring additional HTTP requests.

**Available Data:**

- [Globals](../localize-data/globals.md) - AJAX URL, nonce, license status, user permissions
- [Filters](../localize-data/filters.md) - Filter definitions and operators
- [Layout](../localize-data/layout.md) - Sidebar menu structure
- [Header](../localize-data/header.md) - Header area configuration

---

*Last Updated: 2025-12-29*
