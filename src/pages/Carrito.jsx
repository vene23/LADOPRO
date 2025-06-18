import { useCarrito } from "../context/CarritoContext";

function Carrito() {
  const { carrito, quitarDelCarrito } = useCarrito();

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  return (
    <div className="card">
      <h2>Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>Aún no agregaste productos.</p>
      ) : (
        <ul>
          {carrito.map((producto, index) => (
            <li key={index} style={{ marginBottom: "1rem", listStyle: "none" }}>
              <strong>{producto.nombre}</strong> - ${producto.precio}
              <button
                style={{ marginLeft: "1rem" }}
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
