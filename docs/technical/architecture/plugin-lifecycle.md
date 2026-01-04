---
title: "Plugin Lifecycle"
type: "technical"
category: "architecture"
status: "Done"
sidebar_position: 1
---

# Plugin Lifecycle

This document explains the complete lifecycle of WP Statistics v15, from activation to uninstallation.

## Overview

WP Statistics follows WordPress plugin lifecycle conventions while implementing a modern service container architecture.

```
┌─────────────────────────────────────────────────────────────┐
│                    PLUGIN LIFECYCLE                         │
├─────────────────────────────────────────────────────────────┤
│  ACTIVATION → RUNTIME → DEACTIVATION → UNINSTALLATION      │
│       ↓           ↓           ↓              ↓              │
│  Create DB    Track &    Clear Crons    Delete All         │
│  + Options    Serve UI   + Temp Data    (if enabled)       │
└─────────────────────────────────────────────────────────────┘
```

## 1. Activation Flow

When the plugin is activated (via Plugins page or WP-CLI):

```
wp-statistics.php loads
    ↓
Bootstrap::init()
    ↓
register_activation_hook() registered
    ↓
[User activates plugin]
    ↓
Bootstrap::activate($networkWide)
    ↓
InstallManager::activate()
    ├── Create 8 database tables
    ├── Set installation options
    └── Create default settings
```

**Database Tables Created:**
- `statistics_visitor` - Visitor profiles
- `statistics_visitor_relationships` - Visitor-session relations
- `statistics_pages` - Page view records
- `statistics_visit` - Daily visit summaries
- `statistics_historical` - Historical aggregates
- `statistics_exclusions` - Excluded hits log
- `statistics_useronline` - Real-time online users
- `statistics_events` - Custom events

**Key Files:**
- `src/Bootstrap.php` - Main initialization
- `src/Service/Installation/InstallManager.php` - Activation logic

## 2. Frontend Request Flow (Tracking)

When a visitor loads a page:

```
Page loads
    ↓
Bootstrap::setup() on plugins_loaded
    ↓
CoreServiceProvider boots services
    ├── TrackerControllerFactory determines method:
    │   ├── bypass_ad_blockers=true → AjaxBasedTracking
    │   └── bypass_ad_blockers=false → RestApiTracking
    └── FrontendHandler enqueues tracker.js
    ↓
tracker.js sends hit request
    ↓
TrackerController receives request
    ├── Validates signature
    ├── Checks exclusions (DNT, roles, IPs)
    └── Records via Hits::record()
        ├── EntityFactory::visitor()
        ├── EntityFactory::device()
        ├── EntityFactory::geo()
        ├── EntityFactory::session()
        └── EntityFactory::view()
```

**Two Tracking Methods:**

| Method | Endpoint | Use Case |
|--------|----------|----------|
| REST API | `/wp-json/wp-statistics/v1/hit` | Default, standard tracking |
| AJAX | `/wp-admin/admin-ajax.php` | Ad-blocker bypass enabled |

**Key Files:**
- `src/Service/Tracking/TrackerControllerFactory.php`
- `src/Service/Tracking/Core/Hits.php`
- `src/Service/Assets/Handlers/FrontendHandler.php`

## 3. Backend/Admin Flow

When an admin accesses the dashboard:

```
Admin page loads
    ↓
Bootstrap::setup() on plugins_loaded
    ↓
AdminServiceProvider boots (only on is_admin())
    ├── AdminMenuManager registers menus
    ├── DashboardManager initializes SPA
    └── AJAX endpoints registered
    ↓
admin_menu hook fires
    ↓
AdminMenuManager::registerMenus()
    ├── Main "Statistics" menu
    └── "Settings" submenu
    ↓
User clicks menu
    ↓
React SPA loads (#/overview, #/settings, etc.)
    ↓
React fetches data via AJAX
    └── AnalyticsQueryHandler processes requests
```

**AJAX Endpoints:**
- `wp_statistics_analytics` - Dashboard data queries
- `wp_statistics_get_filter_options` - Filter dropdown options
- `wp_statistics_user_preferences` - User preferences

**Key Files:**
- `src/Service/Admin/AdminMenuManager.php`
- `src/Service/Admin/DashboardBootstrap/DashboardManager.php`
- `src/Service/AnalyticsQuery/AnalyticsQueryHandler.php`

## 4. Deactivation Flow

When the plugin is deactivated:

```
[User deactivates plugin]
    ↓
register_deactivation_hook() fires
    ↓
Bootstrap::deactivate()
    ↓
Uninstaller::deactivate()
    ├── clearCronEvents() - All scheduled tasks
    ├── deleteObfuscatedAssets() - Ad-blocker bypass files
    └── deleteTransients() - Temporary cache
```

**What's Preserved:**
- All database tables
- All plugin options
- All user data
- User preferences

**What's Removed:**
- Scheduled cron events
- Temporary files
- Cache transients

**Key File:** `src/Service/Installation/Uninstaller.php`

## 5. Uninstallation Flow

When the plugin is **deleted** (not just deactivated):

```
[User deletes plugin from Plugins page]
    ↓
WordPress runs uninstall.php
    ↓
Uninstaller::uninstall()
    ├── Always: deactivate() first
    └── If delete_data_on_uninstall=true:
        ├── dropTables() - All 8 tables
        ├── deleteOptions() - All wp_statistics_* options
        ├── deleteUserMeta() - User preferences
        └── deleteUploadedFiles() - /uploads/wp-statistics/
```

**Important:** Data deletion only happens if user enabled "Delete data on uninstall" in settings. Otherwise, only deactivation cleanup runs.

**Key Files:**
- `uninstall.php` - WordPress entry point (required)
- `src/Service/Installation/Uninstaller.php` - Cleanup logic

## Service Container Architecture

WP Statistics uses a service container for dependency injection:

```
Bootstrap::initializeServices()
    ↓
ServiceContainer (Singleton)
    ├── CoreServiceProvider
    │   ├── tracking (TrackerController)
    │   ├── cron (CronManager)
    │   ├── privacy (PrivacyManager)
    │   ├── shortcodes (ShortcodeManager)
    │   ├── blocks (BlockManager)
    │   ├── frontend (FrontendHandler)
    │   └── custom_events (CustomEventHandler)
    │
    └── AdminServiceProvider (is_admin() only)
        ├── admin_bar (AdminBar)
        ├── admin_menu (AdminMenuManager)
        ├── dashboard (DashboardManager)
        ├── settings (SettingsManager)
        ├── email_reports (EmailReportManager)
        └── network (NetworkManager)
```

**Key Files:**
- `src/Container/ServiceContainer.php`
- `src/Container/CoreServiceProvider.php`
- `src/Container/AdminServiceProvider.php`

## Cron Events

WP Statistics schedules these background tasks:

| Hook | Frequency | Purpose |
|------|-----------|---------|
| `wp_statistics_dbmaint_hook` | Daily | Database maintenance |
| `wp_statistics_geoip_hook` | Monthly | GeoIP database update |
| `wp_statistics_email_report` | Configurable | Email reports |
| `wp_statistics_queue_daily_summary` | Daily | Summary calculations |
| `wp_statistics_daily_cron_hook` | Daily | Notifications fetch |
| `wp_statistics_referrals_db_hook` | Daily | Referral data sync |

**Key Files:**
- `src/Service/Cron/CronManager.php`
- `src/Service/Cron/Events/*.php`
