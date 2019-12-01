import React, { useState, useEffect } from 'react'
import DisplayPhonebook from './DisplayPhonebook.js'
import DisplayFilters from './DisplayFilters.js'
import DisplayFormNewNumber from './DisplayFormNewNumber.js'
import Notification from './Notification.js'
import numbersService from '../services/numbers'

const App = () => {
    const [ persons, setPersons ] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ newFilter, setNewFilter ] = useState('')
    const [ notificationMessage, setNotificationMessage ] = useState({messageType: '', message: ''})

    useEffect(() => {
      numbersService
        .getAll()
        .then(persons => {
          setPersons(persons)
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
    
    const rowId = (props) => {
      return persons.find(element => element.name === props)
    }

    const changePersonData = (rowObject) => {
      const personOb = rowId(rowObject.name)
      const changedPerson = {...personOb, number: rowObject.number}

      numbersService
      .updatePerson(changedPerson.id, rowObject)
      .then(response => {
        if (response.request.status === 200) {      
          setPersons(persons.map(person => person.id !== changedPerson.id ? person: response.data))
          setNotificationMessage( { messageType: 'success', message: 'Number was updated successfully!'} )
        }  
      })
      .catch(error => {
          console.log(error.message)
          setNotificationMessage( { messageType: 'error', message: 'Could not update! --> ' + error.message } )
      })

    }
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
        
        if (window.confirm(`Name ${newName} already exists. Replace number with new one?`)) {
          console.log(rowObject)
          changePersonData(rowObject)
        }
        else {
          setNotificationMessage( { messageType: 'neutral', message: 'Update canceled by you...'} ) 
        }
      }
      else {
        numbersService
        .createPerson(rowObject)
        .then(response => {              
          if (response.request.status === 201) {
            setPersons(persons.concat(response.data))
            setNotificationMessage( {messageType: 'success', message: 'New number added successfully'} )
            setNewName('')
            setNewNumber('')
          }
        })
      }
  
    }   
    return (
      <div>
        <h2>Phonebook</h2>

        <Notification notificationMessage={notificationMessage} />

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
          setPersons={setPersons}
          persons={persons}
          setNotificationMessage={setNotificationMessage}      
        />
    </div>
    )
  }

  export default App