import "./Admin.css";

function Admin() {
  return (
    <div className="admin-container">
      <h2>Panel de Administración</h2>
      <p>Esta es una ruta protegida. Solo usuarios autenticados pueden verla.</p>
    </div>
  );
}

export default Admin;
