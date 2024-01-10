import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const Slider = () => {
  const images = [
    {
      original:'/img/originals/1.webp',
      thumbnail:'/img/thumbnails/small_1.png'
    },
    {
      original:'/img/originals/2.webp',
      thumbnail:'/img/thumbnails/small_2.png'
    },
    {
      original:'/img/originals/3.webp',
      thumbnail:'/img/thumbnails/small_3.png'
    },
    {
      original:'/img/originals/4.webp',
      thumbnail:'/img/thumbnails/small_4.png'
    },
    {
      original:'/img/originals/5.webp',
      thumbnail:'/img/thumbnails/small_5.png'
    },
    {
      original:'/img/originals/6.webp',
      thumbnail:'/img/thumbnails/small_6.png'
    },
    {
      original:'/img/originals/7.webp',
      thumbnail:'/img/thumbnails/small_7.png'
    },
    {
      original:'/img/originals/8.webp',
      thumbnail:'/img/thumbnails/small_8.png'
    },
    {
      original:'/img/originals/9.webp',
      thumbnail:'/img/thumbnails/small_9.png'
    },
    {
      original:'/img/originals/10.webp',
      thumbnail:'/img/thumbnails/small_10.png'
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
