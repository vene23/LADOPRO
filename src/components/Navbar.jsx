import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css"; // Asegurate de tener este CSS

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // redirige al home
  };
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/carrito">Carrito</Link>
      <Link to="/admin">Admin</Link>

    {!user ? (
        <Link to="/login">Login</Link>
      ) : (
        <button className="logout-button" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      )}
    </nav>
  );
}

export default Navbar;