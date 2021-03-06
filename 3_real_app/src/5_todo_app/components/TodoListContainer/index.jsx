import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import AddItem from '../TodoAddItem/index';
import List from '../TodoList/index';
import { addTodo, deleteTodo } from '../../actions';

const ListContainer = (props) => {
  const { todos, deleteTodoItem, addTodoItem } = props;

  return (
    <div>
      <AddItem add={addTodoItem} />
      <List items={todos} remove={deleteTodoItem} />
    </div>
  );
};

ListContainer.propTypes = {
  deleteTodoItem: PropTypes.func.isRequired,
  addTodoItem: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.string).isRequired
};

const stateTodo = todos => ({
  todos,
});
const dispatchTodo = dispatch => ({
  addTodoItem: text => dispatch(addTodo(text)),
  deleteTodoItem: id => dispatch(deleteTodo(id)),
});

export default connect(stateTodo, dispatchTodo)(ListContainer);
