---
title: "MCP Overview"
type: "technical"
category: "api"
status: "In Progress"
sidebar_position: 1
---

# MCP Integration

WP Statistics v15 integrates with the **Model Context Protocol (MCP)**, enabling AI assistants like Claude, ChatGPT, and others to query your site's analytics data on behalf of authenticated WordPress users.

## What is MCP?

The [Model Context Protocol](https://modelcontextprotocol.io/) is an open standard that allows AI applications to securely connect to external data sources and tools. Think of it as a "USB-C port for AI" - a standardized way for AI assistants to interact with your WordPress site.

### How It Works

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────────┐
│  AI Assistant   │────▶│  WordPress MCP   │────▶│  WP Statistics      │
│  (Claude, etc.) │     │  Adapter         │     │  Abilities          │
└─────────────────┘     └──────────────────┘     └──────────────────────┘
                                                           │
                                                           ▼
                                                 ┌─────────────────────┐
                                                 │  Analytics Query    │
                                                 │  API                │
                                                 └─────────────────────┘
```

1. **User asks a question** - "How many visitors did my site get this week?"
2. **AI selects the right ability** - Based on the question, the AI chooses `wp-statistics/get-summary`
3. **WordPress authenticates** - MCP Adapter verifies the user has permission
4. **WP Statistics executes** - The ability queries the Analytics Query API
5. **AI responds** - "Your site had 1,234 visitors this week with 3,456 page views"

---

## Key Concepts

### Abilities

Abilities are functions that AI assistants can call. WP Statistics exposes abilities for querying analytics data:

| Ability | Description |
|---------|-------------|
| `wp-statistics/get-summary` | Dashboard overview (visitors, views, bounce rate) |
| `wp-statistics/get-visitors` | Visitor counts with optional grouping |
| `wp-statistics/get-top-pages` | Most viewed pages |
| `wp-statistics/get-countries` | Traffic by country |

See the [Abilities Reference](./abilities/summary.md) for the complete list.

### Resources

Resources provide contextual data access. They're like read-only data endpoints:

| Resource | Description |
|----------|-------------|
| `wp-statistics://dashboard/summary` | Current dashboard state |
| `wp-statistics://visitors/online` | Currently online visitors |
| `wp-statistics://reports/available` | List of available reports |

### Prompts

Prompts are pre-built templates for common analytics tasks:

| Prompt | Description |
|--------|-------------|
| `wp-statistics/analyze-traffic` | Analyze site traffic for a period |
| `wp-statistics/find-issues` | Find potential issues (404s, high bounce) |
| `wp-statistics/content-performance` | Identify best performing content |

---

## Authentication & Security

### WordPress User Context

MCP abilities run in the context of the authenticated WordPress user. This means:

- Users only see data they have permission to access
- The `wps_read_capability` capability is required
- All requests are authenticated via WordPress nonce

### Read-Only Access

The current MCP integration is **read-only**. AI assistants can:

- Query analytics data
- View reports and summaries
- Compare time periods

AI assistants cannot:

- Modify settings
- Delete data
- Change configurations

---

## Use Cases

### Natural Language Analytics

Ask questions in plain English:

> "How's my site doing this month compared to last month?"

> "Which countries are sending me the most traffic?"

> "What are my top performing blog posts?"

### Automated Insights

Get proactive insights:

> "Are there any issues with my site I should know about?"

The AI can check for 404 errors, high bounce rate pages, and traffic anomalies.

### Report Generation

Generate custom reports:

> "Summarize my traffic sources for the past quarter"

> "Create a weekly traffic report"

---

## Add-on Support

### Free Abilities

Core analytics abilities are available with the free WP Statistics plugin:

- Dashboard summary
- Visitor and view counts
- Geographic distribution
- Browser and device stats
- Traffic sources

### Data Plus Abilities

Advanced abilities require the Data Plus add-on:

- Real-time online visitors
- Individual visitor profiles
- Advanced campaign tracking
- Flexible custom queries

When a user without Data Plus calls a premium ability, they receive a helpful message explaining the feature and how to upgrade.

---

## Architecture

### Built on WordPress Abilities API

WP Statistics MCP integration uses the official [WordPress MCP Adapter](https://github.com/WordPress/mcp-adapter) and Abilities API. This ensures:

- **Compatibility** - Works with any MCP-compatible AI client
- **Security** - Leverages WordPress authentication
- **Maintainability** - Official WordPress support

### Powered by Analytics Query API

All MCP abilities are thin wrappers around the existing [Analytics Query API](../api-endpoints/analytics-query-api.md). This means:

- **Consistency** - Same data as the dashboard
- **Performance** - Optimized queries with caching
- **Accuracy** - Single source of truth

---

## Next Steps

- [Getting Started](./getting-started.md) - Set up MCP for your site
- [Abilities Reference](./abilities/summary.md) - Complete ability documentation
- [Examples](./examples.md) - Real-world usage examples

---

*Last Updated: 2025-12-29*
