import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import styles from './styles';

const Books = () => (
  <View style={styles.container}>
    <Header title="Book List" />
  </View>
);

Books.propTypes = {
  
};

export default connect()(Books);
