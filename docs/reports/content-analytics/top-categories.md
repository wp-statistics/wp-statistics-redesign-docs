---
title: "Top Categories"
type: "report"
group: "Content Analytics"
show_in_menu: false
add_on: "Free"
status: "Done"
interactions:
  - "Date Picker"
  - "Taxonomy Filter"
  - "Advanced Filters"
widgets:
  - row: 1
    columns: ["top-categories-table"]
---

# Top Categories

Shows all taxonomy terms with their content performance metrics in a data table format.

## Report Configuration

- **Type**: Report Page (Hidden)
- **Menu Group**: Content Analytics
- **Show in Menu**: No (accessed from Top Terms widget in Categories report)
- **Add-on**: Free (Data Plus required for custom taxonomies)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Access

This page is accessed by clicking "See all \{taxonomy\}" link in the [Top Terms](../../widgets/top-terms.md) widget on the [Categories Report](categories.md).

## Add-on Requirements

- **Free**: Category and Tags taxonomies
- **Data Plus**: Custom taxonomies

## Available Interactions

- **Date Picker**: Select time period for data
- **Taxonomy Filter**: Filter by taxonomy type (default: Categories)
  - Free: Categories, Tags
  - Data Plus: Custom taxonomies
- **Advanced Filters**: [Taxonomy Filters](../../global/advanced-filters.md#taxonomy-filters)

## Widget Layout

### Row 1 (Full Width)

- [Top Categories Table](../../widgets/top-categories-table.md)

## Related Documentation

- [Categories Report](categories.md)
- [Individual Category Report](individual-category.md)
- [Top Terms Widget](../../widgets/top-terms.md)
- [Top Categories Table Widget](../../widgets/top-categories-table.md)
- [Data Table Component](../../components/data-table.md)

---

*Last Updated: 2025-12-10*
