import React, { useState } from 'react'

export default function ReactEvents() {
    const [data, setData] = useState(" ")
    //Arrow Function
    const MyFun=(e)=>{
        setData(e.target.value) //setData update property value
    }

    const upload = (e) =>{
        e.preventDefault();
        alert(data); //data alert hoga upload pr
    }
  return (
    <div>
        {/* upload and submit wale chize form ke andar hogi to hame form create krna padega */}
        <form action="" onSubmit={upload}> {/*Input ke andar jo value hogi usse get krega sumbit krega (onSubmit = data ko sever pr save krega) */}
       <input type="text" value = {data} onChange={MyFun}/>
       <h2>{data}</h2>
       {/* when we subitted data will upload */}
       <input type="submit" value="Upload Data" />
       </form>
    </div>
  )
}
