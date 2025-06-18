import { useState } from "react";
import { useCarrito } from "../context/CarritoContext";
import { Link } from "react-router-dom";

function CardProducto({ producto }) {
const { agregarAlCarrito } = useCarrito();
const [mensaje, setMensaje] = useState("");

const handleAgregar = () => {
    agregarAlCarrito(producto);
    setMensaje("✅ Producto agregado al carrito");
    setTimeout(() => setMensaje(""), 3000);
};

return (
    <div className="card producto-card">
    <img src={producto.imagen} alt={producto.nombre} />
    <h3>{producto.nombre}</h3>
    <p>{producto.descripcion}</p>
    <p className="precio">${producto.precio}</p>

    <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button onClick={handleAgregar}>Agregar al carrito</button>
        <Link to={`/productos/${producto.id}`}>
        <button className="btn-detalles">Ver Detalles</button>
        </Link>
    </div>

    {mensaje && <p className="mensaje-exito">{mensaje}</p>}
</div>
);
}

export default CardProducto;
