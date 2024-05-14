import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  function increaseCounter(){
    if(counter < 20)
    setCounter(counter+1)
  }

  function decreaseCounter(){
    if(counter > 0)
    setCounter(counter-1)
  }


  return (
    <>
    <h1>Counter Project</h1>
    <h3>Counter {counter} </h3>
    <button onClick={increaseCounter}>Increase</button> <br/>
    <button onClick={decreaseCounter}>Decrease</button>
    </>
  )
}

export default App
