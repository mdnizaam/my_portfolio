import React, { useEffect, useState } from "react";
import "./slider.css";
const ImageSlider = () => {
  const images = [
    "./assets/images/front.jpg",
    "./assets/images/back.jpg",
    "./assets/images/offer_banner.jpeg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };
  useEffect(() => {
    setInterval(goToNextSlide, 3000);
  }, []);

  return (
    <div className="image-slider">
      <div className="slider-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={goToPrevSlide}>Previous</button>
        <button onClick={goToNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
