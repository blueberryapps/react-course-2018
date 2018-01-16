import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class TodoListItem extends React.Component {
  static propTypes = {
    remove: PropTypes.func.isRequired,
    item: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };

  removeItem = () => {
    const { remove, id } = this.props;

    remove(id);
  };

  render() {
    const { item } = this.props;

    return (
      <li>
        <button
          onClick={this.removeItem}
          className="remove-todo-item">Delete</button>
        <span>
          {item}
        </span>
      </li>
    );
  }
}
