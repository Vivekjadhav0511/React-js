import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



// const reactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: '_blank'
//   },
//   children: " click Me TO Visit "
// }


function Myfunction(){
  return(
    <h1>React Learning || Chai Or code</h1>
  )
}


const reactElement = {
  type: 'a',
  props: {
      href: "https://google.com",
      target: '_blank'
  },
  children: " click Me TO Visit "
}

let anotherUser = "Vivek Jadhav "

const reactElementReact = React.createElement(
  'a',
  {
    href:"https://google.com"
  }
  ,
  ' click me To Visit ',
  anotherUser

)


let  anotherElement =(
  <a href="https://google.com" target='_blank'>visit ME</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(
// anotherElement
reactElementReact
  
    
)
