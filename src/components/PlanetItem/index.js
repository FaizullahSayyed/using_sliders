import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {description, imageUrl, name} = planetDetails

  return (
    <div className="list-item">
      <div className="image-container">
        <img src={imageUrl} alt={`planet ${name}`} className="image" />
      </div>
      <h1 className="name">{name}</h1>
      <p className="desc">{description}</p>
    </div>
  )
}
export default PlanetItem
