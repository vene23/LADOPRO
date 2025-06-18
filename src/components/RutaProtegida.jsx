import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function RutaProtegida({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default RutaProtegida;
