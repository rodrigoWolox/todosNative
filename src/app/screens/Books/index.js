import React from 'react';
import { connect } from 'react-redux';
import withLoading from '../../components/HOC/WithLoading';
import BookList from './components/BookList';

const BooksWithLoading = withLoading(BookList);

const Books = ({ books, isLoading, loadFail }) => (
  <BooksWithLoading books={books} isLoading={isLoading} loadFail={loadFail} />
);

/* Books.propTypes = {
  books: PropTypes.arrayOf()
}; */

const mapStateToProps = state => ({
  books: state.books.books,
  isLoading: state.books.isLoading,
  loadFail: state.books.loadFail
});

export default connect(mapStateToProps, null)(Books);
