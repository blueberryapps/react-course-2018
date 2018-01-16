import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../TodoListItem/index';
import './index.css'

export default class TodoList extends React.Component {
  static propTypes = {
    remove: PropTypes.func.isRequired,
    items:  PropTypes.arrayOf(PropTypes.string).isRequired
  };

  render() {
    const { items, remove } = this.props;

    return (
      <div>
        <ul className="list">
          {items.map((item, index) => (
              <TodoListItem remove={remove} item={item} key={index} id={index} />)
            )
          }
        </ul>
      </div>
    );
  }
}
