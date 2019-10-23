import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayCountries from './DisplayCountries.js'
import DisplaySearchForm from './DisplaySearchForm.js'

const App = () => {
    const [ countries, setCountries ] = useState([]) 
    const [ newSearchString, setNewSearchString ] = useState('')
    
    useEffect(() => {
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          setCountries(response.data)
        })
    }, [])

    const handleInputChange = (event) => {
        setNewSearchString(event.target.value)  
    }

    const existsInArray = (props) => {
        return country => country.name.includes(props.newSearchString)
      }
    const filteredCountries = countries.filter(existsInArray({newSearchString}))

    return (
      <div>
        <DisplaySearchForm handleInputChange={handleInputChange} newSearchString={newSearchString}/>
        <DisplayCountries countries={filteredCountries}/>
      </div>
    )
  }

  export default App