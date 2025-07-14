import { useState, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import "./Admin.css";
import { toast } from 'react-toastify';

const AgregarProducto = () => {
const { agregarProducto } = useContext(ProductsContext);

const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    imagen: "",
    precio: "",
    detalle: ""
});

const [mensaje, setMensaje] = useState("");

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
    await agregarProducto({ ...form, precio: Number(form.precio) });
    toast.success("✅ Producto agregado correctamente.");
    setForm({ nombre: "", descripcion: "", imagen: "", precio: "", detalle: "" });
    } catch (err) {
    setMensaje("Hubo un error al agregar el producto.");
    }
};

return (
    <div className="formulario-container">
    <h2>Agregar Producto</h2>
    {mensaje && <p className="mensaje-form">{mensaje}</p>}
    <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
        <textarea name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} />
        <input type="text" name="imagen" placeholder="URL de la Imagen" value={form.imagen} onChange={handleChange} />
        <input type="number" name="precio" placeholder="Precio" value={form.precio} onChange={handleChange} />
        <textarea name="detalle" placeholder="Detalle (opcional)" value={form.detalle} onChange={handleChange} />
        <button type="submit">Agregar</button>
    </form>
    </div>
);
};

export default AgregarProducto;
