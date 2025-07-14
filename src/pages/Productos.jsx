import { useEffect } from "react";
import { useState } from "react";
import { useProductos } from "../context/ProductsContext";
import CardProducto from "../components/CardProducto";

function Productos() {
  const { productos, fetchProductos } = useProductos();
  const [search, setSearch] = useState("");
  
  // Filtrar productos basados en la búsqueda
  const productosFiltrados = productos.filter((producto) =>
  producto.nombre.toLowerCase().includes(search.toLowerCase())
);

  useEffect(() => {
  fetchProductos();
  }, []);

return (
    <div>
      <h2>Productos Disponibles</h2>

      {/* Barra de Búsqueda */}
      <input
        type="text"
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)} // actualiza el estado
        className="search-input"
        style={{ padding: "8px", margin: "10px 0", width: "100%" }}
      />
{/* Contenedor de productos filtrados */}
      <div className="productos-container">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <CardProducto key={producto.id} producto={producto} />
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
}

export default Productos;
