import React from 'react'

const Banner = ({name, pases}) => {
 
  return (
    <div className='banner'>
      
        <div className='banner-border'>
          <p className='banner-title'>Apreciable:</p>
          <p className='banner-nombre'>{name}</p>
          <p className='banner-lugares'>invitados: <span>{pases}</span></p>
          
        </div>
      
    </div>
  )
}

export default Banner