import React from 'react';
import PropTypes from 'prop-types';
import { Cell, List } from 'react-mdl';
import TodoListItem from '../TodoListItem/index';

export default class TodoList extends React.Component {
  static propTypes = {
    remove: PropTypes.func.isRequired,
    items:  PropTypes.arrayOf(PropTypes.string).isRequired
  };

  render() {
    const { items, remove } = this.props;

    return (
      <Cell col={12}>
        <List>
          {items.map((item, index) => (
              <TodoListItem remove={remove} item={item} key={index} id={index} />)
            )
          }
        </List>
      </Cell>
    );
  }
}
