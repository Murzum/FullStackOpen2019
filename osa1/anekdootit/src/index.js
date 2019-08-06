import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  const [selected, setSelected] = useState("Click to return random anecdote")
  const [randomItem, setValue]  = useState(0)
  const pointsArray = new Array(props.anecdotes.length).fill(0)
  const [points, setPoints] = useState(pointsArray)

  return (
      <div>
        <Anecdote list={anecdotes} anecdote={selected} setAnecdote={setSelected} selectedValue={randomItem} setValue={setValue} points={points} />
        <Vote selectedValue={randomItem} points={points} setValue={setPoints}/>
      </div>
  )
}

const Vote = (props) => {

  const voteAnecdote = () => {
    const copy = [...props.points]
    copy[props.selectedValue] += 1
    props.setValue(copy)
  }

  return (
    <div>
      <button onClick={voteAnecdote}>Vote this anecdote</button>
    </div>
  )
}
const Anecdote = (props) => {

  const selectAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * props.list.length)
    const randomAnecdote = props.list[randomNumber]
    props.setValue(randomNumber)
    props.setAnecdote(randomAnecdote)
  }

  const getVotes = () => {
    return props.points[props.selectedValue]
  }

  return (
    <div>
      <p>{props.anecdote} Has been voted {getVotes()} times</p>
      <button onClick={selectAnecdote}>
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
