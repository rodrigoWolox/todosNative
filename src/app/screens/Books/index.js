import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { View } from 'react-native';
import withLoading from '../../components/HOC';
import BookList from './components/BookList';

const BooksWithLoading = withLoading(BookList);

const Books = ({ books, isLoading, loadFail }) => (
  <BooksWithLoading books={books} isLoading={isLoading} loadFail={loadFail} />
);

Books.propTypes = {
  books: PropTypes.arrayOf()
};

const mapStateToProps = state => ({
  books: state.books.books,
  isLoading: state.books.isLoading,
  loadFail: state.books.loadFail
});

export default connect(mapStateToProps, null)(Books);
