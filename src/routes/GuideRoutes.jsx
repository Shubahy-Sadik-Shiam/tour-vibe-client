import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useGuide from "../hooks/useGuide";


const GuideRoutes = ({children}) => {
    const { user, loading } = useAuth();
    const [isGuide, isLoading] = useGuide();
    const location = useLocation();
    if (loading || isLoading) {
      return (
        <div className="flex justify-center items-center py-60">
          <progress className="progress w-56"></progress>
        </div>
      );
    }
    if (user && isGuide) {
      return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default GuideRoutes;