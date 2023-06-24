import React, { useEffect, useState } from 'react'

export default function ReactHook() {
    // This will be intial value
    const [name, setName] = useState("Pratiksha")
    const [roll, setRoll] = useState(0)

    //LifeCycle
    useEffect(()=>{
     alert("Hooks Effect Trigger");
     console.log("Hooks Effect Called")
    });

  return (
    <div>
        <h1>I am Using React Hooks</h1>
        {/* Defined Roll Number and Name */}
        <h2>{name}</h2>
        <h2>{roll}</h2>
        {/* Update the value */}  {/* function call */} {/* change pratiksha to Beta-Lab */}     
        <button onClick={()=> {setName("Beta Lab"); setRoll(10)}}>Click Me</button>
    </div>
  )
}
