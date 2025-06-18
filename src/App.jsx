import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Carrito from "./pages/Carrito";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import RutaProtegida from "./components/RutaProtegida";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path="/carrito" element={
          <RutaProtegida>
            <Carrito />
          </RutaProtegida>
        } />
        <Route path="/admin" element={
          <RutaProtegida>
            <Admin />
          </RutaProtegida>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
