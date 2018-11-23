import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import todos from './todos/reducer';

const reducers = combineReducers({
  todos
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    devTools
  )
);
