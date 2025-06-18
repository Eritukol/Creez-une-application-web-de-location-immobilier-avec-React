import { useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements.json'
import '../styles/logements.scss'

export default function Logement() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/404" />
  }

  const { title, location, description, tags, equipments, host, rating, pictures } = logement

  return (
    <div className="logement">
      <img src={pictures[0]} alt={title} className="logement__banner" />

      <div className="logement__header">
        <div>
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

        <div>
          <div className="logement__host">
            <p className="logement__host-name">{host.name}</p>
            <img src={host.picture} alt={host.name} className="logement__host-picture" />
          </div>

          <div className="logement__rating">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={i <= rating ? '/star-full.png' : '/star-empty.png'}
                alt={i <= rating ? 'étoile pleine' : 'étoile vide'}
                className="star"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="logement__description">
        <h2>Description</h2>
        <p>{description}</p>
      </div>

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
