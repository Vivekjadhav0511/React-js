import { useState } from 'react'
import './App.css'
import Component from './Component'
import BgChanger from './BgChanger'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    userName:"vivek Jadhav",
    age:21
  }

  let myArray=[10,20,40,50]

  return (
    <>
   {/* <Component userNamee="delba"  obj={myObj} array={myArray} /> */}
   {/* <Component userNamee="Wander Women"/> */}
   <BgChanger/>
    </>
  )
}

export default App
