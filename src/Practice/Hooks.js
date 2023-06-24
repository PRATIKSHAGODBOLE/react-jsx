import React, { useState } from 'react'

export default function Hooks() {
    const[name, setName] = useState({firstName:" ", lastName:" "})
    const[dname, setDname] = useState("")
    let MyFun = () =>{
        let fullname = (name.firstName + name.lastName)
        setDname(fullname)
    }
  return (
    <div>
        <input type="text" onChange={(e)=> setName({...name, firstName: (e.target.value)})}/>
        <input type="text" onChange={(e)=> setName({...name, lastName: (e.target.value)})}/>

       <button className='btn btn-success' onClick={MyFun}>Click Me</button>
       <h1>{dname}</h1>       
       <h1>{JSON.stringify(name)}</h1>

    </div>
  )
}
