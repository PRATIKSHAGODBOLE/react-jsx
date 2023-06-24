import React, { useState } from 'react'

export default function Hook1() {
    const[name, setName] = useState ("Pratiksha")
    const[roll, setRoll] = useState (12345)

   let  MyFun = () =>{
        setName ("Rahul")
        setRoll (67890)
    }
  return (
    <div>
        <h1>{name}</h1>
        <h1>{roll}</h1>

        <button className='btn btn-success' onClick={MyFun}>Update</button>
    </div>
  )
}
