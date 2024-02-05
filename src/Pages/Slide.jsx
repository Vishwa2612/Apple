import React, { useState } from 'react';
import Argylle from '../Images/Movies/Argylle.jpg';
import Monarch from '../Images/Movies/Monarch.jpg';
import Nepoleon from '../Images/Movies/Nepoleon.jpg';
import { Carousel } from 'react-responsive-carousel';
import Foundation from '../Images/Movies/Foundation.jpg';
import TheFamilyPlan from '../Images/Movies/TheFamilyPlan.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TheMorningShow from '../Images/Movies/TheMorningShow.jpeg';
import KillerOfTheFolwerMoon from '../Images/Movies/KillerOfTheFlowerMoon.jpg';


const Slide = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const images = [Argylle, Foundation, KillerOfTheFolwerMoon, Monarch, Nepoleon, TheFamilyPlan, TheMorningShow];

  const handleDotClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handlePrevImageClick = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImageClick = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative">
      <div>
        <Carousel 
          selectedItem={selectedImageIndex} 
          showArrows={false} 
          showStatus={false} 
          showThumbs={false}
          dynamicHeight={false}
          showIndicators={false}
        >
          {images.map((image, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                {index === 0 && (
                  <div onClick={handlePrevImageClick} className="cursor-pointer">
                    <img src={images[images.length - 1]} className='h-[100%] w-auto blur-[1px]'/>
                  </div>
                )}
                {index > 0 && (
                  <div onClick={handlePrevImageClick} className="cursor-pointer">
                    <img src={images[index - 1]} className='h-[100%] w-auto blur-[1px]'/>
                  </div>
                )}
                <img src={image} className='h-[100%] w-auto m-3'/>
                {index < images.length - 1 && (
                  <div onClick={handleNextImageClick} className="cursor-pointer">
                    <img src={images[index + 1]} className='h-[100%] w-auto blur-[1px]'/>
                  </div>
                )}
                {index === images.length - 1 && (
                  <div onClick={handleNextImageClick} className="cursor-pointer">
                    <img src={images[0]} className='h-[100%] w-auto blur-[1px]'/>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 rounded-full mx-2 cursor-pointer ${index === selectedImageIndex ? 'bg-black' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slide;
