import React from "react";
import "../styles/banner.scss";

// Le composant Banner prend en props l'image, le texte et l'alt pour l'accessibilité
export default function Banner({ image, text, alt }) {
  return (
    <div className="banner">
      <img src={image} alt={alt} className="banner__image" />
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  );
}
