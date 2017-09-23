import React, { Component } from 'react';

export default class CreateTodo extends Component {

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="what do I need to do" ref="createInput"/>
        <button>Create</button>
      </form>
    );
  }

  handleCreate() {
    console.log(this.refs.createInput);
  }
}
