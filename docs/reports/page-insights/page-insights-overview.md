---
title: "Overview"
type: "report"
group: "Page Insights"
show_in_menu: true
add_on: "Free"
status: "Done"
figma: ""
interactions:
  - "Date Picker"
widgets:
  - row: 1
    columns: ["top-pages-preview", "recent-pages-preview"]
  - row: 2
    columns: ["top-entry-pages-preview", "top-exit-pages-preview"]
  - row: 3
    columns: ["404-pages-preview", "author-pages-preview"]
---

# Overview

Overview of key page performance metrics including top performing pages, recent content, and entry/exit page analysis.

## Report Configuration

- **Menu Visibility**: Shown in main menu
- **Add-on**: Free (Row 2 requires Data Plus)
- **Status**: Done
- **Figma Design**: [Add link when available]

## Available Interactions

- **Date Picker**: Filter data by date range

## Widget Layout

### Page Structure

<WidgetLayout>
  <WidgetRow>
    <WidgetCell>Top Pages Preview</WidgetCell>
    <WidgetCell>Recent Pages Preview</WidgetCell>
  </WidgetRow>
  <WidgetRow>
    <WidgetCell addon="Data Plus">Top Entry Pages Preview</WidgetCell>
    <WidgetCell addon="Data Plus">Top Exit Pages Preview</WidgetCell>
  </WidgetRow>
  <WidgetRow>
    <WidgetCell>404 Pages Preview</WidgetCell>
    <WidgetCell>Author Pages Preview</WidgetCell>
  </WidgetRow>
</WidgetLayout>

### Row 1 (Two Columns)

- [Top Pages Preview](../../widgets/top-pages-preview.md) - Left Column
- [Recent Pages Preview](../../widgets/recent-pages-preview.md) - Right Column

### Row 2 (Two Columns) - Data Plus Required

These widgets are only available when the Data Plus add-on is activated.

- [Top Entry Pages Preview](../../widgets/top-entry-pages-preview.md) - Left Column
- [Top Exit Pages Preview](../../widgets/top-exit-pages-preview.md) - Right Column

### Row 3 (Two Columns)

- [404 Pages Preview](../../widgets/404-pages-preview.md) - Left Column
- [Author Pages Preview](../../widgets/author-pages-preview.md) - Right Column

---

*Last Updated: 2025-11-12*
