Este proyecto es una simulación de eCommerce orientado al Laboratorio de Dosimetría y Protección Radiológica (LaDoPro), desarrollado como parte del curso de ReactJS.

# React Entrega - Mini eCommerce para LaDoPRO
Este proyecto es una mini app de eCommerce desarrollada en ReactJS como parte de la entrega del curso de React.js-TalentTech.Este proyecto es una simulación de una tienda de eCommerce para un laboratorio de protección radiológica. Permite a los usuarios explorar los servicios del laboratorio, agregar al carrito y simular un proceso de compra."

## Tecnologías y Librerías Usadas
- **React 19.1**: Biblioteca JavaScript para construir interfaces de usuario interactivas y reactivas.
- **React Router DOM 6+**: Manejo de rutas y navegación en aplicaciones React.
- **Vite 6.3**: Herramienta de construcción rápida para aplicaciones web modernas.
- **Context API**: Para manejo de estado global (Autenticación, Carrito y Productos).
- **React Toastify**: Librería para mostrar notificaciones flotantes (agregar al carrito, eliminar, etc.).
- **React Icons**: Iconos de uso rápido para mejorar la experiencia visual en botones y acciones.
- **Bootstrap**: Framework CSS para diseño responsive y estilización rápida.
- **Styled-Components (opcional)**: Si decides integrar estilos CSS en línea y modularizarlos.

**Otros:**
- **Vercel / Netlify**: Servicios de despliegue para aplicaciones web en la nube.
- **LocalStorage**: Persistencia de datos en el navegador para mantener el estado del carrito.

## Funcionalidades

- **Catálogo de productos (servicios)**: Visualiza los servicios disponibles de LaDoPro (laboratorio de dosimetría y protección radiológica) con descripciones extendidas y precios (algunos requieren contacto).

- **Detalles de productos**: Al hacer clic sobre un producto, el usuario puede ver una vista detallada con más información (nombre, descripción, precio y detalle opcional).

- **Carrito de compras**: Los usuarios pueden agregar productos al carrito, visualizar el total y realizar un cierre simulado de compra.

- **Autenticación simulada**: Implementación de login con autenticación simulada utilizando `AuthContext` y `useContext` para gestionar el estado de la sesión.

- **Rutas protegidas**: La sección de carrito y administración requieren que el usuario esté autenticado. Si el usuario no está autenticado, será redirigido al login.

- **Navegación**: Navegación global mediante `Navbar` con acceso rápido a Home, Productos, Carrito y Administración. Diseño responsivo usando Bootstrap.

- **Notificaciones de usuario**: Se utiliza `react-toastify` para notificar al usuario cuando un producto es agregado al carrito o cuando se elimina un producto.

- **Acción de cerrar sesión**: El usuario puede cerrar sesión en cualquier momento, lo que eliminará los productos del carrito y lo redirigirá a la página de inicio.

- **Estilos modularizados**: Los estilos están organizados por componente y página, facilitando el mantenimiento y la escalabilidad del proyecto.

- **Simulación de finalización de compra**: El botón de "Finalizar compra" simula un cierre de operación sin una API real, con una confirmación visual de compra exitosa.


## Estructura de Carpetas
ladopro-ecommerce/
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
│   │   └── ProductsContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Productos.jsx
│   │   ├── DetalleProducto.jsx
│   │   ├── AgregarProducto.jsx
│   │   ├── EditarProducto.jsx
│   │   ├── Carrito.jsx
│   │   ├── Carrito.css
│   │   ├── Admin.jsx
│   │   ├── Admin.css
│   │   ├── Login.css
│   │   └── Login.jsx
│   ├── styles/
│   │   ├── main.css
│   │   ├── App.css
│   │   └── index.css
│   ├── App.jsx
│   ├── Layout.jsx
│   └── main.jsx
├── package.json
├── package-lock.json
├── vite.config.js
├── index.html
├── eslint.config.js
├── .gitignore
└── README.md

## 🚫 Autenticación

* Simulada con `AuthContext`
* Login activa `isAuthenticated`
* Las rutas protegidas redirigen al login si no hay sesión iniciada

## Detalles adicionales

- **Almacenamiento de Imágenes**: Las imágenes de los productos se almacenan en la carpeta `public/img/` para ser accedidas fácilmente desde cualquier parte de la aplicación.
  
- **Productos Mock**: En lugar de una API real, los productos son cargados desde el archivo `productosMock.js` para facilitar el desarrollo sin necesidad de un backend real.
  
- **Autenticación simulada**: La autenticación se maneja localmente usando el contexto `AuthContext`. No se conecta con un backend real, pero simula el comportamiento de un sistema de login.
  
- **Escalabilidad**: Este proyecto está listo para ser escalado en el futuro, ya sea conectando una base de datos real o integrando una API para gestionar productos, carrito y usuarios.
  
- **Posibles mejoras**: En una versión futura se podría añadir:
  - **Validación de email y contraseña**.
  - **Conexión a base de datos** para el almacenamiento de usuarios y productos reales.
  - **Paginación en el catálogo de productos** para mejorar la carga en listados grandes.
  
## Notas Finales

Las imágenes se almacenan en public/img/ para acceso directo

vite.svg, react.svg, index.html (en public) son parte de la plantilla Vite

assets/ fue eliminada (no se utilizó finalmente)

La autenticación es simulada (sin back-end), suficiente para la preentrega

Este proyecto está listo para escalar con una API real en la entrega final

## 📃 Autor y Curso

Realizado por **Venecia Calandrón** para el curso de ReactJS

---

## Enlace de Producción y Datos de Inicio de Sesión

Puedes ver el proyecto en producción en el siguiente enlace:

- [LaDoPro eCommerce (Versión Principal)](https://ladopro.vercel.app/)
- [LaDoPro eCommerce (Versión Alternativa)](https://ladopro-venecias-projects.vercel.app/)

---

### **Inicio de sesión**:

- **Usuario**: admin
- **Contraseña**: 1234
