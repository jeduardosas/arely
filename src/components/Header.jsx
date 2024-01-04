import TypeWriter from "./TypeWriter"

const Header = () => {

  const text = 'Hay momentos inolvidables que se atesoran'
  const text2 = `en el corazón para siempre, por esa razón`
  const text3='quiero que compartas conmigo este día tan'
  const text4='ESPECIAL...'
  
  return (
    <>
      <header className="header centrar">
          <div className="header-image">
            <img className='animate__animated animate__fadeInDown' src='/img/monograma.png' alt="" />
          </div>
      </header>
      
        <div className="frase">
          <TypeWriter text={text} speed={3}/>
          <TypeWriter text={text2} speed={2} />
          <TypeWriter text={text3} speed={3} />
          <TypeWriter text={text4} speed={2} />
        </div>
      
      <div  className='header-img centrar animate__animated animate__fadeInUp'>
      </div>
    </>
  )
}

export default Header