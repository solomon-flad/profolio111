# Solomon Oluwatosin Portfolio Website

## Overview

A modern, minimal portfolio website showcasing Solomon Oluwatosin's work as a Replit expert and builder. The site features a type-driven design with warm aesthetics, smooth animations, and sections for About, Work, Testimonials, and Contact. Built with React, TypeScript, and Vite, it emphasizes clean typography, generous whitespace, and a friendly, approachable personality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type safety and modern component patterns
- Vite as the build tool and development server for fast compilation and hot module replacement
- Wouter for lightweight client-side routing (alternative to React Router)

**Component Architecture:**
- Component-based structure under `client/src/components/`
- Separated UI primitives (shadcn/ui components) in `client/src/components/ui/`
- Page components in `client/src/pages/`
- Example components for documentation/testing in `client/src/components/examples/`

**Styling System:**
- Tailwind CSS for utility-first styling with custom configuration
- Custom design tokens defined in CSS variables (light/dark mode support)
- Warm color palette based on browns and neutrals with amber/violet accents
- Typography system using Inter and JetBrains Mono fonts
- shadcn/ui component library (New York style) for consistent UI patterns

**Animation & Interactivity:**
- Framer Motion for smooth page transitions and scroll-based animations
- Custom hover and active states through Tailwind utilities
- Responsive design with mobile-first approach

**State Management:**
- React Query (TanStack Query) for server state management
- React hooks for local component state
- Custom hooks in `client/src/hooks/` for reusable logic

### Backend Architecture

**Server Framework:**
- Express.js server serving both API routes and static frontend assets
- TypeScript throughout the stack for consistency
- Vite middleware integration for development mode

**Development vs Production:**
- Development: Vite dev server with HMR, runtime error overlay, and Replit-specific plugins
- Production: Pre-built static assets served from `dist/public/`

**API Structure:**
- Modular route registration system in `server/routes.ts`
- Storage abstraction layer with in-memory implementation (`MemStorage`)
- Request/response logging middleware for API endpoints

### Data Storage

**Database Setup:**
- Drizzle ORM configured for PostgreSQL (via Neon serverless driver)
- Schema definitions in `shared/schema.ts` with Zod validation
- Migration files managed in `migrations/` directory
- Current schema includes basic user table (id, username, password)

**Storage Interface:**
- Abstracted storage layer (`IStorage` interface) allows switching between implementations
- In-memory storage for development/testing
- PostgreSQL for production (configured but not actively used in current implementation)

**Design Decision:**
The application is configured for database usage but currently operates with in-memory storage. This allows for rapid prototyping while maintaining the architecture for future database integration when needed.

### External Dependencies

**Form Handling:**
- Formspree integration for contact form submissions (endpoint: `https://formspree.io/f/xwpapvgn`)
- Client-side form validation with React Hook Form and Zod resolvers

**UI Component Library:**
- Radix UI primitives (@radix-ui/*) for accessible, unstyled components
- shadcn/ui components built on top of Radix UI with custom styling
- Lucide React and React Icons for iconography

**Deployment & Hosting:**
- Vercel deployment configuration with custom headers and rewrites
- SPA routing handled via rewrite rules to `index.html`
- Static asset caching with max-age headers
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)

**Replit-Specific Integrations:**
- Vite plugins for development: cartographer, dev banner, and runtime error modal
- Conditional loading based on `REPL_ID` environment variable

**External Services:**
- Google Fonts for Inter and JetBrains Mono typography
- Neon Database (serverless PostgreSQL) via `@neondatabase/serverless`

**Design Philosophy:**
The architecture prioritizes developer experience and rapid iteration, leveraging modern tooling (Vite, TypeScript, Tailwind) while maintaining flexibility through abstraction layers (storage interface, environment-based configuration). The warm, minimal design system is enforced through design guidelines and custom Tailwind configuration.