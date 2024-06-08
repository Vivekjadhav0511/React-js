
import React, { useState } from 'react'

function BgChanger() {
    const [color ,setColor] =useState("olive")
  return (
    <div>
        <div style={{backgroundColor: color, padding:50}}>
            <button style={{margin:10}} onClick={ 
                function(){ setColor("black")}} 
                id="black">Black</button>

            <button onClick={function(){
                setColor("red")
            }} id="Red">Red</button>

            <button onClick={()=> setColor("yellow")} id="yellow">yellow</button>
        </div>
    </div>
  )
}

export default BgChanger
