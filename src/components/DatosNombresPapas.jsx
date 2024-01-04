import React from 'react'
import useScrollVisible from "/@/hooks/useScrollVisible";
const DatosNombresPapas = () => {

  //MANJAR ANIMACIONES
  const datosPapasVisible = useScrollVisible('datosPapasSection')
  return (
    <div id='datosPapasSection' className={`datos-papas  ${datosPapasVisible && 'animate__animated animate__fadeInLeft'}`}>
      <p className='datosPapas-title'>Mis Papás</p>
      <div>
        <p className='datosPapas-item'>Juana Isabel Martinez Velasco</p>
        <p className='datosPapas-item'>José Eduardo Astudillo Rodriguez</p>
      </div>
    </div>
  )
}

export default DatosNombresPapas