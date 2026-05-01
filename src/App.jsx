import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './services/AuthContext';
import Layout from './layouts/Layout';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Students from './pages/Students/Students';
import StudentDetail from './pages/Students/StudentDetail';
import Reports from './pages/Reports/Reports';
import Messages from './pages/Messages/Messages';
import Recommendations from './pages/Recommendations/Recommendations';
import Alerts from './pages/Alerts/Alerts';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route index element={<Dashboard />} />
        <Route path="students" element={<Students />} />
        <Route path="students/:id" element={<StudentDetail />} />
        <Route path="reports" element={<Reports />} />
        <Route path="messages" element={<Messages />} />
        <Route path="recommendations" element={<Recommendations />} />
        <Route path="alerts" element={<Alerts />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
export default App;
