---
title: "Total Views Column"
type: "column"
status: "Not Started"
figma: ""
used_in_widgets:
  - "latest-visitors"
---

# Total Views Column

Displays the total number of page views by a visitor during their session or across all their visits (depending on context).

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Used In Widgets

This column is used in the following widgets:

- [Latest Visitors](../widgets/latest-visitors.md)

## Data Displayed

### Value
- **Number**: Total count of page views
- **Format**: Integer (e.g., 1, 5, 23, 147)
- **Large Numbers**: Formatted with commas (e.g., 1,234)

### Context Options

**Per Session:**
- Count page views in the current/latest session only
- Session defined by 30-minute inactivity timeout
- Useful for understanding current visit depth

**Lifetime Total:**
- Count all page views across all visits by this visitor
- Useful for identifying returning visitors and engagement

## Display Format

### Standard Display
```
5
12
1
147
```

### With Visual Indicators
```
5 pages
12 📄
1 (bounce)
147 🔥 (highly engaged)
```

### Engagement Indicators
- **1 view**: May mark as "bounce" or single-page visit
- **2-5 views**: Standard engagement
- **6-10 views**: Good engagement
- **11+ views**: High engagement (may show special indicator)

## Behavior

### Sortable
**Yes** - This column is sortable

- **Ascending**: Least engaged visitors first (bounces)
- **Descending**: Most engaged visitors first (default for engagement analysis)

### Interactive Elements
- **Click**: May drill down to see list of pages viewed
- **Hover**: Show tooltip with engagement level or additional context
- **Badge**: Visual indicator for single-page visits (bounces)

## Alignment
- **Right-aligned**: Numbers should be right-aligned for easier comparison

## Empty State

When view data not available:
- Display: "0" or "-"
- Should be rare unless data collection issue

## Responsive Behavior

### Desktop
- Full number display
- Visual indicators visible
- Clear numeric alignment

### Tablet
- Number display maintained
- Compact indicators

### Mobile
- Number only (remove indicators to save space)
- Clear, readable font size

## Analytics Insights

### Engagement Metrics
Total views help identify:
- **Bounces**: 1 page view (high exit rate)
- **Engaged Visitors**: Multiple page views (exploring content)
- **Power Users**: Very high page views (highly interested)
- **Session Depth**: Average pages per visit

### Benchmarks
- **Bounce**: 1 view
- **Low Engagement**: 2-3 views
- **Medium Engagement**: 4-7 views
- **High Engagement**: 8+ views

## Related Documentation

- [Latest Visitors Widget](../widgets/latest-visitors.md)
- [Views Report](../reports/views.md)
- [Single Visitor Report](../reports/single-visitor-report.md)
- [Data Table Component](../components/data-table.md)

---

*Last Updated: 2025-11-06*
