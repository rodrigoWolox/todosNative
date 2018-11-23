import PropTypes from 'prop-types';

import { actions } from './actions';

const initialState = {
  todos: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.PLAY_TURN:
      return { ...state, ...action.data };
    case actions.JUMP_TO:
      return { ...state, ...action.data };
    default:
      return state;
  }
}

export const squarePropType = PropTypes.arrayOf(PropTypes.string);
