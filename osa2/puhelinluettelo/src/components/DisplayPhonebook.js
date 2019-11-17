import React from 'react'
import Person from './Person.js'

const DisplayPhonebook = ({numberlist,setPersons,persons}) => {
    
    const rows = () => numberlist.map((person) =>
          <Person
            key={person.name}
            id={person.id}
            name={person.name}
            number={person.number}
            setPersons={setPersons}
            persons={persons}
          />
      )
      
    return (
          rows()
    )
  }

export default DisplayPhonebook