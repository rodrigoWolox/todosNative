import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import todos from './todos/reducer';

const reducers = combineReducers({
  todos
});

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
  )
);
