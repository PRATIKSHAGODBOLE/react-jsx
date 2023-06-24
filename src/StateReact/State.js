import React, { Component } from 'react'

export default class State extends Component {
    constructor(){
        super()

        this.state={
            counter :0,
            name : "",
        }
    }
    increment = () => {
        this.setState({counter: this.state.counter + 1, name:"Pratiksha Godbole"})
    }
    decrement = () => {
        this.setState({counter : this.state.counter - 1, name:" "})
    }
  render() {
    return (
      <div>
      <h1>Counter : {this.state.counter}</h1>
      <h1>My Name : {this.state.name}</h1>
      <button className='btn btn-success mx-2' onClick={this.increment} >Increment</button>
      <button className='btn btn-danger' onClick={this.decrement}>Decrement</button>


      </div>
    )
  }
}

