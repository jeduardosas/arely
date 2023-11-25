import { useLocation, Navigate } from "react-router-dom";
import { invitados } from "../../data";
import CountDown from "../components/ContDown";
import 'animate.css'
import '../styles/invitacion.css'

const Invitacion = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const nombre = params.get("nombre") || "";
  const numPases = params.get("numPases") || "";

  console.log(nombre, numPases);
  if (nombre === "" && numPases === "") {
    return <Navigate to="/notfound" />;
  }

  const existe = invitados.filter(
    (invitado) => invitado.nombre === nombre && invitado.pases == numPases
  );
  if (existe.length === 0) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div className="centrar">
      <header className="header centrar">
        <div className="header-image">
          <img className="animate__animated animate__fadeInDown" src='../../public/img/monograma.png' alt="" />
        </div>
      </header>

      <div className="card centrar sombra animate__animated animate__fadeInLeft">
        <div className="card-stroke">
          <h1 className="card-nombres">&nbsp;BETSABE</h1>
          <h1 className="card-nomb3res"><span className="y">&</span>GABRIEL</h1>
        </div>
      </div>

      <div className="countDown centrar">
        {<CountDown />}
      </div>

      <div className="confirmar">
        <h2>Confirmación de Asistencia</h2>
        <div className="confirmar-card  sombra">
          <div className="confirmar-border centrar">
          <div className="confirmar-whats">
            <p>WhatsApp</p>
            <img src="../../public/img/icons/whatsapp.png" alt="" />
          </div>
          <button><a target="_blanc" href="https://api.whatsapp.com/send?phone=527331000799">7331000799</a></button>
          </div>
        </div>
      </div>

      <div className="lugares">
        <h2 className="lugares-arriba">HEMOS RESERVADO</h2>
        <p>4</p>
        <h2 className="lugares-abajo">Lugares en Tu Honor</h2>
      </div>
    </div>
    
    
  );
};

export default Invitacion;
