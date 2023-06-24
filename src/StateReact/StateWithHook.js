import React, { useState, useEffect } from 'react'
let Myname = "Rahul"
export default function StateWithHook() {
   const[counter, setCounter]= useState(0)
   const[name, setName]= useState("")


   let increment = () =>{
    setCounter (counter + 1)
    setName ("Pratiksha")
    Myname = "Rohit"              //Normal variable
   }

   let decrement = () =>{
    setCounter(counter - 1)
    setName (" ")
   }
let increment5 = () =>{
    for(let i=0; i<5; i++)
    setCounter(precounter => precounter + 1)
}
  return (
    <div>
        <h1>Counter : {counter}</h1> {/*print out */}
        <h1>Name : {name}</h1>
        <h1>My Name : {Myname}</h1> {/*Normal variable */}
        <button className='btn btn-success mx-3' onClick={increment}>Increment</button>
        <button className='btn btn-danger mx-3' onClick={decrement}>Decrement</button>
        <button className='btn btn-info' onClick={increment5}>Increment by 5</button>
        {/* Direct increment by 5 approch  (Inline approch state function call)*/}
        <button className='btn btn-success mx-3' onClick={()=> setCounter(prevcount => prevcount + 1)}>Increment</button>



    </div>
  );
};
