import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/layout/Header'
import About from './components/pages/About'

import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

import axios from 'axios'


export class App extends Component {

  //state variable
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.setState({todos: res.data}))
      .catch(err => console.log(err))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
      .catch(err => console.log(err))
  }

  addTodo = (title) => {

    axios.post('https://jsonplaceholder.typicode.com/todos?_limit=5',{
      title,
      completed: false
    })
      .then(res => this.setState({todos: [...this.state.todos, res.data]})) //spread operator
      .catch(err => console.log(err))
    
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
