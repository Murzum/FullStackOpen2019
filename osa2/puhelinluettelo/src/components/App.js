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
    
    const handleSubmit = (event) => {
      event.preventDefault()
  
      const rowObject = {
        name: newName,
        number: newNumber
      }
  
      const checkName = (props) => {
        return newName === props.name
      }
     
      const rowId = (props) => {
        console.log(props)
        return persons.find(element => element.name === props)
      }
  
      if (persons.some(checkName)) {
        
        if (window.confirm(`Name ${newName} already exists. Replace number with new one?`)) {
          numbersService
          .updatePerson(rowId(newName).id, rowObject)
          .then(response => {
            if (response.request.status === 200) {
              setNotificationMessage( { messageType: 'success', message: 'Number was updated successfully!'} )
              numbersService.getAll()
              .then(persons => {
              setPersons(persons)
              })
            }  
          })
          .catch(error => {
              setNotificationMessage( { messageType: 'error', message: 'Could not update!'} )
          })     
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
            setPersons(persons.concat(rowObject))
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
          />
    </div>
    )
  }

  export default App