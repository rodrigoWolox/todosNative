import PropTypes from 'prop-types';

import { actions } from './actions';

const initialState = {
  todos: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return { ...state, {label: action.payload, isChecked: false} };
    case actions.REMOVE_TODO:
      return { ...state, todos: todos.filter((todo, i) => i !== payload) };
    case actions.TOGGLE_TODO:
    	return { ...state, todos: todos.map((todo, i) => if(i === payload) todo.isChecked = !todo.isChecked)};
    case actions.REMOVE_COMPLETED:
    	return { ...state, todos: todo.filter(todo) => !todo.isChecked };
    default:
      return state;
  }
}
