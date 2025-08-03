# Labor-Stitch

A modern job marketplace platform connecting skilled laborers with employers in the construction and trades industry.

## Project Overview

Labor-Stitch is a full-stack web application that facilitates connections between skilled workers and employers. The platform features separate interfaces for laborers seeking work and hirers posting job opportunities.

## How to edit this code?

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd labor-stitch

# Step 3: Install the necessary dependencies.
npm install

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Features

- **Dual User Types**: Separate interfaces for laborers and hirers
- **Job Marketplace**: Post and browse job opportunities
- **Real-time Messaging**: Communication between laborers and employers
- **Profile Management**: Detailed profiles with skills and experience
- **Advanced Search**: Filter jobs by location, skills, wage, and more
- **Application Tracking**: Monitor job applications and responses

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Framework**: Tailwind CSS
- **Component Library**: shadcn/ui (Radix UI primitives)
- **Backend**: Supabase (PostgreSQL database, authentication, real-time subscriptions)
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: TanStack Query
- **Icons**: Lucide React

## Project Structure

- `src/pages/` - Main application pages
- `src/components/` - Reusable UI components
- `src/hooks/` - Custom React hooks
- `src/integrations/supabase/` - Database integration and types
- `supabase/migrations/` - Database schema migrations

## Development

To run the project locally:

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up your Supabase project and update the client configuration
4. Run `npm run dev` to start the development server

## Deployment

### Prerequisites for Deployment

1. **Supabase Account**: Create a project at [supabase.com](https://supabase.com)
2. **GitHub Repository**: Push your code to GitHub
3. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)

### Files to Include in GitHub

**Essential files to commit:**
```
├── src/                    # Source code
├── public/                 # Static assets
├── supabase/              # Database migrations
├── index.html             # Entry HTML file
├── package.json           # Dependencies
├── package-lock.json      # Lock file
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS config
├── tsconfig.json          # TypeScript config
├── tsconfig.app.json      # App-specific TS config
├── tsconfig.node.json     # Node-specific TS config
├── postcss.config.js      # PostCSS config
├── eslint.config.js       # ESLint config
├── components.json        # shadcn/ui config
├── README.md              # Documentation
└── .gitignore             # Git ignore rules
```

**Files to exclude (already in .gitignore):**
- `node_modules/` - Dependencies (will be installed during build)
- `dist/` - Build output
- `*.local` - Local environment files
- `.env.local` - Environment variables (create separately)

### Deploying to Vercel

1. **Prepare Environment Variables**
   Create these environment variables in Vercel dashboard:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

2. **Deploy Steps**
   - Push your code to GitHub
   - Connect your GitHub repo to Vercel
   - Vercel will auto-detect it's a Vite project
   - Add environment variables in Vercel dashboard
   - Deploy!

3. **Build Settings** (Vercel auto-detects these)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Environment Setup

Create a `.env.local` file for local development:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Note**: Update `src/integrations/supabase/client.ts` to use environment variables instead of hardcoded values.

The application can be deployed to any platform that supports React applications, such as Vercel, Netlify, or your preferred hosting service.
