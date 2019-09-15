import React, { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
      { id: 'Arto Hellas', name: 'Arto Hellas' }
    ]) 
    const [ newName, setNewName ] = useState('')
 
    const addPhonebookRow = (event) => {
        //
        //console.log('button clicked', event.target)
        const rowObject = {
            id: newName,
            name: newName
        }
        setPersons(persons.concat(rowObject))
        setNewName('')
        console.log({persons})
    }
    
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addPhonebookRow}>
          <div>
            name: <input value={newName} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        ...
      </div>
    )
  }
  
  export default App