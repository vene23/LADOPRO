import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

function Layout({ children }) {
  return (
    <div className="container">
      <Navbar />
      <main className="mt-4">{children}</main>
    </div>
  );
}

export default Layout;
