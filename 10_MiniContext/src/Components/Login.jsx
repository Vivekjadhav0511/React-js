
import React,{useState,useContext} from 'react'
import userContext from '../Context/UserContext'


function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
 
    const {setUser} = useContext(userContext)
 


  const   handleSubmit =(e)=>{
     e.preventDefault()
     setUser({username,password})
  }
  return (
    <div>
    
       <input type="text"
        value={username} 
         placeholder='userName'
         onChange={(e)=>{
              setUsername(e.target.value)
         }}
        
          />

          {'  '}

       <input type="password"
       value={password}
       placeholder='password' 
       onChange={(e)=>{
        setPassword(e.target.value)
       }}
       />
       
       <button  onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login
