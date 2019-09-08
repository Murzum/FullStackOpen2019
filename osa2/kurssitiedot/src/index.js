import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course.js'


const App = () => {
  const courseList = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <PageTitle />
      <Courses list={courseList} />
    </div>
  )
}

const PageTitle = () => { 
  return ( <h1>My Achievements - 2019</h1> )
}

const Courses = (props) => {
  return props.list.map(part =>  
    <div key={part.name}> <Course course={part} /> </div> 
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
