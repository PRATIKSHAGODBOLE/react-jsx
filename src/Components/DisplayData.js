import React from 'react'

export default function DisplayData() {
    const arr = [
        {
            username  : "Pratiksha",
            password   : "1234",
            email : "abc@gmail.com",
        },
        {
            username  : "Nisha",
            password   : "1234",
            email : "abc@gmail.com",
        },
        {
            username  : "Rahul",
            password   : "1234",
            email : "abc@gmail.com",
        },
        {
            username  : "Nidhi",
            password   : "1234",
            email : "abc@gmail.com",
        },
        {
            username  : "Neha",
            password   : "1234",
            email : "abc@gmail.com",
        },
    ]; 
    // key using here
    const showData = (num, index) =>{
    return (
        <tr key={index}>
           <td>{index+1}</td>
           <td>{num.username}</td>
           <td>{num.password}</td>
           <td>{num.email}</td>


        </tr>
    );
    }
  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">username</th>
      <th scope="col">password</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  <tbody>

  {arr.map(showData)}

  </tbody>
</table>
      
    </div>
  )
}
