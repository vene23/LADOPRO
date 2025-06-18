import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenida a LaDoPro</h1>
      <p>
        Especialistas en protección radiológica. Acá podés conocer nuestros servicios, y cómo te ayudamos.
      </p>
      <img src="/img/lablogo.png" alt="Logo del laboratorio" className="home-logo" />
    </div>
  );
}

export default Home;
