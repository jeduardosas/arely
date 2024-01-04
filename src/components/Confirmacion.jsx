import React from 'react'

const Confirmacion = () => {
  return (
    <>
      <div className='confirmar-title'>
        <img src="/img/icons/confirmar.png" alt="icon-confirm" />
        <h2>Confirmación de Asistencia</h2>
      </div>

      <div className="confirmar-card  sombra">
        <div className="confirmar-border centrar">
          <div className="confirmar-whats">
            <img src="/img/icons/whatsapp.png" alt="" />
            <p>WhatsApp</p>
          </div>
          <button><a target="_blanc" href="https://api.whatsapp.com/send?phone=527331368251">CONFIRMAR</a></button>
        </div>
      </div>
    </>
  )
}

export default Confirmacion