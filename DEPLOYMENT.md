# Deployment Guide

This project supports deployment to **both GitHub Pages and Hostinger** with different routing configurations.

## GitHub Pages (Hash-based URLs)

URLs will appear as: `https://rezonest.github.io/Grandspan/#/about`

### Deploy to GitHub Pages

```bash
yarn deploy:github
```

Or manually:
```bash
yarn build:github
git add dist -f
git commit -m "Deploy to GitHub Pages"
git push origin `git subtree split --prefix dist main`:gh-pages --force
```

## Hostinger (Clean URLs)

URLs will appear as: `https://yourdomain.com/about`

### Setup Instructions

1. **Update your domain** in the code (if needed)

2. **Build for Hostinger**:
   ```bash
   yarn build:hostinger
   ```

3. **Deploy to Hostinger**:
   - Upload the contents of the `dist` folder to your Hostinger root directory
   - Ensure the `.htaccess` file is uploaded (it's included in the dist folder)
   - Make sure your Hostinger plan supports:
     - `mod_rewrite` (for URL rewriting)
     - `mod_expires` (for caching headers)
     - `mod_deflate` (for gzip compression)

4. **Verify** that clean URLs work:
   - Visit `https://yourdomain.com/about`
   - Should load without `.html` extension

### What happens with `.htaccess`

- Removes `.html` extensions from URLs (`/about.html` → `/about`)
- Routes unknown URLs to `index.html` for client-side routing
- Sets up caching for static assets
- Enables gzip compression

## Local Development

```bash
yarn dev
```

This uses hash-based routing by default for consistency with GitHub Pages.

## Switching Between Modes

The router automatically detects the build mode via the `ROUTER_MODE` environment variable:

- **Hash mode** (GitHub Pages): `ROUTER_MODE=hash`
- **Clean mode** (Hostinger): `ROUTER_MODE=clean`

The build scripts set this automatically.

## Troubleshooting

### Blank pages on GitHub Pages
- Ensure you ran `yarn deploy:github` (not just `yarn build`)
- Check that the `gh-pages` branch was updated

### URLs not working on Hostinger
- Verify `.htaccess` file exists in root directory
- Check that mod_rewrite is enabled (contact Hostinger support)
- Clear browser cache and try again

### Routes not loading
- Check browser console for errors
- Ensure `dist` folder contains the built files
- For Hostinger, verify the build used `ROUTER_MODE=clean`
