import React, { useState } from 'react'
import DisplayPhonebook from './DisplayPhonebook.js'
import DisplayFilters from './DisplayFilters.js'
import DisplayFormNewNumber from './DisplayFormNewNumber.js'

const App = () => {
    const [ persons, setPersons ] = useState([
      { id: 'Arto Hellas', name: 'Arto Hellas', number: '040-123456' },
      { id: 'Ada Lovelace', name: 'Ada Lovelace', number: '39-44-5323523' },
      { id: 'Dan Abramov', name: 'Dan Abramov', number: '12-43-234345' },
      { id: 'Mary Poppendieck', name: 'Mary Poppendieck', number: '39-23-6423122' }      
    ]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ newFilter, setNewFilter ] = useState('')
    
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
        id: newName,
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
        setPersons(persons.concat(rowObject))
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
        <ul>
          <DisplayPhonebook 
            list={filteredNumbers} 
          />
        </ul>
      </div>
    )
  }

  export default App