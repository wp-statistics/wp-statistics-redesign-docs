---
title: "Devices Overview"
type: "report"
group: "Devices"
show_in_menu: true
add_on: "Free"
status: "Done"
interactions:
  - "Date Picker"
widgets:
  - row: 1
    columns: ["device-metrics"]
  - row: 2
    columns: ["top-browsers", "top-operating-systems"]
  - row: 3
    columns: ["top-device-categories", "top-screen-resolutions"]
---

# Devices Overview

High-level summary of device, browser, and operating system analytics.

## Report Configuration

- **Type**: Report Page
- **Menu Group**: Devices
- **Show in Menu**: Yes
- **Add-on**: Free
- **Status**: Done
- **Figma Design**: [Add link when available]

## Available Interactions

- **Date Picker**: Select time period for data

## Widget Layout

### Page Structure

<WidgetLayout>
  <WidgetRow>
    <WidgetCell fullWidth>Device Metrics</WidgetCell>
  </WidgetRow>
  <WidgetRow>
    <WidgetCell>Top Browsers</WidgetCell>
    <WidgetCell>Top Operating Systems</WidgetCell>
  </WidgetRow>
  <WidgetRow>
    <WidgetCell>Top Device Categories</WidgetCell>
    <WidgetCell>Top Screen Resolutions</WidgetCell>
  </WidgetRow>
</WidgetLayout>

### Row 1 (Full Width) - Device Metrics

Uses the [Metrics](../../components/metrics.md) component to display 4 key device indicators in a single row.

#### Component Configuration

- **Component**: [Metrics](../../components/metrics.md)
- **Show Previous Period**: Disabled
- **Show Source Icons**: Disabled

#### Metrics Display

| Metric | Value Format | Previous Period |
|--------|--------------|-----------------|
| **Top Browser** | Browser name with icon | No |
| **Top Operating System** | OS name with icon | No |
| **Top Device Category** | Device type with icon | No |
| **Top Resolution** | Resolution (e.g., 1920×1080) | No |

### Row 2 (Two Columns) - Browser & OS Breakdown

**Left Column:**
- [Top Browsers](../../widgets/top-browsers.md) - Top 5 browsers with icons

**Right Column:**
- [Top Operating Systems](../../widgets/top-operating-systems.md) - Top 5 operating systems with icons

### Row 3 (Two Columns) - Device Category & Resolution Breakdown

**Left Column:**
- [Top Device Categories](../../widgets/top-device-categories.md) - Top 5 device types with icons

**Right Column:**
- [Top Screen Resolutions](../../widgets/top-screen-resolutions.md) - Top 5 screen resolutions

## Related Documentation

- [Browsers Report](browsers.md)
- [Operating Systems Report](operating-systems.md)
- [Device Categories Report](device-categories.md)
- [Screen Resolutions Report](screen-resolutions.md)
- [Device Detection](../../technical/architecture/device-detection.md)

---

*Last Updated: 2025-12-16*
