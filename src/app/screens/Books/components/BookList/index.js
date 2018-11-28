import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text } from 'react-native';
import Book from './components/Book';
import styles from './styles';

class BookList extends React.Component {
  renderBook = (book, i) => {
    <Book
      id={id}
      title={book.title}
      author={book.author}
      imageUrl={book.image_url}
    />
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

/* BookList.propTypes = {
  books: PropTypes.arrayOf()
} */

export default BookList;