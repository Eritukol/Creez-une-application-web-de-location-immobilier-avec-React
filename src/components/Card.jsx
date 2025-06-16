

import React from "react";
import { Link } from "react-router-dom";


export default function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="card">
      <article>
        <img src={logement.cover} alt={logement.title} className="card__img"/>
        <h3 className="card__title">{logement.title}</h3>
      </article>
    </Link>
  );
}
