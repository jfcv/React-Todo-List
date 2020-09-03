import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/layout/Header'
import About from './components/pages/About'

import Todos from './components/Todos'
import AddTodo from './components/AddTodo'


export class App extends Component {

  //state variable
  state = {
    todos: []
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

  addTodo = (title) => {

    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      completed: false
    }

    this.setState({todos: [...this.state.todos, newTodo]}) //spread operator

  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header />

          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )} />

          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App
