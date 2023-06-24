import React, { Component } from 'react'

export default class User extends Component {
    componentWillUnmount(){
        console.log("User Deleted")
        alert("User Deleted")
    }
  render() {
    return (
      <div>
        <ul>
            <li>Name : Pratiksha</li>
            <li>Address : Nagpur</li>
            <li>Mobile : 1234567</li>
        </ul>
      </div>
    )
  }
}
