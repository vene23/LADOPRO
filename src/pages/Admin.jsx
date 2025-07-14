import { useEffect } from "react";
import { useProductos } from "../context/ProductsContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import { FaTrash, FaEdit, FaPlus } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admin() {
  const { productos, fetchProductos, eliminarProducto } = useProductos();
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductos();
  }, []);

  const handleEliminar = (id) => {
    const confirmar = window.confirm("¿Eliminar producto?");
    if (confirmar) eliminarProducto(id);
  };

  return (
    <div className="admin-panel">
      <h2>Panel de Administración</h2>
      <p>Estás autenticado. Solo podés ver esta sección si iniciaste sesión correctamente.</p>
      <button onClick={logout}>Cerrar Sesión</button>
      <button onClick={() => navigate("/agregar")} style={{ marginTop: "1rem" }}>
      ➕ Agregar Nuevo Producto
      </button>

      <div className="productos-grid">
        {productos.map((prod) => (
          <div className="card producto-card" key={prod.id}>
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p>{prod.descripcion}</p>
            <p className="precio">${prod.precio}</p>
            <div className="admin-actions">
              <button onClick={() => navigate(`/editar/${prod.id}`)}>
                <FaEdit/> Editar              
              </button>
              <button onClick={() => handleEliminar(prod.id)}>
                <FaTrash /> Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;

