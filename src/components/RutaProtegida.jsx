import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

function RutaProtegida({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RutaProtegida;
