import React, { useState } from 'react'
import Person from './Person.js'

const App = () => {
    const [ persons, setPersons ] = useState([
      { id: 'Arto Hellas', name: 'Arto Hellas' }
    ]) 
    const [ newName, setNewName ] = useState('')
 
    const rows = () => persons.map(person =>
      <Person
        key={person.id}
        name={person.name}
      />
    )
    const handleSubmit = (event) => {
        event.preventDefault()

        const rowObject = {
            id: newName,
            name: newName
        }
        setPersons(persons.concat(rowObject))
        setNewName('')
    }
    
    const handleNameChange = (event) => {
      setNewName(event.target.value)  
    }

    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input value={newName} onChange={handleNameChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <ul>
        {rows()}
      </ul>
      </div>
    )
  }

  export default App