import React, {useEffect, useState} from 'react'

export default function HookReact() {
 const [items,setItems]=useState( [] )

 const addItem = () => {
  setItems([...items,{
    value:Math.floor(Math.random() * 10)
  }])
 }
  return (
    <div>
    <button onClick={addItem}>Add a Random Number</button>
    <ul>
      {items.map(item => (<li key={item.value}>{item.value}</li>))}
    </ul>

    </div>
  )
}
