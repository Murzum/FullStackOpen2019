import React from 'react'
import numbersService from '../services/numbers'

const Person = ({id,name,number,setPersons,persons,setNotificationMessage}) => {

  const updateNumberlist = (props) => {
    setPersons(persons.filter(n => n.id !== props))
  }

  const handleButtonClick = (id,name) => {
    if (window.confirm(`Remove from list name: ${name} ?`)) {
      numbersService.delPerson(id)
      .then(response => {
        if (response.request.status === 200) {
          updateNumberlist(id)
          setNotificationMessage( { messageType: 'success', message: 'Row deleted successfully!'} )  
        }
      })
      .catch(error => {
        setNotificationMessage( { messageType: 'error', message: 'Could not delete! --> ' + error.message } )
      })  
    }
  }

  return (
    <div>{name} {number} <button onClick={() => handleButtonClick(id,name)} key={id}>Delete</button></div>
  )
}

export default Person