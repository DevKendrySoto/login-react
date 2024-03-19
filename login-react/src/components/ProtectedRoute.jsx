import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

function ProtectedRouter({ children }) {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div>
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
}
export default ProtectedRouter;
