import React from 'react'
import useScrollVisible from "/@/hooks/useScrollVisible";

const DatosNombres = () => {
  const datosVisible = useScrollVisible('datosSection')
  return (
    <div id='datosSection'>
      <p className={`datos-nombre-nb ${datosVisible && 'animate__animated animate__zoomIn'}`}>Mis XV Años</p>
      <p className={`datos-nombre-b ${datosVisible && 'animate__animated animate__zoomIn'}`}>Arely</p>
      <p className={`datos-nombre-g ${datosVisible && 'animate__animated animate__zoomIn'}`}>Monserrat</p>
      
      
    </div>
  )
}

export default DatosNombres