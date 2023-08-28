import React,{useState} from 'react';
import Fask from './Fask';
import Dummy from './Dummy';
import './All.css'
import Checkout from './Checkout';
function YourComponent({images}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  
 

  return (
    <div>
      <div className="image-slider" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <button  className='btn' style={{fontSize:"40px"}} onClick={prevImage}>&lt;</button>
      <img height={400} width='90%' className='img' style={{margin:"20 auto",boxShadow:"0px 2px 15px gray"}} src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
      <button  className='btn' style={{fontSize:"40px"}}  onClick={nextImage}>&gt;</button>
    </div>
     <Fask />
     <Dummy/>
     
      
    </div>
  );
}

export default YourComponent;