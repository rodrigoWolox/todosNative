import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.title}>
      {title}
    </Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
