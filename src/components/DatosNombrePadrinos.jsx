
import useScrollVisible from "/@/hooks/useScrollVisible";
const DatosNombrePadrinos = () => {
  //MANJAR ANIMACIONES
  const datosPadrinosVisible = useScrollVisible('datosPadrinosSection')

  return (
    <div id="datosPadrinosSection" className={`datos-padrinos ${datosPadrinosVisible && 'animate__animated animate__fadeInRight' }`}>
      <p className="datosPadrinos-title">Mis Padrinos</p>
      <div>
        <p className="datosPadrinos-item">Karina Martinez Velasco</p>
        <p className="datosPadrinos-item">Luis Armando Sánchez Segura</p>
      </div>
    </div>
  )
}

export default DatosNombrePadrinos