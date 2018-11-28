import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import todos from './todos/reducer';
import books from './books/reducer';

const reducers = combineReducers({
  todos,
  books
});

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
  )
);
