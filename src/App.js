import React, { Component } from 'react';
import CreateTodo from './CreateTodo';
import TodosList from './TodosList';
import _ from 'lodash';
import './App.css';

const todos = [
  {
    id: 1,
    task: 'Faire un react tutorial',
    isCompleted: false
  },
  {
    id: 2,
    task: 'Faire a manger',
    isCompleted: true
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
        <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
        <TodosList
            todos={this.state.todos}
            toggleTask={this.toggleTask.bind(this)}
            saveTask={this.saveTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)}
            />
      </div>
    );
  }

  createTask(task) {
    let id = this.nextId();
    this.state.todos.push({
      id,
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos});
  }

  toggleTask(task) {
    const foundTodo=_.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos});
  }

  saveTask(oldTask, newTask) {
    const foundTodo=_.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({todos: this.state.todos});

  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({todos: this.state.todos});
  }

  nextId() {
    this.setState({ counter: ++this.state.counter})
    return this.state.counter;
  }
}

export default App;
