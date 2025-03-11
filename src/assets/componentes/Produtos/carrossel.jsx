import { useState } from 'react';


import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';

export default function Carrossel2() {
    const [currentIndex, setCurrentIndex] = useState(0);

   
    const images = [image1, image2, image3, image4, image5, image1];
    const texts = ['Nutrabey Gold 80% Whey Protein Concentrate', 'Nutrabey Gold 100% Whey Protein Concentrate', 'Nutrabey Gold 100% Whey Protein Concentrate', 'Nutrabey Gold 70% Whey Protein Concentrate', 'Nutrabey Isolate 70% Protein Concentrate', 'Nutrabey Gold 100% Whey Protein Conncetrate' ];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 4 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 4 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carrossel-container">
            <button className="carrossel-btn left" onClick={prevSlide}>←</button>
            
            <div className="carrossel-wrapper">
                <div className="carrossel-images" style={{ transform: `translateX(-${currentIndex * 150}px)` }}>
                    {images.map((img, index) => (
                        <div key={index} className="carrossel-item">
                            <img src={img} alt={`Imagem ${index}`} className="carrossel-image" />
                            <p className="carrossel-text">{texts[index]}</p>
                            <button className='add-to-cart'>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>

            <button className="carrossel-btn right" onClick={nextSlide}>→</button>
        </div>
    );
}