import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return ( <div> <Course course={course} /> </div> )
}

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
  return ( <h1>{props.pageHeader}</h1> )
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

ReactDOM.render(<App />, document.getElementById('root'))
