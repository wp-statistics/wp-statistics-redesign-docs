# Deployment Guide - Cloudflare Pages

This guide covers deploying the WP Statistics v15 documentation site to Cloudflare Pages.

## Prerequisites

- GitHub repository with the documentation code
- Cloudflare account (free tier works fine)
- Git configured locally

## Method 1: GitHub Integration (Recommended)

This method enables automatic deployments on every push to the main branch.

### Step 1: Push Code to GitHub

If you haven't already pushed your code:

```bash
git add .
git commit -m "Set up Docusaurus documentation site"
git push origin main
```

### Step 2: Create Cloudflare Pages Project

1. **Go to Cloudflare Dashboard**
   - Visit https://dash.cloudflare.com/
   - Log in to your account

2. **Navigate to Pages**
   - Click **Workers & Pages** in the left sidebar
   - Click **Create application**
   - Select **Pages** tab
   - Click **Connect to Git**

3. **Connect Your Repository**
   - Authorize Cloudflare to access your GitHub account
   - Select the repository: `wp-statistics/wp-statistics-new-design`
   - Click **Begin setup**

### Step 3: Configure Build Settings

Fill in the following settings:

**Project name:** `wp-statistics-docs` (or your preferred name)

**Production branch:** `main`

**Framework preset:** Select **Docusaurus** from the dropdown

This will auto-fill the following (verify they match):

**Build settings:**
- **Build command:** `npm run build`
- **Build output directory:** `build`
- **Root directory:** `/` (leave empty or use `/`)

**Environment variables:**
Click **Add variable** and add:
- **Variable name:** `NODE_VERSION`
- **Value:** `18`

### Step 4: Deploy

1. Click **Save and Deploy**
2. Cloudflare will:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Run the build command (`npm run build`)
   - Deploy the `build/` directory to their global CDN
3. First deployment takes 3-5 minutes
4. You'll receive a URL like: `https://wp-statistics-docs.pages.dev`

### Step 5: Configure Custom Domain (Optional)

If you have a custom domain:

1. Go to your Cloudflare Pages project
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `docs.wp-statistics.com`)
5. Follow DNS configuration instructions
6. SSL certificate automatically provisioned

### Step 6: Update Repository URLs

Once deployed, update the URL in your codebase:

1. Edit `docusaurus.config.ts`:
   ```typescript
   url: 'https://your-actual-url.pages.dev',
   ```

2. Edit `README.md`:
   ```markdown
   View the live documentation at: **https://your-actual-url.pages.dev**
   ```

3. Commit and push:
   ```bash
   git add docusaurus.config.ts README.md
   git commit -m "Update site URL with actual Cloudflare Pages URL"
   git push origin main
   ```

This will trigger an automatic redeployment.

## Method 2: Direct Upload via Wrangler CLI

Alternative method using Cloudflare's CLI tool.

### Step 1: Install Wrangler

```bash
npm install -g wrangler
```

### Step 2: Authenticate

```bash
wrangler login
```

This opens a browser window for authentication.

### Step 3: Build Your Site

```bash
npm run build
```

### Step 4: Deploy

```bash
wrangler pages deploy build
```

Follow the prompts:
- **Project name:** Enter a name (e.g., `wp-statistics-docs`)
- **Production branch:** `main`

Your site will be deployed and you'll receive a URL.

### Subsequent Deployments

For future deployments, just run:

```bash
npm run build && wrangler pages deploy build
```

## Automatic Deployments (GitHub Integration Only)

Once connected via GitHub:

### On Every Push to Main

- Cloudflare automatically detects the push
- Runs the build process
- Deploys updated content
- Entire process takes 2-3 minutes

### Preview Deployments for Pull Requests

- Every PR gets a unique preview URL
- Test changes before merging
- Preview URLs look like: `https://abc123.wp-statistics-docs.pages.dev`

## Build Configuration Details

### Build Command Breakdown

```bash
npm run build
```

This runs the Docusaurus build process:
1. Processes all markdown files in `docs/`
2. Compiles React components
3. Generates static HTML/CSS/JS
4. Optimizes assets
5. Outputs to `build/` directory

### Environment Variables

**NODE_VERSION=18**
- Ensures consistent Node.js version
- Prevents build errors from version mismatches
- Node 18 is recommended for Docusaurus 3.x

### Build Output

The `build/` directory contains:
- `index.html` - Homepage
- Static HTML for every documentation page
- Optimized JavaScript bundles
- CSS stylesheets
- Images and static assets

## Troubleshooting

### Build Fails on Cloudflare

**Check build logs:**
1. Go to Cloudflare Pages project
2. Click **View build** on failed deployment
3. Review error messages

**Common issues:**

1. **Missing dependencies:**
   - Ensure `package.json` includes all dependencies
   - Run `npm install` locally first to verify

2. **Node version mismatch:**
   - Verify `NODE_VERSION=18` environment variable is set
   - Check local Node version: `node --version`

3. **Build command error:**
   - Test locally: `npm run build`
   - Fix any errors before pushing

### Links Not Working

**Relative links broken:**
- Ensure `baseUrl: '/'` in `docusaurus.config.ts`
- Use relative paths like `../widgets/file.md` or absolute paths like `/widgets/file`

**404 on deployment:**
- Verify `build` directory contains `index.html`
- Check build output directory is set to `build` (not `build/` with trailing slash)

### Slow Build Times

**First build:** 3-5 minutes (normal)
**Subsequent builds:** 1-2 minutes (cached)

**To optimize:**
- Cloudflare automatically caches `node_modules/`
- Subsequent builds reuse cache
- No action needed from you

### Custom Domain SSL Issues

**Certificate pending:**
- Wait 5-10 minutes for automatic provisioning
- Cloudflare provides free SSL for all domains

**DNS not resolving:**
- Verify DNS records are correct
- Check nameservers point to Cloudflare
- Allow up to 24 hours for DNS propagation

## Monitoring and Analytics

### Deployment History

View all deployments:
1. Go to Cloudflare Pages project
2. Click **View builds**
3. See status, duration, and logs for each deployment

### Traffic Analytics

Cloudflare provides basic analytics:
1. Go to your Pages project
2. Click **Analytics**
3. View page views, bandwidth, requests

### Custom Analytics (Optional)

Add Google Analytics or Plausible:

Edit `docusaurus.config.ts`:

```typescript
themeConfig: {
  // ... existing config
  gtag: {
    trackingID: 'G-XXXXXXXXXX',
  },
  // OR for Plausible
  scripts: [
    {
      src: 'https://plausible.io/js/script.js',
      'data-domain': 'your-domain.com',
      defer: true,
    },
  ],
}
```

## Rollback to Previous Version

If a deployment breaks something:

1. Go to Cloudflare Pages project
2. Click **View builds**
3. Find working deployment
4. Click **...** (three dots)
5. Click **Rollback to this deployment**
6. Confirm rollback

Site instantly reverts to selected version.

## Best Practices

### Before Pushing to Main

Always test locally:

```bash
npm start          # Test in development
npm run build      # Test production build
npm run serve      # Serve production locally
```

### Branch Protection

Protect your main branch:
1. Go to GitHub repository settings
2. **Branches** → **Add rule**
3. Branch name: `main`
4. Enable: **Require pull request reviews**
5. Enable: **Require status checks to pass**

### Environment-Specific Configs

For staging vs. production:

Create `.env` files (optional):
```
# .env.production
SITE_URL=https://wp-statistics-docs.pages.dev

# .env.staging
SITE_URL=https://staging.wp-statistics-docs.pages.dev
```

## Support and Resources

- **Docusaurus Docs:** https://docusaurus.io/docs
- **Cloudflare Pages Docs:** https://developers.cloudflare.com/pages
- **Cloudflare Community:** https://community.cloudflare.com/
- **Docusaurus Discord:** https://discord.gg/docusaurus

## Summary Checklist

- [ ] Code pushed to GitHub repository
- [ ] Cloudflare Pages project created
- [ ] GitHub repository connected
- [ ] Build settings configured (Framework: Docusaurus)
- [ ] Environment variable set (`NODE_VERSION=18`)
- [ ] Initial deployment successful
- [ ] Site URL works correctly
- [ ] URLs updated in codebase
- [ ] Custom domain configured (optional)
- [ ] Automatic deployments working
- [ ] Team members notified of new documentation site

---

**Your documentation is now live and automatically deployed on every push!**
