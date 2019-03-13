import React, { Component } from 'react';

class IsLogged extends Component {
    constructor() {
      super()
      this.state = {
        isLoggedIn: false
      }
    }
  
    render() {
      let logged = this.state.isLoggedIn ? "in" : "out"
      return (
        <div>
          <h1>You are currently logged {logged}</h1>
        </div>
      );
    }
}

export default IsLogged;