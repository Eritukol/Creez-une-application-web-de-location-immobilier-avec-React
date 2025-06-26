import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import "../styles/logements.scss";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  const {
    title,
    location,
    description,
    tags,
    equipments,
    host,
    rating,
    pictures,
  } = logement;

  return (
    <div className="logement">
      <Carousel pictures={pictures} title={title} />

      <div className="logement__header">
        <div className="logement__block">
          <h1 className="logement__title">{title}</h1>
          <p className="logement__location">{location}</p>

          <div className="logement__tags">
            {tags.map((tag, index) => (
              <span key={index} className="logement__tags-item">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement__host-rating">
          <div className="logement__rating">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={i <= rating ? "/star-full.png" : "/star-empty.png"}
                alt={i <= rating ? "étoile pleine" : "étoile vide"}
                title={`Note : ${rating} sur 5`}
                className="star"
              />
            ))}
          </div>

          <div className="logement__host">
            <p className="logement__host-name">{host.name}</p>
            <img
              src={host.picture}
              alt={host.name}
              className="logement__host-picture"
            />
          </div>
        </div>
      </div>

      <div className="logement__collapses">
        <Collapse title="Description">
          <p>{description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {equipments.map((eq, index) => (
              <li key={index}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}
