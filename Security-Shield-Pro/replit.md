# SecurityCheck - Virtual Employee Security Diagnostic Platform

## Overview

SecurityCheck is a Japanese-language B2B SaaS landing page for a security diagnostic service that uses "virtual employees" to test organizational security without involving real staff. The application is a full-stack TypeScript project with a React frontend and Express backend, designed to capture leads through a contact form.

The core value proposition is security testing that doesn't require actual employees to participate in phishing simulations or security assessments, reducing operational burden while providing accurate security posture insights.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for scroll animations and entry effects
- **Build Tool**: Vite with path aliases (@/, @shared/, @assets/)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL
- **API Design**: Typed route contracts defined in `shared/routes.ts`
- **Validation**: Zod schemas shared between frontend and backend via `drizzle-zod`

### Project Structure
```
client/          # React frontend application
  src/
    components/  # Reusable UI components
    pages/       # Route-level page components
    hooks/       # Custom React hooks
    lib/         # Utilities and query client
server/          # Express backend
  routes.ts      # API endpoint handlers
  storage.ts     # Database access layer
  db.ts          # Database connection
shared/          # Shared types and contracts
  schema.ts      # Drizzle table definitions
  routes.ts      # API route type definitions
```

### Data Flow
1. Frontend forms use React Hook Form with Zod schemas from `shared/schema.ts`
2. API calls go through typed fetch functions using route definitions from `shared/routes.ts`
3. Backend validates requests using the same Zod schemas
4. Database operations use Drizzle ORM with typed queries

### Build & Development
- Development: `npm run dev` - runs Vite dev server with HMR through Express
- Production: `npm run build` - builds both client (Vite) and server (esbuild) to `dist/`
- Database: `npm run db:push` - pushes schema changes to PostgreSQL

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connected via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries with automatic schema inference
- **connect-pg-simple**: Session storage (available but not currently implemented)

### UI Component Library
- **shadcn/ui**: Pre-built accessible components using Radix UI primitives
- **Radix UI**: Headless UI primitives for dialogs, dropdowns, forms, etc.
- **Lucide React**: Icon library

### Key NPM Packages
- `@tanstack/react-query`: Async state management
- `framer-motion`: Animation library
- `class-variance-authority`: Component variant styling
- `zod`: Runtime type validation
- `drizzle-zod`: Automatic Zod schema generation from Drizzle tables

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string (required)