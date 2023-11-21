import { useState } from "react";
import { invitados } from "../../data.js";
import { generarLink } from "../js/functions.js";

const Generador = () => {
  let name = "";
  const [nombre, setNombre] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    name = invitados.filter((invitado) => invitado.nombre === nombre);
    if (name.length === 0) {
      setLink("Invitado No Encontrado");
      setNombre("");
      return;
    }

    setLink(generarLink(name[0]));
    setNombre("");
  };

  const copiar = () => {
    // Copiar el texto al portapapeles
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setLink("");
      })
      .catch((error) => {
        console.error("Error al copiar al portapapeles", error);
      });
  };

  return (
    <div className="generador">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="generador-form"
      >
        <h1>Generador de Links</h1>
        <div className="form-item">
          <label>Escribe el Nombre de Tu invitado</label>
          <input
            onChange={(e) => {
              setNombre(e.target.value.toUpperCase());
            }}
            type="text"
            value={nombre}
          />
        </div>
        <div className="btn">
          <input className="boton" type="submit" value="Generar Link" />
        </div>

        {link ? (
          <div>
            <p>{link}</p>
            {link === "Invitado No Encontrado" ? (
              ""
            ) : (
              <button onClick={copiar}>copiar</button>
            )}
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};


export default Generador;