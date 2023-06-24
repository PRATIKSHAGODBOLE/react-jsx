import React, { Component } from 'react'
import Child from './Child';

export default class Lifecycle extends Component {
    constructor(){
        super()
        this.state = {
            data : null,
        };
        console.log("Constructor called")
    }
    componentDidMount(){
        console.log("componentDidMount called")
       
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called")
       
    }
  render() {
    console.log("render called")
    return (
      <div>
        <h1>LifeCycle Mathods</h1>
        <button onClick={()=> this.setState ({data : "updated"})}>Call Me</button>

        {/* Child.js file imported here (and send the data)*/}
        {/* ye data child ke pass jayega aur child uske display kra dega */}
        <Child  data={this.state.data}/> 

      </div>
    )
  }
}
