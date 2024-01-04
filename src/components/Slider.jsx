import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const Slider = () => {
  const images = [
    {
      original:'/img/originals/1.png',
      thumbail:'/img/thumbails/1a.png'
    },
    {
      original:'/img/originals/2.png',
      thumbail:'/img/thumbails/2a.png'
    },
    {
      original:'/img/originals/3.png',
      thumbail:'/img/thumbails/3a.png'
    },
    {
      original:'/img/originals/4.png',
      thumbail:'/img/thumbails/4a.png'
    },
    {
      original:'/img/originals/5.png',
      thumbail:'/img/thumbails/5a.png'
    },
    {
      original:'/img/originals/6.png',
      thumbail:'/img/thumbails/6a.png'
    },
    {
      original:'/img/originals/7.png',
      thumbail:'/img/thumbails/7a.png'
    },
    {
      original:'/img/originals/8.png',
      thumbail:'/img/thumbails/8a.png'
    },
    {
      original:'/img/originals/9.png',
      thumbail:'/img/thumbails/9a.png'
    },
    {
      original:'/img/originals/10.png',
      thumbail:'/img/thumbails/10a.png'
    },
    {
      original:'/img/originals/1.png',
      thumbail:'/img/thumbails/1a.png'
    },
  ];

  

  return(
    <div style={{width:'95vw',margin:'auto'}}>
      <h3 className='slider-title'>Galeria </h3>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={true}
        showThumbnails={true}
        showBullets={true}
        showNav={false}
        autoPlay={true}
        slideDuration={1000}
      />
    </div>
  )
};

export default Slider;
