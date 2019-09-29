import React, { useState } from 'react'
import Person from './Person.js'

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
    
    const rows = () => filteredNumbers.map(person =>
      <Person
        key={person.id}
        name={person.name}
        number={person.number}
      />
    )
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
        <div>Filter phonebook using: <input value={newFilter} onChange={handleFilterChange}/></div>
        <div><h3>Add new:</h3></div>
        <form onSubmit={handleSubmit}>
          <div>Name: <input value={newName} onChange={handleNameChange}/></div>
          <div>Number: <input value={newNumber} onChange={handleNumberChange}/></div>
          <div> <button type="submit">add</button></div>
        </form>
        <h2>Numbers</h2>
        <ul>
        {rows()}
      </ul>
      </div>
    )
  }

  export default App