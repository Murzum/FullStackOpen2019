import React from 'react'

const Country = ({country,detailLevel}) => {
    if (detailLevel === 'onlyname') {
        return (
            <li>{country.name}</li>
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
                <img src={country.flag} height="100" width="200" alt="Country flag"></img>
            </div>
        )
    }
  }

export default Country