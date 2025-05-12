import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0);


  const addvalue = () => {
    console.log("addvalue");
    setCount(count + 1);
  }

  const removeValue = () => {
    if(count > 0) {
    
      console.log("removeValue");
    setCount(count - 1);
  }
}
  return (
    <>
      <h1>Hello Vite + React!</h1>

      <h2>Counter value is {count}</h2>

      <button
        onClick={addvalue}
      >Increase</button>

      <br />
      <button
      onClick={removeValue}
      >Decrease</button>
    </>
  )
}

export default App
