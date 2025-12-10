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

### REST API

*Coming soon* - External REST API for third-party integrations. Will be refactored during the v15 add-ons update.

---

*Last Updated: 2025-12-10*
