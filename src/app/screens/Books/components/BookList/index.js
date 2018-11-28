import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import Book from './components/Book';
import styles from './styles';

class BookList extends React.Component {
  renderBook = (book, i) => {
    <Book
      id={id}
      title={book.title}
      author={book.author}
    />
  }

  render() {
    return (
      <View styles={styles.container}>
        {loginFail ? 
          <h3>Nothing to see here!</h3> 
            : 
          <ScrollView>
            {this.props.books.map(this.renderBook)}
          </ScrollView>
        }
      </View>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf()
}

export default BookList;