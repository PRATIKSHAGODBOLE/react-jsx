import React, { useState } from 'react'

export default function Hook2() {
    const[name, setname] = useState("")
    const[dname, setdname] = useState("")

    let MyFun = () => {
      setdname(name)
    }
  return (
    <div>
      <input type="text" onChange={(e)=> setname(e.target.value)}/><br></br><br></br>
      <button className='btn btn-primary' onClick={MyFun}>Click Me</button>
      <h1>{dname}</h1>
    </div>
  )
}
