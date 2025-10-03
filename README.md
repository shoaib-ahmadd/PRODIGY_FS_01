# Secure Authentication System

A production-ready authentication system built with React, TypeScript, and Supabase featuring secure user registration, login, and protected routes.

## Features

- **Secure Authentication**: Email/password authentication powered by Supabase
- **Protected Routes**: Automatic redirect for unauthenticated users
- **Session Management**: Persistent sessions with automatic token refresh 
- **Password Security**: Minimum 6-character passwords with secure hashing
- **Row Level Security**: Database policies ensure users can only access their own data
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **Real-time Feedback**: Loading states and error handling for all auth operations

## Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

### Backend
- **Supabase** - Backend as a Service
- **PostgreSQL** - Database with Row Level Security
- **Supabase Auth** - Authentication service

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account (already configured)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. The environment variables are already configured in `.env`:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

### Development

Start the development server:
```bash
npm run dev
```
### Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.tsx    # Protected dashboard view
│   ├── LoginForm.tsx    # Login form component
│   ├── SignUpForm.tsx   # Registration form component
│   └── ProtectedRoute.tsx # Route protection wrapper
├── contexts/
│   └── AuthContext.tsx  # Authentication state management
├── lib/
│   └── supabase.ts      # Supabase client configuration
├── pages/
│   └── AuthPage.tsx     # Authentication page (login/signup)
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

## Authentication Flow

1. **Sign Up**: Users create an account with email and password
   - Password must be at least 6 characters
   - User profile is automatically created in the database
   - Success message displayed upon completion

2. **Login**: Users authenticate with credentials
   - Secure session created on successful login
   - Session persists across page refreshes
   - Invalid credentials show clear error messages

3. **Protected Access**: Authenticated users access the dashboard
   - Automatic redirect to login for unauthenticated users
   - Session validation on every protected route
   - Logout functionality clears session

## Database Schema

### Profiles Table
- `id` (uuid) - Primary key, references auth.users
- `email` (text) - User's email address
- `full_name` (text) - User's full name (optional)
- `created_at` (timestamptz) - Account creation timestamp
- `updated_at` (timestamptz) - Last update timestamp

### Row Level Security Policies
- Users can only read their own profile
- Users can only update their own profile
- Users can insert their own profile on signup

## Security Features

- **Password Hashing**: Handled automatically by Supabase Auth
- **Session Tokens**: Secure JWT tokens with automatic refresh
- **Row Level Security**: Database-level access control
- **HTTPS Only**: All API communications encrypted
- **Input Validation**: Client-side and server-side validation

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Browser Support

Modern browsers with ES6+ support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is available for use under standard software development practices.
