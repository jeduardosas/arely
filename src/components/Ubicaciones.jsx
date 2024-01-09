import React from 'react'

const Ubicaciones = ({cardCeremoniaVisible,cardRecepcionVisible}) => {
  return (
    <>
      <div className="ubicaciones-title centrar">
          <img src="/img/icons/ubicacion.png" alt="" />
          <h3>Ubicaciones</h3>
      </div>
      <div className="ubicaciones-cards">
        <div id='cardCeremoniaSection' className={`ubicaciones-card_card sombra ${cardCeremoniaVisible && 'animate__animated animate__fadeInLeft'}`}>
          <div>
            <h3 className='card-title'>Ceremonia Religiosa</h3>
          </div>

          <div>
            <img src="/img/icons/iglesia.png" alt="" />
          </div>

          <div>
            <p className='card-hora'>7:30 P.M.</p>
          </div>

          <div className='card-section'>
            <p className='card-nombre'>Parroquia de San Francisco de Asis</p>
            <p className='card-contenido'>Colonia Centro</p>
            <p className='card-from'>Iguala de la Independencia, Gro.</p>
          </div>
          <div className='card-button'>
            <button>
              <a href="https://maps.app.goo.gl/rRPbZSnjLkDjx6zd7" hrefLang='_blank'>ver ubicación</a>
            </button>
          </div>
        </div>

        <div id='cardRecepcionSection' className={`ubicaciones-card_card sombra ${cardRecepcionVisible && 'animate__animated animate__fadeInRight'}`}>
          <div>
            <h3 className='card-title'>Recepción</h3>
          </div>

          <div>
            <img src="/img/icons/recepcion.png" alt="" />
          </div>

          <div>
            
            <p className='card-hora'>9:00 P.M.</p>
          </div>

          <div className='card-section'>
            <p className='card-nombre'>Jardin Tres Virginias</p>
            <p className='card-contenido'>Boulevard H. Colegio Militar s/n</p>
          </div>
          <div className='card-button'>
            <button>
              <a href="https://maps.app.goo.gl/GvgMtrv4XK9ajNAu6" hrefLang='_blank'>ver ubicación</a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ubicaciones