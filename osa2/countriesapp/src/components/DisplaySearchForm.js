import React from 'react'

const DisplaySearchForm = ({searchString,handleInputChange}) => {

    return (
        <form>
        <div>Find country: <input value={searchString} onChange={handleInputChange}/></div>
        </form>
    )
}

export default DisplaySearchForm