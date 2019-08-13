import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {


  const course = {
    pageHeader: 'Kurssitiedot',
    parts: [
      {
        title: "Reaktin perusteet",
        exercises: 10
      },
      {
        title: "Propsit tiedon välityksessä",
        exercises: 10
      },
      {
        title: "Komponentin tila",
        exercises: 10
      }   
    ]
  }

  const Header = (props) => {
    return (
        <h1>{props.pageHeader}</h1>
    )
  }

  const ContentPart = (props) => {
    return (
      <h3><p>Kurssin osa: {props.name}, Tehtävien lkm: {props.count}</p></h3>
    )    
  }

  const Content = ({parts}) => {
    
    return parts.map(part => (
      <li key = {part.title}> 
        {/* 
        !!! Without key we get this error in console: "Each child in a list should have a unique "key" prop"
        This was explained here -> "https://reactjs.org/docs/lists-and-keys.html#keys" 
          --> Key should be provided for list items. 
              Keys help React identify which items have changed, are added, or are removed. 
              Key has to be Unique among siblings.          
        */}
        <ContentPart name = {part.title} count = {part.exercises} />
      </li>
    )
    )

  }

  const Total = ({parts}) => {

    let exerciseTotalCount = parts[0].exercises + parts[1].exercises + parts[2].exercises
    
    return (
      <div>Tehtävien lukumäärä yhteensä: {exerciseTotalCount}</div>
    )
  }

  return (
    <div>
      <Header pageHeader = {course.pageHeader} />
      <ul><Content parts = {course.parts} /></ul>
      <Total parts = {course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
