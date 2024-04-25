import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react';

const App = () => {
  const [kid, setKid] = useState([]);

  useEffect(() => {
    updatingObject();
    console.log(kid.data);
  
 
  }, [])
  

  function updatingObject () {
    axios.get("http://127.0.0.1:3000/kids")
    .then(function (response){
      setKid(response.data);
      console.log(response);
    })
  }
  return (
    <div className='w-screen h-screen bg-slate-600'>
      <div className='w-screen flex h-2/4'>
        <div className='w-2/4 h-full'>
          {kid.map((kid)=>
        <div>
          <div>
          <h2>Name:</h2>
          <h3>{kid.name}</h3>
          </div>
          <div>
            <h2>Grade:</h2>
            <h3>{kid.grade}</h3>
          </div>
        </div>
       )}
        </div>
        <div className='w-2/4 h-full'></div>
      </div>
      <div className='w-screen flex h-2/4'>
        <div className='w-2/4 h-full'></div>
        <div className='w-2/4 h-full'></div>
      </div>
    </div>
  )
}

export default App
