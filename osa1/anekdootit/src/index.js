import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  const [selectedAnecdote, setSelected] = useState("Click to return random anecdote")
  const [randomValue, setRandomValue]  = useState(0)
  const pointsArray = new Array(props.anecdotes.length).fill(0)
  const [points, setPoints] = useState(pointsArray)

  return (
      <div>
        <Anecdote anecdoteArray={props.anecdotes} selectedAnecdote={selectedAnecdote} setAnecdote={setSelected} setRandomValue={setRandomValue} randomValue={randomValue} points={points} />
        <Vote selectedValue={randomValue} points={points} setPoints={setPoints} />
        <MostVotes points={points} list={anecdotes} />
      </div>
  )
}

const Anecdote = (props) => {

  const selectAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * props.anecdoteArray.length)
    const randomAnecdote = props.anecdoteArray[randomNumber]
    props.setRandomValue(randomNumber)
    props.setAnecdote(randomAnecdote)
  }

  const getVotes = () => {
    return props.points[props.randomValue]
  }

  return (
    <div>
      <p>{props.selectedAnecdote} Has been voted {getVotes()} times</p>
      <button onClick={selectAnecdote}>
        <h3>Random Anecdote</h3>
      </button>
    </div>
  )
}

const Vote = (props) => {

  const voteAnecdote = () => {
    const copy = [...props.points]
    copy[props.selectedValue] += 1
    props.setPoints(copy)
  }

  return (
    <div>
      <button onClick={voteAnecdote}>Vote this anecdote</button>
    </div>
  )
}

const MostVotes = (props) => {

  const max = props.points.indexOf(Math.max(...props.points))
  const mostvotes = props.list[max]
  const votesTotal = props.points[max]

  return (
    <div>
      <h2><p>Anecdote with most votes</p></h2>
      <p>{mostvotes}</p>
      <p>Has {votesTotal} votes!</p>
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
