import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Dashboard } from './components/Dashboard';
import { AuthPage } from './pages/AuthPage';

function App() {
  return (
    <AuthProvider>
      <ProtectedRoute fallback={<AuthPage />}>
        <Dashboard />
      </ProtectedRoute>
    </AuthProvider>
  );
}

export default App;
