import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'
import todosData from './todosData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }
  render() {
    const todos = this.state.todos.map(
      item => <TodoItem key={item.id} item={item} />
    )
    return (
      <div className="todo-list">

        {todos}

      </div>
    );
  }
}

export default App;
