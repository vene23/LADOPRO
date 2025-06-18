import "./Login.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/"); // Redirige al home
  };

    return (
    <div className="card">
      <h2>Iniciar Sesión</h2>
      <p>Accedé a tu cuenta para ver el carrito o administrar productos.</p>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
}

export default Login;
