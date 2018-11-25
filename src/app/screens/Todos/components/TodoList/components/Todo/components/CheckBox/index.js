import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import styles from './styles';

const Checkbox = ({ onToggle, isChecked }) => (
  <TouchableOpacity onPress={onToggle}>
    <View style={styles.box}>
      { isChecked && <View style={styles.inner} /> }
    </View>
  </TouchableOpacity>
);

CheckBox.propTypes = {
  onToggle: PropTypes.func,
  isChecked: PropTypes.bool
}

export default CheckBox;
