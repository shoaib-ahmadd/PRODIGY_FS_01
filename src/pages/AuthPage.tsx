import { useState } from 'react';
import { LoginForm } from '../components/LoginForm';
import { SignUpForm } from '../components/SignUpForm';
import { Shield } from 'lucide-react';

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6 hidden lg:block">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-12 h-12" />
            <span className="text-3xl font-bold">Secure App</span>
          </div>
          <h1 className="text-5xl font-bold leading-tight">
            Secure authentication for modern applications
          </h1>
          <p className="text-xl text-blue-100">
            Built with industry-standard security practices, including encrypted passwords,
            session management, and role-based access control.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-lg">Create Account</h3>
              <p className="text-sm text-blue-100">Sign up with your email and password</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-lg">Secure Login</h3>
              <p className="text-sm text-blue-100">Access protected content safely</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          {isLogin ? (
            <LoginForm onSwitchToSignUp={() => setIsLogin(false)} />
          ) : (
            <SignUpForm onSwitchToLogin={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </div>
  );
}
