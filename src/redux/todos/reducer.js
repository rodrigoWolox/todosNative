import PropTypes from 'prop-types';

import { actions } from './actions';

const initialState = {
  todos: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return { ...state, ...action.data };
    case actions.REMOVE_TODO:
      return { ...state, ...action.data };
    case actions.TOGGLE_TODO:
    	return {}
    case actions.REMOVE_COMPLETE:
    	return {}
    default:
      return state;
  }
}
