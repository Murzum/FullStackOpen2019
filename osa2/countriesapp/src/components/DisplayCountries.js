import React from 'react'
import Country from './Country.js'

const DisplayCountries = ({countries}) => {

    if (countries.length > 10) {
        return "Too many countries found. Insert more letters."

    } 
    else if (countries.length === 1) {
        return (           
            <Country 
                key={countries[0].name}
                country={countries[0]}
                detailLevel='full'
            />
        )
    }
    else {
        const rows = () => countries.map(country =>
            <Country 
                key={country.name}
                country={country}
                detailLevel='onlyname'
            />
        )       
        return (
                rows()
        )
    }   
}

export default DisplayCountries