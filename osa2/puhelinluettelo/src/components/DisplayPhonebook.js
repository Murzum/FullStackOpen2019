import React from 'react'
import Person from './Person.js'

const DisplayPhonebook = ({numberlist}) => {
    
    const rows = () => numberlist.map((person) =>
          <Person
            key={person.name}
            name={person.name}
            number={person.number}
          />
      )
      
    return (
          rows()
    )
  }

export default DisplayPhonebook