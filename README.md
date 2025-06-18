Este proyecto es una simulación de eCommerce orientado al Laboratorio de Dosimetría y Protección Radiológica (LaDoPro), desarrollado como parte del curso de ReactJS.

# React PreEntrega - Mini eCommerce para LaDoPRO
Este proyecto es una mini app de eCommerce desarrollada en ReactJS como parte de la preentrega del curso. Simula un catálogo de servicios del laboratorio LaDoPRO (Dosimetría y Protección Radiológica), con funcionalidades de carrito, rutas protegidas y login simulado.

## Tecnologías y Librerías Usadas
-React 19.1
-React Router DOM 6+
-Vite 6.3
-Context API (Auth + Carrito)
-CSS modular (por componente)
-Estructura escalable y modularizada (páginas / componentes / contexto)

## Funcionalidades

* Listado de productos (servicios del laboratorio) desde productosMock.js
* Detalles extendido de cada producto (con ruta dinámica /productos/:id)

* Agregar al carrito de compras (con useState, useContext y local state, con notificaciones y total)
* Simulación de autenticación mediante AuthContext y Login con `useContext`
* Rutas protegidas: /carrito y /admin solo accesibles tras iniciar sesión
* Navegación por Navbar con estilos modularizados
* Estilos organizados por página (modularidad CSS)
* Notificación de producto agregado al carrito. Botón de "Finalizar compra" con confirmación visual


## Estructura de Carpetas
react-preentrega/
├── public/
│   ├── index.html
│   └── img/                # Imágenes de productos
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CardProducto.jsx
│   │   └── RutaProtegida.jsx
│   │   └── Navbar.css
│   ├── context/
│   │   └── AuthContext.jsx
│   │   └── CarritoContext.jsx
│   ├── data/
│   │   └── productosMock.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Productos.jsx
│   │   ├── DetalleProducto.jsx
│   │   ├── Carrito.jsx
│   │   ├── Admin.jsx
│   │   └── Login.jsx
│   ├── styles/
│   │   ├── main.css
│   │   ├── App.css
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

## 🚫 Autenticación

* Simulada con `AuthContext`
* Login activa `isAuthenticated`
* Las rutas protegidas redirigen al login si no hay sesión iniciada

## Detalles adicionales

* Productos incluyen descripciones extendidas en la vista de detalle.
* Algunos productos no tienen precio (requieren contacto).
* "Finalizar compra" simula un cierre de operación.

## Notas Finales

Las imágenes se almacenan en public/img/ para acceso directo

vite.svg, react.svg, index.html (en public) son parte de la plantilla Vite

assets/ fue eliminada (no se utilizó finalmente)

La autenticación es simulada (sin back-end), suficiente para la preentrega

Este proyecto está listo para escalar con una API real en la entrega final

## 📃 Autor y Curso

Realizado por \[Venecia Calandrón] para el curso de ReactJS


