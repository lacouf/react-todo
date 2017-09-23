import React, { Component } from 'react';
import TodosListHeader from './TodosListHeader';
import TodosListItem from './TodosListItem';
import _ from 'lodash';
import './App.css';

export default class TodosList extends Component {

  renderItems() {
    return _.map(this.props.todos, todo => <TodosListItem key={todo.id} {...todo} />);
  }

  render() {
    return (
      <table>
        <TodosListHeader/>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
