---
title: "Filters Data"
type: "technical"
category: "localize-data"
status: "Done"
sidebar_position: 2
---

# Filters Data

The `filters` key provides filter definitions and operators to the React frontend, enabling dynamic filter UI construction.

---

## Data Structure

```json
{
  "fields": {
    "country": {
      "name": "country",
      "label": "Country",
      "inputType": "searchable",
      "supportedOperators": ["is", "is_not"],
      "groups": ["visitors"]
    },
    "device_type": {
      "name": "device_type",
      "label": "Device Type",
      "inputType": "dropdown",
      "supportedOperators": ["is", "is_not"],
      "options": [
        { "value": "desktop", "label": "Desktop" },
        { "value": "mobile", "label": "Mobile" },
        { "value": "tablet", "label": "Tablet" }
      ],
      "groups": ["visitors"]
    },
    "author": {
      "name": "author",
      "label": "Author",
      "inputType": "searchable",
      "supportedOperators": ["is", "is_not"],
      "groups": ["views"]
    }
  },
  "operators": {
    "is": { "label": "Is", "type": "single" },
    "is_not": { "label": "Is not", "type": "single" },
    "contains": { "label": "Contains", "type": "single" },
    "between": { "label": "Between", "type": "range" }
  }
}
```

---

## Available Filter Names

All filters registered in `FilterRegistry`:

| Filter Name | Label | Input Type |
|-------------|-------|------------|
| `author` | Author | searchable |
| `bounce` | Bounce | dropdown |
| `browser` | Browser | searchable |
| `browser_version` | Browser Version | searchable |
| `city` | City | searchable |
| `continent` | Continent | searchable |
| `country` | Country | searchable |
| `device_type` | Device Type | dropdown |
| `first_seen` | First Seen | date |
| `ip` | IP Address | text |
| `language` | Language | searchable |
| `last_seen` | Last Seen | date |
| `logged_in` | Logged In | dropdown |
| `os` | Operating System | searchable |
| `page` | Page | text |
| `post_type` | Post Type | dropdown |
| `referrer` | Referrer | searchable |
| `referrer_channel` | Referrer Channel | dropdown |
| `referrer_domain` | Referrer Domain | searchable |
| `referrer_name` | Referrer Name | searchable |
| `referrer_type` | Referrer Type | dropdown |
| `region` | Region | searchable |
| `resolution` | Resolution | searchable |
| `resource_id` | Resource ID | number |
| `session_duration` | Session Duration | number |
| `timezone` | Timezone | searchable |
| `total_sessions` | Total Sessions | number |
| `total_views` | Total Views | number |
| `user_id` | User ID | number |
| `user_role` | User Role | dropdown |
| `views_per_session` | Views Per Session | number |
| `visitor_type` | Visitor Type | dropdown |

---

## Filter Fields

Each filter field in the `fields` object defines how a specific filter should be rendered and what operations it supports.

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | `string` | Yes | Unique filter identifier used in API queries (e.g., `'country'`, `'browser'`) |
| `label` | `string` | Yes | Human-readable display label shown in the UI |
| `inputType` | `string` | Yes | Determines the UI input component type (see Input Types below) |
| `supportedOperators` | `string[]` | Yes | Array of operator names this filter supports (e.g., `['is', 'is_not']`) |
| `options` | `Option[]` | No | Static options for dropdown types. Each option has `value` and `label` |
| `groups` | `string[]` | No | Pages where this filter is available (e.g., `['visitors', 'views']`) |

### Example Field

```json
{
  "country": {
    "name": "country",
    "label": "Country",
    "inputType": "searchable",
    "supportedOperators": ["is", "is_not", "in", "not_in"],
    "groups": ["visitors", "views"]
  }
}
```

---

## Input Types

Input types determine how users interact with a filter in the UI. Each type renders a different input component.

| Type | Description | UI Behavior | Example Filters |
|------|-------------|-------------|-----------------|
| `text` | Free text input field | User types any text value | `ip`, `page` |
| `number` | Numeric input field | User enters numbers only, supports +/- buttons | `user_id`, `session_duration`, `total_views` |
| `dropdown` | Static dropdown menu | User selects from predefined options in `options` array | `device_type`, `bounce`, `logged_in` |
| `searchable` | Async searchable dropdown | User types to search, options loaded via AJAX | `country`, `city`, `browser`, `author` |
| `date` | Date picker | User selects date from calendar interface | `first_seen`, `last_seen` |

### Input Type Details

**text**: Simple text input for free-form values. Supports operators like `contains`, `starts_with`, `ends_with`.

**number**: Numeric input with validation. Supports numeric comparison operators like `gt`, `lt`, `between`.

**dropdown**: Static dropdown with predefined options. Options are provided in the `options` array of the field definition. Best for small, fixed sets of choices.

**searchable**: Dynamic dropdown that loads options via the [Get Filter Options](../api-endpoints/get-filter-options.md) endpoint. Best for large datasets (countries, cities, authors) where client-side filtering isn't practical.

**date**: Date picker interface for selecting dates. Supports date comparison operators like `before`, `after`, `between`, `in_the_last`.

---

## Operators

Operators define how to compare filter values. Each operator has a `label` (shown in UI) and a `type` (determines the input interface).

### Operator Types

| Type | Description | UI Behavior | Example |
|------|-------------|-------------|---------|
| `single` | Accepts one value | Single input field or dropdown | `is`, `contains`, `gt` |
| `multiple` | Accepts multiple values | Multi-select or tag input | `in`, `not_in` |
| `range` | Accepts two values (min/max) | Two input fields | `between` |

### Available Operators

| Operator | Label | Type | Use Case | Example |
|----------|-------|------|----------|---------|
| `is` | Is | single | Exact match for single value | Country is "United States" |
| `is_not` | Is not | single | Exclude exact match | Device is not "Mobile" |
| `is_null` | Is empty | single | Check for NULL/empty values | IP is empty |
| `in` | Is one of | multiple | Match any value in list | Country in \["US", "UK", "CA"\] |
| `not_in` | Is not one of | multiple | Exclude all values in list | Browser not in \["Chrome", "Firefox"\] |
| `contains` | Contains | single | Partial text match (substring) | Page contains "/blog/" |
| `starts_with` | Starts with | single | Text prefix match | Referrer starts with "google" |
| `ends_with` | Ends with | single | Text suffix match | Page ends with ".pdf" |
| `gt` | Greater than | single | Numeric comparison (greater than) | Session duration greater than 60 |
| `gte` | Greater than or equal | single | Numeric comparison (greater or equal) | Total views greater than or equal 100 |
| `lt` | Less than | single | Numeric comparison (less than) | Bounce rate less than 50 |
| `lte` | Less than or equal | single | Numeric comparison (less or equal) | Total sessions less than or equal 5 |
| `between` | Between | range | Numeric or date range | Session duration between 60 and 120 |
| `before` | Before | single | Date comparison (before) | First seen before "2025-01-01" |
| `after` | After | single | Date comparison (after) | Last seen after "2025-06-01" |
| `in_the_last` | In the last | single | Relative date (days/weeks/months) | First seen in the last 30 days |

### Operator Type Examples

**Single operator** - User provides one value:
```json
{
  "filter": "country",
  "operator": "is",
  "value": "US"
}
```

**Multiple operator** - User provides multiple values:
```json
{
  "filter": "device_type",
  "operator": "in",
  "value": ["desktop", "mobile", "tablet"]
}
```

**Range operator** - User provides min and max values:
```json
{
  "filter": "session_duration",
  "operator": "between",
  "value": [60, 300]
}
```

---

## Searchable Filters

For `searchable` input types, options are fetched dynamically via the [Get Filter Options](../api-endpoints/get-filter-options.md) endpoint.

### Available Searchable Filters

| Filter | Searches | Returns |
|--------|----------|---------|
| `country` | Country names | Country codes |
| `city` | City names | City names |
| `region` | Region/state names | Region names |
| `browser` | Browser names | Browser names |
| `os` | OS names | OS names |
| `referrer` | Referrer domains | Domain strings |
| `author` | Author display names | User IDs |
| `timezone` | Timezone names | Timezone identifiers |
| `resolution` | Screen resolutions | Resolution strings |
| `language` | Language codes | Language codes |

---

## Filter Groups

Filters are grouped by the pages where they're relevant:

| Group | Description | Example Filters |
|-------|-------------|-----------------|
| `visitors` | Visitor-related pages | `country`, `browser`, `device_type`, `referrer` |
| `views` | Content/page view pages | `post_type`, `author`, `page` |

---

## WordPress Filter

Customize filters data before sending to React:

```php
add_filter('wp_statistics_dashboard_filters_data', function($data) {
    // Add custom filter
    $data['fields']['custom_field'] = [
        'name' => 'custom_field',
        'label' => __('Custom Field', 'my-plugin'),
        'inputType' => 'dropdown',
        'supportedOperators' => ['is', 'is_not'],
        'options' => [...],
    ];
    return $data;
});
```

---

## Provider Class

**File**: `src/Service/Admin/DashboardBootstrap/Providers/FiltersProvider.php`

**Key**: `filters`

---

## Related Documentation

- [Get Filter Options](../api-endpoints/get-filter-options.md) - AJAX endpoint for searchable filters
- [Advanced Filters](../../global/advanced-filters.md) - Filter UI documentation

---

*Last Updated: 2025-12-11*
