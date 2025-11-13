# WP Statistics v15 Documentation

This repository contains the product documentation for WP Statistics WordPress plugin version 15 interface redesign, built with [Docusaurus](https://docusaurus.io/).

## 📚 Documentation Site

View the live documentation at: **https://wp-statistics-docs.pages.dev** (update with your actual Cloudflare Pages URL)

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window at http://localhost:3000. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory that can be deployed to any static hosting service.

### Test Production Build Locally

```bash
npm run serve
```

This command serves the built website locally to test the production build.

## 📂 Project Structure

```
wp-statistics-new-design/
├── docs/                   # Documentation markdown files
│   ├── intro.md           # Main introduction page
│   ├── global/            # Global rules and patterns (5 files)
│   ├── reports/           # Report pages (15 files)
│   ├── widgets/           # Reusable widgets (31 files)
│   ├── components/        # Base UI components (7 files)
│   └── columns/           # Table column definitions (29 files)
├── src/
│   ├── components/        # Custom React components
│   │   ├── StatusBadge.tsx
│   │   ├── FigmaLink.tsx
│   │   └── MetadataDisplay.tsx
│   ├── theme/             # Theme customizations
│   │   └── MDXComponents.tsx
│   └── css/               # Custom styling
├── static/                # Static assets (images, icons)
├── docusaurus.config.ts   # Docusaurus configuration
├── sidebars.ts           # Sidebar structure
├── package.json          # Dependencies and scripts
├── DOCUMENTATION-GUIDE.md # Writing guidelines
└── CLAUDE.md             # Project instructions for Claude Code
```

## 🎨 Custom Components

This documentation site includes custom React components for enhanced metadata display:

### StatusBadge

Displays implementation status with color-coded badges:
- 🔴 Not Started (gray)
- 🟡 In Progress (yellow)
- 🟢 Done (green)

**Usage in MDX:**
```mdx
<StatusBadge status="Done" />
```

### FigmaLink

Displays a button to view Figma designs when available.

**Usage in MDX:**
```mdx
<FigmaLink url="https://figma.com/file/..." />
```

### MetadataDisplay

Automatically displays all relevant frontmatter metadata (status, type, add-on, component, etc.) in a formatted card.

**Usage in MDX:**
```mdx
<MetadataDisplay frontMatter={frontMatter} />
```

## 📝 Documentation Standards

All documentation follows consistent patterns:

### YAML Frontmatter

Each document includes structured metadata:

```yaml
---
title: "Document Name"
type: "report" | "widget" | "component" | "column"
status: "Not Started" | "In Progress" | "Done"
add_on: "Free" | "Data Plus" | "MiniChart"
# Additional type-specific fields...
---
```

### Cross-References

Documentation maintains bidirectional links between related documents for easy navigation.

### Status Tracking

Track implementation progress with status fields in frontmatter.

## 🌐 Deployment to Cloudflare Pages

### Via GitHub Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Set up Docusaurus documentation site"
   git push origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
   - Select your repository: `wp-statistics/wp-statistics-new-design`
   - Configure build settings:
     - **Framework preset:** Docusaurus
     - **Build command:** `npm run build`
     - **Build output directory:** `build`
     - **Root directory:** `/`
   - Add environment variable:
     - `NODE_VERSION` = `18`
   - Click **Save and Deploy**

3. **Automatic Deployments:**
   - Every push to `main` branch triggers automatic deployment
   - Preview deployments created for pull requests

### Via Direct Upload (Alternative)

```bash
# Install Wrangler CLI
npm install -g wrangler

# Build the site
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy build
```

## 📖 Content Guidelines

For detailed writing guidelines, templates, and best practices, see:
- [DOCUMENTATION-GUIDE.md](DOCUMENTATION-GUIDE.md) - Comprehensive writing guide
- [CLAUDE.md](CLAUDE.md) - Project instructions for AI assistance

### Key Principles

- **Product-focused:** Describe features, not implementation
- **Concise:** One-sentence descriptions
- **Cross-referenced:** Bidirectional links between related docs
- **No code:** This is product documentation, not technical specs
- **No design specs:** Visual specifications belong in Figma

## 🛠️ Development

### Adding New Documentation

1. Create markdown file in appropriate directory
2. Add YAML frontmatter with required fields
3. Update cross-references in related files
4. Update README.md if adding new categories

### Updating Configuration

- **Site config:** Edit `docusaurus.config.ts`
- **Sidebar:** Edit `sidebars.ts`
- **Styling:** Edit `src/css/custom.css`
- **Components:** Add to `src/components/`

### Testing Changes

Always test locally before pushing:

```bash
npm start          # Test in development mode
npm run build      # Test production build
npm run serve      # Serve production build locally
```

## 📊 Documentation Stats

- **Total Documents:** 90+ markdown files
- **Reports:** 15 pages
- **Widgets:** 31 reusable components
- **UI Components:** 7 base components
- **Table Columns:** 29 column definitions
- **Global Docs:** 5 essential guides

## 🤝 Contributing

When contributing documentation:

1. Follow the templates in DOCUMENTATION-GUIDE.md
2. Maintain bidirectional cross-references
3. Update status fields as features are implemented
4. Test locally before pushing
5. Keep documentation product-focused (no code)

## 📄 License

Copyright © 2025 WP Statistics. All rights reserved.

---

**Built with** [Docusaurus](https://docusaurus.io/) • **Hosted on** [Cloudflare Pages](https://pages.cloudflare.com/)
