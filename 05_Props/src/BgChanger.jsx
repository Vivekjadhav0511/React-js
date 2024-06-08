import React, { useState } from 'react'

function BgChanger() {
const [color ,setColor] = useState("black")

  return (
    <>
       <div className="w-full h-full" style={{backgroundColor: color}}>
           <div>
           <button onClick={()=> setColor("red")}
           className="bg-black m-4" id="black">
            black</button>
           <button  onClick={()=> setColor("red")}
            id="red"
           >red</button>
           <button onClick={()=> setColor("yellow")}
           id="yellow">yellow</button>
           <button id="olive">olive</button>
           <button id="pink">pink</button>
           </div>
       </div>
    </>
  )
}

export default BgChanger
