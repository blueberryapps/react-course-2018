import Immutable from 'seamless-immutable';
import constants from '../constants/appConstants';

export default (state = Immutable.from([]), action) => {
  switch (action.type) {
    case constants.ADD_ITEM:
      return state.concat([action.todo]);
    case constants.REMOVE_ITEM:
      return state.filter((todo, index) => index !== action.index);
    default:
      return state;
  }
};
