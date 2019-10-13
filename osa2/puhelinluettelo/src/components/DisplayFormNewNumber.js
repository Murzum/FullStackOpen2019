import React from 'react'

const DisplayFormNewNumber = ({handleSubmit,handleNameChange,handleNumberChange,newName,newNumber}) => {

    return (
        <form onSubmit={handleSubmit}>
        <div>Name: <input value={newName} onChange={handleNameChange}/></div>
        <div>Number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div> <button type="submit">add</button></div>
        </form>
    )
}

export default DisplayFormNewNumber