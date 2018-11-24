import { makeMove, jumpTo } from '../../utils/utils';
import { cleanInfo } from '../../services/userService';

export const actions = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  REMOVE_COMPLETE: 'REMOVE_COMPLETE'
};

export const actionCreator = {
  addTodoAction: todo => ({
    type: actions.ADD_TODO,
    payload: todo
  }),
  removeTodoAction: id => ({
    type: actions.REMOVE_TODO,
    payload: id
  }),
  toggleTodoAction: id => ({
    type: actions.TOGGLE_TODO,
    payload: id
  }),
  removeCompleteAction: dispatch => ({
    type: actions.REMOVE_COMPLETE
  })
};
