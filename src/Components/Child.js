import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(props){
        console.log("componentWillReceiveProps called in Child")
    }
  render() {
    console.log("render called in Child")
    return (
      <div>
        {/* Display this */}
        <h1>{this.props.data}</h1>
      </div>
    )
  }
}
