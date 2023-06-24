import React, { useState} from 'react'

export default function Events() {
    const [name, setName] = useState({firstname: " ", lastname: " "});

  return (
    <div>
    <input
    type="text"
    value={name.firstname}
    onChange={(e)=> setName({...name, firstname: e.target.value})} //onChange krne pr e.target ki value first name me change hogi
    // firstname ke andar state update kr rhe ho meri already jo name ki state hai usko murge krke chalta hai (first name data remove na ho it means)
    />

<input
    type="text"
    value={name.lastname}
    onChange={(e)=> setName({...name, lastname: e.target.value})} //sprade operator
    />

    <h1>First Name : {name.firstname}</h1> {/*Isko Print bhi kr liya hai*/}
    <h1>Last Name: {name.lastname}</h1>
    <h2>{JSON.stringify(name)}</h2>

{/* Note page refresh ho raha hai to rendering ho rhi hai 
state dubara se call hokar update ho rhi hai because we used hooks.
Ak time pr wo ak hi state ko update kr raha hai */}
    </div>
  )
}
