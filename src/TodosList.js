import React, { Component } from 'react';
import TodosListHeader from './TodosListHeader';
import TodosListItem from './TodosListItem';
import _ from 'lodash';
import './App.css';

export default class TodosList extends Component {

  renderItems() {
    const props = _.omit(this.props, 'todos');
    return _.map(this.props.todos, todo => <TodosListItem key={todo.id} {...todo} {...props} />);
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
