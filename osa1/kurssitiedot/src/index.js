import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  const pageHeader = 'Kurssitiedot'
  const part_1_title = 'boo'
  const part_2_title = 'boo2'
  const part_3_title = 'boo3'
  const part_1_count = 1
  const part_2_count = 2
  const part_3_count = 3

  const Header = (props) => {
    return (
        <h1>{props.pageHeader}</h1>
    )
  }

  const ContentPart = (props) => {
    return (
        <p><h3>Kurssin osa: {props.name}, Tehtävien lkm: {props.count}</h3></p>
    )    
  }

  const Content = (props) => {
    return (
      <div>
        <ContentPart name = {part_1_title} count = {part_1_count} />
        <ContentPart name = {part_2_title} count = {part_2_count} />
        <ContentPart name = {part_3_title} count = {part_3_count} />
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div><p>Tehtävien lkm yhteensä: {part_1_count + part_2_count + part_3_count}</p></div>
    )
  }

  return (
    <div>
      <Header pageHeader = {pageHeader} />
      <Content />
      <Total />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
