---
title: "Unit Testing"
type: "technical"
category: "testing"
status: "Done"
sidebar_position: 1
---

# Unit Testing

Comprehensive guide for writing and running unit tests in WP Statistics.

## Overview

WP Statistics uses PHPUnit with the WordPress test library to ensure code quality and prevent regressions. Tests are organized into two main categories:

- **Unit Tests** (`tests/unit/`) - Test individual functions and classes in isolation
- **Integration Tests** (`tests/integration/`) - Test interactions between components and WordPress core

### Testing Framework

- **PHPUnit** - PHP testing framework (version 9.x)
- **WordPress Test Library** - Provides WordPress-specific testing utilities
- **WP_UnitTestCase** - Base class that provides WordPress test helpers and database rollback

---

## Setup

### Prerequisites

Before running tests, you need to install the WordPress test library and set up a test database.

**Required:**
- PHP 7.4 or higher
- PHPUnit 9.x
- MySQL or MariaDB
- WordPress test library
- Subversion (SVN) client

### Installing WordPress Test Library

The WordPress test library provides the testing framework and utilities for testing WordPress plugins.

**Step 1: Install the test library**

Run the installation script from the plugin root:

```bash
bash bin/install-wp-tests.sh wordpress_test root '' localhost latest
```

**Parameters:**
- `wordpress_test` - Test database name (will be created)
- `root` - Database user
- `''` - Database password (empty in this example)
- `localhost` - Database host
- `latest` - WordPress version to test against (or specify version like `6.4`)

**Step 2: Verify installation**

The script will:
1. Create a test database (`wordpress_test`)
2. Download WordPress core to `/tmp/wordpress/`
3. Download WordPress test library to `/tmp/wordpress-tests-lib/`
4. Create `wp-tests-config.php` with your database credentials

**Alternative: Manual Installation**

If the script doesn't work, you can install manually:

```bash
# 1. Create test database
mysql -u root -p -e "CREATE DATABASE wordpress_test;"

# 2. Download WordPress test library
svn co https://develop.svn.wordpress.org/trunk/ /tmp/wordpress-tests-lib

# 3. Download WordPress core
svn co https://develop.svn.wordpress.org/tags/latest /tmp/wordpress

# 4. Create wp-tests-config.php
cp /tmp/wordpress-tests-lib/wp-tests-config-sample.php /tmp/wordpress-tests-lib/wp-tests-config.php

# 5. Edit wp-tests-config.php with your database credentials
```

**Edit `/tmp/wordpress-tests-lib/wp-tests-config.php`:**

```php
define( 'DB_NAME', 'wordpress_test' );
define( 'DB_USER', 'root' );
define( 'DB_PASSWORD', '' );
define( 'DB_HOST', 'localhost' );
```

### Configuration

Tests are configured in `phpunit.xml.dist` at the plugin root:

```xml
<phpunit
    bootstrap="tests/bootstrap.php"
    colors="true"
    convertErrorsToExceptions="true"
    convertNoticesToExceptions="true"
    convertWarningsToExceptions="true">
    <testsuites>
        <testsuite name="unit">
            <directory suffix="Test.php">tests/unit/</directory>
            <directory prefix="Test_">tests/unit/</directory>
        </testsuite>
        <testsuite name="integration">
            <directory suffix="Test.php">tests/integration/</directory>
            <directory prefix="Test_">tests/integration/</directory>
        </testsuite>
    </testsuites>
</phpunit>
```

**Key configuration:**
- Tests are bootstrapped via `tests/bootstrap.php`
- Test files must match pattern: `Test_*.php` or `*Test.php`
- Color output enabled for better readability
- All PHP errors/warnings/notices converted to exceptions

---

## Running Tests

### Run All Tests

Using Composer (recommended):

```bash
composer test
```

Or directly with PHPUnit:

```bash
phpunit
```

### Run Specific Test Suite

Run only unit tests:

```bash
phpunit --testsuite unit
```

Run only integration tests:

```bash
phpunit --testsuite integration
```

### Run Specific Test File

```bash
phpunit tests/unit/Test_AnalyticsQueryHandler.php
```

### Run Specific Test Method

```bash
phpunit --filter test_batch_with_global_compare_true
```

### Test Output

Test results are displayed in the terminal with:
- ✓ Green dots for passing tests
- F for failures
- E for errors
- Summary of assertions, tests, and time

Logs are saved to:
- `tests/logs/testdox.html` - HTML test documentation
- `tests/logs/testdox.txt` - Plain text test documentation

---

## Writing Tests

### File Naming Convention

Test files must use the `Test_` prefix:

**Example:**
- ✅ `Test_AnalyticsQueryHandler.php`
- ✅ `Test_Helper.php`
- ✅ `Test_DateRange.php`
- ❌ `AnalyticsQueryHandlerTest.php` (wrong pattern)

### Test Class Structure

All test classes must extend `WP_UnitTestCase`:

```php
<?php

namespace WP_Statistics\Tests;

use WP_UnitTestCase;
use WP_Statistics\Service\AnalyticsQuery\AnalyticsQueryHandler;

class Test_AnalyticsQueryHandler extends WP_UnitTestCase
{
    /**
     * Set up test environment before each test.
     */
    public function setUp(): void
    {
        parent::setUp();
        // Your setup code here
    }

    /**
     * Clean up after each test.
     */
    public function tearDown(): void
    {
        // Your cleanup code here
        parent::tearDown();
    }

    /**
     * Test method - must start with 'test_'
     */
    public function test_example()
    {
        $this->assertTrue(true);
    }
}
```

### Test Method Naming

Test methods must start with `test_`:

**Example:**
- ✅ `test_batch_with_global_compare_true()`
- ✅ `test_helper_makes_anonymous_version()`
- ❌ `batchWithGlobalCompareTrue()` (missing prefix)

### Common Assertions

PHPUnit provides many assertions. Common ones include:

```php
// Equality
$this->assertEquals($expected, $actual);
$this->assertSame($expected, $actual); // Strict comparison

// Boolean
$this->assertTrue($value);
$this->assertFalse($value);

// Null
$this->assertNull($value);
$this->assertNotNull($value);

// Arrays
$this->assertArrayHasKey('key', $array);
$this->assertArrayNotHasKey('key', $array);
$this->assertContains('value', $array);

// Strings
$this->assertStringContainsString('needle', $haystack);
$this->assertStringStartsWith('prefix', $string);

// Exceptions
$this->expectException(Exception::class);
$this->expectExceptionMessage('error message');

// WordPress-specific
$this->assertWPError($value);
```

### Using WordPress Test Helpers

`WP_UnitTestCase` provides WordPress-specific helpers:

```php
// Create test posts
$post_id = $this->factory()->post->create([
    'post_title' => 'Test Post',
    'post_type'  => 'page',
]);

// Create test users
$user_id = $this->factory()->user->create([
    'role' => 'administrator',
]);

// Create test terms
$term_id = $this->factory()->term->create([
    'taxonomy' => 'category',
    'name'     => 'Test Category',
]);

// Set current user
wp_set_current_user($user_id);

// Test with different user capabilities
$this->assertUserCan($user, 'edit_posts');
```

---

## Analytics Query Handler Tests

### Overview

`Test_AnalyticsQueryHandler.php` tests the batch request functionality of the Analytics Query Handler, specifically focusing on the global `compare` parameter feature.

**Location:** `wp-content/plugins/wp-statistics/tests/unit/Test_AnalyticsQueryHandler.php`

### Test Cases

The test file includes 5 comprehensive test cases:

#### 1. test_batch_with_global_compare_true

Verifies that when `compare: true` is set globally, all queries inherit comparison functionality.

**What it tests:**
- Global compare parameter is properly passed to the handler
- All queries in the batch receive comparison data
- Response includes `compare_from` and `compare_to` metadata

#### 2. test_batch_with_global_compare_false

Verifies backward compatibility when global compare is explicitly set to `false`.

**What it tests:**
- Queries do NOT receive comparison data when global compare is false
- Response does NOT include comparison metadata

#### 3. test_batch_query_override_global_compare

Verifies that individual queries can override the global compare setting.

**What it tests:**
- Query inheriting global `compare: true` has comparison data
- Query explicitly setting `compare: false` does NOT have comparison data
- Override behavior works correctly

#### 4. test_batch_without_compare

Verifies backward compatibility when compare parameter is not provided.

**What it tests:**
- Default behavior when `compare` is omitted (defaults to `false`)
- Ensures existing code continues to work

#### 5. test_batch_mixed_compare_settings

Tests complex scenarios with mixed compare settings.

**What it tests:**
- Query inheriting global compare
- Query explicitly setting `compare: true`
- Query explicitly setting `compare: false`
- All three scenarios work correctly in a single batch

### How the Tests Verify Inheritance

The tests verify inheritance by checking for the presence of comparison-related metadata:

```php
// Check for comparison data
$this->assertArrayHasKey('compare_from', $result['items']['query1']['meta']);
$this->assertArrayHasKey('compare_to', $result['items']['query1']['meta']);

// Check for NO comparison data
$this->assertArrayNotHasKey('compare_from', $result['items']['query1']['meta']);
```

### Running Analytics Query Handler Tests

Run all tests in the file:

```bash
phpunit tests/unit/Test_AnalyticsQueryHandler.php
```

Run a specific test:

```bash
phpunit --filter test_batch_with_global_compare_true
```

Run with verbose output:

```bash
phpunit --testdox tests/unit/Test_AnalyticsQueryHandler.php
```

**Expected output:**
```
Test Analytics Query Handler
 ✔ Batch with global compare true
 ✔ Batch with global compare false
 ✔ Batch query override global compare
 ✔ Batch without compare
 ✔ Batch mixed compare settings
```

---

## Best Practices

### 1. Keep Tests Isolated

Each test should be independent and not rely on other tests:

**❌ Bad - Tests depend on each other:**
```php
public function test_create_data()
{
    $this->data = ['key' => 'value'];
}

public function test_use_data()
{
    $this->assertEquals('value', $this->data['key']); // Fails if test_create_data doesn't run first
}
```

**✅ Good - Tests are independent:**
```php
public function test_create_data()
{
    $data = ['key' => 'value'];
    $this->assertArrayHasKey('key', $data);
}

public function test_use_data()
{
    $data = ['key' => 'value'];
    $this->assertEquals('value', $data['key']);
}
```

### 2. Use Descriptive Test Names

Test names should clearly describe what is being tested:

**❌ Bad:**
```php
public function test_batch()
public function test_compare()
public function test_handler()
```

**✅ Good:**
```php
public function test_batch_with_global_compare_true()
public function test_batch_query_override_global_compare()
public function test_helper_makes_anonymous_version()
```

### 3. Test Both Success and Failure Cases

Don't just test the happy path:

```php
// Test success case
public function test_valid_date_range()
{
    $result = $handler->handle(['date_from' => '2024-01-01', 'date_to' => '2024-01-31']);
    $this->assertTrue($result['success']);
}

// Test failure case
public function test_invalid_date_range()
{
    $this->expectException(InvalidDateRangeException::class);
    $handler->handle(['date_from' => '2024-01-31', 'date_to' => '2024-01-01']);
}
```

### 4. Clean Up After Tests

`WP_UnitTestCase` automatically rolls back database changes, but you should still clean up:

```php
public function tearDown(): void
{
    // Remove any filters or actions you added
    remove_filter('wp_statistics_hook', [$this, 'callback']);

    // Clean up any temporary files
    if (file_exists($this->tempFile)) {
        unlink($this->tempFile);
    }

    parent::tearDown();
}
```

### 5. Use Data Providers for Similar Tests

When testing the same logic with different inputs, use data providers:

```php
/**
 * @dataProvider date_provider
 */
public function test_date_normalization($input, $expected)
{
    $result = Helper::normalizeDate($input);
    $this->assertEquals($expected, $result);
}

public function date_provider()
{
    return [
        ['2024-01-01', '2024-01-01 00:00:00'],
        ['2024-01-01 12:00:00', '2024-01-01 12:00:00'],
        ['2024-01-01T12:00:00', '2024-01-01 12:00:00'],
    ];
}
```

---

## Troubleshooting

### Database Connection Errors

**Error:** `Error establishing a database connection`

**Solution:**
1. Check `wp-tests-config.php` has correct database credentials
2. Ensure test database exists
3. Verify database user has proper permissions

### Test Failures After WordPress Update

**Error:** Tests pass locally but fail in CI/CD

**Solution:**
1. Update WordPress test library to match WordPress version
2. Clear PHPUnit cache: `composer clear-cache`
3. Reinstall test dependencies: `composer install --dev`

### Timeout Errors

**Error:** Tests timeout or take too long

**Solution:**
1. Disable caching in tests (pass `false` to constructors)
2. Use `@group slow` to mark slow tests
3. Mock external API calls instead of making real requests

### Class Not Found Errors

**Error:** `Class 'WP_UnitTestCase' not found`

**Solution:**
1. Verify WordPress test library is installed
2. Check `tests/bootstrap.php` is loading the test library correctly
3. Ensure Composer autoloader is loaded

---

## Additional Resources

- **WordPress Test Library:** https://make.wordpress.org/core/handbook/testing/automated-testing/phpunit/
- **PHPUnit Documentation:** https://phpunit.de/documentation.html
- **WP Statistics Testing Wiki:** https://github.com/wp-statistics/wp-statistics/wiki/Getting-Started#running-unit-tests

---

*Last Updated: 2025-12-13*
