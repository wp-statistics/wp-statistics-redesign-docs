# Technical Documentation Guide

This guide provides templates and guidelines for creating technical documentation for WP Statistics v15.

## Overview

Technical documentation covers database schema, API specifications, system architecture, and data flow - complementing the product documentation that focuses on UI features and user interactions.

## Documentation Types

### Technical Documentation Categories

1. **Database** - Database schema, tables, columns, relationships, indexes
2. **API** - API endpoints, request/response specifications, authentication
3. **Architecture** - System architecture, component relationships, design patterns
4. **Data Flow** - Data processing pipelines, flow diagrams, integration points

## YAML Frontmatter

All technical documentation files use YAML frontmatter for structured metadata:

### Required Fields

```yaml
---
title: "Document Name"
type: "technical"
category: "database" | "api" | "architecture" | "data-flow"
status: "Not Started" | "In Progress" | "Done"
sidebar_position: 1  # Position in Docusaurus sidebar
---
```

### Optional Fields

```yaml
---
figma: ""           # URL to related diagrams (if applicable)
related_docs: []    # Links to related product documentation
---
```

## Templates

### Database Overview Template

```markdown
---
title: "Database Overview"
type: "technical"
category: "database"
status: "Not Started"
sidebar_position: 1
---

# Database Overview

Brief description of the database structure.

## Database Tables

### Core Tables

#### `table_name`
**Purpose:** Brief description of table purpose.

**Key Columns:**
- `column_name` - Description and data type
- `column_name` - Description and data type

**Indexes:**
- Primary key on `column_name`
- Index on `column_name`

**Relationships:**
- Foreign key to `other_table.column`

---

## Table Relationships

Describe or diagram the relationships between tables.

## Database Design Principles

List key design decisions and principles.

## Notes

Any additional implementation notes.

---

*Last Updated: YYYY-MM-DD*
```

### Database Table Detail Template

```markdown
---
title: "Table Name"
type: "technical"
category: "database"
status: "Not Started"
sidebar_position: 2
---

# Table: `table_name`

Detailed description of this table's purpose and usage.

## Schema

| Column | Type | Null | Default | Description |
|--------|------|------|---------|-------------|
| `id` | BIGINT | NO | AUTO_INCREMENT | Primary key |
| `column_name` | VARCHAR(255) | NO | NULL | Description |

## Indexes

| Name | Columns | Type | Description |
|------|---------|------|-------------|
| PRIMARY | `id` | PRIMARY KEY | Primary key |
| `idx_name` | `column_name` | INDEX | Description |

## Relationships

### Foreign Keys
- `column_name` → `other_table.id`

### Referenced By
- `other_table.foreign_column` references this table

## Data Examples

Example data rows to illustrate usage.

## Notes

Implementation notes, constraints, or special considerations.

---

*Last Updated: YYYY-MM-DD*
```

### API Documentation Template

```markdown
---
title: "API Endpoint Name"
type: "technical"
category: "api"
status: "Not Started"
sidebar_position: 1
---

# API: Endpoint Name

Brief description of the API endpoint.

## Endpoint

```
METHOD /api/v1/endpoint
```

## Authentication

Required authentication method.

## Request

### Headers
- `Header-Name: value`

### Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `param` | string | Yes | Description |

### Request Body
```json
{
  "key": "value"
}
```

## Response

### Success Response (200)
```json
{
  "status": "success",
  "data": {}
}
```

### Error Responses

#### 400 Bad Request
```json
{
  "status": "error",
  "message": "Error description"
}
```

## Examples

### cURL Example
```bash
curl -X POST https://example.com/api/v1/endpoint \
  -H "Authorization: Bearer token" \
  -d '{"key": "value"}'
```

## Notes

Additional implementation notes.

---

*Last Updated: YYYY-MM-DD*
```

### Architecture Documentation Template

```markdown
---
title: "Component/System Name"
type: "technical"
category: "architecture"
status: "Not Started"
sidebar_position: 1
---

# Architecture: Component Name

High-level description of the component or system.

## Overview

Purpose and role in the system.

## Components

### Component 1
Description and responsibilities.

### Component 2
Description and responsibilities.

## Interactions

How components communicate and interact.

## Design Decisions

Key architectural decisions and rationale.

## Data Flow

How data moves through the system.

## Dependencies

External dependencies and integrations.

## Notes

Additional architectural considerations.

---

*Last Updated: YYYY-MM-DD*
```

### Data Flow Documentation Template

```markdown
---
title: "Data Flow Name"
type: "technical"
category: "data-flow"
status: "Not Started"
sidebar_position: 1
---

# Data Flow: Process Name

Description of the data flow or processing pipeline.

## Overview

High-level description of what this flow accomplishes.

## Flow Diagram

```
[Start] → [Step 1] → [Step 2] → [End]
```

## Steps

### 1. Step Name
Description of what happens in this step.

**Input:** What data comes in
**Processing:** What happens to the data
**Output:** What data goes out

### 2. Step Name
Description of the next step.

## Data Transformations

Describe how data is transformed throughout the flow.

## Error Handling

How errors are handled at each step.

## Performance Considerations

Any performance-related notes.

## Notes

Additional implementation details.

---

*Last Updated: YYYY-MM-DD*
```

## Writing Guidelines

### Style and Tone

1. **Technical and Precise** - Use accurate technical terminology
2. **Concise** - Keep descriptions brief but complete
3. **Scannable** - Use headings, tables, and lists for easy scanning
4. **Code Examples** - Include code examples where helpful
5. **No Redundancy** - Avoid repeating information across docs

### What to Include

- Technical specifications and schemas
- Data types, constraints, and validation rules
- Relationships and dependencies
- Code examples and usage patterns
- Design decisions and rationale
- Performance and scalability considerations

### What NOT to Include

- UI/UX specifications (belongs in product docs)
- Implementation details that change frequently
- Personal opinions without rationale
- Deprecated or outdated information
- Duplicate information from other docs

## File Naming Convention

Use **kebab-case** for all technical documentation files:
- ✅ `database-overview.md`
- ✅ `api-authentication.md`
- ✅ `visitor-tracking-flow.md`
- ❌ `DatabaseOverview.md`
- ❌ `api_authentication.md`

## Cross-References

### Linking to Product Documentation

When technical docs relate to product features:

```markdown
This table powers the [Visitors Overview](../reports/visitor-insights/visitors-overview.md) report.
```

### Linking Between Technical Docs

```markdown
See [API Authentication](../api/authentication.md) for authentication details.
```

## Status Management

Update the `status` field in YAML frontmatter as documentation progresses:

- **Not Started** - Documentation not yet created or outlined
- **In Progress** - Actively being written or updated
- **Done** - Complete and up-to-date

## Integration with Docusaurus

### Sidebar Position

Control document order using `sidebar_position`:

```yaml
sidebar_position: 1  # Lower numbers appear first
```

### Sidebar Categories

Organize docs into categories using folder structure:

```
technical/
├── database/
│   ├── overview.md (sidebar_position: 1)
│   └── tables/
│       ├── visitors.md
│       └── sessions.md
└── api/
    └── overview.md
```

## Maintenance

### When to Update

- Database schema changes
- API endpoint modifications
- Architecture refactoring
- New features or components

### Update Process

1. Update the technical documentation file
2. Update `status` if needed
3. Update "Last Updated" date
4. Update any cross-references if relationships changed
5. Verify code examples still work

## Examples

See existing technical documentation:
- [Database Overview](docs/technical/database/overview.md)
- [Technical Documentation Intro](docs/technical/intro.md)

## Quality Checklist

Before marking documentation as "Done":

- [ ] YAML frontmatter is complete and valid
- [ ] All technical specifications are accurate
- [ ] Code examples are tested and working
- [ ] Tables and schemas are up-to-date
- [ ] Cross-references are valid
- [ ] File follows kebab-case naming
- [ ] Integrated into Docusaurus navigation
- [ ] "Last Updated" date is current

---

*Last Updated: 2025-11-16*
