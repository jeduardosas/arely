import DatosNombres from "./DatosNombres"
import DatosNombresPapas from "./DatosNombresPapas"
import DatosNombrePadrinos from "./DatosNombrePadrinos"
import DatosFecha from "./DatosFecha"

const Datos = () => {
  return (
    <div className='datos-nombres'>
      <DatosNombres/>
      <DatosNombresPapas />
      <DatosNombrePadrinos />
      <DatosFecha />
    </div>
  )
}

export default Datos