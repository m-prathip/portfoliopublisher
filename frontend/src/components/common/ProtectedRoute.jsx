import { Navigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { PageLoader } from './Spinner';

const ProtectedRoute = ({ children }) => {
  const { isAuth, loading, user } = useAuth();
  const { dashboardId } = useParams();

  if (loading) return <PageLoader />;
  if (!isAuth || !user) return <Navigate to="/auth/login" replace />;

  const expectedDashboardId = `${user.username}-${user.dashboardHash}`;
  
  if (dashboardId && dashboardId !== expectedDashboardId) {
    return <Navigate to={`/${expectedDashboardId}/profile`} replace />;
  }

  return children;
};

export default ProtectedRoute;
