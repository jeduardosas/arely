import React from 'react'

const Header = () => {
  return (
    <>
      <header className="header centrar">
          <div className="header-image">
            <img className='animate__animated animate__fadeInDown' src='../../public/img/monograma.png' alt="" />
          </div>
      </header>
      <div  className='card centrar sombra animate__animated animate__fadeInLeft'>
        <div className="card-stroke">
          <h1 className="card-nombres">&nbsp;BETSABE</h1>
          <h1 className="card-nombres"><span className="y">&</span>GABRIEL</h1>
        </div>
      </div>
    </>
  )
}

export default Header