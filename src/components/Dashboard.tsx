import { useAuth } from '../contexts/AuthContext';
import { LogOut, User, Shield, CheckCircle } from 'lucide-react';

export function Dashboard() {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Secure App</span>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
              <p className="text-gray-600">You're successfully authenticated and viewing protected content.</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h2>
            <dl className="space-y-3">
              <div className="flex items-center gap-3">
                <dt className="text-sm font-medium text-gray-500 w-24">Email:</dt>
                <dd className="text-sm text-gray-900">{user?.email}</dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="text-sm font-medium text-gray-500 w-24">User ID:</dt>
                <dd className="text-sm text-gray-900 font-mono">{user?.id}</dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="text-sm font-medium text-gray-500 w-24">Status:</dt>
                <dd className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">Authenticated</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Access</h3>
            <p className="text-sm text-gray-600">
              Only authenticated users can view this page. All routes are protected by authentication middleware.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Session Management</h3>
            <p className="text-sm text-gray-600">
              Your session is securely managed by Supabase with automatic token refresh and validation.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-600">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Protection</h3>
            <p className="text-sm text-gray-600">
              Row Level Security policies ensure you can only access your own data in the database.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
