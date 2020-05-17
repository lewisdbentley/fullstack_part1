import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const anecdotes = [
        "Program testing can be used to show the presence of bugs, but never to show their absence!",
        'Brooks Law: "Adding manpower to a late software project makes it later!"',
        "The best way to get a project done faster is to start sooner",
        "How does a project get to be a year late?... One day at a time.",
        "Even the best planning is not so omniscient as to get it right the first time."
    ]

    function repeatArray(value, len){
        var A=[],i=0;
        while (i<len) A[i++]= value;
        return A;
      }

    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(repeatArray(0, anecdotes.length))

    const refresh = () => (
        // add point to array position selected        
        setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)))
    )

    const showHighest = (nums) => {
        return Math.max(nums)
    }

    const vote = () => {
        let copy = [...points]
        copy[selected] += 1
        setPoints([...copy])
    }
    
    console.log(points)
    console.log(anecdotes[points.indexOf(Math.max(...points))])

    return (
        <>
            <h1>Anecdote of the Day:</h1>
            <p>{anecdotes[selected]}</p>
            <button onClick={refresh}>Next anecdote</button>
            <button onClick={vote}>Vote</button>
            <h2>Anecdote with the most votes:</h2>
            <p>{anecdotes[points.indexOf(Math.max(...points))]} has {Math.max(...points)} points.</p>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))