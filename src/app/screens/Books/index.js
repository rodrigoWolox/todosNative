import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { connect } from 'react-redux';
import styles from './styles';

const Books = () => (
  <View style={styles.container}>
    <Text>Book List</Text>
  </View>
);

export default connect()(Books);
