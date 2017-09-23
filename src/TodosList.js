import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class TodosList extends Component {
  render() {
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
