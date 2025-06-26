import Collapse from "../components/Collapse";
import "../styles/about.scss";
import bannerImage from "../assets/banner-about.png";
import Banner from '../components/Banner';

export default function About() {
  return (
    <main>
      

      <Banner
              image={bannerImage}
              alt="Bannière d'à propos"
            />


      <div className="about__collapses">
        <Collapse title="Fiabilité">
          <p> Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.</p>
        </Collapse>
        <Collapse title="Respect">
          <p> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage entraînera
          une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse title="Service">
          <p>Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.</p>
        </Collapse>
        <Collapse title="Sécurité">
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de sécurité
          établis par nos services. En laissant une note aussi bien à l'hôte
          qu'au locataire, cela permet à nos équipes de vérifier que les standards
          sont bien respectés.</p>
        </Collapse>
      </div>
    </main>
  );
}
