# Deployment Guide - Vercel & GitHub

This guide will walk you through deploying your portfolio website to Vercel via GitHub.

## Prerequisites

- A GitHub account
- A Vercel account (you can sign up at [vercel.com](https://vercel.com) using your GitHub account)

## Step 1: Push Your Code to GitHub

### Option A: Using Replit's GitHub Integration

1. In your Replit workspace, click on the **Version Control** icon (branch icon) in the left sidebar
2. Click **Create a Git Repo** if you haven't already
3. Click **Connect to GitHub**
4. Follow the prompts to:
   - Authorize Replit to access your GitHub account
   - Create a new repository or connect to an existing one
   - Give your repository a name (e.g., `my-portfolio`)
5. Commit and push your code

### Option B: Manual GitHub Setup

1. Create a new repository on GitHub:
   - Go to [github.com/new](https://github.com/new)
   - Name your repository (e.g., `my-portfolio`)
   - Choose public or private
   - **Do NOT** initialize with README, .gitignore, or license (we already have these)
   - Click **Create repository**

2. In your Replit Shell, run:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Step 2: Deploy to Vercel

### Method 1: Import from GitHub (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Sign in with your GitHub account (or connect GitHub if you used another method)
3. Click **Import Project**
4. Select your repository from the list
5. Configure your project:
   - **Framework Preset**: Leave as "Other" or select "Vite"
   - **Root Directory**: `.` (leave as default)
   - **Build Command**: Will use the one from vercel.json (`npm run build`)
   - **Output Directory**: Will use the one from vercel.json (`dist/public`)
   - **Install Command**: `npm install`

6. Click **Deploy**

### Method 2: Deploy via Vercel CLI

1. Install Vercel CLI in your Replit Shell:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to configure your deployment

## Step 3: Configure Your Deployment

### Environment Variables (if needed in the future)

If you add any backend API routes or need environment variables:

1. Go to your project on Vercel dashboard
2. Click **Settings** → **Environment Variables**
3. Add your variables (e.g., `VITE_API_URL`, database credentials, etc.)
4. Redeploy for changes to take effect

### Custom Domain (Optional)

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Add your custom domain
3. Follow the DNS configuration instructions
4. Wait for DNS propagation (can take up to 48 hours)

## Project Configuration Files

Your project is already configured for Vercel deployment with these files:

### `vercel.json`
- Configures build settings
- Sets up SPA routing (all routes point to index.html for client-side routing)
- Optimizes asset caching

### `.gitignore`
- Excludes node_modules, dist, and other unnecessary files from Git
- Already properly configured

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy every push to your main branch (production)
- Create preview deployments for pull requests
- Provide unique URLs for each deployment

## Updating Your Site

After initial deployment, to update your site:

1. Make changes in Replit
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```
3. Vercel will automatically deploy your changes

## Troubleshooting

### Build Fails on Vercel

- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json` (not just dev dependencies)
- Verify the build works locally: `npm run build`

### Routes Not Working (404 errors)

- The `vercel.json` is configured to handle SPA routing
- All routes should work correctly with the current configuration

### Assets Not Loading

- Ensure you're using relative paths or the `@assets` alias
- Check that images are in the `attached_assets` folder
- Verify the build output in `dist/public` contains your assets

### Performance Issues

- Vercel automatically optimizes images and assets
- Enable compression in Vercel settings if needed
- Consider using Vercel's Image Optimization for better performance

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- GitHub Documentation: [docs.github.com](https://docs.github.com)
- Replit Documentation: [docs.replit.com](https://docs.replit.com)

## Notes

- This project is currently configured as a **frontend-only** deployment
- The backend Express server is not used in the Vercel deployment
- If you need to add API routes later, you'll need to create serverless functions in an `/api` folder
- Contact support if you need help converting backend routes to Vercel serverless functions
