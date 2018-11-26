export const actions = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  REMOVE_COMPLETED: 'REMOVE_COMPLETED'
};

export const actionCreator = {
  addTodoAction: label => ({
    type: actions.ADD_TODO,
    payload: label
  }),
  removeTodoAction: id => ({
    type: actions.REMOVE_TODO,
    payload: id
  }),
  toggleTodoAction: id => ({
    type: actions.TOGGLE_TODO,
    payload: id
  }),
  removeCompletedAction: () => {
    return { type: actions.REMOVE_COMPLETED }
  }
};
