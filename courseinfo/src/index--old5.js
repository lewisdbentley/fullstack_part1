import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }    

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            <div>
                {left}
                <Button clickHandler={handleLeftClick} text='left'/>
                <Button clickHandler={handleRightClick} text='right'/>
                {right}
                <History allClicks={allClicks}/>
            </div>
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

const History = ({allClicks}) => {
    if (allClicks.length === 0) {
        return (
            <div>
                The app is used by pushing the buttons.
            </div>
        )
    }
    return (
        <div>
            The click history is {allClicks.join(' ')}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))