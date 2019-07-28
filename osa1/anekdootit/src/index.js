import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const points = new Array(props.anecdotes.length).fill(0)


  points[0] += 1
  console.log(points)


  return (
    <Anecdote list={props.anecdotes} anecdote={selected} setAnecdote={setSelected} />
  )
}
const Vote = (props) => {

  return (
    <p></p>
  )

}

const Anecdote = (props) => {

  //const setToValue = (value) => setCounter(value)

  const selectAnecdote = (props) => {
    let rand = props.list[Math.floor(Math.random() * props.list.length)]

  // Component states should not be modified directly.
  //    First we creat a copy of the current state 
  //    & then modify the copied values
  //    & finally set new state

    let copy = props.selected
    copy = rand
    props.setAnecdote(copy)
  }

  return (
    <div>
      <p>{props.anecdote}</p>
      <button onClick={() => selectAnecdote(props)}>
        <h3>Random Anecdote</h3>
      </button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
