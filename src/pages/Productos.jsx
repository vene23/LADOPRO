import productos from "../data/productosMock";
import CardProducto from "../components/CardProducto";

function Productos() {
  return (
    <div>
      <h2>Productos Disponibles</h2>
      <div className="productos-container">
        {productos.map((producto) => (
          <CardProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default Productos;
