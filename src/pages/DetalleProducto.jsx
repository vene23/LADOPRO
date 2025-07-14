import { useParams, Link } from "react-router-dom";
import { useProductos } from "../context/ProductsContext";
import { useCarrito } from "../context/CarritoContext";

function DetalleProducto() {
  const { id } = useParams();
  const { productos } = useProductos();
  const { agregarAlCarrito } = useCarrito();

  const productoSeleccionado = productos.find((p) => p.id == id);

  if (!productoSeleccionado) return <p>Producto no encontrado</p>;

return (
    <div className="card">
      <h2>{productoSeleccionado.nombre}</h2>
      <img src={productoSeleccionado.imagen} alt={productoSeleccionado.nombre} style={{ maxWidth: "300px" }} />
      <p><strong>Descripción:</strong> {productoSeleccionado.descripcion}</p>
      {productoSeleccionado.detalle && (
        <p><strong>Detalle:</strong> {productoSeleccionado.detalle}</p>
      )}
      {productoSeleccionado.precio !== null && (
        <p><strong>Precio estimado:</strong> ${productoSeleccionado.precio}</p>
      )}
      <button onClick={() => agregarAlCarrito(productoSeleccionado)}>Agregar al carrito</button>
    
    <Link to="/productos">
        <button style={{ marginTop: "1rem" }}>⬅ Volver a Productos</button>
    </Link>
  </div>
  );
}

export default DetalleProducto;
