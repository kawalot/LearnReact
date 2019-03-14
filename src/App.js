import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'
import todosData from './todosData'


class App extends React.Component {
  constructor() {
      super()
      this.state = {
          count: 0
      }
      this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
  render() {
      return (
          <div>
              <h1>{this.state.count}</h1>
              <button onClick={this.handleClick}>Change!</button>
          </div>
      )
  }
}


// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       todos: todosData
//     }
//   }
//   render() {
//     const todos = this.state.todos.map(
//       item => <TodoItem key={item.id} item={item} />
//     )
//     return (
//       <div className="todo-list">

//         {todos}

//       </div>
//     );
//   }
// }

export default App;
