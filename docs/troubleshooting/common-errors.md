---
title: "Common Errors & Solutions"
type: "troubleshooting"
status: "In Progress"
sidebar_position: 1
---

# Common Errors & Solutions

Quick solutions to the most frequently encountered issues in WP Statistics v15.

## Dashboard Not Loading

### Symptom
React dashboard shows blank screen or infinite loading spinner.

### Causes & Solutions

#### 1. JavaScript Conflict
**Error in Console:** `Uncaught TypeError: Cannot read property 'X' of undefined`

**Solution:**
1. Disable other plugins temporarily
2. Switch to default WordPress theme
3. Check browser console for specific error
4. Clear browser cache and try again

#### 2. Missing React Dependencies
**Error:** `Module not found: react` or similar

**Solution:**
```bash
# Rebuild assets
cd wp-content/plugins/wp-statistics
npm install
npm run build
```

#### 3. REST API Blocked
**Error:** `Failed to fetch` or 401/403 errors

**Solution:**
1. Check if REST API is accessible: `/wp-json/wp-statistics/v1/analytics`
2. Disable security plugins temporarily
3. Check `.htaccess` for REST API blocks
4. Verify user has correct permissions

---

## "No Data Available"

### Symptom
Reports show "No data available" despite having traffic.

### Causes & Solutions

#### 1. Tracking Not Enabled
**Solution:**
1. Go to Settings → General
2. Ensure "Enable Statistics" is checked
3. Save settings
4. Visit your site to generate test data

#### 2. Database Tables Missing
**Solution:**
```sql
-- Check if tables exist
SHOW TABLES LIKE 'wp_statistics_%';

-- If missing, reinstall plugin or run:
-- Settings → Tools → Reinstall Database Tables
```

#### 3. Data Excluded by Filters
**Solution:**
1. Go to Settings → Exclusions
2. Check if you've excluded your own IP/user role
3. Temporarily disable exclusions to test

#### 4. Date Range Issue
**Solution:**
1. Expand date range picker
2. Select "All Time" or "Last 30 Days"
3. Clear any active filters

---

## API Errors

### Error: "Query failed: 500 Internal Server Error"

**Causes:**
- Database query timeout
- Memory limit exceeded
- Corrupted data

**Solutions:**
```php
// In wp-config.php, increase limits:
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');

// Increase MySQL query timeout (in my.cnf or contact host):
max_execution_time = 300
```

### Error: "Invalid date range"

**Cause:** Malformed date in query

**Solution:**
Ensure dates are in correct format:
- `YYYY-MM-DD` (e.g., `2024-12-17`)
- `YYYY-MM-DD HH:mm:ss` (e.g., `2024-12-17 14:30:00`)

### Error: "Too many API requests"

**Cause:** Rate limiting triggered

**Solution:**
1. Reduce `refetchInterval` in your queries
2. Implement proper caching
3. Contact support if legitimate high-volume use

---

## Performance Issues

### Symptom: Slow Dashboard Loading

**Solutions:**

#### 1. Optimize Database
```sql
OPTIMIZE TABLE wp_statistics_visitors;
OPTIMIZE TABLE wp_statistics_visits;
OPTIMIZE TABLE wp_statistics_pages;
OPTIMIZE TABLE wp_statistics_historical;
```

#### 2. Enable Caching
- Install and configure object caching (Redis/Memcached)
- Enable page caching for statistics pages
- Set appropriate cache TTLs

#### 3. Reduce Data Range
- Don't query more than 12 months of data at once
- Use pagination for large result sets
- Archive old data (Settings → Advanced)

#### 4. Add Database Indexes
```sql
-- If queries are slow, add composite indexes
CREATE INDEX idx_visitor_date
ON wp_statistics_visitors(last_counter, robot);

CREATE INDEX idx_visit_date_source
ON wp_statistics_visits(last_counter, source_channel);
```

---

## Installation/Update Issues

### Error: "Migration Failed"

**Symptoms:**
- Update stuck at "Migrating database..."
- Error message during upgrade

**Solutions:**

#### 1. Check Error Logs
```bash
# Check WordPress error log
tail -f wp-content/debug.log

# Check PHP error log
tail -f /var/log/php-errors.log
```

#### 2. Increase PHP Limits
```php
// In wp-config.php
ini_set('max_execution_time', 600);
ini_set('memory_limit', '512M');
```

#### 3. Manual Migration
1. Backup database
2. Deactivate plugin
3. Delete plugin files
4. Upload fresh v15 copy
5. Activate and wait for migration
6. If still fails, go to Settings → Tools → Retry Migration

### Error: "Plugin activation failed"

**Solutions:**
1. Check PHP version (minimum 7.4, recommend 8.0+)
2. Check WordPress version (minimum 5.8)
3. Verify file permissions (755 for directories, 644 for files)
4. Check PHP error logs for specific error

---

## Chart/Visualization Issues

### Charts Not Rendering

**Causes & Solutions:**

#### 1. Missing Chart.js
**Solution:** Rebuild frontend assets (see [JavaScript Conflict](#1-javascript-conflict))

#### 2. Invalid Data Format
**Error in Console:** `Chart.js error: Invalid data format`

**Solution:**
- Ensure API returns numeric values for chart data
- Check date formatting in data points

#### 3. Browser Compatibility
**Solution:**
- Update to modern browser (Chrome/Firefox/Safari/Edge latest)
- Disable browser extensions that block JavaScript
- Check if WebGL is enabled (for map visualizations)

---

## Filter/Search Issues

### Filters Not Working

**Symptoms:**
- Selecting filters doesn't update results
- "No results" after applying filters

**Solutions:**

#### 1. Clear Filter Cache
```javascript
// In browser console
localStorage.removeItem('wp-statistics-filters');
location.reload();
```

#### 2. Check Filter Logic
- Ensure filter values are valid (e.g., valid country codes)
- Don't combine incompatible filters
- Try applying filters one at a time

#### 3. Reset to Defaults
Click "Reset Filters" button or URL: `?reset-filters=1`

---

## Export Issues

### Export Returns Empty File

**Causes:**
- No data matching export criteria
- Memory limit during large exports
- File permissions

**Solutions:**
1. Reduce data range for export
2. Increase PHP memory limit
3. Use smaller page sizes (export in batches)
4. Check wp-content/uploads permissions (755)

### CSV Export Encoding Issues

**Symptom:** Special characters appear as � or gibberish

**Solution:**
- Open CSV in Excel using "From Text/CSV" import
- Select UTF-8 encoding
- Or use Google Sheets which handles UTF-8 automatically

---

## User Permission Issues

### "You don't have permission to access this page"

**Solutions:**

#### 1. Check User Role
- Minimum role: Editor (can view reports)
- Administrator role: Full access
- Custom capabilities: `read_wps_reports`

#### 2. Grant Permissions
```php
// In functions.php or custom plugin
function grant_stats_access() {
    $role = get_role('editor');
    $role->add_cap('read_wps_reports');
    $role->add_cap('manage_wps_settings');
}
add_action('admin_init', 'grant_stats_access');
```

---

## Mobile/Responsive Issues

### Dashboard Not Mobile-Friendly

**Solutions:**
1. Update to latest version (responsive fixes)
2. Clear mobile browser cache
3. Rotate device to landscape for better view
4. Use desktop view option in mobile browser

---

## Getting More Help

If these solutions don't resolve your issue:

1. **Check Documentation:**
   - [Migration Guide](../migration/v14-to-v15-guide.md)
   - [Technical Documentation](../technical/intro.md)
   - [API Documentation](../technical/api-endpoints/analytics-query-api.md)

2. **Enable Debug Mode:**
   ```php
   // In wp-config.php
   define('WP_DEBUG', true);
   define('WP_DEBUG_LOG', true);
   define('WP_DEBUG_DISPLAY', false);
   ```

3. **Get Support:**
   - WordPress.org Forum: https://wordpress.org/support/plugin/wp-statistics/
   - GitHub Issues: https://github.com/wp-statistics/wp-statistics/issues
   - Documentation: https://wp-statistics.com/docs/

4. **Provide Information:**
   When asking for help, include:
   - WP Statistics version
   - WordPress version
   - PHP version
   - Error messages (exact text)
   - Steps to reproduce
   - Browser/device information

---

*Last Updated: 2024-12-17*
