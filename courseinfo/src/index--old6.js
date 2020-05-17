import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [value, setValue] = useState(10)

    const setToValue = (newValue) => {
            setValue(newValue)
        }

    return (
        <div>
            <Display value={value}/>
            <Button clickHandler={() => setToValue(1000)} text='1000'/>
            <Button clickHandler={() => setToValue(0)} text='reset'/>
            <Button clickHandler={() => setToValue(value + 1)} text='increment'/>
        </div>
    )
}

const Display = (props) => {
    return (
        <div>
            {props.value}
        </div>
    )
}

const Button = ({clickHandler, text}) => {
    return (
        <button onClick={clickHandler}>
                {text}
        </button>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))