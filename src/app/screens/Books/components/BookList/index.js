import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text } from 'react-native';
import Book from './components/Book';
import { booksPropType } from '../../../../../redux/books/reducer';

import styles from './styles';

class BookList extends React.Component {
  renderBook = (book, i) => {
    return (
      <Book
        author={book.author}
        id={i}
        imageUri={book.image_url}
        key={i}
        title={book.title}
      />
    )
  }

  render() {
    return (
      <View styles={styles.container}>
        {this.props.loadFail ? 
          <Text>Nothing to see here!</Text> 
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
  books: PropTypes.arrayOf(booksPropType).isRequired,
  loadFail: PropTypes.bool.isRequired
}

export default BookList;
