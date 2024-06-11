

import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // let [data ,setData] =useState([])
    // useEffect(()=>{
    //      fetch('https://api.github.com/users/Vivekjadhav0511')
    //      .then(res => res.json())
    //      .then(data =>{
    //         console.log(data);
    //         setData(data)
    //      })
    // },[])
  return (
   <>
    <div className='text-center m-4 bg-gray-600 text-3xl'> GitHub Login :- {data.login} </div>
    <img src={data.avatar_url} alt="Git Picture "width={300} className='text-center'  />
   </>

  )
}

export default Github

export const gitHubInfoLoader = async ()=>{
   let response = await fetch('https://api.github.com/users/Vivekjadhav0511')
   let data = await response.json()
   return data
}