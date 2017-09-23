import React, { Component } from 'react';
import './App.css';

export default class TodosListHeader extends Component {
  render() {

    return (
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
    );
  }
}
