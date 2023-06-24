import React, { useState } from 'react'

export default function HookObj() {
    const[name, setName] = useState({firstName : " ", lastName : " " })
    const[dname, setNames] = useState(" ")
    let MyFun = () => {
        let fullname = name.firstName + name.lastName
        setNames(fullname)
    }

  return (
    <div>
        <input type="text" onChange={(e)=>setName({...name, firstName : (e.target.value)})} />
        <input type="text"  onChange={(e)=>setName({...name, lastName : (e.target.value)})}/>

        <button className='btn btn-primary' onClick={MyFun}>Click Me</button>
        <h1>{dname}</h1>
        <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}
