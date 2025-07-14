import "./Login.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate,useLocation } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate(); 
  const from = location.state?.from?.pathname || "/";


  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="card">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuario"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Login;
