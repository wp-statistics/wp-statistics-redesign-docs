---
id: intro
title: WP Statistics v15 Documentation
sidebar_label: Introduction
sidebar_position: 1
slug: /
---

# WP Statistics - Redesign Documentation

Welcome to the WP Statistics interface redesign documentation. This comprehensive guide covers all report pages, widgets, components, and global design rules.

## Documentation Overview

This documentation is organized into five main categories:

### 🌐 Global Documentation

Essential documentation covering global rules, patterns, and configurations:

- [Global Rules](global/global-rules.md) - Design principles, patterns, and global UI rules
- [Menu Structure](global/menu-structure.md) - Main navigation menu structure and organization
- [Interactions](global/interactions.md) - Common interactions like Date Picker, Filters, etc.
- [Data Model](global/data-model.md) - Definitions of visitors, sessions, views, and their relationships
- [Attribution Settings](global/attribution-settings.md) - First Touch vs Last Touch attribution model

### 📊 Reports

Report pages organized by feature groups:

**Visitors Reports** - Comprehensive visitor behavior and traffic analysis
- Overview, Visitors, Views, Online Visitors, Top Visitors, Logged-in Users, Search Terms, Single Visitor Report

**Page Insights Reports** - Page-level content performance
- Overview, Top Pages, Entry Pages, Exit Pages, Category Pages, Author Pages, 404 Pages

### 🧩 Widgets

Reusable widgets used across multiple report pages. Each widget is based on a component and can be configured independently. Examples include:
- Traffic Trends (Line Chart)
- Top Countries (Horizontal Bar List)
- Latest Visitors (Data Table)
- Global Visitor Distribution (Global Map)

### 🎨 Components

Base UI components that power the widgets:
- Data Table
- Line Chart
- Pie Chart
- Horizontal Bar List
- Vertical Bar Chart
- Global Map
- Table

### 📑 Columns

Reusable table column definitions used across data table widgets. Each column has specific sortable behavior, data formatting, and interactions.

---

## Project Purpose

This is a **product documentation project** for the WP Statistics v15 redesign, not a code repository. The documentation is structured to help product managers, designers, and developers understand the feature specifications.

### What You'll Find Here

- Feature descriptions and behavior
- Widget layouts and configurations
- Available interactions (Date Picker, Filters, etc.)
- Data displayed and empty states
- Cross-references to related documentation
- Figma design links for visual specifications
- Implementation status tracking

### Documentation Standards

All documentation follows a consistent structure with:
- **YAML frontmatter** for metadata (status, type, add-on requirements)
- **Bidirectional cross-references** between related documents
- **Status tracking**: Not Started, In Progress, Done
- **Add-on indicators**: Free or premium features (Data Plus, MiniChart, etc.)

---

## Getting Started

1. **Explore by Category** - Use the sidebar to browse Global, Reports, Widgets, Components, or Columns
2. **Follow Cross-References** - Each document links to related items
3. **Check Status** - See which features are implemented
4. **View Figma Designs** - Access visual specifications when available

---

*For detailed writing guidelines and templates, see [DOCUMENTATION-GUIDE.md](../DOCUMENTATION-GUIDE.md)*
