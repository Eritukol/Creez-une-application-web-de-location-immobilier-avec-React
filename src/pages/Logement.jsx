// Importations nécessaires
import { useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements.json'
import '../styles/logements.scss' // À créer plus tard pour le style

export default function Logement() {
  // Récupère l'ID depuis l'URL (ex: /logement/c67ab8a7)
  const { id } = useParams()

  // Recherche du logement dans les données
  const logement = logements.find((item) => item.id === id)

  // Si aucun logement trouvé → redirection vers la page 404
  if (!logement) {
    return <Navigate to="/404" />
  }

  // Déstructure les infos du logement pour plus de lisibilité
  const { title, location, description, tags, equipments, host, rating, pictures } = logement

  return (
    <div className="logement">
      <div className="logement__gallery">
        {/* Affiche la première image du logement */}
        <img src={pictures[0]} alt={title} />
      </div>

      <div className="logement__infos">
        <div>
          <h1>{title}</h1>
          <p>{location}</p>

          {/* Liste des tags */}
          <div className="logement__tags">
            {tags.map((tag, index) => (
              <span key={index} className="logement__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Infos de l’hôte */}
        <div className="logement__host">
          <p>{host.name}</p>
          <img src={host.picture} alt={host.name} />
        </div>
      </div>

      {/* Description */}
      <div className="logement__description">
        <h2>Description</h2>
        <p>{description}</p>
      </div>

      {/* Équipements */}
      <div className="logement__equipments">
        <h2>Équipements</h2>
        <ul>
          {equipments.map((eq, index) => (
            <li key={index}>{eq}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
