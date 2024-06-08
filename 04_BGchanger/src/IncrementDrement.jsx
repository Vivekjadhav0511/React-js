// useState returns an array with exactly two values:

// The current state. During the first render, it will match the initialState you have passed.

// The set function that lets you update the state to a different value and trigger a re-render.


import React, { useState } from 'react'

function IncrementDrement() {
 const [counter ,setCounter] = useState(0)   

 function Increment() {
   if (counter >= 10) {
     counter;
   } else {
    setCounter(counter + 1)
   }
 }

 function Decrement(){
      if(counter <= 0){
        counter
      }else{
        setCounter(counter - 1)
      }
 }

  return (
    <div>
        <button onClick={Increment} 
        id="Increment">Increment -: {counter} </button>

        <button onClick={Decrement} 
        id="Decrement">Decrement -: {counter}</button>
    </div>
  )
}

export default IncrementDrement
