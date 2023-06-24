import React, { Component } from 'react'

export default class States extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "Pratiksha",
            age : 23,
        }
    }
    MyFun = () => {
      this.setState({
        name : "Nisha",
        age : 24,

      })   
    }
  render() {
    return (
      <div>
        <h1>NAME : {this.state.name}, AGE : {this.state.age}</h1>
        <button onClick={this.MyFun}>Click me</button>

      </div>
    )
  }
}
