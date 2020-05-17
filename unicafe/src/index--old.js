import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [feedback, setFeedback] = useState({
      positive: 0,
      negative: 0,
      neutral: 0
    })

    const positiveFeedbackClickHandler = () => {
      setFeedback({
        ...feedback, positive: feedback.positive + 1
      })
    }

    const negativeFeedbackClickHandler = () => {
      setFeedback({
        ...feedback, negative: feedback.negative + 1
      })
    }

    const neutralFeedbackClickHandler = () => {
      setFeedback({
        ...feedback, neutral: feedback.neutral + 1
      })
    }

    const resetClickHandler = () => {
      setFeedback({
        positive: 0,
        negative: 0,
        neutral: 0
      })
    }

    return (
        <>
          <Display feedback={feedback} positiveFeedbackClickHandler={positiveFeedbackClickHandler} negativeFeedbackClickHandler={negativeFeedbackClickHandler} neutralFeedbackClickHandler={neutralFeedbackClickHandler} resetClickHandler={resetClickHandler}/>
        </>
    )
}

const Display = (props) => {
  return (
    <>
      <h1>How would you rate your experience at unicafe today?</h1>
      < Button onClick={props.positiveFeedbackClickHandler} text="positive"/>
      < Button onClick={props.negativeFeedbackClickHandler} text="negative"/>
      < Button onClick={props.neutralFeedbackClickHandler} text="neutral"/>
      < Button onClick={props.resetClickHandler} text="reset"/>
      < Statistics feedback={props.feedback}/>
      < Anecdotes/>
    </>
  )
}

const Statistics = (props) => {
  const total = props.feedback.positive + props.feedback.negative + props.feedback.neutral
  if (total === 0) {
    return (
      <>
        <h2>Statistics</h2>
        <p>There isn't anything here yet.</p>
      </>
    )
  } else {
    return (
      <>
        <h2>
          Statistics
        </h2>
        <table>
          <tbody>
            < Statistic feedback={props.feedback.positive} text="positive"/>
            < Statistic feedback={props.feedback.negative} text="negative"/>
            < Statistic feedback={props.feedback.neutral} text="neutral"/>
            < Statistic feedback={total} text="total"/>
            < Statistic feedback={(props.feedback.positive - props.feedback.negative) / total} text="average score"/>
            < Statistic feedback={(props.feedback.positive / total ) * 100 + ' %'} text="percent positive"/>
          </tbody>
        </table>
      </>
    )
  }    
}

const Anecdotes = (props) => {
  const anecdotes = [
    "Program testing can be used to show the presence of bugs, but never to show their absence!",
    'Brooks Law: "Adding manpower to a late software project makes it later!"',
    "The best way to get a project done faster is to start sooner",
    "How does a project get to be a year late?... One day at a time.",
    "Even the best planning is not so omniscient as to get it right the first time."
  ]
  return (
    <p>{anecdotes[Math.floor(Math.random() * Math.floor(anecdotes.length))]}</p>
    
  )
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.feedback}</td>
    </tr>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))