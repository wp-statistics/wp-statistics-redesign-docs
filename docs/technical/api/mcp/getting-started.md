---
title: "Getting Started"
type: "technical"
category: "api"
status: "In Progress"
sidebar_position: 2
---

# Getting Started with MCP

This guide walks you through setting up MCP integration for WP Statistics, enabling AI assistants to query your analytics data.

## Prerequisites

Before you begin, ensure you have:

- WordPress 6.4 or higher
- WP Statistics v15 or higher
- PHP 7.4 or higher
- An MCP-compatible AI client (Claude Desktop, etc.)

---

## Installation

### Step 1: Install WordPress MCP Adapter

The MCP Adapter is the bridge between AI clients and WordPress abilities.

**Via Composer (recommended for developers):**

```bash
composer require wordpress/mcp-adapter
```

**Via WordPress Plugin Directory:**

1. Go to **Plugins > Add New** in WordPress admin
2. Search for "MCP Adapter"
3. Click **Install Now** and then **Activate**

### Step 2: Verify WP Statistics

Ensure WP Statistics v15 is installed and activated. The MCP abilities are automatically registered when both plugins are active.

### Step 3: Configure Your AI Client

Each AI client has its own setup process. Here's an example for Claude Desktop:

**Claude Desktop Configuration:**

Edit your Claude Desktop config file:

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "wp-statistics": {
      "command": "wp",
      "args": ["mcp", "server"],
      "cwd": "/path/to/your/wordpress"
    }
  }
}
```

Restart Claude Desktop to apply changes.

---

## Verification

### Check Available Abilities

Use WP-CLI to verify MCP is working:

```bash
wp mcp abilities list
```

You should see WP Statistics abilities listed:

```
wp-statistics/get-summary
wp-statistics/get-visitors
wp-statistics/get-top-pages
wp-statistics/get-countries
...
```

### Test an Ability

Test the summary ability:

```bash
wp mcp ability call wp-statistics/get-summary '{"date_from": "2024-12-01", "date_to": "2024-12-29"}'
```

Expected output:

```json
{
  "success": true,
  "data": {
    "totals": {
      "visitors": 12500,
      "views": 35000,
      "sessions": 15200,
      "bounce_rate": 42.3
    }
  }
}
```

---

## User Permissions

### Required Capabilities

Users must have the `wps_read_capability` capability to use MCP abilities. By default, this includes:

- Administrators
- Editors (if configured in WP Statistics settings)

### Configuring Access

To grant MCP access to additional roles:

1. Go to **Statistics > Settings > Access**
2. Configure which roles can view statistics
3. Users with view access can use read-only MCP abilities

---

## Using with AI Assistants

Once configured, you can ask your AI assistant analytics questions:

### Example Conversations

**Basic Stats:**
> You: "How many visitors did my site get this week?"
>
> AI: "Your site had 1,234 visitors this week, a 12% increase from last week. You also had 3,456 page views with an average bounce rate of 42%."

**Geographic Analysis:**
> You: "Which countries are sending me the most traffic?"
>
> AI: "Your top 5 traffic sources by country are:
> 1. United States - 5,200 visitors (45%)
> 2. United Kingdom - 1,400 visitors (12%)
> 3. Germany - 920 visitors (8%)
> 4. Canada - 680 visitors (6%)
> 5. Australia - 540 visitors (5%)"

**Content Performance:**
> You: "What are my top performing blog posts this month?"
>
> AI: Lists your top posts with views, visitors, and engagement metrics.

**Issue Detection:**
> You: "Are there any problems with my site I should know about?"
>
> AI: "I found 3 potential issues:
> 1. 47 visitors hit 404 errors on /old-product-page
> 2. Your /pricing page has an 85% bounce rate
> 3. Mobile visitors have 2x higher bounce rate than desktop"

---

## Troubleshooting

### MCP Adapter Not Found

**Error:** `wp: command 'mcp' not found`

**Solution:** Ensure the MCP Adapter plugin is installed and activated.

### Permission Denied

**Error:** `User does not have permission to use this ability`

**Solution:** Verify the user has `wps_read_capability`. Check **Statistics > Settings > Access**.

### No Data Returned

**Error:** Empty response from abilities

**Solutions:**
- Verify WP Statistics is tracking data (check the dashboard)
- Ensure the date range includes tracked data
- Check that the WordPress timezone is set correctly

### AI Not Recognizing Abilities

**Error:** AI says it can't access your site

**Solutions:**
- Restart your AI client after configuration changes
- Verify the WP-CLI path in your config is correct
- Check that WordPress is accessible from the command line

---

## Security Best Practices

### 1. Limit User Access

Only grant MCP access to trusted users who need analytics data.

### 2. Use Strong Authentication

Ensure your WordPress site uses strong passwords and consider two-factor authentication.

### 3. Monitor Usage

Review WordPress logs for unusual MCP activity.

### 4. Keep Plugins Updated

Regularly update WP Statistics and MCP Adapter for security patches.

---

## Next Steps

- [Abilities Reference](./abilities/summary.md) - Learn about all available abilities
- [Examples](./examples.md) - See more usage examples
- [Analytics Query API](../api-endpoints/analytics-query-api.md) - Understand the underlying API

---

*Last Updated: 2025-12-29*
