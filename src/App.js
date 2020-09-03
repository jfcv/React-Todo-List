import React, { Component } from 'react'
import './App.css';
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'


export class App extends Component {

  //state variable
  state = {
    todos: [
        {
            id: 1,
            title: 'Jump off my airplane',
            completed: false
        },
        {
            id: 2,
            title: "Mixing on Tokyo's tallest skyrocker",
            completed: false
        },
        {
            id: 3,
            title: "Buy Mauricio's Island",
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
      <div className="container">
        <Header />
        <AddTodo />
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default App
