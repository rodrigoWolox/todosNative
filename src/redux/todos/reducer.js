import PropTypes from 'prop-types';
import { actions } from './actions';

const initialState = {
  todos: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return { ...state, todos: [{label: action.payload, isChecked: false}, ...state.todos]};
    case actions.REMOVE_TODO:
      return { ...state, todos: state.todos.filter((todo, i) => i !== action.payload) };
    case actions.TOGGLE_TODO:
    	return { ...state, todos: state.todos.map((todo, i) => {
          if(i === action.payload) {
            todo.isChecked = !todo.isChecked;
          } 
          return todo;
        })
      };
    case actions.REMOVE_COMPLETED:
    	return { ...state, todos: state.todos.filter((todo) => !todo.isChecked)};
    default:
      return state;
  }
}

export const todosPropType = PropTypes.shape({
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
});
