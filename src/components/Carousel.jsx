import React, { useState } from "react";
import "../styles/carousel.scss";

export default function Carousel({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLast = currentIndex === pictures.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <>
          <img
            src="/arrow-left.png"
            alt="Précédent"
            className="carousel__arrow carousel__arrow--left"
            onClick={goToPrevious}
          />
          <img
            src="/arrow-right.png"
            alt="Suivant"
            className="carousel__arrow carousel__arrow--right"
            onClick={goToNext}
          />
        </>
      )}

      <div className="carousel__image-container">
  <img
    key={currentIndex}
    src={pictures[currentIndex]}
    alt={`${title} ${currentIndex + 1}`}
    className="carousel__image"
  />
</div>


      {/* Optionnel : compteur d'image (ex : 1 / 5) */}
      {pictures.length > 1 && (
        <div className="carousel__counter">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
}
