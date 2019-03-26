import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'
import todosData from './todosData'

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    render() {
        return (<div class="wrapper">
            <div class="flexbox">
                <form>
                    <input type="text"
                           name="firstName"
                           value={this.state.firstName}
                           placeholder="First name"
                           onChange={this.handleChange}
                    />

                    <input type="text"
                           name="lastName"
                           value={this.state.lastName}
                           placeholder="Last name"
                           onChange={this.handleChange}
                    />
                <h1>{this.state.firstName} {this.state.lastName}</h1>

                <textarea
                    value="some value"
                    onChange={this.handleChange}
                />

                <label>
                    <input
                        type="checkbox"
                        checked={this.state.isFriendly}
                        name="isFriendly"
                        onChange={this.handleChange}
                    />
                is friendly?
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>
                </form>
                <h2><font color="#3AC1EF">You are a {this.state.gender}</font></h2>
                    <label>Favorite Color:</label>
                    <select
                        value={this.state.favColor}
                        onChange={this.handleChange}
                        name="favColor"
                    >
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                    </select>
                    <h2><font color="#3AC1EF">Your favorite color is {this.state.favColor}</font></h2>
            </div>
        </div>)
    }
}

// class App extends Component {
//   constructor() {
//       super()
//       this.state = {
//           loading: false,
//           character: {}
//       }
//   }
//
//   componentDidMount() {
//     this.setState({loading: true})
//     fetch("https://swapi.co/api/people/1")
//         .then(response => response.json())
//         .then(data => {
//             this.setState({
//                 character: data,
//                 loading: false
//             })
//         })
//   }
//
//   render() {
//       const text = this.state.loading ? "Loading..." : this.state.character.name
//       return (
//           <div>
//               <p>{text}</p>
//           </div>
//       )
//   }
// }

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       todos: todosData
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
//
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
//
//         {todos}
//
//       </div>
//     );
//   }
// }

export default App;
