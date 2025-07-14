import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/main.css';
import { ProductsProvider } from './context/ProductsContext';
import { CarritoProvider } from "./context/CarritoContext";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
        </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
