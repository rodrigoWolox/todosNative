import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text , View } from 'react-native';
import styles from './styles';

const Book = ({ author, id, imageUri, title }) => (  
  <View key={id} style={styles.book}>
    <Image source={{ uri: imageUri }} style={styles.bookImage} />
    <View style={styles.rightSection}>
      <Text style={styles.bookTitle}>{title}</Text>
      <Text style={styles.bookAuthor}>{author}</Text>
    </View>
  </View>
);

Book.propTypes = {
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  imagelUrl: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Book;
