import React, { Component } from 'react';
import CreateTodo from './CreateTodo';
import TodosList from './TodosList';
import './App.css';

const todos = [
  {
    id: 1,
    task: 'Faire un react tutorial',
    isCompleted: 'false'
  },
  {
    id: 2,
    task: 'Faire a manger',
    isCompleted: 'true'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos,
      counter: 2
    }
  }

  render() {
    return (
      <div>
        <h1>React Todos App</h1>
        <CreateTodo createTask={this.createTask.bind(this)}/>
        <TodosList todos={this.state.todos}/>
      </div>
    );
  }

  createTask(task) {
    let id = this.nextId();
    this.state.todos.push({
      id: id,
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos});
  }

  nextId() {
    console.log("Before: " + this.state.counter);
    this.setState({ counter: ++this.state.counter})
    console.log("After: " + this.state.counter);
    return this.state.counter;
  }
}

export default App;
