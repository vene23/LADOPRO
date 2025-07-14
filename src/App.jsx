import 'bootstrap/dist/css/bootstrap.min.css';
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
import AgregarProducto from "./pages/AgregarProducto";
import EditarProducto from "./pages/EditarProducto";
import Layout from './Layout';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/productos" element={<Layout><Productos /></Layout>} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path="/carrito" element={
          <RutaProtegida>
        <Layout><Carrito /></Layout>
          </RutaProtegida>
        } />
        <Route path="/admin" element={
          <RutaProtegida>
          <Layout><Admin /></Layout>
          </RutaProtegida>
        } />
        <Route path="/agregar" element={
          <RutaProtegida>
          <Layout><AgregarProducto /></Layout>
          </RutaProtegida>
        } />
        <Route path="/editar/:id" element={
          <RutaProtegida>
          <Layout><EditarProducto /></Layout>
          </RutaProtegida>
        } />
        <Route path="/productos/:id" element={
        <Layout><DetalleProducto /></Layout>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
