import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
=======
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { booksPropType } from '../../../redux/books/reducer';
>>>>>>> cd77b2415892c1167911f0217ce8aac4af6df648
import withLoading from '../../components/HOC/WithLoading';
import BookList from './components/BookList';

const BooksWithLoading = withLoading(BookList);

const Books = ({ books, isLoading, loadFail }) => (
  <BooksWithLoading books={books} isLoading={isLoading} loadFail={loadFail} />
);

<<<<<<< HEAD
/* Books.propTypes = {
  books: PropTypes.arrayOf()
}; */
=======
Books.propTypes = {
  books: PropTypes.arrayOf(booksPropType)isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadFail: PropTypes.bool.isRequired
};
>>>>>>> cd77b2415892c1167911f0217ce8aac4af6df648

const mapStateToProps = state => ({
  books: state.books.books,
  isLoading: state.books.isLoading,
  loadFail: state.books.loadFail
});

export default connect(mapStateToProps, null)(Books);
