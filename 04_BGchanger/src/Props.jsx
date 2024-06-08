
import React from 'react'

function Props(props) {
    // console.log(props);

  return (
    <div>
        <h2>{props.name}</h2>
        <p>{props.productOne.brand}</p>
        <p>{props.productOne.size}</p>
        <p>{props.productOne.price}</p>
       
    </div>
  )
}

export default Props
