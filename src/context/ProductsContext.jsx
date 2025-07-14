import { createContext, useState } from "react";
import { useContext } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://6857367d21f5d3463e54b5d4.mockapi.io/api1/producto"; // Reemplazar con tu URL real

  const fetchProductos = async () => {
    try {
      const res = await fetch("https://6857367d21f5d3463e54b5d4.mockapi.io/api1/producto");
      const data = await res.json();
      setProductos(data);
    } catch (err) {
      console.error("Error al obtener productos:", err);
      setError("No se pudieron cargar los productos.");
    } finally {
      setLoading(false);
    }
  };

  const agregarProducto = async (producto) => {
    try {
      const res = await fetch("https://6857367d21f5d3463e54b5d4.mockapi.io/api1/producto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });
      const nuevo = await res.json();
      setProductos([...productos, nuevo]);
    } catch (err) {
      console.error("Error al agregar producto:", err);
    }
  };

  const editarProducto = async (productoActualizado) => {
    try {
      const res = await fetch(`https://6857367d21f5d3463e54b5d4.mockapi.io/api1/producto/${productoActualizado.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productoActualizado),
      });
      const actualizado = await res.json();
      setProductos(productos.map((p) => (p.id === productoActualizado.id ? actualizado : p)));
    } catch (err) {
      console.error("Error al editar producto:", err);
    }
  };

  const eliminarProducto = async (id) => {
    try {
    await fetch(`https://6857367d21f5d3463e54b5d4.mockapi.io/api1/producto/${id}`, {
        method: "DELETE",
      });
      setProductos(productos.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };


return (
    <ProductsContext.Provider
      value={{ productos, fetchProductos, agregarProducto, eliminarProducto, editarProducto }}
    >
      {children}
    </ProductsContext.Provider>
  );
};


export const useProductos = () => useContext(ProductsContext);
