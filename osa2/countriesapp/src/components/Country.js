import React  from 'react'
import DisplayCapitalWeather from './DisplayCapitalWeather.js'

const Country = ({country,detailLevel,setNewSearchString}) => {    

    if (detailLevel === 'onlyname') {

        const handleButtonClick = (props) => {
            setNewSearchString(props)
        }

        return (
            <p>
                {country.name}
                <button onClick={() => handleButtonClick(country.name)} key={country.name}>Show details</button>          
            </p>
        )
    }
    else if (detailLevel === 'full') {

        const languageslist = country.languages.map((language) =>
            <li key={language.name}>{language.name}</li>
        ) 

        return (
            <div>
                <h2>{country.name}</h2>
                <h3>Capital: {country.capital}</h3>
                <h3>Population: {country.population}</h3>
                <h2>Languages</h2>
                <ul>
                    {languageslist}
                </ul>
                <h2>Country flag</h2>
                <img src={country.flag} crossOrigin="anonymous" height="100" width="auto" border="1" alt="Country flag"></img>
                <DisplayCapitalWeather capital={country.capital} />
            </div>
        )
    }
  }

export default Country