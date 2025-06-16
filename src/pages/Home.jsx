// src/pages/Home.jsx
import React from 'react';
import Banner from '../components/Banner';
import '../styles/Home.scss';
import bannerImage from "../assets/IMG.png";
import logements from "../data/logements.json";
import '../styles/Card.scss'
import Card from "../components/Card"


export default function Home() {
  return (
    <main className="home">
      {/* Bannière avec texte superposé */}
      <Banner
        image={bannerImage}
        text="Chez vous, partout et ailleurs"
        alt="Bannière d'accueil de Kasa"
      />

      {/* Liste de logements sous forme de cartes */}
      <section className="gallery-section">
      {/* <CardList logements={logements} /> */}

      {/* <section className="cardlist"> */}
      {logements.map((logement) => (
        <Card key={logement.id} logement={logement}/>
      ))}
    </section>
      

      
    </main>
  );
}
