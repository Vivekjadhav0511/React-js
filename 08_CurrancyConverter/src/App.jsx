import { useState } from 'react'
import InputBox from './Component/InputBox'
import useCostomHooks from './Component/costomHooks'

function App() {
  const [amout ,setAmount] = useState(0)
  const [from,setFrom] = useStat("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount , setConveertedAMount] = useState()

  return (
    <>
          <InputBox/>
        
    </>
    
  )
}

export default App
