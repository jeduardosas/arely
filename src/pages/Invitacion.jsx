import { useLocation, Navigate } from "react-router-dom";
import { invitados } from "../../data";

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
    <div>
      <h1
        style={{ textTransform: "capitalize" }}
      >{`familia: ${nombre.toLowerCase()}, hemos reservado ${numPases} pases en su honor`}</h1>

    </div>
  );
};

export default Invitacion;
