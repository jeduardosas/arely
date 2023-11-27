
import { useLocation, Navigate } from "react-router-dom";
import { invitados } from "../../data";
import CountDown from "../components/ContDown";
import Header from "../components/Header";
import Confirmacion from '../components/Confirmacion';
import Reservacion from '../components/Reservacion'
import useScrollVisible from "../hooks/useScrollVisible";
import 'animate.css'
import '../styles/invitacion.css'

const Invitacion = () => {

  //ESTADOS

  //VALIDACION DE LOS PARAMS DE LA URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const nombre = params.get("nombre") || "";
  const numPases = params.get("numPases") || "";

  if (nombre === "" && numPases === "") {
    return <Navigate to="/notfound" />;
  }

  const existe = invitados.filter(
    (invitado) => invitado.nombre === nombre && invitado.pases == numPases
  );
  if (existe.length === 0) {
    return <Navigate to="/notfound" />;
  }

  const confirmacionVisible = useScrollVisible('confirmacionSection')

  return (
    <div className="centrar">
      <Header />



      <div className="countDown centrar">
        {<CountDown />}
      </div>

      <div  id='confirmacionSection' className={`confirmar ${confirmacionVisible && 'animate__animated animate__fadeInLeft'}`}>
        <Confirmacion/>
      </div>

      <div className="lugares">
        <Reservacion />
      </div>
    </div>
    
    
  );
};

export default Invitacion;
