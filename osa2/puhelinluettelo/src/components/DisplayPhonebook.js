import React from 'react'
import Person from './Person.js'

const DisplayPhonebook = ({list}) => {
    
    const rows = () => list.map(person =>
        <Person
          key={person.id}
          name={person.name}
          number={person.number}
        />
      )
      
    return (
            rows()
    )
  }

export default DisplayPhonebook