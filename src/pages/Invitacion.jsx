
import { useLocation, Navigate } from "react-router-dom";
import Banner from "/@/components/Banner";
import CountDown from "/@/components/ContDown";
import Header from "/@/components/Header";
import Datos from "/@/components/Datos";
import Ubicaciones from "/@/components/ubicaciones";
import Confirmacion from '/@/components/Confirmacion';
import Slider from "/@/components/Slider";
import Regalo from "/@/components/Regalo";
import Hoteles from "../components/Hoteles";
import useScrollVisible from "/@/hooks/useScrollVisible";
import { invitados  } from "../../data";
import 'animate.css'
import '/@/styles/invitacion.css'

const Invitacion = () => {
  //VALIDACION DE LOS PARAMS DE LA URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let name = params.get("name") || "";
  let general = params.get('general') || '';

  let pases = 0


  if(general === '' && name===''){
    return <Navigate to='/notfound' />
  }
  if(general === '' && name !== ''){
    let invitado = invitados.filter(invitado=>{
      if(invitado.nameUrl === name){
        return invitado
      }
    })

    if(invitado.length>=1){
      name = invitado[0].nombre;
      pases = invitado[0].pases;
    } else{
      return <Navigate to='/notfound' />
    }
    
  }
  

  

  
  
  
  

  

  //VARIABLES PARA MANEJAR LAS ANIMACIONES
  const confirmacionVisible = useScrollVisible('confirmacionSection')
  const cardCeremoniaVisible = useScrollVisible('cardCeremoniaSection')
  const cardRecepcionVisible = useScrollVisible('cardRecepcionSection')

  return (
    <div className="centrar">
      {general!=='gen' && <Banner name={name} pases={pases} /> }
      <Header />

      <div className="datos">
        <Datos />
      </div>
      <div className="countDown centrar">
        {<CountDown />}
      </div>

      <div className="ubicaciones">
        <Ubicaciones 
          cardCeremoniaVisible={cardCeremoniaVisible} 
          cardRecepcionVisible={cardRecepcionVisible}/>
      </div>
      <div className="linea"></div>
      <div  id='confirmacionSection' className={`confirmar ${confirmacionVisible && 'animate__animated animate__fadeInLeft'}`}>
        <Confirmacion/>
      </div>

      <div className="protocolo">
        
        <div className='protocolo-img' >
          <img src="/img/protocolo.png" alt="" />
        </div>
      </div>

      <div className="slider">
         <Slider /> 
      </div>

      <div className="linea"></div>
      <div className="regalo">
        <Regalo />
      </div>

      <div className="linea"></div>
      <div className="hoteles">
        <Hoteles />
      </div>

      
    </div>
    
    
  );
};

export default Invitacion;
