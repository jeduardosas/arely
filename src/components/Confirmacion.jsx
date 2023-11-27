import React from 'react'

const Confirmacion = () => {
  return (
    <>
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
    </>
  )
}

export default Confirmacion