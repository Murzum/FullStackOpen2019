import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {

    const totalFeedback = () => { return props.good + props.neutral + props.bad }
    const averageFeedback = () => { return props.good + (props.bad * -1) }
    const percentageGood = () => { 
        if (props.good < 1) return 0
        else return props.good / totalFeedback() 
    }

    const Statistic = (props) => {
        return (
            <tr>
                <td>{props.text}</td>
                <td>{props.value}</td>
            </tr>
        )
    }

    if (totalFeedback() < 1) 
        return (<div><h2>No feedback received yet. Give feedback using buttons.</h2></div>)  
    else 
        return (
        <div>
            <div><h2>{props.title}</h2></div>
            <table>
                <tbody>
                    <Statistic text = '"Good" Times:' value = {props.good} />
                    <Statistic text = '"Neutral" Times:' value = {props.neutral} />
                    <Statistic text = '"Bad" Times:' value = {props.bad} />
                    <Statistic text = 'Total count:' value = {totalFeedback()} />           
                    <Statistic text = 'Average (good(+1),neutral(0),bad(-1)):' value = {averageFeedback()} />           
                    <Statistic text = 'Percentage ("Good"):' value = {percentageGood()} />
                </tbody>
            </table>
        </div>
    )
}

const App = () => {

    let feedbackTitle = "Feedback"
    let statisticsTitle = "Statistics"

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const FeedbackButton = (props) => {
        return (
            <button onClick={() => props.setcounter(props.counter + 1)}>
                <h3>{props.butname}</h3>
            </button>
        )
    }
    const Feedback = (props) => {
      
        return (
            <div>
                <div><h2>{props.title}</h2></div>
                <div>
                    <FeedbackButton butname = "Good" counter = {good} setcounter = {setGood} />
                    <FeedbackButton butname = "Neutral" counter = {neutral} setcounter = {setNeutral} />
                    <FeedbackButton butname = "Bad" counter = {bad} setcounter = {setBad} />
                </div>
            </div>
        )
    }

    return (
        <div>
            <Feedback title = {feedbackTitle} />
            <Statistics title = {statisticsTitle} good = {good} neutral = {neutral} bad = {bad} />
        </div>
  )
}

ReactDOM.render( <App />, document.getElementById('root') )

