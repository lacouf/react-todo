import React, { Component } from 'react';
import TodosList from './TodosList';
import './App.css';

const todos = [
  {
    task: 'Faire un react tutorial',
    isCompleted: 'false'
  },
  {
    task: 'Faire a manger',
    isCompleted: 'true'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    }
  }

  render() {
    return (
      <div>
        <h1>React Todos App</h1>
        <TodosList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
