import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'
import todosData from './todosData'


class App extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleLogin(){
        this.setState(prevState => {
            return {isLoggedIn: !prevState.isLoggedIn}
        })
        // this.setState({isLoggedIn: !this.state.isLoggedIn})
    }

    render() {
        const logged = this.state.isLoggedIn ? "in" : "out"
        return (
            <div>
                <h1>Logged {logged}</h1>
                <button onClick={this.handleLogin}>logged {logged}</button>
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
