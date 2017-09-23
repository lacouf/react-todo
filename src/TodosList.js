import React, { Component } from 'react';
import './App.css';

export default class TodosList extends Component {
  render() {
    console.log(this.props);

    return (
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
    );
  }
}
