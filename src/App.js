import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'
import todosData from './todosData'

class App extends Component {
  constructor() {
      super()
      this.state = {
          loading: false,
          character: {}
      }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                character: data,
                loading: false
            })
        })
  }

  render() {
      const text = this.state.loading ? "Loading..." : this.state.character.name
      return (
          <div>
              <p>{text}</p>
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
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(id) {
//     console.log('changed', id)
//     this.setState(prevState => {
//       const updatedTodos = prevState.todos.map(todo => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed
//         }
//         return todo
//       })
//       return {
//         todos: updatedTodos
//       }
//     })
//   }
//   render() {
//     const todos = this.state.todos.map(
//       item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
//     )
//     return (
//       <div className="todo-list">

//         {todos}

//       </div>
//     );
//   }
// }

export default App;
