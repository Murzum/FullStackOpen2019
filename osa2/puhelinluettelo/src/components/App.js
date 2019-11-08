import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayPhonebook from './DisplayPhonebook.js'
import DisplayFilters from './DisplayFilters.js'
import DisplayFormNewNumber from './DisplayFormNewNumber.js'

const App = () => {
    const [ persons, setPersons ] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ newFilter, setNewFilter ] = useState('')
    
    useEffect(() => {
      axios
        .get('http://localhost:3001/persons')
        .then(response => {
          setPersons(response.data)
        })
    }, [])

    const handleNameChange = (event) => {
      setNewName(event.target.value)  
    }
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value)  
    }
    const handleFilterChange = (event) => {
      setNewFilter(event.target.value)
    }

    const existsInArray = (props) => {
      return person => person.name.includes(props.newFilter)
    }

    const filteredNumbers = persons.filter(existsInArray({newFilter}))
    
    const handleSubmit = (event) => {
      event.preventDefault()

      const rowObject = {
        name: newName,
        number: newNumber
      }

      const checkName = (props) => {
        return newName === props.name
      }

      if (persons.some(checkName)) {
        window.alert(`Name ${newName} already exists. Name not added!`)
      }
      else {
        axios
        .post('http://localhost:3001/persons', rowObject)
        .then(response => {
          console.log(response)
          setPersons(persons.concat(rowObject))
        })
        setNewName('')
        setNewNumber('')
      }
    }   

    return (
      <div>
        <h2>Phonebook</h2>
          <DisplayFilters 
            newFilter={newFilter} 
            handleFilterChange={handleFilterChange}
          />
        <h3>Add new:</h3>
          <DisplayFormNewNumber 
            handleSubmit={handleSubmit} 
            handleNameChange={handleNameChange} 
            handleNumberChange={handleNumberChange} 
            newName={newName}
            newNumber={newNumber}
          />
          <h2>Numbers</h2>        
          <DisplayPhonebook 
            numberlist={filteredNumbers}            
          />
    </div>
    )
  }

  export default App