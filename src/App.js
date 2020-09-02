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
            completed: true
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

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App
