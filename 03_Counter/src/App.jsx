import { useState } from 'react'
import './App.css'

function App() {
  let [counter ,setCounter] = useState(0)

  // let counter = 10

  const addValue =()=>{
    // counter = counter + 1
    // setCounter(counter + 1)
    // setCounter(counter)
    // console.log(counter)
    if(counter >= 20){
      counter
    }else{
      setCounter(counter + 1)
    }

  }

  function removeValue(){
   if (counter <= 0) {
        counter
        console.log("less than 0");
   }else{
    setCounter(counter - 1)
   }
  }
  
  return (
    <>
     <h1>counter Value : {counter} </h1>
     <button id="increase" onClick={addValue}>Increase value :- {counter} </button><br /><br />
     <button id="decrease" onClick={removeValue}>Decrease value :- {counter}</button>
    </>
  )
}

export default App

