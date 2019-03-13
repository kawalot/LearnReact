import React, { Component } from 'react';

class State extends Component {
  constructor(){
    super()
    this.state = {
      name: "john",
      age: 15
    }
  }

  render() {
    return(
      <div>
          <h1>{this.state.name}</h1>
          <h3><font color="#3AC1EF">▍{this.state.age} years old</font></h3>
      </div>
    )
  }

}

export default State;