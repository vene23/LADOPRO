import { useParams } from "react-router-dom";
import productos from "../data/productosMock";
import { useCarrito } from "../context/CarritoContext";

function DetalleProducto() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id == id);
  const { agregarAlCarrito } = useCarrito();

  if (!producto) return <p>Producto no encontrado</p>;

return (
    <div className="card">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} style={{ maxWidth: "300px" }} />
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      {producto.precio !== null && (
      <p><strong>Precio estimado:</strong> ${producto.precio}</p>
)}
      {producto.detalle && (
      <p><strong>Detalle:</strong> {producto.detalle}</p>
)}
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  );
}

export default DetalleProducto;
