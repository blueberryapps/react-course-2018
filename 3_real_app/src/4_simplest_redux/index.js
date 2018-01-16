import React from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// React component
const Counter = (props) => {
  const { value, onIncreaseClick } = props;
  return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>);
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
};


// Action
const increaseAction = { type: 'increase' };


// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count;
  switch (action.type) {
    case 'increase':
      return { count: count + 1 };
    default:
      return state;
  }
}

// Store
const store = createStore(counter,
    window.devToolsExtension && window.devToolsExtension());


// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count,
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
  };
}

// Connected Component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);


export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
