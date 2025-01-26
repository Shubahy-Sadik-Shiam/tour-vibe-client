import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';

const AdminRoutes = ({children}) => {
    const { user, loading } = useAuth();
    const [isAdmin, isLoading] = useAdmin();
    const location = useLocation();
    if (loading || isLoading) {
      return (
        <div className="flex justify-center items-center py-60">
          <progress className="progress w-56"></progress>
        </div>
      );
    }
    if (user && isAdmin) {
      return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;