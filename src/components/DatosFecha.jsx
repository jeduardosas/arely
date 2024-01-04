import React from 'react'
import useScrollVisible from "/@/hooks/useScrollVisible";

const DatosFecha = () => {
  const datosFechaVisible = useScrollVisible('datosFechaSection')
  return (
    <div id='datosFechaSection' className={`datos-fecha ${datosFechaVisible && 'animate__animated animate__slideInUp'}`}>
      <p className='datos-fecha-title'>Celeberemos Juntos el día</p>
      <div className="datos-fecha_div">
        <p>27</p>
        <p>Enero</p> 
        <p>2024</p>
      </div>
    </div>
  )
}

export default DatosFecha