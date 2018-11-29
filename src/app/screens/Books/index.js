import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { booksPropType } from '../../../redux/books/reducer';
import withLoading from '../../components/HOC/WithLoading';
import BookList from './components/BookList';

const BooksWithLoading = withLoading(BookList);

const Books = ({ books, isLoading, loadFail }) =>  <BooksWithLoading books={books} isLoading={isLoading} loadFail={loadFail} />

Books.propTypes = {
  books: PropTypes.arrayOf(booksPropType).isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadFail: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  books: state.books.books,
  isLoading: state.books.isLoading,
  loadFail: state.books.loadFail
});

export default connect(mapStateToProps, null)(Books);
