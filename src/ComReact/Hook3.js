import React, { useState } from 'react'
export default function Hook3() {
    const[marks, setmarks] = useState({sub1:"",sub2:"", sub3:""})
    const[dmarks, setdmarks] = useState("")

    let MyFun = () => {
    let total = (marks.sub1 + marks.sub2 + marks.sub3)
    setdmarks(total)
    }
  return (
    <div>

   <input type="number" onChange={(e)=> setmarks({...marks, sub1 : parseInt(e.target.value)})}/>
   <input type="number" onChange={(e)=> setmarks({...marks, sub2 : parseInt(e.target.value)})}/>
   <input type="number" onChange={(e)=> setmarks({...marks, sub3 : parseInt(e.target.value)})}/>

   <button className='btn btn-primary' onClick={MyFun}>Calculate</button>
   <h1>{dmarks}</h1>
    </div>
  )
}
