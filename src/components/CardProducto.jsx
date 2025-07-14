import { useState } from "react";
import { useCarrito } from "../context/CarritoContext";
import { Link, useLocation } from "react-router-dom";
import { FaCartPlus } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

function CardProducto({ producto }) {
const { agregarAlCarrito } = useCarrito();
const [mensaje, setMensaje] = useState("");
const location = useLocation();
const enAdmin = location.pathname.includes("admin");

const handleAgregar = () => {
    agregarAlCarrito(producto);
    toast.success("✅ Producto agregado al carrito");
    setTimeout(() => setMensaje(""), 3000);
};

return (
    <div className="card producto-card">
    <img src={producto.imagen} alt={producto.nombre} />
    <h3>{producto.nombre}</h3>
    <p>{producto.descripcion}</p>
    <p className="precio">${producto.precio}</p>

    {!enAdmin ? (
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>    
        <button onClick={handleAgregar}><FaCartPlus /> Agregar al carrito</button>
        <Link to={`/productos/${producto.id}`}>
        <button className="btn-detalles">Ver Detalles</button>
        </Link>
        </div>
    ) : (
        <p style={{ fontStyle: "italic" }}>Vista admin — controles en panel</p>
    )}

    {mensaje && <p className="mensaje-exito">{mensaje}</p>}
    </div>
);
}

export default CardProducto;
