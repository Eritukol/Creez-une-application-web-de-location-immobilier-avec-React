import React from "react";
import Card from "./Card";
// import logements from "../data/logements.json";
import "../styles/cardlist.scss";

export default function CardList({ logements }) {
  return (
    <section className="cardlist">
      {logements.map((logement) => (
        <Card key={logement.id} logement={logement} title={logement.title} cover={logement.cover} />
      ))}
    </section>
  );
};

