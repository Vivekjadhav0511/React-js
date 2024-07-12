import React, { useState } from 'react'

function Chai() {
// UI updation 
const [number, setnumber] = useState(0)

const addValue = ()=>{
  if (number >= 10) {
       number
  }else{
   setnumber(number + 1)
  }
}

const removeValue = ()=>{
   if (number <= 0 ) {
      number
   }else{
    setnumber(number -1)
   }
}

  return (
   <>
   
    <h1>Number :- {number}</h1><br />
    <button
    onClick={addValue}
    >Increment</button><br /><br />
    <button
    onClick={removeValue}
    >Decrement</button>

   </>
  )
}

export default Chai
