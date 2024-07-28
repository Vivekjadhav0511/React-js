import { useState } from 'react'
import './App.css'

function App() {
  const [count, setcount] = useState(0)

  function increment(){
    if (count >=10) {
      count
    }else{
      setcount(count + 1)
    }

  }

  
  function Decrement(){
    if (count <= 0) {
      count
    }else{
      // count = count - 1
      setcount(count - 1 )
    }
  }


  return (
    <>
      <div className='h-full w-full flex align-center justify-center'>
        <p>number:- {count} </p>
        <p>number:- {count} </p>
        <button onClick={increment}>Increment + </button> <br /><br />
        <button onClick={Decrement}> Decrement - </button> 
      </div>
    </>
  )
}

export default App
