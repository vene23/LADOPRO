import { Link } from "react-router-dom";
import "./Navbar.css"; // Asegurate de tener este CSS

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/carrito">Carrito</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;


