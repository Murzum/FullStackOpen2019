import React from 'react'
import numbersService from '../services/numbers'

const Person = ({id,name,number,setPersons,persons}) => {

  const updateNumberlist = (props) => {
    setPersons(persons.filter(n => n.id !== props))
  }

  const handleButtonClick = (id,name) => {
    if (window.confirm(`Remove from list name: ${name} ?`)) {
      numbersService.delPerson(id)
      .then(updateNumberlist(id))    
    }
  }

  return (
    <div>{name} {number} <button onClick={() => handleButtonClick(id,name)} key={id}>Delete</button></div>
  )
}

export default Person