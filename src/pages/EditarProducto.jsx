import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import "./Admin.css";

const EditarProducto = () => {
const { id } = useParams();
const navigate = useNavigate();
const { productos, editarProducto } = useContext(ProductsContext);

const productoOriginal = productos.find(p => p.id === id);

const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    imagen: "",
    precio: "",
    detalle: ""
});

const [mensaje, setMensaje] = useState("");

useEffect(() => {
    if (productoOriginal) {
    setForm({
        nombre: productoOriginal.nombre || "",
        descripcion: productoOriginal.descripcion || "",
        imagen: productoOriginal.imagen || "",
        precio: productoOriginal.precio || "",
        detalle: productoOriginal.detalle || ""
    });
    }
}, [productoOriginal]);

const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
};

    const validar = () => {
    if (!form.nombre.trim()) return "El nombre es obligatorio.";
    if (form.descripcion.length < 10) return "La descripción debe tener al menos 10 caracteres.";
    if (!form.imagen.trim()) return "La imagen es obligatoria.";
    if (isNaN(form.precio) || Number(form.precio) <= 0) return "El precio debe ser un número mayor a 0.";
    return null;
};

    const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validar();
    if (error) return setMensaje(error);

    try {
    await editarProducto(id, { ...form, precio: Number(form.precio) });
    setMensaje("✅ Cambios guardados");
    } catch (err) {
    setMensaje("Hubo un error al editar el producto.");
    }
};

if (!productoOriginal) return <p>Producto no encontrado.</p>;

return (
    <div className="formulario-container">
    <h2>Editar Producto</h2>
    {mensaje && <p className="mensaje-form success">{mensaje}</p>}
    <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
        <textarea name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} />
        <input type="text" name="imagen" placeholder="URL de la Imagen" value={form.imagen} onChange={handleChange} />
        <input type="number" name="precio" placeholder="Precio" value={form.precio} onChange={handleChange} />
        <textarea name="detalle" placeholder="Detalle (opcional)" value={form.detalle} onChange={handleChange} />
        <button type="submit">Guardar Cambios</button>
    </form>
    {mensaje && (
        <button onClick={() => navigate("/admin")} style={{ marginTop: "1rem" }}>
        Volver al Panel
        </button>
    )}
    </div>
);
};

export default EditarProducto;
