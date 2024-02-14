import './index.css'

const VisitedCountriesItem = props => {
  const {countriesDetails, onDeletingVisitedCountries} = props
  const {id, name, imageUrl} = countriesDetails

  const onDeleteCountry = () => {
    onDeletingVisitedCountries(id)
  }

  return (
    <li className="each-countries-list">
      <img src={imageUrl} alt="thumbnail" className="thumbnail" />
      <div className="country-details-container">
        <p className="country-name">{name}</p>
        <button type="button" onClick={onDeleteCountry} className="remove-btn">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountriesItem
