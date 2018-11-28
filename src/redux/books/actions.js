export const actions = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE' 
};

export const actionCreator = {
  fetchBooks: () => async dispatch => {
    dispatch({ type: actions.GET_BOOKS });
    const response = await BookService.getBooks();
    if(response.ok && response.data.length > 0) {
      dispatch({
        type: actions.GET_BOOKS_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({ type: actions.GET_BOOKS_FAILURE });
    }
  }
};
