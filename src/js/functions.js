export const generarLink = (familia) => {
  const baseEnlace = "http://localhost:5173/invitacion";
  const parametros = `?nombre=${encodeURIComponent(familia.nombre)}&numPases=${
    familia.pases
  }`;
  return `${baseEnlace}${parametros}`;
};