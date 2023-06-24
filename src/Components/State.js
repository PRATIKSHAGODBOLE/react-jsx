import React, { Component } from 'react'

export default class State extends Component {
    constructor(props){
        super(props)

        this.state = {
            roll : this.props.roll,
            name : this.props.name,
        }
    }
    UpdateFun = () => {
        this.setState({
            roll : 2,
            name : "Rahul"
        })
    }
  render() {
    return (
      <div>
       <h1>{this.state.roll}</h1>
       <h1>{this.state.name}</h1>
       <button className='btn btn-primary' onClick={this.UpdateFun}>Update Me</button>

      </div>
    )
  }
}
