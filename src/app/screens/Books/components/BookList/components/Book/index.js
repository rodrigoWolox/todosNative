import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text , View } from 'react-native';
import styles from './styles';

const BookList = ({ author, id, imageUrl, title }) => (  
  <View key={id} styles={styles.container}>
    <Image source={imageUrl} />
    <Text style={title}>{title}</Text>
    <Text style={author}>{author}</Text>
  </View>
)

BookList.propTypes = {
  author: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(),
  id: PropTypes.number.isRequired,
  imagelUrl: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default BookList;