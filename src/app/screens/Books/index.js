import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import BookList from './components/BookList';
import { connect } from 'react-redux';
import styles from './styles';

const Books = () => (
  <View style={styles.container}>
    <BookList 
      books={}
    />
  </View>
);

Books.propTypes = {
  books: PropTypes.arrayOf()
};

export default connect()(Books);
