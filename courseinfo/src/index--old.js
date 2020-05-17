import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: "Welcome to the FullStack Open Helsinki course",
    parts: [
      {
        name: "My name is Luukaini",
        exercises: 10
      },
      {
        name: "Your name is Lewis",
        exercises: 20
      },
      {
        name: "We are learning React",
        exercises: 30
      }
    ]
  }
  return (
    <>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}

const Header = (prop) => {
  console.log(prop)
  return (
    <h1>Hello and {prop.course.name}</h1>
  )
}

const Content = (prop) => {
  return (
    <>
      <Part name={prop.parts[0].name} exercises={prop.parts[0].exercises}/>
      <Part name={prop.parts[1].name} exercises={prop.parts[1].exercises}/>
      <Part name={prop.parts[2].name} exercises={prop.parts[2].exercises}/>
    </>
  )
}

const Part = (prop) => {
  return (
    <>
      <p>There are {prop.name} exercises in {prop.exercises}</p>
    </>
  )
}

const Total = (prop) => {
  return (
    <>
      <p>
        Altogether, there are {prop.parts[0].exercises + prop.parts[1].exercises + prop.parts[2].exercises} exercises.
      </p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))