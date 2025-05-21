import { useState } from 'react'
import { useContext } from 'react'
import { CounterContext } from './context/Counter'
import './App.css'
import Counter from './components/Counter'
function App() { 
 
  const  counterState= useContext(CounterContext);
  console.log(counterState);
  return (
    <>
       <h1>Count is 0</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  )
}

export default App
