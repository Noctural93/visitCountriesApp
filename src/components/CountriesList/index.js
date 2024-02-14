import './index.css'

const CountriesList = props => {
  const {countriesDetails, updatingVisitedCountries} = props
  const {id, name, isVisited} = countriesDetails

  const visitButton = () => {
    updatingVisitedCountries(id)
  }

  return (
    <li className="list-countries-container">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button type="button" onClick={visitButton} className="visit-btn">
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesList
