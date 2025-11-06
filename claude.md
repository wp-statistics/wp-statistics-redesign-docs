# WP Statistics v15 Redesign Documentation

This repository contains product documentation for the WP Statistics WordPress plugin version 15 interface redesign.

## Project Overview

This is a **product documentation project** for the WP Statistics v15 redesign, not a code repository. The documentation is structured to help product managers, designers, and developers understand the feature specifications for reports, widgets, components, and user interactions.

### Purpose
- Define feature specifications for v15 redesign
- Document report pages, widgets, and reusable components
- Maintain cross-references between related documentation
- Track implementation status (Not Started, In Progress, Done)
- Link to Figma designs for visual specifications

## Documentation Structure

```
├── reports/          # Report pages (e.g., Visitors, Views, Search Terms)
├── widgets/          # Reusable widgets used in reports
├── components/       # Base UI components (e.g., Data Table, Line Chart)
├── columns/          # Reusable table column definitions
├── global/           # Global rules, menu structure, interactions
├── README.md         # Main navigation and documentation index
└── DOCUMENTATION-GUIDE.md  # Comprehensive writing guide and templates
```

## Key Documentation Principles

### What to Include
- Feature descriptions and behavior
- Widget layouts and configurations
- Available interactions (Date Picker, Filters, etc.)
- Data displayed and empty states
- Cross-references to related documentation

### What NOT to Include
- Code examples or technical implementation
- Design specifications (colors, fonts, pixel sizes) - these belong in Figma
- Responsive behavior details - handled by Figma
- Loading states - implementation details
- Obvious descriptions (e.g., "Date Picker selects dates")

### Writing Style
- Product-focused, not technical
- Concise and scannable
- One sentence descriptions
- Link once in the most logical place (no redundant links)

## Documentation Types

1. **Reports** - Report pages shown in the menu (e.g., Visitors, Views)
2. **Widgets** - Reusable widgets that appear in reports
3. **Components** - Base UI elements (Data Table, Line Chart, Pie Chart)
4. **Columns** - Reusable table column definitions
5. **Global** - Global rules, menu structure, interaction patterns

## YAML Frontmatter

All documentation files use YAML frontmatter for structured metadata:

```yaml
---
title: "Document Name"
type: "report" | "widget" | "component" | "column"
status: "Not Started" | "In Progress" | "Done"
figma: ""  # Figma design URL
# Additional fields vary by type (see DOCUMENTATION-GUIDE.md)
---
```

## Cross-Reference Rules

**CRITICAL**: Maintain bidirectional links between documents.

When creating relationships:
1. Update both files involved in the relationship
2. Update YAML frontmatter (used_in_widgets, used_in_reports, etc.)
3. Add markdown links in the appropriate sections
4. Don't duplicate links in "Related Documentation" if already linked in body

**Example**: When adding a widget to a report:
- ✅ Update report's `widgets` YAML field
- ✅ Update widget's `used_in_reports` YAML field
- ✅ Link widget in report's Widget Layout section
- ✅ Link report in widget's Used In Reports section

## Common Tasks

### Adding a New Report
1. Copy template from [DOCUMENTATION-GUIDE.md](DOCUMENTATION-GUIDE.md#new-report-template)
2. Fill in YAML frontmatter (title, group, show_in_menu, add_on, interactions, widgets)
3. Document widget layout by row
4. Update [README.md](README.md) reports table
5. Update each widget's `used_in_reports` field

### Adding a New Widget
1. Copy template from [DOCUMENTATION-GUIDE.md](DOCUMENTATION-GUIDE.md#new-widget-template)
2. Fill in YAML frontmatter (title, component, add_on, default_sort, row_limit)
3. Link to component file
4. If data table: document columns in table structure
5. Update component's `used_in_widgets` field
6. Update report's `widgets` YAML field
7. Update [README.md](README.md) widgets table

### Adding a New Column
1. Copy template from [DOCUMENTATION-GUIDE.md](DOCUMENTATION-GUIDE.md#new-column-template)
2. Document data displayed, sortable behavior, interactions
3. Update widget's table structure to include this column
4. Update column's `used_in_widgets` field

### Updating Status
When implementation progresses:
1. Update `status` field in YAML frontmatter
2. Update status in [README.md](README.md) tables

### Adding Figma Links
When designs are ready:
1. Add Figma URL to `figma` field in YAML frontmatter
2. Keep URL in frontmatter, no need to repeat in body

## File Naming Convention

Use **kebab-case** for all filenames:
- ✅ `visitors-overview.md`
- ✅ `latest-visitors.md`
- ✅ `data-table.md`
- ❌ `VisitorsOverview.md`
- ❌ `latest_visitors.md`

## Team Workflow with Claude Code

### When Creating New Documentation
1. Reference the [DOCUMENTATION-GUIDE.md](DOCUMENTATION-GUIDE.md) for templates
2. Follow the structure for your documentation type
3. Maintain all required YAML frontmatter fields
4. Update bidirectional cross-references
5. Update README.md if adding new items

### When Updating Existing Documentation
1. Read the existing file first
2. Follow the established patterns
3. Update cross-references in related files
4. Check that links remain valid
5. Update "Last Updated" date

### Quality Checklist
Before considering documentation complete:
- [ ] YAML frontmatter is complete and valid
- [ ] Status field reflects current state
- [ ] All cross-references are bidirectional
- [ ] No code examples included
- [ ] No design specs (colors, sizes, fonts)
- [ ] File follows kebab-case naming
- [ ] README.md updated if new item added
- [ ] Related files updated with cross-references

## Important Reminders

1. **Product Documentation Only** - This is not a code repository. Focus on what features do, not how they're implemented.

2. **Figma for Design** - Colors, fonts, spacing, pixel sizes, and responsive behavior belong in Figma, not here.

3. **Bidirectional Links** - If document A references document B, then document B must reference document A.

4. **No Redundancy** - Don't repeat information. Link once in the most logical place.

5. **Cross-Reference Maintenance** - When adding or updating relationships, update ALL affected files (both YAML and markdown).

6. **Consult the Guide** - When in doubt, check [DOCUMENTATION-GUIDE.md](DOCUMENTATION-GUIDE.md) for templates, rules, and examples.

## Getting Started

1. Read [README.md](README.md) for project overview and navigation
2. Review [DOCUMENTATION-GUIDE.md](DOCUMENTATION-GUIDE.md) for detailed writing guidelines
3. Explore existing documentation to understand the patterns
4. Use templates when creating new documentation
5. Always maintain cross-references when making changes

---

*Last Updated: 2025-11-06*
