<div align="center">

<img src="https://img.shields.io/badge/Secure-Auth%20System-6366f1?style=for-the-badge&logo=shield&logoColor=white" alt="Secure Auth System" height="40"/>

# Secure Authentication System

**A production-ready authentication system built with React, TypeScript & Supabase**

Featuring secure user registration, login, protected routes, and session management — all backed by PostgreSQL Row Level Security.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## Overview

This project provides a fully functional, secure authentication foundation ready to plug into any React application. It handles the full auth lifecycle — registration, login, session persistence, and protected routing — so you can focus on building your product.

---

## Features

| Feature | Description |
|---|---|
| 🔐 **Secure Authentication** | Email/password auth powered by Supabase |
| 🛡️ **Protected Routes** | Automatic redirect for unauthenticated users |
| 🔄 **Session Management** | Persistent sessions with automatic JWT token refresh |
| 🔑 **Password Security** | Minimum 6-character passwords with secure hashing |
| 🗄️ **Row Level Security** | Database policies ensure users access only their own data |
| 🎨 **Modern UI** | Beautiful, responsive design with Tailwind CSS |
| ⚡ **Real-time Feedback** | Loading states and error handling for all auth operations |

---

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| ![React](https://img.shields.io/badge/React_18-61DAFB?logo=react&logoColor=black) | UI framework |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) | Type safety |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) | Fast build tool & dev server |
| ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white) | Utility-first styling |
| **Lucide React** | Icon library |

### Backend

| Technology | Purpose |
|---|---|
| ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white) | Backend as a Service |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white) | Database with Row Level Security |
| **Supabase Auth** | Authentication & session service |

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account *(already configured)*

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/secure-auth-system.git
cd secure-auth-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

The `.env` file is already pre-configured with:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Start Development Server

```bash
npm run dev
```

App will be running at `http://localhost:5173`

---

## Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript type checking
```

---

## Project Structure

```
src/
├── components/
│   ├── Dashboard.tsx        # Protected dashboard view
│   ├── LoginForm.tsx        # Login form component
│   ├── SignUpForm.tsx       # Registration form component
│   └── ProtectedRoute.tsx  # Route protection wrapper
│
├── contexts/
│   └── AuthContext.tsx      # Global authentication state
│
├── lib/
│   └── supabase.ts          # Supabase client configuration
│
├── pages/
│   └── AuthPage.tsx         # Login / signup page
│
├── App.tsx                  # Root application component
└── main.tsx                 # Application entry point
```

---

## Authentication Flow

```
┌─────────────────────────────────────────────────────┐
│                    Sign Up                          │
│  Email + Password → Supabase Auth → Profile Created │
└───────────────────────┬─────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│                     Login                           │
│   Credentials → JWT Token → Persistent Session      │
└───────────────────────┬─────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│               Protected Access                      │
│  Valid Session → Dashboard  |  No Session → Redirect│
└─────────────────────────────────────────────────────┘
```

1. **Sign Up** — User registers with email & password. Profile is auto-created in the database. Success message shown on completion.
2. **Login** — Credentials verified by Supabase Auth. Secure JWT session created and persisted across refreshes.
3. **Protected Routes** — Every protected page validates the session. Unauthenticated users are redirected to login. Logout clears the session entirely.

---

## Database Schema

### `profiles` Table

| Column | Type | Description |
|---|---|---|
| `id` | `uuid` | Primary key, references `auth.users` |
| `email` | `text` | User's email address |
| `full_name` | `text` | User's full name *(optional)* |
| `created_at` | `timestamptz` | Account creation timestamp |
| `updated_at` | `timestamptz` | Last profile update timestamp |

### Row Level Security Policies

- ✅ Users can **read** only their own profile
- ✅ Users can **update** only their own profile
- ✅ Users can **insert** their own profile on signup

---

## Security Features

| Layer | Implementation |
|---|---|
| 🔒 **Password Hashing** | Handled automatically by Supabase Auth |
| 🎟️ **Session Tokens** | Secure JWT with automatic refresh |
| 🗄️ **Row Level Security** | Database-level access control policies |
| 🌐 **HTTPS Only** | All API communications encrypted in transit |
| ✅ **Input Validation** | Client-side and server-side validation |

---

## Browser Support

| Browser | Support |
|---|---|
| ![Chrome](https://img.shields.io/badge/Chrome-Latest-4285F4?logo=googlechrome&logoColor=white) | ✅ Supported |
| ![Firefox](https://img.shields.io/badge/Firefox-Latest-FF7139?logo=firefox&logoColor=white) | ✅ Supported |
| ![Safari](https://img.shields.io/badge/Safari-Latest-000000?logo=safari&logoColor=white) | ✅ Supported |
| ![Edge](https://img.shields.io/badge/Edge-Latest-0078D7?logo=microsoftedge&logoColor=white) | ✅ Supported |

---

## License

This project is available for use under standard software development practices.

---

<div align="center">

Built with ❤️ using React, TypeScript & Supabase

</div>
