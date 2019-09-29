import React, { useState } from 'react'
import Person from './Person.js'

const App = () => {
    const [ persons, setPersons ] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const rows = () => persons.map(person =>
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
        window.alert(`Nimi ${newName} on jo listassa. Ei voi lisätä!`)
      }
      else {
        setPersons(persons.concat(rowObject))
        setNewName('')
        setNewNumber('')
      }

    }   
    const handleNameChange = (event) => {
      setNewName(event.target.value)  
    }
    const handleNumberChange = (event) => {
      setNewNumber(event.target.value)  
    }

    return (
      <div>
        <h2>Phonebook</h2>
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