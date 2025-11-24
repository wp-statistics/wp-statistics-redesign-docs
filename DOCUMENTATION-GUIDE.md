# Documentation Writing Guide

This guide ensures consistency and completeness when creating or updating documentation for the WP Statistics redesign project.

## Table of Contents

1. [General Principles](#general-principles)
2. [Documentation Types](#documentation-types)
3. [YAML Frontmatter Rules](#yaml-frontmatter-rules)
4. [Content Guidelines](#content-guidelines)
5. [Templates](#templates)
6. [Cross-Referencing Rules](#cross-referencing-rules)
7. [Checklist Before Publishing](#checklist-before-publishing)

---

## General Principles

### Write for Product Managers & Designers
- Focus on **what** the feature does, not **how** it's implemented
- No code examples, no technical implementation details
- No design specs (colors, fonts, sizes) - these belong in Figma
- Keep it concise and scannable

### Avoid Redundancy
- Don't repeat obvious information (e.g., "Date Picker selects date ranges")
- Don't duplicate links in "Related Documentation" if already linked in the body
- Remove "Components Used" sections from reports (redundant with widget links)

### Maintain Cross-References
- Update `used_in_widgets`, `used_in_reports`, `used_in_columns` fields
- Keep bidirectional links in sync (if A links to B, B should link to A)

---

## Documentation Types

We have 6 types of documentation:

1. **Reports** - Report pages (e.g., Visitors, Views)
2. **Widgets** - Reusable widgets used in reports
3. **Components** - Base UI components (e.g., Data Table, Line Chart)
4. **Columns** - Reusable table column definitions
5. **Settings** - Settings pages and configuration options
6. **Global** - Global rules, menu, interactions

---

## YAML Frontmatter Rules

### Required Fields (All Types)

```yaml
title: "Descriptive Name"
type: "report" | "widget" | "component" | "column" | "settings"
status: "Not Started" | "In Progress" | "Done"
figma: ""  # URL to Figma design (can be empty initially)
```

### Type-Specific Fields

#### Reports
```yaml
group: "Visitors" | "Content" | etc.
show_in_menu: true | false
add_on: "Free" | "Data Plus" | etc.
interactions:
  - "Date Picker"
  - "Filters"
widgets:
  - row: 1
    columns: ["widget-id"]
```

#### Widgets
```yaml
component: "component-id"  # Must match component filename
add_on: "Free" | "Data Plus" | etc.
default_sort: "column_name" | null
row_limit: 50 | null
used_in_reports:
  - "report-id"
```

#### Components
```yaml
used_in_widgets:
  - "widget-id"
```

#### Columns
```yaml
used_in_widgets:
  - "widget-id"
```

#### Settings
```yaml
add_on: "Free" | "Data Plus" | etc.
settings_count: 5  # Number of settings in this group
```

---

## Content Guidelines

### Report Pages

**Structure:**
```markdown
# Report Name

Brief description (1 sentence).

## Page Configuration

- **Menu Visibility**: Shown in main menu | Hidden from main menu
- **Add-on**: Free | Data Plus | etc.
- **Status**: Not Started | In Progress | Done
- **Figma Design**: [Add link when available]

## Available Interactions

- **Interaction Name**
- **Filters**: List specific filters if many

## Widget Layout

### Row 1 (Full Width | Two Columns | etc.)
- [Widget Name](../widgets/widget-id.md)
```

**Don't Include:**
- ❌ Related Documentation section
- ❌ Components Used section
- ❌ Explanations of interactions (just list names)
- ❌ Responsive behavior details

### Widget Pages

**Structure:**
```markdown
# Widget Name

Brief description (1 sentence).

## Widget Configuration

- **Component**: [Component Name](../components/component-id.md)
- **Add-on**: Free | Data Plus | etc.
- **Status**: Not Started | In Progress | Done
- **Figma Design**: [Add link when available]

## Display Settings

- **Default Sort**: Column name (order)
- **Row Limit**: Number per page

## Used In Reports

- [Report Name](../reports/report-id.md) - Row X, position

## Table Structure (for data table widgets)

### Columns

| Column | Sortable | Default Visibility |
|--------|----------|--------------------|
| [Column Name](../columns/column-id.md) | Yes/No | Shown/Hidden |

## Features

### Feature Category
- Feature details

## Empty State

- Message to display
```

**Don't Include:**
- ❌ Related Documentation section (links already in config)
- ❌ Responsive Behavior section (Figma handles this)
- ❌ Integration with Page Filters (belongs in report)
- ❌ Search Integration details
- ❌ Loading State section (not product-specific)

### Component Pages

**Structure:**
```markdown
# Component Name

Brief description.

## Component Configuration

- **Type**: Component (Base UI element)
- **Status**: Not Started | In Progress | Done
- **Figma Design**: [Add link when available]

## Used In Widgets

- [Widget Name](../widgets/widget-id.md)

## Overview

Detailed description of component purpose.

## Features

### Core Features
- List of features

## States

### State Name
- State description

## Accessibility

- Accessibility features

## Related Documentation (minimal, only key links)

- [Key Widget](../widgets/widget-id.md)
- [Global Rules](../global/global-rules.md)
```

**Don't Include:**
- ❌ Code examples
- ❌ Props/configuration objects
- ❌ Color codes, pixel sizes
- ❌ Technical implementation details
- ❌ Responsive Behavior section (Figma handles this)

### Column Pages

**Structure:**
```markdown
# Column Name

Brief description.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Not Started | In Progress | Done
- **Figma Design**: [Add link when available]

## Used In Widgets

- [Widget Name](../widgets/widget-id.md)

## Data Displayed

What data is shown and format.

## Behavior

### Sortable
Yes/No - Explanation

### Interactive Elements
- Click/hover behaviors

## Empty State

When no data available.

## Responsive Behavior (optional for columns)

Only if column has specific responsive rules.
```

**Don't Include:**
- ❌ Redundant Related Documentation

### Settings Pages

**Structure:**
Settings pages are organized by UI boxes/sections that users see. Each box groups related settings.

```markdown
# Settings Page Name

Brief description of what this settings page controls.

## Page Configuration

- **Add-on**: Free | Data Plus | etc.
- **Status**: Not Started | In Progress | Done
- **Figma Design**: [Add link when available]
- **Settings Count**: Total number of settings in this page

## Box/Section Name 1

### Setting Name 1

**Display Label**: The label shown in the settings UI

**Setting Key**: `wps_setting_name`

**Type**: Checkbox | Dropdown | Text Input | Number Input | Radio | Toggle | Multi-select

**Default Value**: `value`

**Options** (for dropdowns/radios/multi-select):
- option_value: Description of what this option does
- option_value2: Description

**Description**: What this setting does and how it affects behavior.

**Dependencies**: (only include if setting has conditional visibility)
- Only visible when "Other Setting" is enabled
- Requires "Parent Setting" to equal "specific value"

**Privacy Impact**: (only include if setting has privacy implications)
Brief explanation of how this affects user privacy

**Status Badge**: Deprecated | Beta (only if applicable)

---

### Setting Name 2

[Same structure within this box]

---

## Box/Section Name 2

### Setting Name 3

[Same structure for settings in next box]

---

*Last Updated: YYYY-MM-DD*
```

**Important:**
- Use box/section names exactly as they appear in the plugin UI (e.g., "Tracking Options", "Danger Zone")
- Group settings under the box they belong to
- Box headings use ## level, settings use ### level

**Don't Include:**
- ❌ Cross-references to affected reports/widgets
- ❌ Technical implementation details
- ❌ Code examples
- ❌ Design specifications

---

## Templates

### New Report Template

```markdown
---
title: "Report Name"
type: "report"
group: "Group Name"
show_in_menu: true
add_on: "Free"
status: "Not Started"
interactions:
  - "Date Picker"
widgets:
  - row: 1
    columns: ["widget-id"]
---

# Report Name

Brief description.

## Page Configuration

- **Menu Visibility**: Shown in main menu
- **Add-on**: Free
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Available Interactions

- **Date Picker**
- **Filters**

## Widget Layout

### Row 1 (Full Width)
- [Widget Name](../widgets/widget-id.md)

---

*Last Updated: YYYY-MM-DD*
```

### New Widget Template

```markdown
---
title: "Widget Name"
type: "widget"
component: "component-id"
add_on: "Free"
status: "Not Started"
default_sort: null
row_limit: null
used_in_reports:
  - "report-id"
---

# Widget Name

Brief description.

## Widget Configuration

- **Component**: [Component Name](../components/component-id.md)
- **Add-on**: Free
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Display Settings

- **Default Sort**: N/A
- **Row Limit**: N/A

## Used In Reports

- [Report Name](../reports/report-id.md) - Row X

## Features

### Feature Category
- Feature details

## Empty State

- Empty state message

---

*Last Updated: YYYY-MM-DD*
```

### New Column Template

```markdown
---
title: "Column Name"
type: "column"
status: "Not Started"
used_in_widgets:
  - "widget-id"
---

# Column Name

Brief description.

## Column Configuration

- **Type**: Column (Reusable table column)
- **Status**: Not Started
- **Figma Design**: [Add link when available]

## Used In Widgets

- [Widget Name](../widgets/widget-id.md)

## Data Displayed

What data is shown.

## Behavior

### Sortable
Yes/No

---

*Last Updated: YYYY-MM-DD*
```

### New Settings Template

```markdown
---
title: "Settings Page Name"
type: "settings"
add_on: "Free"
status: "Not Started"
settings_count: 0
---

# Settings Page Name

Brief description of what this settings page controls.

## Page Configuration

- **Add-on**: Free
- **Status**: Not Started
- **Figma Design**: [Add link when available]
- **Settings Count**: 0

## Box/Section Name 1

### Setting Name 1

**Display Label**: The label shown in the settings UI

**Setting Key**: `wps_setting_name`

**Type**: Checkbox | Dropdown | Text Input | Number Input | Radio | Toggle | Multi-select

**Default Value**: `value`

**Options** (if applicable):
- option_value: Description
- option_value2: Description

**Description**: What this setting does and how it affects behavior.

**Dependencies**: (only include if conditional)
- Only visible when X is enabled

**Privacy Impact**: (only include if applicable)
Brief explanation of privacy implications

**Status Badge**: Deprecated | Beta (only if applicable)

---

### Setting Name 2

[Same structure]

---

## Box/Section Name 2

### Setting Name 3

[Same structure]

---

*Last Updated: YYYY-MM-DD*
```

---

## Cross-Referencing Rules

### 1. Bidirectional Linking

When you create a relationship, update **both** files:

**Example:** Adding a new widget to a report
- ✅ Update report's `widgets` YAML field
- ✅ Update widget's `used_in_reports` YAML field
- ✅ Link widget in report's Widget Layout section
- ✅ Link report in widget's Used In Reports section

### 2. Where to Link

| Link Type | Where to Place | Format |
|-----------|---------------|--------|
| Component → Widget | Widget config section | Markdown link |
| Widget → Report | "Used In Reports" section | Markdown link |
| Column → Widget | "Used In Widgets" section | Markdown link |
| Widget → Column | Table Structure | Markdown link in table |

### 3. Don't Duplicate Links

- ❌ Don't add component link to "Related Documentation" if already in Widget Configuration
- ❌ Don't add report links to "Related Documentation" if already in Used In Reports
- ❌ Don't add column links to "Related Documentation" if already in Table Structure

### 4. Update Main README

When adding new items, update [docs/README.md](README.md):
- Add to appropriate table (Reports, Widgets, Components, Columns)
- Keep alphabetical or logical order

---

## Checklist Before Publishing

### All Documentation Types

- [ ] YAML frontmatter complete and valid
- [ ] `status` field set correctly
- [ ] `figma` field empty or has valid URL
- [ ] No code examples included
- [ ] No design specs (colors, sizes, fonts)
- [ ] Last Updated date current
- [ ] File follows naming convention (kebab-case)

### Reports

- [ ] `show_in_menu` field present
- [ ] `interactions` list complete
- [ ] `widgets` list with row/column structure
- [ ] All widgets linked exist as files
- [ ] No "Components Used" section
- [ ] No "Related Documentation" section
- [ ] Interactions listed without explanations

### Widgets

- [ ] `component` field references existing component
- [ ] `used_in_reports` list updated
- [ ] Component file's `used_in_widgets` updated
- [ ] Report file's `widgets` YAML updated
- [ ] Table Structure included (if data table)
- [ ] No "Responsive Behavior" section
- [ ] No "Related Documentation" section
- [ ] No "Loading State" section

### Components

- [ ] `used_in_widgets` list updated
- [ ] All listed widgets exist
- [ ] All listed widgets link back
- [ ] No "Responsive Behavior" section
- [ ] Minimal "Related Documentation"

### Columns

- [ ] `used_in_widgets` list updated
- [ ] Widget's Table Structure includes this column
- [ ] Sortable field clearly stated
- [ ] No redundant links

---

## Common Mistakes to Avoid

❌ **Adding obvious descriptions**
```markdown
- **Date Picker**: Select custom date ranges for visitor data
```
✅ **Just list the interaction**
```markdown
- **Date Picker**
- **Filters**: Browser, Country, OS
```

❌ **Duplicating links in Related Documentation**
```markdown
## Widget Configuration
- **Component**: [Data Table](../components/data-table.md)

## Related Documentation
- [Data Table Component](../components/data-table.md)  ← Duplicate!
```

✅ **Link only once**
```markdown
## Widget Configuration
- **Component**: [Data Table](../components/data-table.md)

(No Related Documentation section needed)
```

❌ **Including design specs**
```markdown
- Button color: #0073aa
- Font size: 14px
```

✅ **Reference Figma**
```markdown
- **Figma Design**: [View design](https://figma.com/...)
```

❌ **Forgetting bidirectional updates**
```markdown
// Added widget to report, but forgot to update:
// 1. Widget's used_in_reports
// 2. Component's used_in_widgets
```

✅ **Update all related files**
```markdown
// When adding widget to report:
// 1. Report widgets YAML ✓
// 2. Widget used_in_reports ✓
// 3. Component used_in_widgets ✓
```

---

## File Naming Conventions

- Use **kebab-case** for all filenames
- Match YAML frontmatter IDs
- Be descriptive but concise

**Examples:**
- ✅ `visitors-overview.md`
- ✅ `visitors-table.md`
- ✅ `data-table.md`
- ✅ `visitor-informations.md`
- ❌ `VisitorsOverview.md`
- ❌ `latest_visitors.md`
- ❌ `DT.md`

---

## Maintenance

### Monthly Review
- Check for broken links
- Verify bidirectional references
- Update status fields
- Add Figma links as designs complete

### When Refactoring
- Update all cross-references
- Search for file references before renaming
- Update README.md tables

---

*Last Updated: 2025-11-06*
