import React, { Component } from 'react'
import './App.css';
import Todos from './components/Todos'


export class App extends Component {

  //state variable
  state = {
    todos: [
        {
            id: 1,
            title: 'Take out the trash',
            completed: false
        },
        {
            id: 2,
            title: 'Dinner with wife',
            completed: false
        },
        {
            id: 3,
            title: 'Meeting with boss',
            completed: false
        },
    ]
  }

  markComplete = (id) => {
    //iterating through the todos array (comparing each todo object with the current object)
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    })});
  }

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default App
