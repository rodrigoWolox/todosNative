import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Footer = ({ onRemoveCompleted }) => (
  <TouchableOpacity style={styles.footer} onPress={onRemoveCompleted}>
    <Text style={styles.remove}>Remove completed todos</Text>
  </TouchableOpacity>
);

Footer.propTypes = {
  onRemoveCompleted: PropTypes.func
};

export default Footer;
