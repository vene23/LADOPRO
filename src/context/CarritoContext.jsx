import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
const [carrito, setCarrito] = useState([]);

const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
};

const quitarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
};

return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, quitarDelCarrito }}>
{children}
    </CarritoContext.Provider>
);
};
