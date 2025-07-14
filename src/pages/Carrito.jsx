import { useCarrito } from "../context/CarritoContext";
import { useAuth } from "../context/AuthContext";
import "./Carrito.css";

function Carrito() {
  const { carrito, quitarDelCarrito } = useCarrito();
  const { user } = useAuth();

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  if (!user) {
    return (
      <div className="card aviso">
        <h2>Acceso restringido</h2>
        <p>Debés iniciar sesión para ver tu carrito.</p>
      </div>
    );
  }

  return (
    <div className="card carrito-container">
      <h2>Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>Aún no agregaste productos.</p>
      ) : (
        <ul className="carrito-lista">
          {carrito.map((producto, index) => (
            <li key={index} className="carrito-item">
              <strong>{producto.nombre}</strong> - ${producto.precio}
              <button
                className="quitar-btn"
                onClick={() => quitarDelCarrito(producto.id)}
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
      {carrito.length > 0 && (
        <button
          className="finalizar-btn"
          onClick={() => {
            alert("Gracias por tu compra. Recibirás un correo con la información.");
          }}
        >
          Finalizar compra
        </button>
      )}
    </div>
  );
}

export default Carrito;
