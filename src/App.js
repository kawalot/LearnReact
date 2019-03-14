import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'
import todosData from './todosData'


import Conditional from "./components/Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    
    render() {
        return (
            <div>
              {this.state.isLoading ?
              <h1>Loading...</h1> :
              <Conditional />}
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
