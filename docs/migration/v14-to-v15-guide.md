---
title: "WP Statistics v14 to v15 Migration Guide"
type: "migration"
status: "Complete"
sidebar_position: 1
---

# WP Statistics v14 to v15 Migration Guide

Complete guide for upgrading from WP Statistics v14 to v15.

## Overview

WP Statistics v15 introduces a completely redesigned React-based dashboard with improved performance, new features, and a modern user interface. This guide will help you migrate smoothly from v14 to v15.

## What's New in v15

### New React Dashboard
- Modern, fast, and responsive interface
- Real-time data updates
- Improved chart visualizations
- Advanced filtering capabilities

### Performance Improvements
- Faster query engine
- Optimized database queries
- Reduced memory usage
- Better caching mechanisms

### New Features
- Advanced filters with multiple conditions
- Improved date range picker
- Enhanced data export options
- New widget system
- Customizable dashboards

## Pre-Migration Checklist

Before upgrading to v15, ensure you:

- [ ] **Backup your database** - Critical! Create a complete database backup
- [ ] **Backup plugin files** - Save a copy of your current plugin directory
- [ ] **Check PHP version** - Minimum PHP 7.4 required (8.0+ recommended)
- [ ] **Check WordPress version** - Minimum WordPress 5.8 required
- [ ] **Review add-ons** - Ensure all add-ons are compatible with v15
- [ ] **Note custom code** - Document any custom integrations or hooks
- [ ] **Test on staging** - Test the upgrade on a staging site first

## Upgrade Process

### Step 1: Backup

```bash
# Database backup via WP-CLI
wp db export backup-before-v15.sql

# Plugin files backup
cp -r wp-content/plugins/wp-statistics wp-statistics-v14-backup
```

### Step 2: Deactivate & Update

1. Deactivate WP Statistics in WordPress admin
2. Update the plugin via WordPress Updates or manually upload v15
3. Activate the updated plugin

### Step 3: Database Migration

The plugin will automatically:
- Detect the v14 database structure
- Run migration scripts
- Preserve all historical data
- Update table schemas

**Note:** This may take several minutes for large datasets.

### Step 4: Verify Data

After migration, verify:
- [ ] Historical data is intact
- [ ] Reports display correctly
- [ ] Charts render properly
- [ ] Filters work as expected
- [ ] Add-ons are functioning

## Breaking Changes

### Models Deprecation

All Model classes (`VisitorsModel`, `ViewsModel`, `SessionModel`, etc.) are now deprecated in favor of the AnalyticsQuery system.

**v14 (Old - Deprecated):**
```php
use WP_Statistics\Models\VisitorsModel;

$model = new VisitorsModel();
$visitors = $model->countVisitors(['date' => $dateRange]);
```

**v15 (New - Recommended):**
```php
use WP_Statistics\Service\AnalyticsQuery\AnalyticsQueryHandler;

$handler = new AnalyticsQueryHandler();
$result = $handler->handle([
    'sources' => ['visitors'],
    'date_from' => $from,
    'date_to' => $to,
    'format' => 'flat'
]);
```

**Note:** Models will continue to work in v15 for backward compatibility but are scheduled for removal in v16. Add-ons should migrate to AnalyticsQuery.

See [Models vs AnalyticsQuery](../technical/architecture/models-vs-analyticsquery.md) for detailed migration guide.

### API Changes

#### Analytics Query API
The new Analytics Query API uses a different structure:

**v14 (Old):**
```php
wp_statistics_api('visitor', 'total', ['date' => 'today']);
```

**v15 (New):**
```php
// Use REST API endpoint
POST /wp-json/wp-statistics/v1/analytics
{
  "sources": ["visitors"],
  "group_by": [],
  "date_from": "2024-01-01",
  "date_to": "2024-01-31"
}
```

See [Analytics Query API](../technical/api-endpoints/analytics-query-api.md) for details.

#### Removed Functions

The following deprecated functions have been removed:

- `wp_statistics_visit()` - Use new visitor tracking
- `wp_statistics_visitor()` - Use new visitor tracking
- `wp_statistics_pages()` - Use Analytics Query API

#### Changed Hooks

Some hooks have been renamed or removed:

| v14 Hook | v15 Equivalent | Status |
|----------|----------------|--------|
| `wp_statistics_visitor_save` | `wp_statistics_visitor_tracked` | Renamed |
| `wp_statistics_visit_save` | `wp_statistics_visit_tracked` | Renamed |
| `wp_statistics_report_display` | Removed | Use React components |

### Database Schema Changes

New tables added:
- `wp_statistics_sessions` - Session tracking
- `wp_statistics_events` - Event tracking

Modified tables:
- `wp_statistics_visitors` - Added `session_id` column
- `wp_statistics_visits` - Added `session_id` column
- `wp_statistics_pages` - Added engagement metrics

See [Database Migration](database-migration.md) for details.

### UI Changes

- Admin menu structure reorganized
- Settings page redesigned
- Widget layout changed
- Dashboard widgets use new React components

## Add-On Compatibility

### Compatible Add-Ons (Updated)
- WP Statistics Advanced Reporting v2.0+
- WP Statistics Data Plus v1.5+
- WP Statistics MiniChart v1.3+
- WP Statistics Customization v1.2+

### Requires Update
- WP Statistics Widgets - Update to v2.0+
- WP Statistics REST API - Update to v1.5+

### No Longer Needed
- WP Statistics Realtime Stats - Built into v15 core

## Common Issues & Solutions

### Issue: "Database migration failed"

**Solution:**
1. Restore your backup
2. Check PHP error logs
3. Ensure sufficient memory: `WP_MEMORY_LIMIT` at least 256M
4. Try manual migration: Settings → Tools → Retry Migration

### Issue: "Old data not showing"

**Solution:**
1. Clear browser cache
2. Clear WordPress cache (if using caching plugin)
3. Go to Settings → Tools → Rebuild Statistics

### Issue: "Add-on not working"

**Solution:**
1. Ensure add-on is v15 compatible
2. Deactivate and reactivate add-on
3. Contact add-on developer for updated version

### Issue: "Custom code broken"

**Solution:**
1. Review [API Changes](api-changes.md) documentation
2. Update custom code to use new APIs
3. See [Breaking Changes](#breaking-changes) section above

## Custom Code Migration

### Updating Dashboard Widgets

**v14 (Old):**
```php
add_action('wp_statistics_meta_box_content', 'custom_widget');
function custom_widget() {
    echo '<div>Custom content</div>';
}
```

**v15 (New):**
```php
// Use React components or REST API
add_filter('wp_statistics_dashboard_widgets', 'custom_widget_v15');
function custom_widget_v15($widgets) {
    $widgets[] = [
        'id' => 'custom-widget',
        'title' => 'Custom Widget',
        'component' => 'CustomWidget', // React component
        'endpoint' => '/custom/data'
    ];
    return $widgets;
}
```

### Updating Reports

See [Component Migration Examples](../technical/frontend/patterns/migration-patterns.md) for detailed examples.

## Performance Optimization

After migration, optimize performance:

### Database Optimization
```sql
-- Optimize statistics tables
OPTIMIZE TABLE wp_statistics_visitors;
OPTIMIZE TABLE wp_statistics_visits;
OPTIMIZE TABLE wp_statistics_pages;
OPTIMIZE TABLE wp_statistics_historical;
```

### Caching Configuration
- Enable object caching (Redis/Memcached recommended)
- Configure page caching for report pages
- Set appropriate cache TTLs in settings

### Large Dataset Tips
For sites with millions of records:
- Enable data archiving (Settings → Advanced → Archive Old Data)
- Consider increasing `max_execution_time` during migration
- Schedule heavy reports during off-peak hours

## Rollback Procedure

If you need to rollback to v14:

1. **Deactivate v15**
2. **Restore database backup:**
   ```bash
   wp db import backup-before-v15.sql
   ```
3. **Restore plugin files:**
   ```bash
   rm -rf wp-content/plugins/wp-statistics
   cp -r wp-statistics-v14-backup wp-content/plugins/wp-statistics
   ```
4. **Activate v14**

**Note:** Data collected during v15 operation will be lost after rollback.

## Getting Help

If you encounter issues during migration:

- **Documentation:** [Technical Documentation](../technical/intro.md)
- **Troubleshooting:** [Common Errors](../troubleshooting/common-errors.md)
- **Support Forum:** https://wordpress.org/support/plugin/wp-statistics/
- **GitHub Issues:** https://github.com/wp-statistics/wp-statistics/issues

## Next Steps

After successful migration:

1. [ ] Review new [Reports Overview](../reports/visitor-insights/visitors-overview.md)
2. [ ] Configure [Advanced Filters](../global/advanced-filters.md)
3. [ ] Explore [New Features](#whats-new-in-v15)
4. [ ] Update custom code (if applicable)
5. [ ] Train team on new interface

---

**Migration completed?** Mark the checklist items as you go!

*Last Updated: 2025-01-04*
