import "./Home.css";
import styled from 'styled-components';

const Bienvenida = styled.h1`
  color: #007bff;
  font-size: 2.5rem;
`;

function Home() {
  return (
    <div className="home-container">
      <Bienvenida>Bienvenido a LaDoPro</Bienvenida>
      <p>
        Especialistas en protección radiológica. Acá podés conocer nuestros servicios, y cómo te ayudamos.
      </p>
      <img src="/img/lablogo.png" alt="Logo del laboratorio" className="home-logo" />
    </div>
  );
}

export default Home;
