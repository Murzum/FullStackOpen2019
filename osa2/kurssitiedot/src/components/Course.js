import React from 'react'

const Course = (props) => {
  return (
    <div>
      <Header pageHeader = {props.course.name} />
      <ul><Content parts = {props.course.parts} /></ul>
      <Total parts = {props.course.parts} />
    </div>
  )
}

const Header = (props) => {
  return ( <h2>{props.pageHeader}</h2> )
}

const Content = (props) => {   
  return props.parts.map(part => (
    <li key = {part.id}> 
      <ContentPart name = {part.name} count = {part.exercises} />
    </li>
    )
  )
}

const ContentPart = (props) => {
  return ( <h3><p>Kurssin osa: {props.name}, Tehtävien lkm: {props.count}</p></h3> )    
}

const Total = (props) => {
  return ( <div>Tehtävien lukumäärä yhteensä: {countSum(props)}</div> )
}

const countSum = (props) => {
  const array = []
  props.parts.forEach(Element => {array.push(Element.exercises)})
  return array.reduce((accumulator, currentValue) => accumulator + currentValue)
}

export default Course
