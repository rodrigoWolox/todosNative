import React from 'react';
import PropTypes from 'prop-types';
import { Image, ScrollView, Text , View } from 'react-native';
import Book from './components/Book';
import styles from './styles';

const BookList = ({ author, id, imageUrl, title }) => (  
  <View key={id} styles={styles.container}>
    <Image source={imageUrl} />
    <Text style={title}>{title}</Text>
    <Text style={author}>{author}</Text>
  </View>
)

/* BookList.propTypes = {
  books: PropTypes.arrayOf()
} */

export default BookList;