import React from 'react';
import ReactDOM from 'react-dom';

const Hello = ({name, age}) => {
  console.log(name, age)
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>
        Hello, it looks like you, {name}, age {age}, were born in {bornYear()}.
      </p>
    </div>
  )
}

const App = () => {
    const name = 'Michael';
    const age = '26';
  return (
    <>
      <h1>Greetings</h1>
      <Hello name={'Maya'} age='62'/>
      <Hello name={name} age={age}/>
    </>
  ) 
}

ReactDOM.render(<App />, document.getElementById('root'))