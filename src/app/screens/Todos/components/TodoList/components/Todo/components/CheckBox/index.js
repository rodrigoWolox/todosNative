import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import styles from './styles';


export default class Checkbox extends Component {

  static propTypes = {
    onToggle: PropTypes.func,
    isChecked: PropTypes.bool,
  }

  render() {
    const {onToggle, isChecked} = this.props

    return (
      <TouchableOpacity onPress={onToggle}>
        <View style={styles.box}>
          { isChecked && <View style={styles.inner}/> }
        </View>
      </TouchableOpacity>
    )
  }
}




export default CheckBox;
