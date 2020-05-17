import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })
    const [allClicks, setAll] = useState([])

    let newClicks = {
        left: 0,
        right: 0
    }

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setClicks({
            ...clicks, left: clicks.left + 1
           })
    }
    

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setClicks({...clicks, right: clicks.right + 1 })
    }

    console.log(clicks.left, clicks.right, allClicks)

    return (
        <div>
            <div>
                {clicks.left}
                <button onClick={handleLeftClick}>
                    left plus
                </button>
                <button onClick={handleRightClick}>
                    right plus
                </button>
                {clicks.right}
                {allClicks.join(', ')}
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))