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

## Context Overhead & Token Usage

When MCP abilities are registered, their definitions (names, descriptions, schemas) are loaded into the AI's context window. Understanding this overhead helps with capacity planning.

### Ability Definition Cost

Each ability adds approximately **150-300 tokens** to the context:

| Component | Tokens |
|-----------|--------|
| Name + description | 30-50 |
| Input schema (parameters) | 50-100 |
| Output schema (response) | 50-100 |
| Metadata (permissions) | 20-50 |

### Total Context Overhead

| Category | Abilities | Est. Tokens |
|----------|-----------|-------------|
| Summary | 2 | 400-600 |
| Visitors | 5 | 1,000-1,500 |
| Geographic | 3 | 600-900 |
| Content | 5 | 1,000-1,500 |
| Traffic | 4 | 800-1,200 |
| Devices | 3 | 600-900 |
| **Total** | **21** | **4,500-6,500** |

### Impact on AI Context Windows

| AI Model | Context Size | MCP Overhead |
|----------|--------------|--------------|
| Claude | 200K tokens | ~2-3% |
| GPT-4 | 128K tokens | ~4-5% |
| GPT-4o | 128K tokens | ~4-5% |

### Response Token Estimates

Ability responses are structured JSON and relatively compact:

| Ability | Typical Response |
|---------|------------------|
| `get-summary` | 50-200 tokens |
| `get-top-pages` (10 results) | 400-600 tokens |
| `get-countries` (10 results) | 300-500 tokens |
| `get-online-visitors` (50 results) | 1,000-1,500 tokens |

### Optimization Strategies

1. **Phased rollout** - Start with core abilities only (~1,500 tokens for 4-5 abilities)
2. **Concise descriptions** - Keep ability descriptions brief but clear
3. **Limit defaults** - Use `per_page: 10` instead of 100
4. **Skip comparison** - Only use `compare: true` when needed (doubles response size)
5. **Column filtering** - Return only required fields with `columns` parameter

### Recommended Minimal Set

For minimal context overhead (~1,000-1,500 tokens), start with:

- `get-summary` - Dashboard overview
- `get-visitors` - Visitor counts
- `get-top-pages` - Page performance
- `get-countries` - Geographic overview

This covers most common analytics questions while keeping overhead low.

---

## Next Steps

- [Getting Started](./getting-started.md) - Set up MCP for your site
- [Abilities Reference](./abilities/summary.md) - Complete ability documentation
- [Examples](./examples.md) - Real-world usage examples

---

*Last Updated: 2025-12-29*
