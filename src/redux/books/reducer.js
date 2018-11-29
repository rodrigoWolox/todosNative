import PropTypes from 'prop-types';
import { actions } from './actions';

const initialState = {
  books: [],
  isLoading: false,
  loadFail: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case actions.GET_BOOKS: 
      return { ...state, isLoading: true };
    case actions.GET_BOOKS_FAILURE:
      return { ...state, isLoading: false, loadFail: true };
    case actions.GET_BOOKS_SUCCESS:
      return { ...state, books: action.payload, isLoading: false, loadFail: true }
    default: 
      return state;
  }
}

export const booksPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  image_url: PropTypes.string 
});
