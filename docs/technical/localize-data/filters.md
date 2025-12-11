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

```typescript
interface FiltersData {
  fields: Record<string, FilterField>;
  operators: Record<string, OperatorDefinition>;
}

interface FilterField {
  name: string;
  label: string;
  inputType: 'text' | 'number' | 'dropdown' | 'searchable' | 'date';
  supportedOperators: string[];
  options?: Option[];  // For dropdown type
  groups?: string[];   // Pages where filter is available
}

interface OperatorDefinition {
  label: string;
  type: 'single' | 'multiple' | 'range';
}

interface Option {
  value: string | number;
  label: string;
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

Each filter field includes:

| Property | Type | Description |
|----------|------|-------------|
| `name` | `string` | Filter identifier (e.g., `'country'`, `'browser'`) |
| `label` | `string` | Translated display label |
| `inputType` | `string` | UI input component type |
| `supportedOperators` | `string[]` | Available comparison operators |
| `options` | `Option[]?` | Static options for dropdown types |
| `groups` | `string[]?` | Pages where this filter appears |

### Input Types

| Type | Description | Example Filters |
|------|-------------|-----------------|
| `text` | Free text input | `ip`, `page` |
| `number` | Numeric input | `user_id`, `session_duration` |
| `dropdown` | Static dropdown menu | `device_type`, `bounce`, `logged_in` |
| `searchable` | Async search dropdown | `country`, `city`, `browser`, `author` |
| `date` | Date picker | `first_seen`, `last_seen` |

---

## Operators

| Operator | Label | Type | Description |
|----------|-------|------|-------------|
| `is` | Is | single | Exact match |
| `is_not` | Is not | single | Exclude exact match |
| `is_null` | Is empty | single | NULL check |
| `in` | Is one of | multiple | Match any in list |
| `not_in` | Is not one of | multiple | Exclude all in list |
| `contains` | Contains | single | Partial text match |
| `starts_with` | Starts with | single | Prefix match |
| `ends_with` | Ends with | single | Suffix match |
| `gt` | Greater than | single | Numeric comparison |
| `gte` | Greater than or equal | single | Numeric comparison |
| `lt` | Less than | single | Numeric comparison |
| `lte` | Less than or equal | single | Numeric comparison |
| `between` | Between | range | Range comparison |
| `before` | Before | single | Date comparison |
| `after` | After | single | Date comparison |
| `in_the_last` | In the last | single | Relative date |

---

## Example Output

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
