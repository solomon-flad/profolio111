# Portfolio Website

A modern portfolio website built with React, TypeScript, and Vite.

## Features

- Responsive design with dark mode support
- Smooth animations with Framer Motion
- Contact form integration with Formspree
- Built with modern UI components (shadcn/ui)

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, shadcn/ui components
- **Animations:** Framer Motion
- **Form Handling:** Formspree
- **Icons:** Lucide React, React Icons

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Deployment to Vercel

This project is configured for easy deployment to Vercel.

### Quick Deploy

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration from `vercel.json`
   - Click "Deploy"

### Manual Deploy (using Vercel CLI)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables (if needed in the future)

If you add backend features later, set environment variables in Vercel Dashboard:
- Go to Project Settings → Environment Variables
- Add your variables (e.g., `DATABASE_URL`, `API_KEY`)

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
│   └── public/             # Static assets
├── server/                 # Backend (local development only)
├── shared/                 # Shared types and schemas
├── vercel.json            # Vercel deployment configuration
└── package.json           # Dependencies and scripts
```

## Deployment Notes

**Current Deployment:** Frontend only (static site)

The current Vercel deployment includes only the frontend React application. The contact form uses Formspree for submissions, so no backend server is required.

**Future Backend Integration:**

If you need to add backend API features in the future, you have two options:

1. **Refactor for Vercel Serverless:**
   - Extract API logic into separate serverless function files
   - Create `api/` directory with individual endpoint handlers
   - Update `vercel.json` to include serverless function configuration

2. **Separate Backend Hosting:**
   - Deploy frontend to Vercel (current setup)
   - Deploy backend to a traditional Node.js host (Railway, Render, etc.)
   - Configure CORS and environment variables accordingly

## Build Configuration

The project uses the following build settings (defined in `vercel.json`):

- **Build Command:** `npm run build`
- **Output Directory:** `dist/public`
- **Framework:** None (custom Vite setup)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server (local only)
- `npm run check` - Type check with TypeScript

## License

MIT
