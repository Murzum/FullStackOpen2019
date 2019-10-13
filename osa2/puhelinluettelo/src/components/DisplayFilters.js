import React from 'react'

const DisplayFilters = ({newFilter,handleFilterChange}) => {
         
      return (
        <div>Filter phonebook using: <input value={newFilter} onChange={handleFilterChange}/></div>
        )
  }

export default DisplayFilters