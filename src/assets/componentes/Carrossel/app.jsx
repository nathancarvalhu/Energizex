import { useState, useEffect } from 'react';
import './styles.css'; 

import image1 from "./assets/image1.png"; 
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3];
  const totalImages = images.length;

  const moveSlide = (step) => {
    let newIndex = currentIndex + step;
    if (newIndex < 0) newIndex = totalImages - 1;
    if (newIndex >= totalImages) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="discount-banner">
        <p>🎉 30% off storewide limited time! Cupom: DISCOUNT30</p>
      </div>

      <div className="carousel">
        <div
          className="carousel-images"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <img src={img} alt={`Imagem ${index + 1}`} key={index} />
          ))}
        </div>

        <div className="dots-container">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
  
  export default Carousel;