import React, { Component } from 'react'
export default class State1 extends Component {

    constructor(){
        super()
       this.state = {
        roll : 12345,
        name : "Pratiksha",
       }
    }

    updateme = () =>{
        this.setState({
            roll : 67890,
            name : "Rahul",
        })
       }


  render() {
    return (
      <div>
        <h1>{this.state.roll}</h1>
        <h1>{this.state.name}</h1>
        <button className='btn btn-primary' onClick={this.updateme}>Update Me</button>
              </div>
    )
  }
}
